type IconProps = {
  className?: string;
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20.5c0 .6-.4 1-1 1C10.5 21.5 2.5 13.5 2.5 4.7c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21.5s7-6.4 7-12A7 7 0 0 0 5 9.5c0 5.6 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7v5.3l3.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 12.8 9 17.3 19.5 6.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.6l2.47 5.24 5.78.62-4.31 3.94 1.2 5.68L10 14.1l-5.14 2.98 1.2-5.68L1.75 7.46l5.78-.62L10 1.6Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 5l14 14M19 5 5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ToothIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c-1.9 0-2.7 1.1-4 1.1S5.2 3 3.9 4.3C2.6 5.6 2.4 8 3 10.4c.5 2.1 1.4 3.7 1.9 6.4.3 1.7.9 3.7 2.3 3.7 1.6 0 1.4-3.2 2.1-5 .4-1 .8-1.6 1.7-1.6.9 0 1.3.6 1.7 1.6.7 1.8.5 5 2.1 5 1.4 0 2-2 2.3-3.7.5-2.7 1.4-4.3 1.9-6.4.6-2.4.4-4.8-.9-6.1C16.8 3 16 4.1 14.7 4.1S13.9 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.3 19 6v6.1c0 4.4-3 8-7 9.6-4-1.6-7-5.2-7-9.6V6l7-2.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 12.2l2.2 2.2 4.4-4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c.4 2.9 1.1 4.8 2.2 6 1.2 1.1 3.1 1.8 6 2.2-2.9.4-4.8 1.1-6 2.2-1.1 1.2-1.8 3.1-2.2 6-.4-2.9-1.1-4.8-2.2-6-1.2-1.1-3.1-1.8-6-2.2 2.9-.4 4.8-1.1 6-2.2 1.1-1.2 1.8-3.1 2.2-6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ImplantIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 3h6l1 4-2 2v9a2 2 0 0 1-4 0v-9L8 7l1-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 9.5h4M10 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function AlignerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 9.5c0-2 3.6-3.5 8-3.5s8 1.5 8 3.5-3.6 3.5-8 3.5-8-1.5-8-3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 14.5c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparklesSmileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 12c1.5 3 4 4.5 6 4.5s4.5-1.5 6-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M5 6l.7 1.7L7.5 8.4l-1.8.7L5 10.8l-.7-1.7L2.5 8.4l1.8-.7L5 6Z" fill="currentColor" />
      <path d="M18.5 5l.6 1.4 1.4.6-1.4.6-.6 1.4-.5-1.4L16.5 7l1.5-.6.5-1.4Z" fill="currentColor" />
    </svg>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5s6 6.9 6 10.9a6 6 0 1 1-12 0c0-4 6-10.9 6-10.9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RootCanalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c-1.6 0-2.4 1-3.6 1S6 3 4.9 4.1C3.8 5.2 3.6 7.3 4.1 9.3c.5 1.9 1.3 3.3 1.7 5.6.3 1.6.8 3.4 2 3.4 1.4 0 1.2-2.8 1.9-4.4.3-.8.7-1.3 1.5-1.3M12 12.6c.8 0 1.2.5 1.5 1.3.7 1.6.5 4.4 1.9 4.4 1.2 0 1.7-1.8 2-3.4.4-2.3 1.2-3.7 1.7-5.6.5-2 .3-4.1-.8-5.2C17 3 16.2 4 14.6 4S13.6 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KidsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 19c0-2.9 2.2-5.2 5-5.2s5 2.3 5 5.2M14.5 19c0-2.1 1.6-3.9 3.5-3.9s3.5 1.8 3.5 3.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EmergencyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.3 19 6v6.1c0 4.4-3 8-7 9.6-4-1.6-7-5.2-7-9.6V6l7-2.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 8.5v5M9.5 11h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
