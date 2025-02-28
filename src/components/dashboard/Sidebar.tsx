import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  AlertTriangle,
  FileText,
  Shield,
  Code,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface SidebarProps {
  className?: string;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem = ({ icon, label, href, active = false }: NavItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={href} className="w-full">
            <Button
              variant={active ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 mb-1",
                active ? "bg-secondary" : "hover:bg-secondary/50",
              )}
            >
              {icon}
              <span>{label}</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = ({ className = "" }: SidebarProps) => {
  // In a real app, you would determine the active route from router
  const activePath = "/fraud-detection";

  return (
    <div
      className={cn(
        "h-full w-[280px] bg-background border-r p-4 flex flex-col justify-between",
        className,
      )}
    >
      <div>
        <div className="flex items-center gap-2 px-2 mb-8">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">FraudGuard</h1>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xs uppercase text-muted-foreground font-semibold mb-2 px-4">
              Chính
            </h2>
            <nav className="space-y-1">
              <NavItem
                icon={<Home size={20} />}
                label="Trang chủ"
                href="/dashboard"
                active={activePath === "/dashboard"}
              />
              <NavItem
                icon={<BarChart3 size={20} />}
                label="Phân tích"
                href="/analytics"
                active={activePath === "/analytics"}
              />
              <NavItem
                icon={<AlertTriangle size={20} />}
                label="Phát hiện gian lận"
                href="/fraud-detection"
                active={activePath === "/fraud-detection"}
              />
            </nav>
          </div>

          <div>
            <h2 className="text-xs uppercase text-muted-foreground font-semibold mb-2 px-4">
              Quản lý
            </h2>
            <nav className="space-y-1">
              <NavItem
                icon={<FileText size={20} />}
                label="Báo cáo"
                href="/reports"
                active={activePath === "/reports"}
              />
              <NavItem
                icon={<Shield size={20} />}
                label="Bảng quản trị"
                href="/admin"
                active={activePath === "/admin"}
              />
              <NavItem
                icon={<Code size={20} />}
                label="Tích hợp khách hàng"
                href="/integration"
                active={activePath === "/integration"}
              />
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-4">
        <NavItem
          icon={<Settings size={20} />}
          label="Cài đặt"
          href="/settings"
          active={activePath === "/settings"}
        />
        <Button variant="outline" className="w-full justify-start gap-3">
          <LogOut size={20} />
          <span>Đăng xuất</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
