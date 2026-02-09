/* Design: Terminal Brutalism Mobile - Responsive sidebar with hamburger menu */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Terminal, ChevronRight, Menu, X, Home } from "lucide-react";

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Einführung",
    path: "/einfuehrung",
  },
  {
    title: "Fundamentale Bausteine",
    path: "#fundamentals",
    children: [
      { title: "Linux-Grundlagen", path: "/linux" },
      { title: "Git & Versionskontrolle", path: "/git" },
      { title: "Netzwerk-Grundlagen", path: "/netzwerk" },
      { title: "Scripting (Bash & Python)", path: "/scripting" },
    ],
  },
  {
    title: "Kernbereiche",
    path: "#core",
    children: [
      { title: "CI/CD", path: "/cicd" },
      { title: "Docker & Container", path: "/docker" },
      { title: "Kubernetes", path: "/kubernetes" },
      { title: "Infrastructure as Code", path: "/iac" },
      { title: "Cloud-Plattformen", path: "/cloud" },
      { title: "Monitoring & Logging", path: "/monitoring" },
    ],
  },
  {
    title: "Praktische Projekte",
    path: "/projekte",
  },
  {
    title: "Ressourcen",
    path: "/ressourcen",
  },
];

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-sidebar border-b-2 border-sidebar-border z-40 flex items-center justify-between px-4 lg:hidden">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Terminal className="w-6 h-6 text-sidebar-primary" />
            <div>
              <h1 className="text-sm font-bold text-sidebar-primary">DevOps</h1>
            </div>
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-sidebar-accent/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-sidebar-primary" />
          ) : (
            <Menu className="w-6 h-6 text-sidebar-primary" />
          )}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-72 lg:bg-sidebar lg:border-r-2 lg:border-sidebar-border lg:overflow-y-auto lg:block">
        <div className="p-6 border-b-2 border-sidebar-border">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <Terminal className="w-8 h-8 text-sidebar-primary" />
              <div>
                <h1 className="text-lg font-bold text-sidebar-primary">DevOps</h1>
                <p className="text-xs text-sidebar-foreground/60">Lernplattform</p>
              </div>
            </div>
          </Link>
        </div>

        <nav className="p-4">
          {navItems.map((item, index) => (
            <div key={index} className="mb-2">
              {item.children ? (
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 px-3 py-1">
                    {item.title}
                  </div>
                  {item.children.map((child, childIndex) => (
                    <NavLink
                      key={childIndex}
                      item={child}
                      isActive={location === child.path}
                      isChild
                    />
                  ))}
                </div>
              ) : (
                <NavLink item={item} isActive={location === item.path} />
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t-2 border-sidebar-border mt-8">
          <div className="ascii-divider text-center">━━━━━━━━━━━━━━━━━━━━━━</div>
          <p className="text-xs text-center text-muted-foreground mt-2">v1.0.0 | 2026</p>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed left-0 top-16 bottom-0 w-64 bg-sidebar border-r-2 border-sidebar-border overflow-y-auto z-30 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          {navItems.map((item, index) => (
            <div key={index} className="mb-2">
              {item.children ? (
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 px-3 py-1">
                    {item.title}
                  </div>
                  {item.children.map((child, childIndex) => (
                    <MobileNavLink
                      key={childIndex}
                      item={child}
                      isActive={location === child.path}
                      isChild
                      onNavigate={closeMenu}
                    />
                  ))}
                </div>
              ) : (
                <MobileNavLink
                  item={item}
                  isActive={location === item.path}
                  onNavigate={closeMenu}
                />
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  isChild?: boolean;
}

function NavLink({ item, isActive, isChild = false }: NavLinkProps) {
  return (
    <Link href={item.path}>
      <div
        className={`
          flex items-center gap-2 px-3 py-2 mb-1 transition-all cursor-pointer
          ${isChild ? "pl-6 text-sm" : "text-base"}
          ${
            isActive
              ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-2 border-sidebar-primary"
              : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          }
        `}
      >
        {isActive && <ChevronRight className="w-4 h-4 text-sidebar-primary" />}
        {!isActive && isChild && (
          <span className="text-muted-foreground">└─</span>
        )}
        <span className="font-mono">{item.title}</span>
      </div>
    </Link>
  );
}

interface MobileNavLinkProps extends NavLinkProps {
  onNavigate: () => void;
}

function MobileNavLink({ item, isActive, isChild = false, onNavigate }: MobileNavLinkProps) {
  return (
    <Link href={item.path}>
      <div
        onClick={onNavigate}
        className={`
          flex items-center gap-2 px-3 py-2 mb-1 transition-all cursor-pointer
          ${isChild ? "pl-6 text-sm" : "text-base"}
          ${
            isActive
              ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-2 border-sidebar-primary"
              : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          }
        `}
      >
        {isActive && <ChevronRight className="w-4 h-4 text-sidebar-primary" />}
        {!isActive && isChild && (
          <span className="text-muted-foreground">└─</span>
        )}
        <span className="font-mono">{item.title}</span>
      </div>
    </Link>
  );
}
