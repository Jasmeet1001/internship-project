"use client";

import { useState, useEffect, useRef, ElementRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { MenuIcon, ChevronsLeft } from "lucide-react";

import { cn } from "@/lib/utils";

import { useMediaQuery } from "usehooks-ts";
import { Listing } from "../customcomp/listing";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center">
      <Input type="search" placeholder="Search" />
      <Button type="submit" className="bg-blue-700" size="icon">
        <SearchIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default function Home() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sideBarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const resetWidth = () => {
    if (sideBarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sideBarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sideBarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sideBarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = e.clientX;

    if (newWidth < 240) newWidth = 240;

    if (newWidth > 480) newWidth = 480;

    if (sideBarRef.current && navbarRef.current) {
      sideBarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseMove);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [isMobile, pathname]);

  // return (
  //   <>
  //     {/* <header>
  //       <nav className="flex justify-between space-x-8 px-4 py-2 bg-slate-800">
  //         <div className="flex flex-row">
  //           <Link
  //             href="/"
  //             className="hidden font-semibold text-white pe-5 pt-2 md:block"
  //           >
  //             Nextjs Dashboard
  //           </Link>
  //           <button className="text-white">B</button>
  //         </div>
  //         <div className="flex flex-row">
  //           <div className="pe-5">
  //             <InputWithButton></InputWithButton>
  //           </div>
  //           <DropdownMenu>
  //             <DropdownMenuTrigger>
  //               <AvatarDemo></AvatarDemo>
  //             </DropdownMenuTrigger>
  //             <DropdownMenuContent>
  //               <DropdownMenuItem>Settings</DropdownMenuItem>
  //               <DropdownMenuItem>Activity log</DropdownMenuItem>
  //               <DropdownMenuSeparator />
  //               <DropdownMenuItem>Logout</DropdownMenuItem>
  //             </DropdownMenuContent>
  //           </DropdownMenu>
  //         </div>
  //       </nav>
  //     </header>
  //     <div id="sidebar" className="bg-slate-800">
  //       Hello
  //     </div> */}

  //     <aside
  //       className={cn(
  //         "group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col z-[999]",

  //       )}
  //     ></aside>
  //   </>
  // );

  return (
    <>
      <aside
        ref={sideBarRef}
        className={cn(
          "group/sidebar h-screen bg-secondary overflow-y-auto flex flex-col z-[999] sticky top-0",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div className="flex flex-col gap-2 justify-between h-full">
          <div className="flex flex-col">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <span>Nextjs Dashboard</span>
              </Link>
            </div>

            <div className="flex-1 overflow-auto py-2">
              <nav className="flex flex-col items-start px-4 text-sm font-medium">
                <div className="flex flex-col gap-y-10">
                  <div className="">
                    <p className="font-bold pb-5">Core</p>
                    <Link href="/" className="ps-5 text-md">
                      Dashboard
                    </Link>
                  </div>
                  <div className="w-full">
                    <p className="font-bold pb-5">Interface</p>
                    <Accordion type="single" collapsible className="w-52">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="ps-5">
                          Layouts
                        </AccordionTrigger>
                        <AccordionContent className="ps-8">
                          <Link href="/layouts/staticnavigation">
                            Static Navigation
                          </Link>
                        </AccordionContent>
                        <AccordionContent className="ps-8">
                          <Link href="/layouts/lightNav">Dark Navigation</Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-52">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="ps-5">
                          Pages
                        </AccordionTrigger>
                        <AccordionContent>
                          <Accordion type="single" collapsible className="w-52">
                            <AccordionItem value="item-1">
                              <AccordionTrigger className="ps-5">
                                Authentication
                              </AccordionTrigger>
                              <AccordionContent className="ps-8">
                                <Link href="/pages/authentication/login/">
                                  Login
                                </Link>
                              </AccordionContent>
                              <AccordionContent className="ps-8">
                                <Link href="/pages/authentication/register">
                                  Register
                                </Link>
                              </AccordionContent>
                              <AccordionContent className="ps-8">
                                <Link href="/pages/authentication/forgotpassword">
                                  Forgot Password
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                              <AccordionTrigger className="ps-5">
                                Error
                              </AccordionTrigger>
                              <AccordionContent className="ps-8">
                                <Link href="pages/error/401-error/">
                                  401 Page
                                </Link>
                              </AccordionContent>
                              <AccordionContent className="ps-8">
                                <Link href="pages/error/404-error/">
                                  404 Page
                                </Link>
                              </AccordionContent>
                              <AccordionContent className="ps-8">
                                <Link href="pages/error/500-error/">
                                  500 Page
                                </Link>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="font-bold pb-5">ADDONS</p>
                    </div>
                    <Link
                      href="/addons/chartsmain/"
                      className="ps-5 text-md pb-3"
                    >
                      Charts
                    </Link>
                    <Link href="/addons/tablemain/" className="ps-5 text-md">
                      Tables
                    </Link>
                  </div>{" "}
                </div>{" "}
                {/* {NavLinks.map((data, index) => (
                  <Link
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-primary/50 transition-all hover:text-primary w-full",
                      pathname === data.path &&
                        "bg-gray-300 rounded-lg text-primary"
                    )}
                    href={data.path}
                    key={index}
                  >
                    <data.icon className="h-4 w-4" />
                    {data.title}
                  </Link>
                ))} */}
              </nav>
            </div>
          </div>
        </div>

        <div
          role="button"
          onClick={collapse}
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 absolute top-3 right-2 group-hover/sidebar:opacity-100 transition opacity-0",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        ></div>
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full flex items-center justify-between gap-2">
          {/* {isCollapsed && (
          )} */}
          <MenuIcon
            role="button"
            onClick={resetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
          <div className="">
            <div className="flex flex-row">
              <div className="pe-5">
                <InputWithButton></InputWithButton>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AvatarDemo></AvatarDemo>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Activity log</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
