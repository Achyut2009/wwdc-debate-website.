"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight, Feather, Info } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar";
import { Suspense, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "./theme-toggle";
import Contact from "./contact";
import MobileNav from "./mobile-nav";
import { toast } from "sonner";

const LandingNavbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
 
  if (!mounted) return null;
  return (
    <nav className="sticky h-[4rem] flex items-center inset-x-0 top-0 z-30 w-full bg-transparent backdrop-blur-lg transition-all">
      <div className="container">
        <div className="grid grid-cols-2 min-[970px]:grid-cols-3 h-14 items-center">
          <Link
            href="/"
            className="left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight"
          >
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
              <span className="">WWDC</span>
            </span>
          </Link>
          <div className="hidden min-[970px]:block">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Information">
                <div className="flex flex-col space-y-0.5 text-sm">
                  <div className="hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-md p-2 transition-all">
                    <HoveredLink href="/about">
                      About us
                    </HoveredLink>
                  </div>
                  <div className="hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-md p-2 transition-all">
                    <HoveredLink href="/about/org">
                      Organising Committee
                    </HoveredLink>
                  </div>
                  <div className="hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-md p-2 transition-all">
                    <HoveredLink href="/motions">
                      Motions
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Past Editions"
              >
                <Tabs defaultValue="2024" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger className="w-1/3" value="2024">
                      2024
                    </TabsTrigger>
                    <TabsTrigger className="w-1/3" value="2023">
                      2023
                    </TabsTrigger>
                    <TabsTrigger className="w-1/3" value="2022">
                      2022
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="2024">
                    <div className="text-sm grid grid-cols-2 gap-5 p-2">
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Tournament"
                          href="/2024/tournament"
                          description="The 2024 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Motions"
                          href="/2024/motions"
                          description="The motions for the 2024 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Organising Committee"
                          href="/2024/org"
                          description="The Organising Committee for the 2024 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Core Organising Committee"
                          href="/2024/org/core"
                          description="The Core Organising Committee for the 2024 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="2023">
                    <div className="text-sm grid grid-cols-2 gap-5 p-2">
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Tournament"
                          href="/2023/tournament"
                          description="The 2023 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Motions"
                          href="/2023/motions"
                          description="The motions for the 2023 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Organising Committee"
                          href="/2023/org"
                          description="The Organising Committee for the 2023 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Core Organising Committee"
                          href="/2023/org/core"
                          description="The Core Organising Committee for the 2023 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="2022">
                    <div className="text-sm grid grid-cols-2 gap-5 p-2">
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Tournament"
                          href="/2022/tournament"
                          description="The 2022 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Motions"
                          href="/2022/motions"
                          description="The motions for the 2022 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Organising Committee"
                          href="/2022/org"
                          description="The Organising Committee for the 2022 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                      <div className="hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md p-4 transition-all">
                        <ProductItem
                          title="Core Organising Committee"
                          href="/2022/org/core"
                          description="The Core Organising Committee for the 2022 edition of the War of the Words Debate Tournament."
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="References">
                <div className="flex flex-col space-y-0.5 text-sm">
                  <div className="hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-md p-2 transition-all">
                    <HoveredLink href="/references/briefings">
                      Resources
                    </HoveredLink>
                  </div>
                  <div className="hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-md p-2 transition-all">
                    <HoveredLink href="/references/samples">
                      Sample Debates
                    </HoveredLink>
                  </div>
                  <div className="hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-md p-2 transition-all">
                    <HoveredLink href="/references">
                      Other References
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>
            </Menu>
          </div>

          <div className="hidden min-[970px]:flex justify-end items-center space-x-4">
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
            </div>
            <Contact />
          </div>
          <div className="min-[970px]:hidden ml-auto">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
