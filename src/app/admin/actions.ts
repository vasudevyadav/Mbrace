"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { ADMIN_COOKIE_NAME, ADMIN_COOKIE_MAX_AGE, checkAdminPassword, createSessionToken, isValidSessionToken } from "@/lib/adminAuth";
import { resolveImagePath } from "@/lib/upload";
import { slugify } from "@/lib/slugify";

function str(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}
function num(formData: FormData, key: string) {
  return Number(formData.get(key) ?? 0);
}
function bool(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

async function requireAdminSession() {
  const jar = await cookies();
  if (!isValidSessionToken(jar.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/login");
  }
}

export async function loginAction(formData: FormData) {
  const password = str(formData, "password");
  const requestedNext = str(formData, "next");
  const next = /^\/admin(?:\/[a-zA-Z0-9_-]+)*$/.test(requestedNext) ? requestedNext : "/admin";
  if (!checkAdminPassword(password)) {
    redirect(`/admin/login?error=1&next=${encodeURIComponent(next)}`);
  }
  const jar = await cookies();
  jar.set(ADMIN_COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ADMIN_COOKIE_MAX_AGE,
    path: "/",
  });
  redirect(next);
}

export async function logoutAction() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE_NAME);
  redirect("/admin/login");
}

function refreshSite() {
  revalidatePath("/");
}

// --- Site settings (common — contact & social, shared across every page) ---
export async function updateSettingsAction(formData: FormData) {
  await requireAdminSession();
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      phone: str(formData, "phone"),
      phoneHref: str(formData, "phoneHref"),
      email: str(formData, "email"),
      lbNagarAddress: str(formData, "lbNagarAddress"),
      kingKotiAddress: str(formData, "kingKotiAddress"),
      instagramUrl: str(formData, "instagramUrl"),
      facebookUrl: str(formData, "facebookUrl"),
      linkedinUrl: str(formData, "linkedinUrl"),
      youtubeUrl: str(formData, "youtubeUrl"),
    },
    update: {
      phone: str(formData, "phone"),
      phoneHref: str(formData, "phoneHref"),
      email: str(formData, "email"),
      lbNagarAddress: str(formData, "lbNagarAddress"),
      kingKotiAddress: str(formData, "kingKotiAddress"),
      instagramUrl: str(formData, "instagramUrl"),
      facebookUrl: str(formData, "facebookUrl"),
      linkedinUrl: str(formData, "linkedinUrl"),
      youtubeUrl: str(formData, "youtubeUrl"),
    },
  });

  refreshSite();
  revalidatePath("/admin/settings");
  redirect("/admin/settings?saved=1");
}

// --- Hero content (Home page only) ---
export async function updateHeroAction(formData: FormData) {
  await requireAdminSession();
  await prisma.heroContent.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      badgePrefix: str(formData, "badgePrefix"),
      headingPlain: str(formData, "headingPlain"),
      headingHighlight: str(formData, "headingHighlight"),
      subheading: str(formData, "subheading"),
      description: str(formData, "description"),
    },
    update: {
      badgePrefix: str(formData, "badgePrefix"),
      headingPlain: str(formData, "headingPlain"),
      headingHighlight: str(formData, "headingHighlight"),
      subheading: str(formData, "subheading"),
      description: str(formData, "description"),
    },
  });

  refreshSite();
  revalidatePath("/admin/hero");
  redirect("/admin/hero?saved=1");
}

// --- Stats ---
export async function updateStatAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.stat.update({
    where: { id },
    data: { value: str(formData, "value"), label: str(formData, "label") },
  });
  refreshSite();
  revalidatePath("/admin/stats");
  redirect("/admin/stats?saved=1");
}

// --- Doctors ---
async function uniqueDoctorSlug(name: string, requestedSlug: string, excludeId?: number) {
  const base = slugify(requestedSlug || name) || "doctor";
  let slug = base;
  let suffix = 2;
  while (await prisma.doctor.findFirst({ where: { slug, id: excludeId ? { not: excludeId } : undefined } })) {
    slug = `${base}-${suffix++}`;
  }
  return slug;
}

function refreshDoctors(slug?: string) {
  refreshSite();
  revalidatePath("/doctors");
  if (slug) revalidatePath(`/doctors/${slug}`);
}

export async function createDoctorAction(formData: FormData) {
  await requireAdminSession();
  const image = await resolveImagePath(formData, "imageFile", "currentImage");
  if (!image) throw new Error("A photo is required.");
  const name = str(formData, "name");
  const slug = await uniqueDoctorSlug(name, str(formData, "slug"));
  await prisma.doctor.create({
    data: {
      slug,
      name,
      qualifications: str(formData, "qualifications"),
      role: str(formData, "role"),
      image,
      yearsExperience: str(formData, "yearsExperience"),
      languages: str(formData, "languages"),
      location: str(formData, "location"),
      isFeatured: bool(formData, "isFeatured"),
      order: num(formData, "order"),
      designation: str(formData, "designation"),
      bio: str(formData, "bio"),
      timing: str(formData, "timing"),
      phone: str(formData, "phone"),
      email: str(formData, "email"),
      fullAddress: str(formData, "fullAddress"),
    },
  });
  refreshDoctors(slug);
  redirect("/admin/doctors");
}

export async function updateDoctorAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const image = await resolveImagePath(formData, "imageFile", "currentImage");
  const name = str(formData, "name");
  const slug = await uniqueDoctorSlug(name, str(formData, "slug"), id);
  await prisma.doctor.update({
    where: { id },
    data: {
      slug,
      name,
      qualifications: str(formData, "qualifications"),
      role: str(formData, "role"),
      image,
      yearsExperience: str(formData, "yearsExperience"),
      languages: str(formData, "languages"),
      location: str(formData, "location"),
      isFeatured: bool(formData, "isFeatured"),
      order: num(formData, "order"),
      designation: str(formData, "designation"),
      bio: str(formData, "bio"),
      timing: str(formData, "timing"),
      phone: str(formData, "phone"),
      email: str(formData, "email"),
      fullAddress: str(formData, "fullAddress"),
    },
  });
  refreshDoctors(slug);
  redirect("/admin/doctors");
}

export async function deleteDoctorAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.doctor.delete({ where: { id } });
  refreshDoctors();
  redirect("/admin/doctors");
}

// --- Doctor tips ("Doctors Talk" cards on the Doctors page) ---
export async function createDoctorTipAction(formData: FormData) {
  await requireAdminSession();
  const image = await resolveImagePath(formData, "imageFile", "currentImage");
  if (!image) throw new Error("A photo is required.");
  await prisma.doctorTip.create({
    data: {
      title: str(formData, "title"),
      doctorName: str(formData, "doctorName"),
      image,
      videoUrl: str(formData, "videoUrl"),
      order: num(formData, "order"),
    },
  });
  refreshDoctors();
  redirect("/admin/doctor-tips");
}

export async function updateDoctorTipAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const image = await resolveImagePath(formData, "imageFile", "currentImage");
  await prisma.doctorTip.update({
    where: { id },
    data: {
      title: str(formData, "title"),
      doctorName: str(formData, "doctorName"),
      image,
      videoUrl: str(formData, "videoUrl"),
      order: num(formData, "order"),
    },
  });
  refreshDoctors();
  redirect("/admin/doctor-tips");
}

export async function deleteDoctorTipAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.doctorTip.delete({ where: { id } });
  refreshDoctors();
  redirect("/admin/doctor-tips");
}

// --- Services ---
async function uniqueServiceSlug(name: string, requestedSlug: string, excludeId?: number) {
  const base = slugify(requestedSlug || name) || "service";
  let slug = base;
  let suffix = 2;
  while (await prisma.serviceItem.findFirst({ where: { slug, id: excludeId ? { not: excludeId } : undefined } })) {
    slug = `${base}-${suffix++}`;
  }
  return slug;
}

function refreshServices(slug?: string) {
  refreshSite();
  revalidatePath("/services");
  if (slug) revalidatePath(`/services/${slug}`);
}

export async function createServiceItemAction(formData: FormData) {
  await requireAdminSession();
  const name = str(formData, "name");
  const slug = await uniqueServiceSlug(name, str(formData, "slug"));
  const heroImage = await resolveImagePath(formData, "imageFile", "currentImage");
  await prisma.serviceItem.create({
    data: {
      categoryId: num(formData, "categoryId"),
      slug,
      name,
      description: str(formData, "description"),
      detail: str(formData, "detail"),
      heroImage: heroImage ?? "",
      order: num(formData, "order"),
    },
  });
  refreshServices(slug);
  redirect(`/admin/services?category=${num(formData, "categoryId")}`);
}

export async function updateServiceItemAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const name = str(formData, "name");
  const slug = await uniqueServiceSlug(name, str(formData, "slug"), id);
  const heroImage = await resolveImagePath(formData, "imageFile", "currentImage");
  await prisma.serviceItem.update({
    where: { id },
    data: {
      slug,
      name,
      description: str(formData, "description"),
      detail: str(formData, "detail"),
      heroImage: heroImage ?? "",
      order: num(formData, "order"),
    },
  });
  refreshServices(slug);
  redirect(`/admin/services?category=${num(formData, "categoryId")}`);
}

export async function deleteServiceItemAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const categoryId = num(formData, "categoryId");
  await prisma.serviceItem.delete({ where: { id } });
  refreshServices();
  redirect(`/admin/services?category=${categoryId}`);
}

// --- FAQs ---
export async function createFaqAction(formData: FormData) {
  await requireAdminSession();
  const categoryKey = str(formData, "categoryKey");
  await prisma.faqItem.create({
    data: {
      categoryKey,
      question: str(formData, "question"),
      answer: str(formData, "answer"),
      order: num(formData, "order"),
    },
  });
  refreshSite();
  redirect(`/admin/faqs?category=${encodeURIComponent(categoryKey)}`);
}

export async function updateFaqAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const categoryKey = str(formData, "categoryKey");
  await prisma.faqItem.update({
    where: { id },
    data: { question: str(formData, "question"), answer: str(formData, "answer"), order: num(formData, "order") },
  });
  refreshSite();
  redirect(`/admin/faqs?category=${encodeURIComponent(categoryKey)}`);
}

export async function deleteFaqAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const categoryKey = str(formData, "categoryKey");
  await prisma.faqItem.delete({ where: { id } });
  refreshSite();
  redirect(`/admin/faqs?category=${encodeURIComponent(categoryKey)}`);
}

// --- Testimonials ---
export async function createTestimonialAction(formData: FormData) {
  await requireAdminSession();
  await prisma.testimonial.create({
    data: { name: str(formData, "name"), quote: str(formData, "quote"), order: num(formData, "order") },
  });
  refreshSite();
  redirect("/admin/testimonials");
}

export async function updateTestimonialAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.testimonial.update({
    where: { id },
    data: { name: str(formData, "name"), quote: str(formData, "quote"), order: num(formData, "order") },
  });
  refreshSite();
  redirect("/admin/testimonials");
}

export async function deleteTestimonialAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.testimonial.delete({ where: { id } });
  refreshSite();
  redirect("/admin/testimonials");
}

// --- Blogs ---
export async function createBlogAction(formData: FormData) {
  await requireAdminSession();
  const image = await resolveImagePath(formData, "imageFile", "currentImage");
  if (!image) throw new Error("A cover photo is required.");
  await prisma.blog.create({
    data: {
      title: str(formData, "title"),
      date: str(formData, "date"),
      image,
      order: num(formData, "order"),
    },
  });
  refreshSite();
  redirect("/admin/blogs");
}

export async function updateBlogAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const image = await resolveImagePath(formData, "imageFile", "currentImage");
  await prisma.blog.update({
    where: { id },
    data: {
      title: str(formData, "title"),
      date: str(formData, "date"),
      image,
      order: num(formData, "order"),
    },
  });
  refreshSite();
  redirect("/admin/blogs");
}

export async function deleteBlogAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.blog.delete({ where: { id } });
  refreshSite();
  redirect("/admin/blogs");
}

// --- Locations (/locations/[slug]) ---
async function uniqueLocationSlug(name: string, requestedSlug: string, excludeId?: number) {
  const base = slugify(requestedSlug || name) || "location";
  let slug = base;
  let suffix = 2;
  while (await prisma.location.findFirst({ where: { slug, id: excludeId ? { not: excludeId } : undefined } })) {
    slug = `${base}-${suffix++}`;
  }
  return slug;
}

function refreshLocations(slug?: string) {
  refreshSite();
  if (slug) revalidatePath(`/locations/${slug}`);
}

export async function createLocationAction(formData: FormData) {
  await requireAdminSession();
  const name = str(formData, "name");
  const slug = await uniqueLocationSlug(name, str(formData, "slug"));
  const heroImage = await resolveImagePath(formData, "heroImageFile", "heroCurrentImage");
  const servicesImage = await resolveImagePath(formData, "servicesImageFile", "servicesCurrentImage");
  const clinicImage = await resolveImagePath(formData, "clinicImageFile", "clinicCurrentImage");
  const location = await prisma.location.create({
    data: {
      slug,
      name,
      address: str(formData, "address"),
      phone: str(formData, "phone"),
      phoneHref: str(formData, "phoneHref"),
      email: str(formData, "email"),
      mapUrl: str(formData, "mapUrl"),
      heroImage,
      servicesImage,
      clinicImage,
      introParagraph: str(formData, "introParagraph"),
      whatToExpectIntro: str(formData, "whatToExpectIntro"),
      carePromiseIntro: str(formData, "carePromiseIntro"),
      whyChooseIntro: str(formData, "whyChooseIntro"),
      reachIntro: str(formData, "reachIntro"),
      order: num(formData, "order"),
    },
  });
  refreshLocations(slug);
  redirect(`/admin/locations/${location.id}`);
}

export async function updateLocationAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const name = str(formData, "name");
  const slug = await uniqueLocationSlug(name, str(formData, "slug"), id);
  const heroImage = await resolveImagePath(formData, "heroImageFile", "heroCurrentImage");
  const servicesImage = await resolveImagePath(formData, "servicesImageFile", "servicesCurrentImage");
  const clinicImage = await resolveImagePath(formData, "clinicImageFile", "clinicCurrentImage");
  await prisma.location.update({
    where: { id },
    data: {
      slug,
      name,
      address: str(formData, "address"),
      phone: str(formData, "phone"),
      phoneHref: str(formData, "phoneHref"),
      email: str(formData, "email"),
      mapUrl: str(formData, "mapUrl"),
      heroImage,
      servicesImage,
      clinicImage,
      introParagraph: str(formData, "introParagraph"),
      whatToExpectIntro: str(formData, "whatToExpectIntro"),
      carePromiseIntro: str(formData, "carePromiseIntro"),
      whyChooseIntro: str(formData, "whyChooseIntro"),
      reachIntro: str(formData, "reachIntro"),
      order: num(formData, "order"),
    },
  });
  refreshLocations(slug);
  redirect(`/admin/locations/${id}`);
}

export async function deleteLocationAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.location.delete({ where: { id } });
  refreshLocations();
  redirect("/admin/locations");
}

export async function createLocationHighlightAction(formData: FormData) {
  await requireAdminSession();
  const locationId = num(formData, "locationId");
  const section = str(formData, "section");
  await prisma.locationHighlight.create({
    data: {
      locationId,
      section,
      title: str(formData, "title"),
      description: str(formData, "description"),
      order: num(formData, "order"),
    },
  });
  refreshSite();
  const location = await prisma.location.findUnique({ where: { id: locationId } });
  if (location) revalidatePath(`/locations/${location.slug}`);
  redirect(`/admin/locations/${locationId}?section=${section}`);
}

export async function updateLocationHighlightAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const locationId = num(formData, "locationId");
  const section = str(formData, "section");
  await prisma.locationHighlight.update({
    where: { id },
    data: {
      title: str(formData, "title"),
      description: str(formData, "description"),
      order: num(formData, "order"),
    },
  });
  refreshSite();
  const location = await prisma.location.findUnique({ where: { id: locationId } });
  if (location) revalidatePath(`/locations/${location.slug}`);
  redirect(`/admin/locations/${locationId}?section=${section}`);
}

export async function deleteLocationHighlightAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  const locationId = num(formData, "locationId");
  const section = str(formData, "section");
  await prisma.locationHighlight.delete({ where: { id } });
  refreshSite();
  redirect(`/admin/locations/${locationId}?section=${section}`);
}

// --- Appointment leads (common — submitted from any page) ---
export async function updateAppointmentStatusAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.appointmentRequest.update({
    where: { id },
    data: { status: str(formData, "status") },
  });
  revalidatePath("/admin/appointments");
  redirect("/admin/appointments");
}

export async function deleteAppointmentAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.appointmentRequest.delete({ where: { id } });
  revalidatePath("/admin/appointments");
  redirect("/admin/appointments");
}

// --- Newsletter subscribers (common — submitted from the footer on any page) ---
export async function deleteSubscriberAction(formData: FormData) {
  await requireAdminSession();
  const id = num(formData, "id");
  await prisma.subscriber.delete({ where: { id } });
  revalidatePath("/admin/subscribers");
  redirect("/admin/subscribers");
}
