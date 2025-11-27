import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/", label: "Главная", icon: "Home" },
  { path: "/tables", label: "Таблицы", icon: "Table" },
  { path: "/analytics", label: "Аналитика", icon: "LineChart" },
  { path: "/dashboard", label: "Дашборд", icon: "LayoutDashboard" },
];

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <Icon name="Database" size={24} className="text-white" />
              </div>
              <h1 className="text-xl font-heading font-bold text-foreground hidden sm:block">
                DataHub
              </h1>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon name={item.icon as any} size={18} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Icon name="Bell" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Icon name="Settings" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background">
            <nav className="container px-6 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon name={item.icon as any} size={20} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-border/40 mt-3 space-y-1">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
                  <Icon name="Bell" size={20} />
                  <span>Уведомления</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
                  <Icon name="Settings" size={20} />
                  <span>Настройки</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;