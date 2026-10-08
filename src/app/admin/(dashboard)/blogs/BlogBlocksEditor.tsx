"use client";

import { useState } from "react";
import type { BlogBlock } from "@/components/sections/mbrace/blog/blogContent";

type EditableBlock =
  | { kind: "section"; heading: string; lead: string; bullets: string; trailing: string }
  | { kind: "alert"; heading: string; body: string }
  | { kind: "takeaway"; body: string };

function toEditable(block: BlogBlock): EditableBlock {
  if (block.kind === "section") {
    return { kind: "section", heading: block.heading, lead: block.lead ?? "", bullets: (block.bullets ?? []).join("\n"), trailing: block.trailing ?? "" };
  }
  if (block.kind === "alert") return { kind: "alert", heading: block.heading, body: block.body };
  return { kind: "takeaway", body: block.body };
}

function toBlogBlock(block: EditableBlock): BlogBlock {
  if (block.kind === "section") {
    const bullets = block.bullets.split("\n").map(line => line.trim()).filter(Boolean);
    return {
      kind: "section",
      heading: block.heading.trim(),
      lead: block.lead.trim() || undefined,
      bullets: bullets.length ? bullets : undefined,
      trailing: block.trailing.trim() || undefined,
    };
  }
  if (block.kind === "alert") return { kind: "alert", heading: block.heading.trim(), body: block.body.trim() };
  return { kind: "takeaway", body: block.body.trim() };
}

const fieldClass = "mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export default function BlogBlocksEditor({ name, initialBlocks }: { name: string; initialBlocks: BlogBlock[] }) {
  const [blocks, setBlocks] = useState<EditableBlock[]>(() => initialBlocks.map(toEditable));

  function update(index: number, patch: Partial<EditableBlock>) {
    setBlocks(prev => prev.map((block, i) => (i === index ? ({ ...block, ...patch } as EditableBlock) : block)));
  }
  function addBlock(kind: EditableBlock["kind"]) {
    const next: EditableBlock = kind === "section" ? { kind, heading: "", lead: "", bullets: "", trailing: "" } : kind === "alert" ? { kind, heading: "", body: "" } : { kind, body: "" };
    setBlocks(prev => [...prev, next]);
  }
  function removeBlock(index: number) {
    setBlocks(prev => prev.filter((_, i) => i !== index));
  }
  function moveBlock(index: number, direction: -1 | 1) {
    setBlocks(prev => {
      const target = index + direction;
      if (target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  return (
    <div className="grid gap-4">
      <input type="hidden" name={name} value={JSON.stringify(blocks.map(toBlogBlock))} />

      {blocks.map((block, index) => (
        <div key={index} className="grid gap-3 rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {block.kind === "section" ? "Section" : block.kind === "alert" ? "Alert callout" : "Key takeaway"}
            </span>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => moveBlock(index, -1)} disabled={index === 0} className="text-xs font-semibold text-slate-500 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-30">Move up</button>
              <button type="button" onClick={() => moveBlock(index, 1)} disabled={index === blocks.length - 1} className="text-xs font-semibold text-slate-500 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-30">Move down</button>
              <button type="button" onClick={() => removeBlock(index)} className="text-xs font-semibold text-red-600 hover:text-red-700">Remove</button>
            </div>
          </div>

          {(block.kind === "section" || block.kind === "alert") && (
            <label className="block text-sm font-medium text-slate-700">Heading
              <input value={block.heading} onChange={event => update(index, { heading: event.target.value })} className={fieldClass} />
            </label>
          )}

          {block.kind === "section" && (
            <>
              <label className="block text-sm font-medium text-slate-700">Lead paragraph
                <textarea value={block.lead} onChange={event => update(index, { lead: event.target.value })} rows={2} className={fieldClass} />
              </label>
              <label className="block text-sm font-medium text-slate-700">Bullet points (one per line)
                <textarea value={block.bullets} onChange={event => update(index, { bullets: event.target.value })} rows={3} className={fieldClass} />
              </label>
              <label className="block text-sm font-medium text-slate-700">Trailing paragraph
                <textarea value={block.trailing} onChange={event => update(index, { trailing: event.target.value })} rows={2} className={fieldClass} />
              </label>
            </>
          )}

          {(block.kind === "alert" || block.kind === "takeaway") && (
            <label className="block text-sm font-medium text-slate-700">Body
              <textarea value={block.body} onChange={event => update(index, { body: event.target.value })} rows={2} className={fieldClass} />
            </label>
          )}
        </div>
      ))}

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => addBlock("section")} className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200">+ Section</button>
        <button type="button" onClick={() => addBlock("alert")} className="rounded-lg bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-800 hover:bg-amber-200">+ Alert callout</button>
        <button type="button" onClick={() => addBlock("takeaway")} className="rounded-lg bg-purple-100 px-3 py-2 text-xs font-semibold text-purple-800 hover:bg-purple-200">+ Key takeaway</button>
      </div>
    </div>
  );
}
