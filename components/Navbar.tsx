"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  LayoutGrid,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Programs", href: "#programs" },
  { label: "Support", href: "#support" },
];

const ArrowBox = () => (
  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3DDC97]">
    <ArrowRight className="h-4 w-4 text-[#0A0F0D]" />
  </span>
);

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleNavigation = (label: string) => {
    setActive(label);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-2 z-50 w-full">
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavigation("Home")}
          className="flex shrink-0 items-center gap-1.5"
          aria-label="NEXTRADE home"
        >
          <Image
            src="/brand/logo.svg"
            alt="NEXTRADE logo"
            width={360}
            height={36}
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="ml-6 hidden items-center gap-1 lg:flex bg-white/5 backdrop-blur-2xl p-1 px-2 rounded-2xl"
          aria-label="Main navigation"
        >
          {LINKS.map((link) => {
            const isActive = active === link.label;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavigation(link.label)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex h-9 items-center gap-2 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-[#9AA8A1] hover:bg-white/5 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          
          {/* Login / Register */}
          <Link
            href="#login"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "ml-3 hidden font-medium lg:inline-flex",
            )}
          >
            Login / Register
          </Link>
        </nav>

        <div className="flex-1" />

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            type="button"
            variant="ghost"
            aria-label="Select language"
            className="border border-white/10 bg-white/5 px-3.5 font-normal text-[#C9D3CE]"
          >
            <Globe className="h-4 w-4" />
            English
            <ChevronDown className="!h-3.5 !w-3.5" />
          </Button>

          <Link
            href="#pricing"
            className={cn(
              buttonVariants({ variant: "light" }),
              "gap-3 pl-4 pr-1.5",
            )}
          >
            Start a challenge
            <ArrowBox />
          </Link>

          <Link
            href="#free-trial"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/20 bg-black/40 font-medium",
            )}
          >
            Free trial
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="ml-2 lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X className="!h-6 !w-6" />
          ) : (
            <Menu className="!h-6 !w-6" />
          )}
        </Button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="space-y-1 border-t border-white/10 bg-[#0A0F0D] px-4 py-5 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="space-y-1">
            {LINKS.map((link) => {
              const isActive = active === link.label;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavigation(link.label)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-[#9AA8A1] hover:bg-white/5 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 text-sm",
              )}
            >
              Login / Register
            </Link>

            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                buttonVariants({ variant: "light" }),
                "h-11 gap-3 text-sm",
              )}
            >
              Start a challenge
              <ArrowBox />
            </Link>

            <Link
              href="#free-trial"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 border-white/20 bg-black/40 text-sm",
              )}
            >
              Free trial
            </Link>

            {/* Mobile language selector */}
            <Button
              type="button"
              variant="ghost"
              aria-label="Select language"
              className="h-11 justify-center border border-white/10 bg-white/5 font-normal text-[#C9D3CE]"
            >
              <Globe className="h-4 w-4" />
              English
              <ChevronDown className="!h-3.5 !w-3.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
