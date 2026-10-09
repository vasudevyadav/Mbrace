import ImageUploadField from "@/app/admin/ImageUploadField";
import SeoFields from "@/app/admin/SeoFields";
import DynamicPageSectionsEditor from "@/app/admin/DynamicPageSectionsEditor";

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
  blocks?: unknown;
  metaTitle?: string;
  metaDescription?: string;
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
    <form action={action} className="mt-6 grid w-full max-w-none gap-6 rounded-3xl bg-white p-5 shadow-[0_18px_55px_rgba(41,30,52,0.07)] ring-1 ring-[#e4dce9] sm:p-8 xl:p-10">
      {location?.id !== undefined && <input type="hidden" name="id" value={location.id} />}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6"><h2 className="mb-4 text-base font-bold text-slate-900">SEO Meta</h2><SeoFields metaTitle={location?.metaTitle} metaDescription={location?.metaDescription} titlePlaceholder={location?.name ? `M'Brace Hospital, ${location.name}` : undefined} descriptionPlaceholder={location?.introParagraph || location?.address} /></section>
      <section className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6"><div><h2 className="text-base font-bold text-slate-900">Hero &amp; Page Images</h2><p className="mt-1 text-xs text-slate-500">Images used across this location page.</p></div>
      <ImageUploadField label="Hero background photo" currentImage={location?.heroImage} required fileFieldName="heroImageFile" currentFieldName="heroCurrentImage" />
      <ImageUploadField label={'"Services Available" panel photo'} currentImage={location?.servicesImage} fileFieldName="servicesImageFile" currentFieldName="servicesCurrentImage" />
      <ImageUploadField label={'"Visit Our Clinic" photo'} currentImage={location?.clinicImage} fileFieldName="clinicImageFile" currentFieldName="clinicCurrentImage" />
      </section>
      <section className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6"><h2 className="text-base font-bold text-slate-900">Location &amp; Contact Details</h2>
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
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-900">Services Available Section</h2><label className="mt-4 block text-sm font-medium text-slate-700">Section intro<textarea name="introParagraph" defaultValue={location?.introParagraph} rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm" /></label></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-900">What To Expect Section</h2><label className="mt-4 block text-sm font-medium text-slate-700">Section intro<textarea name="whatToExpectIntro" defaultValue={location?.whatToExpectIntro} rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm" /></label></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-900">Our Care Promise Section</h2><label className="mt-4 block text-sm font-medium text-slate-700">Section intro<textarea name="carePromiseIntro" defaultValue={location?.carePromiseIntro} rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm" /></label></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-900">Why Patients Choose Us Section</h2><label className="mt-4 block text-sm font-medium text-slate-700">Section intro<textarea name="whyChooseIntro" defaultValue={location?.whyChooseIntro} rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm" /></label></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2"><h2 className="font-bold text-slate-900">How To Reach Section</h2><label className="mt-4 block text-sm font-medium text-slate-700">Section intro<textarea name="reachIntro" defaultValue={location?.reachIntro} rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm" /></label></section>
      </div>

      <section className="rounded-2xl border border-brand-200 bg-brand-50/20 p-5 sm:p-6">
        <h2 className="text-base font-bold text-slate-900">Additional Dynamic Sections</h2>
        <p className="mt-1 text-xs text-slate-500">Add, remove and reorder complete content sections unique to this location slug. When blocks are added, they replace the legacy fixed middle sections.</p>
        <div className="mt-4">
          <DynamicPageSectionsEditor name="blocksJson" initialSections={Array.isArray(location?.blocks) ? location.blocks : []} />
        </div>
      </section>

      <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={location?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
