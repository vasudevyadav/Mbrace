import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, isValidSessionToken } from "@/lib/adminAuth";
import { logoutAction } from "@/app/admin/actions";
import AdminNav from "@/app/admin/AdminNav";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  if (!isValidSessionToken(session)) redirect("/admin/login");

  return (
    <div className="admin-shell min-h-screen flex bg-[#f7f6f9] text-[#30283b] max-[801px]:flex-col [&_input]:[transition:border-color_.2s,_box-shadow_.2s] max-[481px]:[&_input]:text-[16px] [&_select]:[transition:border-color_.2s,_box-shadow_.2s] max-[481px]:[&_select]:text-[16px] [&_textarea]:[transition:border-color_.2s,_box-shadow_.2s] max-[481px]:[&_textarea]:text-[16px] [&_button]:cursor-pointer">
      <aside className="admin-sidebar max-[801px]:w-full max-[801px]:static max-[801px]:h-auto max-[801px]:overflow-visible min-[801px]:max-[1201px]:w-55 min-[1201px]:w-62 shrink-0 bg-[#291e34] text-[#eee7f3] top-0 flex flex-col overflow-y-auto min-[801px]:sticky min-[801px]:h-dvh">
        <Link href="/admin" className="admin-brand flex items-center gap-3 [border-bottom:1px_solid_#ffffff12] max-[801px]:pt-4 max-[801px]:pr-5 max-[801px]:pb-4 max-[801px]:pl-5 min-[801px]:pt-7.5 min-[801px]:pr-6 min-[801px]:pb-7.5 min-[801px]:pl-6 [&_strong]:block [&_strong]:text-white [&_strong]:tracking-[-.5px] max-[801px]:[&_strong]:text-[18px] min-[801px]:[&_strong]:text-[20px] [&_small]:block [&_small]:text-[9px] [&_small]:tracking-[.2em] [&_small]:mt-0.5 [&_small]:text-[#c1accd]">
          <span className="admin-brand-mark grid place-content-center relative [border:1px_solid_#dac0a666] bg-[#f2dfbf] text-[#483253] rounded-[13px] text-[25px] font-semibold max-[801px]:h-9 max-[801px]:w-9 min-[801px]:h-10.5 min-[801px]:w-10.5 [&>span]:absolute [&>span]:top-0.5 [&>span]:right-1.5 [&>span]:text-[20px]">M<span>’</span></span>
          <span><strong>M&rsquo;Brace</strong><small>CONTENT STUDIO</small></span>
        </Link>
        <div className="pt-4 max-[801px]:hidden" />
        <AdminNav />
        <div className="admin-sidebar-bottom mt-auto max-[801px]:pt-0 max-[801px]:pr-0 max-[801px]:pb-0 max-[801px]:pl-0 max-[801px]:absolute max-[801px]:top-[17px] max-[801px]:right-5 max-[801px]:flex max-[801px]:gap-4 min-[801px]:pt-6 min-[801px]:pr-6 min-[801px]:pb-4.5 min-[801px]:pl-6 max-[801px]:[&>a]:hidden">
          <div className="admin-sidebar-note pt-4 pr-0 pb-5.5 pl-0 [border-bottom:1px_solid_#ffffff15] mb-3 max-[801px]:hidden [&_strong]:text-[#e8d5b3] [&_strong]:text-[11px] [&_strong]:font-medium [&_p]:text-[11px] [&_p]:leading-[1.8] [&_p]:mt-2 [&_p]:text-[#b4a3c0]"><strong>Care starts with connection.</strong><p>Keep your patients informed with thoughtful, up-to-date content.</p></div>
          <Link href="/" target="_blank" rel="noreferrer" className="admin-utility-link flex justify-between w-full items-center pt-2.5 pr-0 pb-2.5 pl-0 text-[12px] text-[#c9bdcf] cursor-pointer [&:hover]:text-white">View website <span aria-hidden="true">↗</span></Link>
          <form action={logoutAction}><button type="submit" className="admin-utility-link flex justify-between w-full items-center pt-2.5 pr-0 pb-2.5 pl-0 text-[12px] text-[#c9bdcf] cursor-pointer [&:hover]:text-white">Sign out <span aria-hidden="true">→</span></button></form>
        </div>
      </aside>
      <div className="admin-workspace flex-1 min-w-0 flex flex-col">
        <header className="admin-topbar bg-white [border-bottom:1px_solid_#e9e4ed] flex items-center justify-between gap-5 text-[11px] text-[#777080] max-[801px]:min-h-15 max-[801px]:pt-3.5 max-[801px]:pr-5 max-[801px]:pb-3.5 max-[801px]:pl-5 min-[801px]:min-h-20 min-[801px]:pt-5 min-[801px]:pb-5 min-[801px]:max-[1201px]:pr-6 min-[801px]:max-[1201px]:pl-6 min-[1201px]:pr-10 min-[1201px]:pl-10">
          <div><span className="admin-topbar-label font-medium text-[#514559] max-[801px]:hidden">M’Brace by Kamineni Hospitals</span><span className="admin-topbar-divider mt-0 mr-3.5 mb-0 ml-3.5 text-[#d3cbd9] max-[801px]:hidden">/</span><span>Administration</span></div>
          <span className="admin-account flex gap-2.5 items-center text-[#514559] [&>span]:grid [&>span]:place-content-center [&>span]:w-8 [&>span]:h-8 [&>span]:bg-[#f1ebf6] [&>span]:text-[#74518f] [&>span]:rounded-[50%] [&>span]:font-semibold"><span aria-hidden="true">A</span>Administrator</span>
        </header>
        <div className="admin-content w-full max-w-350 mt-0 mr-auto mb-0 ml-auto flex-1 max-[801px]:pt-7 max-[801px]:pr-5 max-[801px]:pb-7 max-[801px]:pl-5 min-[801px]:max-[1201px]:pt-8 min-[801px]:max-[1201px]:pr-6 min-[801px]:max-[1201px]:pb-8 min-[801px]:max-[1201px]:pl-6 min-[1201px]:pt-10.5 min-[1201px]:pr-10 min-[1201px]:pb-10.5 min-[1201px]:pl-10">{children}</div>
        <footer className="admin-workspace-footer pt-5 pb-5 [border-top:1px_solid_#e9e4ed] flex justify-between gap-4 text-[10px] text-[#817789] max-[801px]:pr-5 max-[801px]:pl-5 max-[801px]:flex-wrap min-[801px]:pr-10 min-[801px]:pl-10">M’Brace Content Studio <span>Women’s care · Child care · Fertility</span></footer>
      </div>
    </div>
  );
}
