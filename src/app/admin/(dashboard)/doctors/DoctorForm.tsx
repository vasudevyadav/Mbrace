import ImageUploadField from "@/app/admin/ImageUploadField";
import SeoFields from "@/app/admin/SeoFields";

export type DoctorFormValues = {
  id?: number;
  slug?: string;
  name?: string;
  qualifications?: string;
  role?: string;
  image?: string;
  yearsExperience?: string;
  languages?: string;
  location?: string;
  isFeatured?: boolean;
  order?: number;
  designation?: string;
  bio?: string;
  timing?: string;
  phone?: string;
  email?: string;
  fullAddress?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export default function DoctorForm({
  action,
  doctor,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  doctor?: DoctorFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 grid w-full gap-6 lg:grid-cols-12">
      {doctor?.id !== undefined && <input type="hidden" name="id" value={doctor.id} />}
      <section className="p-5 sm:p-6 lg:col-span-4"><div className="mb-5"><h2 className="text-base font-bold text-slate-900">Profile photo</h2><p className="mt-1 text-xs leading-5 text-slate-500">Optional. Leave blank when an approved doctor photo is unavailable.</p></div><ImageUploadField label="Doctor photo" currentImage={doctor?.image} helpText="Portrait image recommended. JPG, PNG or WebP." /></section>
      <section className="p-5 sm:p-6 lg:col-span-8"><div><h2 className="text-base font-bold text-slate-900">Doctor information</h2><p className="mt-1 text-xs text-slate-500">Details shown on cards and search results.</p></div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={doctor?.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Role / title<input name="role" defaultValue={doctor?.role} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700 sm:col-span-2">Qualifications<input name="qualifications" defaultValue={doctor?.qualifications} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Years of experience<input name="yearsExperience" defaultValue={doctor?.yearsExperience} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Location<input name="location" defaultValue={doctor?.location} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Languages<input name="languages" defaultValue={doctor?.languages} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={doctor?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 sm:col-span-2">
          <input type="checkbox" name="isFeatured" defaultChecked={doctor?.isFeatured} className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
          Featured doctor (large card)
        </label>
      </div>
      </section>

      <section className="p-5 sm:p-6 lg:col-span-12">
        <h2 className="text-base font-bold text-slate-900">Profile page</h2>
        <p className="mt-1 text-xs text-slate-500">Shown on this doctor&apos;s public profile at /doctors/{doctor?.slug || "…"}. Leave contact fields blank to fall back to the site-wide phone, email and address.</p>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">URL slug<input name="slug" defaultValue={doctor?.slug} placeholder="dr-jane-doe" className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700">Designation<input name="designation" defaultValue={doctor?.designation} placeholder={doctor?.role} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">About / bio<textarea name="bio" defaultValue={doctor?.bio} rows={5} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700">Consultation timing<input name="timing" defaultValue={doctor?.timing} placeholder="Mon To Sat, 09:00AM-06:00PM" className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Direct phone (optional)<input name="phone" defaultValue={doctor?.phone} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700">Direct email (optional)<input name="email" type="email" defaultValue={doctor?.email} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          </div>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">Full address (optional)<textarea name="fullAddress" defaultValue={doctor?.fullAddress} rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        </div>
      </section>

      <section className="p-5 sm:p-6 lg:col-span-12"><SeoFields
        metaTitle={doctor?.metaTitle}
        metaDescription={doctor?.metaDescription}
        titlePlaceholder={doctor?.name}
        descriptionPlaceholder={doctor?.designation || doctor?.role}
      /></section>

      <div className="lg:col-span-12 lg:flex lg:justify-end"><button type="submit" className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto">{submitLabel}</button></div>
    </form>
  );
}
