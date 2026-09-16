"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { CalendarIcon, MapPinIcon, PhoneIcon, CheckIcon, ChevronIcon } from "@/components/icons/icons";
import { careCategories, hospital, serviceGroups, homeDoctors, homeTestimonials, homeFaqs, homeBlogs } from "@/lib/mbrace-home";
const asset = (n: number) => `/images/figma/asset-${n}.webp`;
const WEBHOOK_URL = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
const locations = ["LB Nagar", "King Koti"];
function Photo({
  n,
  alt,
  className = "",
  priority = false
}: {
  n: number;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return <div className={`mb-photo ${className}`}><Image src={asset(n)} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 600px" priority={priority} /></div>;
}
function Heading({
  label,
  children,
  description
}: {
  label: string;
  children: ReactNode;
  description?: string;
}) {
  return <div className="mb-heading"><p className="mb-eyebrow">{label}</p><h2>{children}</h2>{description && <p>{description}</p>}</div>;
}
function parseCounterValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  return { prefix, target: parseFloat(numStr.replace(/,/g, "")), suffix };
}
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { prefix, target, suffix } = parseCounterValue(value);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || done) return;
        done = true;
        const duration = 1400;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${prefix}${Math.round(target * eased).toLocaleString("en-US")}${suffix}`);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      });
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefix, target, suffix]);
  return <strong ref={ref}>{display}</strong>;
}
export default function MbraceHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceTab, setServiceTab] = useState("Women Care");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [testimonialsPerView, setTestimonialsPerView] = useState(3);
  const reviewTrackRef = useRef<HTMLDivElement>(null);
  const [faqCategory, setFaqCategory] = useState<string>(careCategories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [location, setLocation] = useState(locations[0]);
  const [bookingService, setBookingService] = useState("");
  const [bookingLocation, setBookingLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDoctor, setBookingDoctor] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "unavailable">("idle");
  const [detail, setDetail] = useState<{
    title: string;
    body: string;
    image?: number;
  } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapQuery = location === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const testimonialMaxIndex = Math.max(0, homeTestimonials.length - testimonialsPerView);
  function goToTestimonial(i: number) {
    setTestimonialIndex(Math.max(0, Math.min(i, testimonialMaxIndex)));
  }
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 700px)");
    const tablet = window.matchMedia("(max-width: 1200px)");
    const update = () => setTestimonialsPerView(mobile.matches ? 1 : tablet.matches ? 2 : 3);
    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);
  useEffect(() => {
    setTestimonialIndex(i => Math.min(i, testimonialMaxIndex));
  }, [testimonialMaxIndex]);
  useEffect(() => {
    const track = reviewTrackRef.current;
    const slide = track?.children[testimonialIndex] as HTMLElement | undefined;
    if (track && slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, [testimonialIndex, testimonialsPerView]);
  useEffect(() => {
    if (reviewsPaused || testimonialMaxIndex === 0) return;
    const timer = setInterval(() => setTestimonialIndex(i => (i + 1) % (testimonialMaxIndex + 1)), 5000);
    return () => clearInterval(timer);
  }, [reviewsPaused, testimonialMaxIndex]);
  function book(service = "", doctor = "", type = "") {
    if (service) setBookingService(service);
    setBookingDoctor(doctor);
    if (doctor) setBookingLocation("LB Nagar");
    setBookingType(type);
    setStatus("idle");
    setMenuOpen(false);
    dialog.current?.close();
    document.getElementById("appointment")?.scrollIntoView({
      behavior: "smooth"
    });
    formRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus({
      preventScroll: true
    });
  }
  function showDetails(next: {
    title: string;
    body: string;
    image?: number;
  }) {
    setDetail(next);
    dialog.current?.showModal();
  }
  function goToServices(category: string) {
    setServiceTab(category === "Child Care" ? "Child Care" : category === "Fertility Care" ? "Fertility" : "Women Care");
    setMenuOpen(false);
  }
  async function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!WEBHOOK_URL) {
      setStatus("unavailable");
      return;
    }
    setStatus("sending");
    const payload = {
      ...Object.fromEntries(new FormData(event.currentTarget).entries()),
      source: "mbrace-homepage",
      doctor: bookingDoctor,
      appointmentType: bookingType
    };
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return <div className="mbrace-home">
      <section className="mb-hero" id="home">
        <Image src={asset(0)} alt="A mother cradles her newborn baby" fill priority sizes="100vw" className="mb-hero-photo" />
        <header className="mb-header">
          <a className="mb-logos" href="#home" aria-label="M’Brace by Kamineni Hospitals home"><Image src={asset(1)} alt="Kamineni Hospitals" width={155} height={45} /><span /><Image src={asset(2)} alt="M’Brace — Women’s Care, Child Care, Fertility" width={170} height={80} /></a>
          <button className="mb-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="home-navigation" aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
          <nav id="home-navigation" className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            {careCategories.map(name => <a href="#services" key={name} onClick={() => goToServices(name)}>{name}</a>)}
            <button type="button" className="mb-button" onClick={() => book()}>Book Appointment</button>
          </nav>
        </header>
        <div className="mb-hero-content">
          <p className="mb-care-badge">Backed By <strong>34+ Years of Care</strong></p>
          <h1>From Planning to <strong>Newborn Care &amp; Paediatrics</strong></h1><h2>Everything Covered Under One Roof</h2>
          <p className="mb-hero-description">Multidisciplinary team of specialists, including gynaecologists, obstetricians, paediatricians and neonatologists, working as one team with advanced NICU and PICU support.</p>
          <div className="mb-quick-booking"><h3>Request Appointment <CalendarIcon className="mb-inline-icon" /></h3><div>
            <select aria-label="Select speciality" value={bookingService} onChange={e => setBookingService(e.target.value)}><option value="" disabled>Select Speciality</option>{careCategories.map(x => <option key={x}>{x}</option>)}</select>
            <select aria-label="Select location" value={bookingLocation} onChange={e => setBookingLocation(e.target.value)}><option value="" disabled>Select Location</option>{locations.map(x => <option key={x}>{x}</option>)}</select>
            <input aria-label="Appointment date" type="date" min={new Date().toISOString().split("T")[0]} value={bookingDate} onChange={e => setBookingDate(e.target.value)} />
            <button type="button" onClick={() => book()} className="mb-button">Get Appointment</button>
          </div></div>
        </div>
      </section>

      <div className="mb-quick-actions">
        {["Book Online Consult", "Book Hospital Visit", "Book Vaccine", "Book Scans"].map((title, i) => <button key={title} type="button" onClick={() => book(i === 2 ? "Child Care" : "", "", title)}><Image src={`/images/figma/booking-${i}.svg`} alt="" width={72} height={72} /><span>{title}</span></button>)}
      </div>

      <section id="about" className="mb-section mb-about mb-container">
        <div className="mb-about-photos"><Photo n={3} alt="A mother and daughter welcome a newborn" /><Photo n={4} alt="A mother lovingly holds her baby" className="mb-about-inset" /></div>
        <div><Heading label="About M’Brace">For Her Health, Her Child,<br />&amp; <em>Her Tomorrow</em></Heading><p>A dedicated unit of Kamineni Hospitals Pvt. Ltd., M’Brace is built to bring women’s health, pregnancy support and child care into single, connected practice. We ensure a family never has to explain their history to a new doctor twice. With us, every consultation starts with listening, not the clock.</p><ul className="mb-checks">{["Trusted Multispeciality Care", "Advanced Hospital Support", "Emergency & Critical Care Backup"].map(x => <li key={x}><CheckIcon />{x}</li>)}</ul><a className="mb-button" href="#excellence">Know More</a><div className="mb-years"><Counter value="34+" /><span>YEARS OF CARE</span></div></div>
      </section>

      <section id="services" className="mb-section mb-tinted mb-rounded"><div className="mb-container">
        <div className="mb-section-intro"><Heading label="What We Offer">Comprehensive <em>Mother<br className="mb-desktop-break" /> and Child Care</em> Services</Heading><p>End-to-end care across women&apos;s health, child care, pregnancy support and fertility treatment, backed by advanced technology like 4D Ultrasound and robotic surgery, and a full range of services under one team.</p></div>
        <div className="mb-service-tabs" aria-label="Service categories">{Object.keys(serviceGroups).map(x => <button key={x} type="button" aria-pressed={serviceTab === x} aria-controls="service-list" onClick={() => setServiceTab(x)}>{x}</button>)}</div>
        <div className="mb-service-grid" id="service-list" aria-label={`${serviceTab} services`}>{serviceGroups[serviceTab].map(([name, description]) => <article key={name}><h3>{name}</h3><p>{description}</p><button type="button" onClick={() => showDetails({
              title: name,
              body: description
            })}>Learn More <span aria-hidden="true">→</span></button></article>)}</div>
      </div></section>

      <section id="excellence" className="mb-excellence mb-section"><div className="mb-container"><div><Heading label="Centres of Excellence">Advanced Care for Every<br />Stage of <em>Motherhood</em></Heading><p>Real-time fetal monitoring, comprehensive diagnostics and neonatal ventilation support, all built to give your doctor the full picture before any decision.</p><ul className="mb-checks">{["Sterile Theatres & Diagnostics", "24x7 Emergency & Transport", "High-End Neonatal Ventilation", "Comprehensive Lab Support"].map(x => <li key={x}><CheckIcon />{x}</li>)}</ul><h3>Personalized care for every patient</h3><a className="mb-button" href="#team">Explore More</a></div><Photo n={5} alt="A mother kisses her smiling young daughter" /></div></section>

      <section id="why-us" className="mb-section mb-purple mb-rounded"><div className="mb-container"><div className="mb-section-intro"><Heading label="Why Choose M’Brace">One Trusted Destination for<br /><em>Women, Mothers &amp; Children</em></Heading><p>Two convenient locations across Hyderabad, compassionate counselling through every hard decision, and treatment recommended only when your diagnosis genuinely needs it.</p></div><div className="mb-trust-grid"><Photo n={7} alt="Mother embracing her newborn" /><div className="mb-stat"><Counter value="17,000+" /><p>Happy families supported with compassionate, personalized treatment.</p></div><Photo n={8} alt="A happy mother and child" /><div className="mb-stat"><Counter value="34+" /><p>Years of Mother &amp; Child<br />care experience</p></div><Photo n={9} alt="A mother and baby spending time together" /><div className="mb-stat"><Counter value="14,000+" /><p>Healthy Baby Deliver</p></div></div></div></section>

      <section id="team" className="mb-section mb-tinted mb-rounded"><div className="mb-container"><div className="mb-team-intro"><div><Heading label="OUR TEAM">Meet <em>The Experts</em><br />Behind Your Journey</Heading><p>Our panel of specialists bring together senior consultants in obstetrics, gynaecology and fertility, paediatricians and neonatologists, and dedicated fertility specialists and embryologists, practised for a decade or more, holding advanced fellowships and specialist training from institutions in India and abroad.</p><p className="mb-team-principle">Every doctor with us works from one principle:<strong>Explain Clearly, Decide Together.</strong></p></div><article className="mb-featured-doctor"><Photo n={14} alt="Dr. K Vasundhara" /><div><h3>DR. K VASUNDHARA</h3><p>Head of Obstetrics &amp; Gynaecology and Medical Director of the Kamineni Fertility Center<br />Qualifications: MBBS, DGO, DNB</p><ul className="mb-doctor-meta"><li>♧ <span>35+ Years</span></li><li>文 <span>English, Hindi, Telugu</span></li><li><MapPinIcon /><span>LB Nagar</span></li></ul><div className="mb-doctor-actions"><button className="mb-button mb-gold" onClick={() => book("Women's Care", "DR. K VASUNDHARA", "Online consultation")}>Book Consultation</button><button className="mb-button" onClick={() => book("Women's Care", "DR. K VASUNDHARA", "Hospital visit")}>Visit Hospital</button></div></div></article></div>
        <div className="mb-doctor-grid">{homeDoctors.map(d => <article className="mb-doctor-card" key={d.name}><Photo n={d.image} alt={d.name} /><h3>{d.name}</h3><p>{d.qualifications}<br />{d.role}</p><ul className="mb-doctor-meta"><li>♧ <span>20+ Years</span></li><li><MapPinIcon /><span>LB Nagar</span></li><li>文 <span>English, Hindi, Telugu</span></li></ul><div className="mb-doctor-actions"><button className="mb-button mb-gold" onClick={() => book("Women's Care", d.name, "Online consultation")}>Book Consultation</button><button className="mb-button" onClick={() => book("Women's Care", d.name, "Hospital visit")}>Visit Hospital</button></div></article>)}</div>
      </div></section>

      <section id="awards" className="mb-section mb-container mb-awards"><div><Heading label="Awards & Recognition">Care That Meets<br /><em>National Standards</em></Heading><h3>Association of Healthcare Providers India</h3><p>Identifies conditions like glaucoma and cataracts before they cause significant damage.</p><Photo n={16} alt="Healthcare award trophy" /></div><div><Photo n={15} alt="Team celebrating an award" /><h3>Association of Healthcare Providers India</h3><p>Identifies conditions like glaucoma and cataracts before they cause significant damage.</p><div className="mb-award-stats">{[["34+", "Years Of Experience"], ["98%", "Patient Satisfaction"], ["1K+", "Happy Families"]].map(([value, label]) => <div key={label}><Counter value={value} /><span>{label}</span></div>)}</div></div></section>

      <section id="reviews" className="mb-section mb-purple mb-rounded"><div className="mb-container"><div className="mb-section-intro"><Heading label="TESTIMONIALS">Heartfelt Stories Of<br /><em>Hope</em> &amp; <em>Success</em></Heading><div className="mb-rating"><Image src={asset(17)} alt="Google" width={25} height={25} /><span>Google Rating</span><strong>4.9 <span aria-label="5 stars">★★★★★</span></strong></div></div><div className="mb-review-slider" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)}><button type="button" className="mb-review-nav mb-review-prev" onClick={() => goToTestimonial(testimonialIndex - 1)} disabled={testimonialIndex === 0} aria-label="Previous testimonial"><ChevronIcon /></button><div className="mb-review-track" ref={reviewTrackRef} style={{ "--items-per-view": testimonialsPerView } as CSSProperties} aria-live="polite">{homeTestimonials.map(t => <figure key={t.name} className="mb-review-slide"><p className="mb-stars" aria-label="5 stars">★★★★★</p><blockquote>“{t.quote}”</blockquote><figcaption>{t.name}</figcaption></figure>)}</div><button type="button" className="mb-review-nav mb-review-next" onClick={() => goToTestimonial(testimonialIndex + 1)} disabled={testimonialIndex === testimonialMaxIndex} aria-label="Next testimonial"><ChevronIcon /></button></div>{testimonialMaxIndex > 0 && <div className="mb-review-dots" role="tablist" aria-label="Testimonial navigation">{Array.from({ length: testimonialMaxIndex + 1 }, (_, i) => <button key={i} type="button" role="tab" aria-selected={i === testimonialIndex} aria-label={`Show testimonials starting from slide ${i + 1}`} className={i === testimonialIndex ? "is-active" : ""} onClick={() => goToTestimonial(i)} />)}</div>}</div></section>

      <section id="faq" className="mb-section mb-container mb-faq"><div><Heading label="Frequently Asked Questions">Your Queries,<br /><em>Answered Simply!</em></Heading><p>From women’s health, to delivery, postpartum and child care, find expert answers to all your common questions with us.</p><div className="mb-faq-categories" aria-label="FAQ categories">{careCategories.map(x => <button key={x} type="button" aria-pressed={faqCategory === x} aria-controls="faq-questions" onClick={() => {
            setFaqCategory(x);
            setOpenFaq(0);
          }}>{x}</button>)}</div></div><div id="faq-questions" className="mb-faq-list" role="region" aria-label={`${faqCategory} questions`}>{homeFaqs[faqCategory].map((faq, i) => <div className={`mb-faq-item ${openFaq === i ? "is-open" : ""}`} key={faq.question}><h3><button type="button" id={`faq-q-${i}`} aria-expanded={openFaq === i} aria-controls={`faq-a-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{faq.question}<span aria-hidden="true">{openFaq === i ? "−" : "+"}</span></button></h3><div id={`faq-a-${i}`} aria-labelledby={`faq-q-${i}`} hidden={openFaq !== i}><p>{faq.answer}</p></div></div>)}</div></section>

      <section id="location" className="mb-section mb-purple mb-rounded"><div className="mb-container"><div className="mb-section-intro"><Heading label="Location">Our Hospital &amp;<br />Clinics <em>Locations</em></Heading><p>M&apos;Brace welcomes you at two locations in Hyderabad, LB Nagar and King Koti, each equipped for consultations, diagnostics and every stage of care.</p></div><div className="mb-location-grid"><div><div className="mb-location-tabs" aria-label="Hospital location">{locations.map(x => <button key={x} type="button" aria-pressed={location === x} onClick={() => setLocation(x)}>{x.toUpperCase()}</button>)}</div><h3>Best Children&apos;s Hospital &amp; Maternity Hospital –<br /><em>Mbrace Hospital, Hyderabad</em></h3><dl><dt>Address:</dt><dd>{location === "LB Nagar" ? hospital.address : "King Koti, Hyderabad, Telangana. Contact our care team for directions to your appointment."}</dd><dt>Contact No:</dt><dd><a href={hospital.phoneHref}>{hospital.phone}</a></dd><dt>Email:</dt><dd><a href={`mailto:${hospital.email}`}>{hospital.email}</a></dd></dl><div className="mb-location-actions"><button className="mb-button mb-gold" onClick={() => {
                setBookingLocation(location);
                book();
              }}>Book An Appointment</button><a className="mb-button mb-outline" href={mapUrl} target="_blank" rel="noreferrer">View On Map</a></div></div><a href={mapUrl} target="_blank" rel="noreferrer" className="mb-map" aria-label={`Open directions to ${location} on Google Maps`}><Photo n={6} alt="Map of Hyderabad showing hospital locations" /><span><MapPinIcon />{location} · View on Google Maps ↗</span></a></div></div></section>

      <section id="blogs" className="mb-section mb-container"><div className="mb-section-intro"><Heading label="From Our Experts">About Women&apos;s Health,<br />Pregnancy &amp; Child Care</Heading><div><p>Real insights on women&apos;s health, pregnancy, child growth and fertility, from the doctors who treat you.</p><a className="mb-button mb-blog-all" href="#blog-list">View All Blog</a></div></div><div className="mb-blog-grid" id="blog-list">{homeBlogs.map(b => <article key={b.title}><button type="button" className="mb-blog-image" onClick={() => showDetails({
            title: b.title,
            image: b.image,
            body: "For personalised guidance on this topic, speak with our multidisciplinary care team."
          })} aria-label={`Read ${b.title}`}><Photo n={b.image} alt={b.title} /></button><h3>{b.title}</h3><button className="mb-blog-more" type="button" onClick={() => showDetails({
            title: b.title,
            image: b.image,
            body: "For personalised guidance on this topic, speak with our multidisciplinary care team."
          })}>{b.date} <span aria-hidden="true">•</span> Read More</button></article>)}</div></section>

      <section id="appointment" className="mb-section mb-tinted mb-rounded"><div className="mb-container mb-appointment"><Photo n={18} alt="A mother smiles at her baby" /><div><Heading label="BOOK AN APPOINTMENT"><em>Book Appointment</em><br />Today!</Heading><p>Complete the form and our care team will contact you to schedule a confidential consultation.</p>
        {status === "success" ? <div className="mb-form-result" role="status"><CheckIcon /><h3>Appointment request sent</h3><p>Our care team will contact you to confirm availability.</p><button className="mb-button" onClick={() => setStatus("idle")}>Request another appointment</button></div> : <form className="mb-appointment-form" ref={formRef} onSubmit={submitAppointment}>
          {(bookingDoctor || bookingType) && <p className="mb-booking-selection">{[bookingDoctor, bookingType].filter(Boolean).join(" · ")}</p>}
          <label><span className="sr-only">Full Name</span><input name="name" autoComplete="name" placeholder="Full Name" required /></label>
          <label><span className="sr-only">Email Address</span><input name="email" type="email" autoComplete="email" placeholder="Email Address" value={bookingEmail} onChange={e => setBookingEmail(e.target.value)} required /></label>
          <label><span className="sr-only">Phone Number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" required pattern="[+0-9() .-]{7,20}" title="Enter a valid phone number" /></label>
          <label className="mb-date-label"><span>Preferred Date</span><input name="preferredDate" type="date" min={new Date().toISOString().split("T")[0]} aria-label="Preferred date" value={bookingDate} onChange={e => setBookingDate(e.target.value)} required /></label>
          <label><span className="sr-only">Select Service</span><select name="service" required value={bookingService} onChange={e => setBookingService(e.target.value)}><option value="" disabled>Select Service</option>{careCategories.map(x => <option key={x}>{x}</option>)}</select></label>
          <label><span className="sr-only">Select Location</span><select name="location" required value={bookingLocation} onChange={e => setBookingLocation(e.target.value)}><option value="" disabled>Select Location</option>{locations.map(x => <option key={x}>{x}</option>)}</select></label>
          <button className="mb-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Book Appointment"}</button>
          {(status === "error" || status === "unavailable") && <p className="mb-form-message" role="alert">{status === "unavailable" ? "Online booking is currently unavailable. Your request has not been sent." : "We couldn’t send your request. Please try again."} Please call <a href={hospital.phoneHref}>{hospital.phone}</a> to book.</p>}
        </form>}
      </div></div></section>

      <footer className="mb-footer mb-rounded"><div className="mb-container"><div className="mb-footer-cta"><div><p className="mb-eyebrow">Ready to Talk?</p><h2>Schedule Your <em>Consultation</em> Today!</h2><p>Whether you want to know about women&apos;s health, your child&apos;s care, pregnancy or fertility support, our expert multidisciplinary team is ready to assist.</p></div><form onSubmit={e => {
            e.preventDefault();
            book();
          }}><label className="sr-only" htmlFor="footer-email">Email address</label><input id="footer-email" type="email" placeholder="Enter your email address" required value={bookingEmail} onChange={e => setBookingEmail(e.target.value)} /><button className="mb-button mb-gold" type="submit">Send</button></form></div><div className="mb-footer-grid"><div><a href="#home"><Image src={asset(23)} width={190} height={90} alt="M’Brace by Kamineni Hospitals" className="mb-footer-logo" /></a><p>Compassionate fertility care, advanced technology and trusted guidance for every family.</p><a className="mb-footer-phone" href={hospital.phoneHref}><PhoneIcon />{hospital.phone}</a></div><div><h3>Quick Links</h3><ul>{[["Home", "home"], ["About Us", "about"], ["Women’s Care", "services"], ["Child Care", "services"], ["Our Team", "team"], ["Pregnancy & Birth Support", "services"], ["Fertility Care", "services"]].map(([text, href]) => <li key={text}><a href={`#${href}`} onClick={() => goToServices(text.replace("’", "'"))}>{text}</a></li>)}</ul></div><div><h3>Services</h3><ul>{serviceGroups["Child Care"].slice(0, 7).map(([name]) => <li key={name}><a href="#services" onClick={() => setServiceTab("Child Care")}>{name}</a></li>)}</ul></div><div><h3>Location</h3><div className="mb-footer-locations"><a href="#location" onClick={() => setLocation("LB Nagar")}>LB Nagar</a><span>|</span><a href="#location" onClick={() => setLocation("King Koti")}>King Koti</a></div><a className="mb-footer-map" href={mapUrl} target="_blank" rel="noreferrer"><Image src={asset(6)} width={280} height={140} alt="Hospital location map" /><span>View on Map ↗</span></a></div></div><div className="mb-footer-bottom"><p>© 2026 M’Brace. All rights reserved.</p><div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></div><a href={`mailto:${hospital.email}`}>{hospital.email}</a></div></div></footer>
      <dialog ref={dialog} className="mb-dialog" aria-labelledby="detail-title"><button className="mb-dialog-close" onClick={() => dialog.current?.close()} aria-label="Close details">✕</button>{detail?.image !== undefined && <Photo n={detail.image} alt={detail.title} />}<h2 id="detail-title">{detail?.title}</h2><p>{detail?.body}</p><button className="mb-button" onClick={() => book()}>Book a Consultation</button><a href={hospital.phoneHref}>{hospital.phone}</a></dialog>
    </div>;
}
