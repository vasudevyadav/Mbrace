# M’Brace — Home Page 2

Next.js homepage implementation of the **Mbrace Home Page 2** frame in the supplied Figma file (node `118:45`). The existing project, npm scripts, and App Router are retained.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run build`, `npm run lint`, and `npm run typecheck` validate the project.

## Homepage

- `src/components/sections/MbraceHome.tsx`: homepage composition and shared booking, location and navigation state.
- `src/components/sections/mbrace/`: separate components for Hero, Booking Shortcuts, About, Services, Excellence, Why Choose Us, Doctors, Awards, Testimonials, FAQ, Locations, Blogs, Appointment, Footer and Details Dialog. Shared Photo, Heading and Counter helpers live alongside them.
- FAQ and testimonial state belongs to their section components; booking state stays shared so doctor, hero and footer actions can prefill the appointment form.
- `src/lib/mbrace-home.ts`: Figma copy, doctors, categories, FAQs and contact details.
- Homepage, navigation and admin components declare Tailwind classes directly in their JSX `className` attributes.
- `src/app/globals.css`: Tailwind v4 entry point, shared theme tokens and accessibility defaults.
- `public/images/figma`: original images and booking icons extracted from the supplied Figma export. Raster assets are compressed WebP files.
- `public/og.png`: generated social-sharing artwork; homepage photos and logos use original Figma assets.

The section order is hero, booking shortcuts, about, services, centres of excellence, trust statistics, team, awards, testimonials, FAQs, locations, blogs, appointment and footer.

## Booking

Set `NEXT_PUBLIC_LEAD_WEBHOOK_URL` in `.env.local` to the approved appointment endpoint before accepting online requests. The endpoint must accept JSON and allow the deployed origin through CORS. The form uses native field validation and only reports success after an HTTP success response. With no endpoint, it clearly reports that nothing was sent and offers the hospital's phone number. Doctor buttons and the hero controls prefill the main appointment form. The footer email control continues to that form with the email prefilled.

Set `NEXT_PUBLIC_SITE_URL` to the production origin for canonical social-image URLs and sitemap entries. No dental domain is used as a fallback.

## Design/content notes

The reference contains a single visible service and FAQ category state. Other tabs use the service labels and care scope present elsewhere in the same frame, with supplementary short FAQ answers. The supplied women's service descriptions and awards descriptions contain apparent copy mismatches; the visible source wording is retained for review. Duplicate, truncated testimonial paragraphs are omitted.

The frame provides blog cards, not full articles or article URLs. Cards open accessible topic previews with a consultation action. It supplies the LB Nagar address but no King Koti street address; King Koti links open a location-specific map search instead of inventing an address.

The original dental section components and detail routes remain in source for reference; the homepage no longer renders them or includes them in its sitemap.

## Styling

All page and component styles use Tailwind CSS v4 classes directly in JSX `className` attributes, including responsive variants and conditional states. There are no separate style-map files or component stylesheets. The `mb-*` and `admin-*` markers only support Tailwind descendant selectors; they do not load styles from another file.

Use `src/app/globals.css` for shared theme tokens, accessibility defaults and any future global additions. Homepage colors use `care-*` tokens and the admin uses the `brand-*` palette. The testimonial carousel retains one runtime CSS variable for its responsive card count.

## Hosting

The current homepage reads from Prisma, and the admin uses authenticated server actions. Deploy with a server runtime and persistent database/uploads. The existing Sites static-export configuration predates the admin and cannot host the current application without a server-storage migration.
