import { cn } from "@/lib/utils";
import { SideBarItem } from "./components/sidebar-item";
import { useAuth } from "@/store";
import { Beef, Bell, Cookie } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Sidebar({ className, children }: SidebarProps) {
  const { logout } = useAuth();
  const navigation = useNavigate();
  const location = useLocation().pathname;
  const checkPathName = (pathStartsWith: string) => {
    if (location.startsWith(pathStartsWith)) return "secondary";
    return "ghost";
  };
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className={cn("pb-11 bg-background", className)}>
        <div className="space-y-4 py-4 fixed w-1/5 top-0 h-screen flex flex-col border-l-4">
          <div className="flex-1">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-sm md:text-lg font-semibold tracking-tight">
                الرئيسية
              </h2>
              <div className="space-y-1">
                <SideBarItem
                  title="كل المنتجات"
                  variant={checkPathName("/home")}
                  icon={<Beef className="shrink-0" />}
                  onClick={() => navigation("/home")}
                />
                <SideBarItem
                  title="الطلبات"
                  icon={<Cookie className="shrink-0" />}
                  variant={checkPathName("/orders")}
                  onClick={() => navigation("/orders")}
                />
                <SideBarItem
                  title="الاشعارات"
                  icon={<Bell className="shrink-0" />}
                  variant={checkPathName("/notifications")}
                  onClick={() => navigation("/notifications")}
                />
              </div>
            </div>
          </div>
          <div className="py-2 flex flex-col items-end">
            <div className="w-full flex justify-start gap-2 items-center py-2 px-3">
              <ModeToggle />
              <p className="text-xs md:text-sm font-semibold">
                وضع الظهور
              </p>
            </div>
            <SideBarItem
              onClick={logout}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-5 w-5 shrink-0"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
              }
              title="تسجيل الخروج"
              variant="ghost"
            />
          </div>
        </div>
      </div>
      <div className="col-span-4 lg:border-l p-6">{children}</div>
    </div>
  );
}
