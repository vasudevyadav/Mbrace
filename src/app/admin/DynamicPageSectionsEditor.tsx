"use client";

import { useState } from "react";
import type { DynamicPageItem, DynamicPageSection } from "@/components/sections/mbrace/dynamicPageContent";

const fieldClass = "mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

const emptyItem = (): DynamicPageItem => ({ title: "", description: "", image: "" });
const emptySection = (): DynamicPageSection => ({
  kind: "content", eyebrow: "", heading: "", body: "", image: "", imageAlt: "",
  layout: "text", ctaLabel: "", ctaHref: "", items: [],
});

const sectionTemplates: Array<{
  layout: DynamicPageSection["layout"];
  title: string;
  description: string;
  icon: string;
}> = [
  { layout: "text", title: "Text Section", description: "Heading, description and CTA button", icon: "T" },
  { layout: "image-left", title: "Image Left", description: "Photo on left and content on right", icon: "◧" },
  { layout: "image-right", title: "Image Right", description: "Content on left and photo on right", icon: "◨" },
  { layout: "cards", title: "Cards Grid", description: "Repeatable cards with title, text and photo", icon: "▦" },
];

function isPageSection(value: unknown): value is DynamicPageSection {
  return Boolean(value && typeof value === "object" && "kind" in value && value.kind === "content");
}

export default function DynamicPageSectionsEditor({ name, initialSections }: { name: string; initialSections: unknown[] }) {
  const [sections, setSections] = useState<DynamicPageSection[]>(() => initialSections.filter(isPageSection));
  const update = (index: number, patch: Partial<DynamicPageSection>) => setSections(current => current.map((section, i) => i === index ? { ...section, ...patch } : section));
  const remove = (index: number) => setSections(current => current.filter((_, i) => i !== index));
  const move = (index: number, direction: -1 | 1) => setSections(current => {
    const target = index + direction;
    if (target < 0 || target >= current.length) return current;
    const next = [...current];
    [next[index], next[target]] = [next[target], next[index]];
    return next;
  });
  const updateItem = (sectionIndex: number, itemIndex: number, patch: Partial<DynamicPageItem>) => {
    const items = sections[sectionIndex].items.map((item, i) => i === itemIndex ? { ...item, ...patch } : item);
    update(sectionIndex, { items });
  };
  const addSection = (layout: DynamicPageSection["layout"]) => setSections(current => [...current, { ...emptySection(), layout }]);

  return (
    <div className="grid gap-5">
      <input type="hidden" name={name} value={JSON.stringify(sections)} />
      {sections.length === 0 && <div className="rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/40 px-6 py-10 text-center"><p className="font-semibold text-slate-800">No custom sections yet</p><p className="mt-1 text-sm text-slate-500">Create the first section for this slug.</p></div>}
      {sections.map((section, index) => (
        <section key={index} className="overflow-hidden rounded-3xl border border-[#ded3e7] bg-white shadow-[0_12px_35px_rgba(63,40,82,.07)]">
          <header className="flex flex-wrap items-center justify-between gap-3 bg-[linear-gradient(100deg,#f8f0ff,#fff8eb)] px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white">{sectionTemplates.find(template => template.layout === section.layout)?.icon ?? "§"}</span><div><p className="text-xs font-bold uppercase tracking-wider text-brand-600">Section {index + 1} · {sectionTemplates.find(template => template.layout === section.layout)?.title}</p><p className="mt-1 font-semibold text-slate-900">{section.heading || "Untitled section"}</p></div></div>
            <div className="flex gap-2"><button type="button" onClick={() => move(index, -1)} disabled={index === 0} className="rounded-lg border bg-white px-3 py-2 text-xs font-semibold disabled:opacity-30">↑ Move</button><button type="button" onClick={() => move(index, 1)} disabled={index === sections.length - 1} className="rounded-lg border bg-white px-3 py-2 text-xs font-semibold disabled:opacity-30">↓ Move</button><button type="button" onClick={() => remove(index)} className="rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-600">Remove</button></div>
          </header>
          <div className="grid gap-4 p-5 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2"><label className="text-sm font-medium text-slate-700">Small label / eyebrow<input className={fieldClass} value={section.eyebrow} onChange={e => update(index, { eyebrow: e.target.value })} /></label><label className="text-sm font-medium text-slate-700">Layout<select className={fieldClass} value={section.layout} onChange={e => update(index, { layout: e.target.value as DynamicPageSection["layout"] })}><option value="text">Text only</option><option value="image-left">Image left</option><option value="image-right">Image right</option><option value="cards">Cards grid</option></select></label></div>
            <label className="text-sm font-medium text-slate-700">Section heading<input className={fieldClass} value={section.heading} onChange={e => update(index, { heading: e.target.value })} /></label>
            <label className="text-sm font-medium text-slate-700">Description / body<textarea rows={4} className={fieldClass} value={section.body} onChange={e => update(index, { body: e.target.value })} /></label>
            <div className="grid gap-4 md:grid-cols-2"><label className="text-sm font-medium text-slate-700">Section image<input type="file" name={`sectionImageFile_${index}`} accept="image/png,image/jpeg,image/webp,image/gif" className={`${fieldClass} file:mr-3 file:rounded-lg file:border-0 file:bg-brand-50 file:px-3 file:py-2 file:font-semibold file:text-brand-700`} /><input className={fieldClass} placeholder="Existing image path or URL" value={section.image} onChange={e => update(index, { image: e.target.value })} /></label><label className="text-sm font-medium text-slate-700">Image alt text<input className={fieldClass} value={section.imageAlt} onChange={e => update(index, { imageAlt: e.target.value })} /></label></div>
            <div className="grid gap-4 md:grid-cols-2"><label className="text-sm font-medium text-slate-700">Button label<input className={fieldClass} value={section.ctaLabel} onChange={e => update(index, { ctaLabel: e.target.value })} /></label><label className="text-sm font-medium text-slate-700">Button link<input className={fieldClass} placeholder="/#appointment" value={section.ctaHref} onChange={e => update(index, { ctaHref: e.target.value })} /></label></div>
            <div className="rounded-xl border border-slate-200 bg-white p-4"><div className="flex items-center justify-between"><div><h3 className="text-sm font-semibold text-slate-900">Cards / list items</h3><p className="text-xs text-slate-500">Add as many elements as this section needs.</p></div><button type="button" onClick={() => update(index, { items: [...section.items, emptyItem()] })} className="rounded-lg bg-brand-100 px-3 py-2 text-xs font-bold text-brand-800">+ Add element</button></div>
              <div className="mt-4 grid gap-3">{section.items.map((item, itemIndex) => <div key={itemIndex} className="grid gap-3 rounded-xl bg-slate-50 p-4 md:grid-cols-2"><input aria-label="Item title" placeholder="Title" className={fieldClass} value={item.title} onChange={e => updateItem(index, itemIndex, { title: e.target.value })} /><input aria-label="Item description" placeholder="Description" className={fieldClass} value={item.description} onChange={e => updateItem(index, itemIndex, { description: e.target.value })} /><label className="text-xs font-semibold text-slate-600">Element image upload<input type="file" name={`sectionItemImageFile_${index}_${itemIndex}`} accept="image/png,image/jpeg,image/webp,image/gif" className={`${fieldClass} file:mr-2 file:border-0 file:bg-brand-50 file:px-2 file:py-1`} /></label><input aria-label="Existing item image" placeholder="Existing image path or URL" className={fieldClass} value={item.image} onChange={e => updateItem(index, itemIndex, { image: e.target.value })} /><button type="button" onClick={() => update(index, { items: section.items.filter((_, i) => i !== itemIndex) })} className="justify-self-start rounded-lg px-3 py-2 text-xs font-bold text-red-600">Remove element</button></div>)}</div>
            </div>
          </div>
        </section>
      ))}
      <div className="rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50/30 p-5 sm:p-6">
        <div className="mb-4"><h3 className="font-bold text-slate-900">Add a new section</h3><p className="mt-1 text-sm text-slate-500">Choose a section card. You can change its layout later.</p></div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {sectionTemplates.map(template => (
            <button key={template.layout} type="button" onClick={() => addSection(template.layout)} className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-xl font-bold text-brand-700 group-hover:bg-brand-600 group-hover:text-white">{template.icon}</span>
              <span className="mt-3 block text-sm font-bold text-slate-900">+ {template.title}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">{template.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
