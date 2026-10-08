"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const careCategoryHrefs: Record<string, string> = {
  "Women's Care": "/womens-care",
  "Child Care": "/child-care",
  "Pregnancy & Birth Support": "/pregnancy-birth-support",
  "Fertility Care": "/fertility-care",
};

export default function MbraceHeader({
  onBook,
  careCategories,
  hospital,
  basePath = "",
}: {
  onBook: () => void;
  careCategories: string[];
  hospital: { phone: string; phoneHref: string };
  basePath?: string;
}) {
  const drawer = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    drawer.current?.close();
  }
  function show() {
    drawer.current?.showModal();
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1280px)");
    const handleResize = () => {
      if (desktop.matches) drawer.current?.close();
    };
    desktop.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  return (
    <>
      <header className={`mb-header fixed z-[60] flex items-center top-0 right-0 bottom-auto left-0 h-[var(--care-header-height)] bg-[#fffdf9f5] [backdrop-filter:blur(16px)] [border-bottom:1px_solid_#764b9e18] shadow-[0_4px_24px_#33214c0a] gap-2.5 pt-2.5 pr-4 pb-2.5 pl-4 sm:gap-4 xl:gap-[25px] sm:pt-3 sm:pr-[clamp(20px,_3vw,_48px)] sm:pb-3 sm:pl-[clamp(20px,_3vw,_48px)] justify-between [transition:background_.25s,box-shadow_.25s,padding_.25s,height_.25s] ${scrolled ? "xl:fixed! xl:top-0! xl:right-0! xl:bottom-auto! xl:left-0! xl:h-[var(--care-header-height)]! xl:bg-[#fffdf9f5]! xl:pt-3! xl:pr-[clamp(20px,_3vw,_48px)]! xl:pb-3! xl:pl-[clamp(20px,_3vw,_48px)]! xl:[backdrop-filter:blur(16px)]! xl:[border-bottom:1px_solid_#764b9e18]! xl:shadow-[0_4px_24px_#33214c0a]!" : ""} [&_nav]:hidden [&_nav]:items-stretch [&_nav]:text-[14px] [&_nav]:absolute [&_nav]:top-full [&_nav]:left-5 [&_nav]:right-5 [&_nav]:bg-white [&_nav]:shadow-[0_12px_30px_#1f2b7020] [&_nav]:rounded-[12px] [&_nav]:pt-6 [&_nav]:pr-6 [&_nav]:pb-6 [&_nav]:pl-6 lg:[&_nav]:flex lg:[&_nav]:static lg:[&_nav]:bg-transparent lg:[&_nav]:shadow-none lg:[&_nav]:rounded-none lg:[&_nav]:pt-0 lg:[&_nav]:pr-0 lg:[&_nav]:pb-0 lg:[&_nav]:pl-0 lg:[&_nav]:items-center [&_nav]:justify-end [&_nav]:flex-1 [&_nav]:text-[#6b6969] [&_nav]:gap-[13px] xl:[&_nav]:gap-6 xl:[&_nav]:text-[12px] lg:[&_nav]:text-[11px] [&_nav>a:first-child]:text-care-purple [&_nav>a:first-child]:font-extrabold [&_.mb-button]:text-[12px] [&_.mb-button]:whitespace-nowrap [&_.mb-button]:pt-2.5 [&_.mb-button]:pr-5.5 [&_.mb-button]:pb-2.5 [&_.mb-button]:pl-5.5 xl:[&_.mb-button]:text-[14px] xl:[&_.mb-button]:font-bold xl:[&_.mb-button]:pt-3.5 xl:[&_.mb-button]:pr-6 xl:[&_.mb-button]:pb-3.5 xl:[&_.mb-button]:pl-6 [&_nav.is-open]:flex [&_nav.is-open]:flex-col [&_.mb-logos_img]:w-22 sm:[&_.mb-logos_img]:w-27.5 xl:[&_.mb-logos_img]:w-[125px] [&_.mb-logos_img:last-child]:w-25.5 sm:[&_.mb-logos_img:last-child]:w-[125px] xl:[&_.mb-logos_img:last-child]:w-[145px] [&_.mb-desktop-nav]:gap-[clamp(12px,_1.4vw,_22px)] [&_.mb-desktop-nav]:text-[12px] [&_a:hover]:text-care-purple [&_.mb-logos]:gap-[9px] [&_.mb-logos>span]:h-8.5 [&_.mb-button:hover]:text-white`}>
        <a
          className="mb-logos flex items-center shrink-0 gap-2.5 sm:gap-[15px] [&_img]:w-22.5 sm:[&_img]:w-27.5 xl:[&_img]:w-[145px] [&_img]:h-auto [&_img]:object-contain [&_img]:mix-blend-multiply [&_img:last-child]:w-27.5 sm:[&_img:last-child]:w-[125px] xl:[&_img:last-child]:w-40 [&>span]:h-[35px] sm:[&>span]:h-13 [&>span]:w-[1px] [&>span]:bg-[#8b847f]"
          href={`${basePath}#home`}
          aria-label="M’Brace by Kamineni Hospitals home"
        >
          <Image
            src="/images/figma/asset-1.webp"
            alt="Kamineni Hospitals"
            width={154}
            height={44}
          />
          <span />
          <Image
            src="/images/figma/asset-2.webp"
            alt="M’Brace"
            width={183}
            height={86}
          />
        </a>
        <nav
          className="mb-desktop-nav xl:text-[14px]! [&>a]:pt-3 [&>a]:pb-3 [font-family:var(--font-manrope)]"
          aria-label="Main navigation"
        >
          <a href={`${basePath}#home`}><span className="text-care-gold">{"‣ "}</span>Home</a>
          <a href="/about">About Us</a>
          {careCategories.map((name) => (
            <a href={careCategoryHrefs[name] ?? `${basePath}#services`} key={name}>
              {name}
            </a>
          ))}
          <button
            type="button"
            className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-md [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]"
            onClick={onBook}
          >
            Book Appointment
          </button>
        </nav>
        <div className="mb-header-mobile-actions flex items-center xl:hidden gap-0 sm:gap-3">
          <button
            ref={trigger}
            type="button"
            className="mb-menu-toggle grid place-items-center shrink-0 w-11 h-11 rounded-[12px] [border:1px_solid_#764b9e25] bg-[#f8f5fc] text-care-purple [&_svg]:w-6 [&_svg]:h-6 [&_svg]:fill-none [&_svg]:[stroke:currentColor] [&_svg]:[stroke-width:1.8] [&_svg]:[stroke-linecap:round]"
            onClick={show}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label="Open navigation menu"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <dialog
        ref={drawer}
        id="mobile-navigation"
        className="mb-nav-drawer fixed top-0 right-0 bottom-0 left-auto mt-0 mr-0 mb-0 ml-0 w-[min(88vw,_390px)] max-w-full h-dvh max-h-dvh pt-[max(24px,_env(safe-area-inset-top))] pb-[max(24px,_env(safe-area-inset-bottom))] [border:0] bg-[#fffdf9] text-care-navy shadow-[-16px_0_60px_#21103430] overflow-y-auto overscroll-contain pr-5.5 pl-5.5 sm:pr-6 sm:pl-6 [&[open]]:flex [&[open]]:flex-col [&[open]]:animate-drawer-enter [&::backdrop]:bg-[#21103480] [&::backdrop]:[backdrop-filter:blur(3px)] [&_nav]:grid [&_nav_a]:flex [&_nav_a]:items-center [&_nav_a]:justify-between [&_nav_a]:gap-4 [&_nav_a]:min-h-[53px] [&_nav_a]:[border-bottom:1px_solid_#764b9e15] [&_nav_a]:text-[14px] [&_nav_a]:font-semibold [&_nav_a]:pt-[13px] [&_nav_a]:pr-0 [&_nav_a]:pb-[13px] [&_nav_a]:pl-0 [&_nav_a_span]:text-[#ae92c5] [&_nav_a:hover]:text-care-purple motion-reduce:[&[open]]:animate-none"
        aria-labelledby="mobile-menu-title"
        onClose={() => {
          setOpen(false);
          if (window.matchMedia("(max-width: 1279px)").matches)
            trigger.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              close();
          }
        }}
      >
        <div className="mb-drawer-heading flex items-center justify-between gap-3 pb-6 [&_p]:text-care-purple [&_p]:text-[25px] [&_p]:font-bold [&_h2]:text-[12px] [&_h2]:font-medium [&_h2]:text-care-copy [&_h2]:mt-[3px]">
          <div>
            <p>M’Brace</p>
            <h2 id="mobile-menu-title">Explore our care</h2>
          </div>
          <button
            type="button"
            className="mb-drawer-close grid place-items-center shrink-0 w-11 h-11 rounded-[12px] [border:1px_solid_#764b9e25] bg-[#f8f5fc] text-care-purple"
            onClick={close}
            aria-label="Close navigation menu"
            autoFocus
          >
            ✕
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <a href={`${basePath}#home`} onClick={close}>
            Home <span aria-hidden="true">↗</span>
          </a>
          <a href="/about" onClick={close}>
            About Us <span aria-hidden="true">↗</span>
          </a>
          {careCategories.map((name) => (
            <a
              href={careCategoryHrefs[name] ?? `${basePath}#services`}
              key={name}
              onClick={close}
            >
              {name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href={`${basePath}#team`} onClick={close}>
            Our Doctors<span aria-hidden="true">↗</span>
          </a>
          <a href={`${basePath}#location`} onClick={close}>
            Locations<span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div className="mb-drawer-contact mt-auto pt-7 grid gap-3 [&_p]:text-care-copy [&_p]:text-[12px] [&>span]:text-care-copy [&>span]:text-[12px] [&>a]:text-[18px] [&>a]:font-semibold [&>a]:text-care-purple [&_.mb-button]:w-full [&_.mb-button]:min-h-12">
          <p>We’re here for you</p>
          <a href={hospital.phoneHref}>{hospital.phone}</a>
          <button
            type="button"
            className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-md [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]"
            onClick={() => {
              close();
              onBook();
            }}
          >
            Book Appointment
          </button>
          <span>LB Nagar · King Koti, Hyderabad</span>
        </div>
      </dialog>
    </>
  );
}
