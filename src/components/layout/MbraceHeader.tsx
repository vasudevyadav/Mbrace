"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { careCategories, hospital } from "@/lib/mbrace-home";

export default function MbraceHeader({ onBook, onService }: {
  onBook: () => void;
  onService: (category: string) => void;
}) {
  const drawer = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function close() { drawer.current?.close(); }
  function show() { drawer.current?.showModal(); setOpen(true); }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1201px)");
    const handleResize = () => { if (desktop.matches) drawer.current?.close(); };
    desktop.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  function navigate(category?: string) {
    close();
    if (category) onService(category);
  }

  return <>
    <header className="mb-header">
      <a className="mb-logos" href="#home" aria-label="M’Brace by Kamineni Hospitals home">
        <Image src="/images/figma/asset-1.webp" alt="Kamineni Hospitals" width={155} height={45} />
        <span />
        <Image src="/images/figma/asset-2.webp" alt="M’Brace" width={170} height={80} />
      </a>
      <nav className="mb-desktop-nav" aria-label="Main navigation">
        <a href="#home">Home</a><a href="#about">About Us</a>
        {careCategories.map(name => <a href="#services" key={name} onClick={() => onService(name)}>{name}</a>)}
        <button type="button" className="mb-button" onClick={onBook}>Book Appointment</button>
      </nav>
      <div className="mb-header-mobile-actions">
        <button type="button" className="mb-button mb-header-book" onClick={onBook}>Book a Visit</button>
        <button ref={trigger} type="button" className="mb-menu-toggle" onClick={show} aria-expanded={open} aria-controls="mobile-navigation" aria-haspopup="dialog" aria-label="Open navigation menu">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
    <dialog ref={drawer} id="mobile-navigation" className="mb-nav-drawer" aria-labelledby="mobile-menu-title"
      onClose={() => { setOpen(false); if (window.matchMedia("(max-width: 1200px)").matches) trigger.current?.focus({preventScroll:true}); }}
      onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close(); } }}>
      <div className="mb-drawer-heading">
        <div><p>M’Brace</p><h2 id="mobile-menu-title">Explore our care</h2></div>
        <button type="button" className="mb-drawer-close" onClick={close} aria-label="Close navigation menu" autoFocus>✕</button>
      </div>
      <nav aria-label="Mobile navigation">
        <a href="#home" onClick={() => navigate()}>Home <span aria-hidden="true">↗</span></a>
        <a href="#about" onClick={() => navigate()}>About Us <span aria-hidden="true">↗</span></a>
        {careCategories.map(name => <a href="#services" key={name} onClick={() => navigate(name)}>{name}<span aria-hidden="true">↗</span></a>)}
        <a href="#team" onClick={() => navigate()}>Our Doctors<span aria-hidden="true">↗</span></a>
        <a href="#location" onClick={() => navigate()}>Locations<span aria-hidden="true">↗</span></a>
      </nav>
      <div className="mb-drawer-contact">
        <p>We’re here for you</p>
        <a href={hospital.phoneHref}>{hospital.phone}</a>
        <button type="button" className="mb-button" onClick={() => { close(); onBook(); }}>Book Appointment</button>
        <span>LB Nagar · King Koti, Hyderabad</span>
      </div>
    </dialog>
  </>;
}
