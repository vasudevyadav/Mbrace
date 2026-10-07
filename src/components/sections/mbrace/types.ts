export type BookAppointment = (service?: string, doctor?: string, type?: string) => void;

export type DetailContent = {
  title: string;
  body: string;
  image?: string;
};

export type AppointmentStatus = "idle" | "sending" | "success" | "error";
