/*
 * @Author:Claire Li
 * @Date:2024-08-05 18:52:59
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-06 15:46:26
 * @Description:
 */
import SideNav from "@/app/ui/dashboard/sidenav";
export const experimental_ppr = true;

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  )
}