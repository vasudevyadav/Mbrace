export const BOOKING_POPUP_EVENT = "mbrace:open-booking";

export type BookingPopupDetail = {
  service?: string;
  doctor?: string;
  appointmentType?: string;
  location?: string;
};

export function openBookingPopup(detail: BookingPopupDetail = {}) {
  window.dispatchEvent(new CustomEvent<BookingPopupDetail>(BOOKING_POPUP_EVENT, { detail }));
}
