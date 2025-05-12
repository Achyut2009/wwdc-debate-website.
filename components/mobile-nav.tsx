"use client";

import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { HoveredLink, MenuItem, MobileMenu, ProductItem } from "./navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Contact from "./contact";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

const MobileNav = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="relative z-50 h-5 w-5" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader></SheetHeader>
        <div className="space-y-4 py-4 flex flex-col h-full dark:bg-black dark:text-white">
          <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className="flex items-center pl-3 mb-8">
              <span className="flex items-center space-x-2 text-2xl text-emerald-700 dark:text-zinc-100">
                <span>
                  <Image
                    src="https://cdn.aayus.me/uploads/dpsmisdebatclub.png"
                    alt="N"
                    width="24"
                    height="24"
                    className="w-6"
                  />
                </span>
                <span className="font-bold">WWDC</span>
              </span>
            </Link>
            <div className="space-y-1">
              <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-zinc-900 hover:bg-white/10 text-zinc-900 dark:text-zinc-300 rounded-lg transition items-center flex-1">
                <>
                  <div className="space-x-1 flex items-center justify-center">
                    <Link
                      href="https://aayus.me/wwdc_insta"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <FaInstagram className="h-4 w-4" />
                    </Link>

                    <Link
                      href="https://aayus.me/wwdc_fb"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <FaFacebook className="h-4 w-4" />
                    </Link>
                    <ThemeToggle />
                    <Contact />
                  </div>
                </>
              </div>
              <Link
                href={"/about"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">About Us</span>
                </div>
              </Link>
              <Link
                href={"/about/org"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">Organising Committee</span>
                </div>
              </Link>
              <Link
                href={"/guidelines"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">Guidelines</span>
                </div>
              </Link>
              <Link
                href={"/references/briefings"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">Resources</span>
                </div>
              </Link>
              <Link
                href={"/references/samples"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">Sample Debates</span>
                </div>
              </Link>
              <Link
                href={"/references"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">Other References</span>
                </div>
              </Link>
              <Link
                href={"/2023/tournament"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">WWDC 2023</span>
                </div>
              </Link>
              <Link
                href={"/2022/tournament"}
                className={
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 rounded-lg transition"
                }
              >
                <div className="flex justify-between items-center flex-1">
                  <span className="flex">WWDC 2022</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
