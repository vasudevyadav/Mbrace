import ImageUploadField from "@/app/admin/ImageUploadField";
import SeoFields from "@/app/admin/SeoFields";
import type { CareCategoryContent } from "@/components/sections/mbrace/services/careCategoryContent";

const fieldClass = "mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export default function CareCategoryContentForm({
  action,
  id,
  slug,
  label,
  content,
}: {
  action: (formData: FormData) => void;
  id: number;
  slug: string;
  label: string;
  content: CareCategoryContent;
}) {
  return (
    <form action={action} className="mt-6 grid w-full max-w-none gap-6 [&>div]:rounded-3xl [&>div]:bg-white [&>div]:p-5 [&>div]:shadow-[0_14px_45px_rgba(41,30,52,0.06)] [&>div]:ring-1 [&>div]:ring-[#e4dce9] sm:[&>div]:p-8 xl:grid-cols-2 xl:[&>div:first-of-type]:col-span-2 xl:[&>div:nth-of-type(2)]:col-span-2">
      <input type="hidden" name="id" value={id} />

      <div>
        <h2 className="text-sm font-semibold text-slate-900">Hero</h2>
        <p className="mt-1 text-xs text-slate-500">Shown at the top of /{slug}.</p>
        <div className="mt-4 grid gap-4">
          <label className="block text-sm font-medium text-slate-700">Badge (small label above the heading)<input name="heroBadge" defaultValue={content.heroBadge} className={fieldClass} /></label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Heading — line 1<input name="heroHeadingLine1" defaultValue={content.heroHeadingLine1} className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700">Heading — line 2<input name="heroHeadingLine2" defaultValue={content.heroHeadingLine2} className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700">Heading — highlight word 1 (gold)<input name="heroHeadingHighlight1" defaultValue={content.heroHeadingHighlight1} className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700">Heading — highlight word 2 (gold)<input name="heroHeadingHighlight2" defaultValue={content.heroHeadingHighlight2} className={fieldClass} /></label>
          </div>
          <label className="block text-sm font-medium text-slate-700">Description<textarea name="heroDescription" defaultValue={content.heroDescription} rows={3} className={fieldClass} /></label>
          <ImageUploadField label="Hero background photo" currentImage={content.heroImage} fileFieldName="heroImageFile" currentFieldName="heroCurrentImage" />
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h2 className="text-sm font-semibold text-slate-900">&ldquo;We support every stage of your journey&rdquo; cards</h2>
        <div className="mt-4 grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Heading<input name="journeyHeading" defaultValue={content.journeyHeading} className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700">Highlight word (gold)<input name="journeyHighlight" defaultValue={content.journeyHighlight} className={fieldClass} /></label>
          </div>
          {content.journey.map((item, i) => (
            <div key={i} className="grid gap-3 rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Card {i + 1}</p>
              <ImageUploadField label="Photo" currentImage={item.image} fileFieldName={`journey${i}ImageFile`} currentFieldName={`journey${i}CurrentImage`} />
              <label className="block text-sm font-medium text-slate-700">Question<input name={`journey${i}Question`} defaultValue={item.question} className={fieldClass} /></label>
              <label className="block text-sm font-medium text-slate-700">Call to action<input name={`journey${i}Cta`} defaultValue={item.cta} className={fieldClass} /></label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h2 className="text-sm font-semibold text-slate-900">&ldquo;Talk to Our Experts&rdquo;</h2>
        <div className="mt-4 grid gap-4">
          <label className="block text-sm font-medium text-slate-700">Heading<input name="talkToExpertsHeading" defaultValue={content.talkToExpertsHeading} className={fieldClass} /></label>
          <label className="block text-sm font-medium text-slate-700">Body<input name="talkToExpertsBody" defaultValue={content.talkToExpertsBody} className={fieldClass} /></label>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h2 className="text-sm font-semibold text-slate-900">&ldquo;One Trusted Destination&rdquo;</h2>
        <div className="mt-4 grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Heading<input name="whyChooseHeading" defaultValue={content.whyChooseHeading} className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700">Highlight (gold)<input name="whyChooseHighlight" defaultValue={content.whyChooseHighlight} className={fieldClass} /></label>
          </div>
          <label className="block text-sm font-medium text-slate-700">Body<textarea name="whyChooseBody" defaultValue={content.whyChooseBody} rows={2} className={fieldClass} /></label>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h2 className="text-sm font-semibold text-slate-900">&ldquo;Best Hospital for…&rdquo; (Centres of Excellence)</h2>
        <div className="mt-4 grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Eyebrow (small label)<input name="excellenceEyebrow" defaultValue={content.excellenceEyebrow} className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700">Heading<input name="excellenceHeading" defaultValue={content.excellenceHeading} className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">Highlight<input name="excellenceHighlight" defaultValue={content.excellenceHighlight} className={fieldClass} /></label>
          </div>
          <label className="block text-sm font-medium text-slate-700">Body<textarea name="excellenceBody" defaultValue={content.excellenceBody} rows={4} className={fieldClass} /></label>
        </div>
      </div>

      <SeoFields metaTitle={content.metaTitle} metaDescription={content.metaDescription} titlePlaceholder={label} descriptionPlaceholder={content.heroDescription} />

      <button type="submit" className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(118,75,158,.25)] transition hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50 xl:col-span-2">Save changes</button>
    </form>
  );
}
