"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MbraceHeader({ onBook, onService, careCategories, hospital }: {
  onBook: () => void;
  onService: (category: string) => void;
  careCategories: string[];
  hospital: { phone: string; phoneHref: string };
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
    <header className="mb-header fixed z-[60] flex items-center top-0 right-0 bottom-auto left-0 h-[var(--care-header-height)] bg-[#fffdf9f5] [backdrop-filter:blur(16px)] [border-bottom:1px_solid_#764b9e18] shadow-[0_4px_24px_#33214c0a] max-[601px]:gap-2.5 max-[601px]:pt-2.5 max-[601px]:pr-4 max-[601px]:pb-2.5 max-[601px]:pl-4 min-[601px]:max-[1201px]:gap-4 min-[1201px]:gap-[25px] min-[601px]:pt-3 min-[601px]:pr-[clamp(20px,_3vw,_48px)] min-[601px]:pb-3 min-[601px]:pl-[clamp(20px,_3vw,_48px)] max-[1201px]:justify-between max-[1001px]:[&_nav]:hidden max-[1001px]:[&_nav]:items-stretch max-[1001px]:[&_nav]:text-[14px] max-[1001px]:[&_nav]:absolute max-[1001px]:[&_nav]:top-full max-[1001px]:[&_nav]:left-5 max-[1001px]:[&_nav]:right-5 max-[1001px]:[&_nav]:bg-white max-[1001px]:[&_nav]:shadow-[0_12px_30px_#1f2b7020] max-[1001px]:[&_nav]:rounded-[12px] max-[1001px]:[&_nav]:pt-6 max-[1001px]:[&_nav]:pr-6 max-[1001px]:[&_nav]:pb-6 max-[1001px]:[&_nav]:pl-6 min-[1001px]:[&_nav]:flex min-[1001px]:[&_nav]:items-center [&_nav]:justify-end [&_nav]:flex-1 [&_nav]:text-[#6b6969] max-[1201px]:[&_nav]:gap-[13px] min-[1201px]:[&_nav]:gap-6 min-[1201px]:[&_nav]:text-[12px] min-[1001px]:max-[1201px]:[&_nav]:text-[11px] [&_nav>a:first-child]:text-care-purple [&_nav>a:first-child]:font-bold [&_.mb-button]:text-[12px] [&_.mb-button]:whitespace-nowrap [&_.mb-button]:pt-2.5 [&_.mb-button]:pr-5.5 [&_.mb-button]:pb-2.5 [&_.mb-button]:pl-5.5 max-[1001px]:[&_nav.is-open]:flex max-[1001px]:[&_nav.is-open]:flex-col max-[601px]:[&_.mb-logos_img]:w-22 min-[601px]:max-[1201px]:[&_.mb-logos_img]:w-27.5 min-[1201px]:[&_.mb-logos_img]:w-[125px] max-[601px]:[&_.mb-logos_img:last-child]:w-25.5 min-[601px]:max-[1201px]:[&_.mb-logos_img:last-child]:w-[125px] min-[1201px]:[&_.mb-logos_img:last-child]:w-[145px] [&_.mb-desktop-nav]:gap-[clamp(12px,_1.4vw,_22px)] [&_.mb-desktop-nav]:text-[12px] max-[1201px]:[&_.mb-desktop-nav]:hidden [&_a:hover]:text-care-purple max-[601px]:[&_.mb-logos]:gap-[9px] max-[601px]:[&_.mb-logos>span]:h-8.5 [&_.mb-button:hover]:text-white">
      <a className="mb-logos flex items-center shrink-0 max-[601px]:gap-2.5 min-[601px]:gap-[15px] max-[601px]:[&_img]:w-22.5 min-[601px]:max-[1201px]:[&_img]:w-27.5 min-[1201px]:[&_img]:w-[145px] [&_img]:h-auto [&_img]:object-contain [&_img]:mix-blend-multiply max-[601px]:[&_img:last-child]:w-27.5 min-[601px]:max-[1201px]:[&_img:last-child]:w-[125px] min-[1201px]:[&_img:last-child]:w-40 max-[601px]:[&>span]:h-[35px] min-[601px]:[&>span]:h-13 [&>span]:w-[1px] [&>span]:bg-[#8b847f]" href="#home" aria-label="M’Brace by Kamineni Hospitals home">
        <Image src="/images/figma/asset-1.webp" alt="Kamineni Hospitals" width={155} height={45} />
        <span />
        <Image src="/images/figma/asset-2.webp" alt="M’Brace" width={170} height={80} />
      </a>
      <nav className="mb-desktop-nav [&>a]:pt-3 [&>a]:pb-3" aria-label="Main navigation">
        <a href="#home">Home</a><a href="#about">About Us</a>
        {careCategories.map(name => <a href="#services" key={name} onClick={() => onService(name)}>{name}</a>)}
        <button type="button" className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={onBook}>Book Appointment</button>
      </nav>
      <div className="mb-header-mobile-actions max-[1201px]:flex max-[1201px]:items-center min-[1201px]:hidden max-[601px]:gap-0 min-[601px]:max-[1201px]:gap-3">
        <button type="button" className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-header-book max-[601px]:hidden" onClick={onBook}>Book a Visit</button>
        <button ref={trigger} type="button" className="mb-menu-toggle grid place-items-center shrink-0 w-11 h-11 rounded-[12px] [border:1px_solid_#764b9e25] bg-[#f8f5fc] text-care-purple [&_svg]:w-6 [&_svg]:h-6 [&_svg]:fill-none [&_svg]:[stroke:currentColor] [&_svg]:[stroke-width:1.8] [&_svg]:[stroke-linecap:round]" onClick={show} aria-expanded={open} aria-controls="mobile-navigation" aria-haspopup="dialog" aria-label="Open navigation menu">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
    <dialog ref={drawer} id="mobile-navigation" className="mb-nav-drawer fixed top-0 right-0 bottom-0 left-auto mt-0 mr-0 mb-0 ml-0 w-[min(88vw,_390px)] max-w-full h-dvh max-h-dvh pt-[max(24px,_env(safe-area-inset-top))] pb-[max(24px,_env(safe-area-inset-bottom))] [border:0] bg-[#fffdf9] text-care-navy shadow-[-16px_0_60px_#21103430] overflow-y-auto overscroll-contain max-[601px]:pr-5.5 max-[601px]:pl-5.5 min-[601px]:pr-6 min-[601px]:pl-6 [&[open]]:flex [&[open]]:flex-col [&[open]]:animate-drawer-enter [&::backdrop]:bg-[#21103480] [&::backdrop]:[backdrop-filter:blur(3px)] [&_nav]:grid [&_nav_a]:flex [&_nav_a]:items-center [&_nav_a]:justify-between [&_nav_a]:gap-4 [&_nav_a]:min-h-[53px] [&_nav_a]:[border-bottom:1px_solid_#764b9e15] [&_nav_a]:text-[14px] [&_nav_a]:font-semibold [&_nav_a]:pt-[13px] [&_nav_a]:pr-0 [&_nav_a]:pb-[13px] [&_nav_a]:pl-0 [&_nav_a_span]:text-[#ae92c5] [&_nav_a:hover]:text-care-purple motion-reduce:[&[open]]:animate-none" aria-labelledby="mobile-menu-title"
      onClose={() => { setOpen(false); if (window.matchMedia("(max-width: 1200px)").matches) trigger.current?.focus({preventScroll:true}); }}
      onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close(); } }}>
      <div className="mb-drawer-heading flex items-center justify-between gap-3 pb-6 [&_p]:text-care-purple [&_p]:text-[25px] [&_p]:font-bold [&_h2]:text-[12px] [&_h2]:font-medium [&_h2]:text-care-copy [&_h2]:mt-[3px]">
        <div><p>M’Brace</p><h2 id="mobile-menu-title">Explore our care</h2></div>
        <button type="button" className="mb-drawer-close grid place-items-center shrink-0 w-11 h-11 rounded-[12px] [border:1px_solid_#764b9e25] bg-[#f8f5fc] text-care-purple" onClick={close} aria-label="Close navigation menu" autoFocus>✕</button>
      </div>
      <nav aria-label="Mobile navigation">
        <a href="#home" onClick={() => navigate()}>Home <span aria-hidden="true">↗</span></a>
        <a href="#about" onClick={() => navigate()}>About Us <span aria-hidden="true">↗</span></a>
        {careCategories.map(name => <a href="#services" key={name} onClick={() => navigate(name)}>{name}<span aria-hidden="true">↗</span></a>)}
        <a href="#team" onClick={() => navigate()}>Our Doctors<span aria-hidden="true">↗</span></a>
        <a href="#location" onClick={() => navigate()}>Locations<span aria-hidden="true">↗</span></a>
      </nav>
      <div className="mb-drawer-contact mt-auto pt-7 grid gap-3 [&_p]:text-care-copy [&_p]:text-[12px] [&>span]:text-care-copy [&>span]:text-[12px] [&>a]:text-[18px] [&>a]:font-semibold [&>a]:text-care-purple [&_.mb-button]:w-full [&_.mb-button]:min-h-12">
        <p>We’re here for you</p>
        <a href={hospital.phoneHref}>{hospital.phone}</a>
        <button type="button" className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => { close(); onBook(); }}>Book Appointment</button>
        <span>LB Nagar · King Koti, Hyderabad</span>
      </div>
    </dialog>
  </>;
}
