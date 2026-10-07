import ImageUploadField from "@/app/admin/ImageUploadField";

export type LocationFormValues = {
  id?: number;
  slug?: string;
  name?: string;
  address?: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  mapUrl?: string;
  heroImage?: string;
  servicesImage?: string;
  clinicImage?: string;
  introParagraph?: string;
  whatToExpectIntro?: string;
  carePromiseIntro?: string;
  whyChooseIntro?: string;
  reachIntro?: string;
  order?: number;
};

export default function LocationForm({
  action,
  location,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  location?: LocationFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 grid max-w-3xl gap-5 rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
      {location?.id !== undefined && <input type="hidden" name="id" value={location.id} />}
      <ImageUploadField label="Hero background photo" currentImage={location?.heroImage} required fileFieldName="heroImageFile" currentFieldName="heroCurrentImage" />
      <ImageUploadField label={'"Services Available" panel photo'} currentImage={location?.servicesImage} fileFieldName="servicesImageFile" currentFieldName="servicesCurrentImage" />
      <ImageUploadField label={'"Visit Our Clinic" photo'} currentImage={location?.clinicImage} fileFieldName="clinicImageFile" currentFieldName="clinicCurrentImage" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={location?.name} required placeholder="LB Nagar" className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">URL slug (optional — auto-generated from name)<input name="slug" defaultValue={location?.slug} placeholder="lb-nagar" className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">Address<textarea name="address" defaultValue={location?.address} required rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="block text-sm font-medium text-slate-700">Phone (display)<input name="phone" defaultValue={location?.phone} required placeholder="+91 93906 34074" className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Phone (tel: link)<input name="phoneHref" defaultValue={location?.phoneHref} required placeholder="tel:+919390634074" className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Email<input name="email" type="email" defaultValue={location?.email} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">Google Maps URL<input name="mapUrl" defaultValue={location?.mapUrl} required placeholder="https://www.google.com/maps/search/?api=1&query=..." className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>

      <div className="border-t border-slate-100 pt-5">
        <h2 className="text-sm font-semibold text-slate-900">Page intros</h2>
        <p className="mt-1 text-xs text-slate-500">Short paragraphs shown above each section on this location&apos;s public page.</p>
        <div className="mt-4 grid gap-4">
          <label className="block text-sm font-medium text-slate-700">Services section intro<textarea name="introParagraph" defaultValue={location?.introParagraph} rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700">&quot;What To Expect&quot; intro<textarea name="whatToExpectIntro" defaultValue={location?.whatToExpectIntro} rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700">&quot;Our Care Promise&quot; intro<textarea name="carePromiseIntro" defaultValue={location?.carePromiseIntro} rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700">&quot;Why Patients Choose Us&quot; intro<textarea name="whyChooseIntro" defaultValue={location?.whyChooseIntro} rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700">&quot;How To Reach&quot; intro<textarea name="reachIntro" defaultValue={location?.reachIntro} rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        </div>
      </div>

      <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={location?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
