import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { core, coreteach, org, orgteach, marketing, press, IT } from "@/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { toast } from "sonner";
import { Info } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";


export default async function Committee() {
  const code = false;

  return (
    <>
      {/* Core Organizing Committee Section */}
      <div id="team" className="relative z-50 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {code ? "core" : "Our Core Organising Committee"}
            </h2>
          </div>
        </div>
        
        {/* Core Teaching Team */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-12 justify-center">
              {coreteach.map((member, index) => (
                <div key={`coreteach-${index}`} className="flex flex-col items-center">
                  {/* Mobile view */}
                  <div className="flex items-center justify-center md:hidden">
                    <Drawer>
                      <DrawerTrigger>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex flex-col items-center justify-center text-center">
                                <Image
                                  src={member.image}
                                  width={200}
                                  height={200}
                                  alt={member.name}
                                  className="rounded-full aspect-square h-32 w-32 object-cover"
                                />
                                <div className="text-md mt-3 font-semibold">
                                  {member.name}
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              Click for More Details
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-semibold">
                            {member.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-md">
                            Core Organising Committee
                          </DrawerDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  
                  {/* Desktop view */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-52 w-52 object-cover"
                          />
                          <div className="text-lg mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-md">
                            Core Organising Committee
                          </DialogDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Committee Members */}
          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 w-full max-w-5xl place-items-center">
              {core.map((member, index) => (
                <div key={`core-${index}`} className="flex flex-col items-center">
                  {/* Mobile view */}
                  <div className="flex items-center justify-center md:hidden">
                    <Drawer>
                      <DrawerTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-32 w-32 object-cover"
                          />
                          <div className="text-md mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-semibold">
                            {member.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-md">
                            Core Organising Committee
                          </DrawerDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  
                  {/* Desktop view */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-48 w-48 object-cover"
                          />
                          <div className="text-lg mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-md">
                            Core Organising Committee
                          </DialogDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Organizing Committee Section */}
      <div className="relative z-50 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {code ? "org" : "Our Organising Committee"}
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Org Teaching Team */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-12 justify-center">
              {orgteach.map((member, index) => (
                <div key={`orgteach-${index}`} className="flex flex-col items-center">
                  {/* Mobile view */}
                  <div className="flex items-center justify-center md:hidden">
                    <Drawer>
                      <DrawerTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-32 w-32 object-cover"
                          />
                          <div className="text-md mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-semibold">
                            {member.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-md">
                            Organising Committee
                          </DrawerDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  
                  {/* Desktop view */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-52 w-52 object-cover"
                          />
                          <div className="text-lg mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-md">
                            Organising Committee
                          </DialogDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Org Committee Members */}
          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 w-full max-w-5xl place-items-center">
              {org.map((member, index) => (
                <div key={`org-${index}`} className="flex flex-col items-center">
                  {/* Mobile view */}
                  <div className="flex items-center justify-center md:hidden">
                    <Drawer>
                      <DrawerTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-32 w-32 object-cover"
                          />
                          <div className="text-md mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-semibold">
                            {member.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-md">
                            Organising Committee
                          </DrawerDescription>
                          {member.bio.map((p, index) => (
                            <div key={index} className="text-md py-1 font-medium">
                              {p}
                            </div>
                          ))}
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  
                  {/* Desktop view */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-48 w-48 object-cover"
                          />
                          <div className="text-lg mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-md">
                            Organising Committee
                          </DialogDescription>
                          {member.bio.map((p, index) => (
                            <div key={index} className="text-md py-1 font-medium">
                              {p}
                            </div>
                          ))}
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Committee Section */}
      <div className="relative z-50 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {code ? "org" : "Our Marketing Committee"}
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Marketing team */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-12 justify-center">
              {marketing.map((member, index) => (
                <div key={`marketing-${index}`} className="flex flex-col items-center">
                  {/* Mobile view */}
                  <div className="flex items-center justify-center md:hidden">
                    <Drawer>
                      <DrawerTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-32 w-32 object-cover"
                          />
                          <div className="text-md mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-semibold">
                            {member.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-md">
                            Head of Marketing Committee
                          </DrawerDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  
                  {/* Desktop view */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-52 w-52 object-cover"
                          />
                          <div className="text-lg mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-md">
                            Head of Marketing Committee
                          </DialogDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Press Committee Section */}
      <div className="relative z-50 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {code ? "org" : "Our Press Committee"}
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Press team */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-12 justify-center">
              {press.map((member, index) => (
                <div key={`press-${index}`} className="flex flex-col items-center">
                  {/* Mobile view */}
                  <div className="flex items-center justify-center md:hidden">
                    <Drawer>
                      <DrawerTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-32 w-32 object-cover"
                          />
                          <div className="text-md mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-semibold">
                            {member.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-md">
                            Head of Press Committee
                          </DrawerDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  
                  {/* Desktop view */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-52 w-52 object-cover"
                          />
                          <div className="text-lg mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-md">
                            Head of Press Committee
                          </DialogDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* IT Team Section */}
      <div className="relative z-50 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {code ? "org" : "Our IT Team"}
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* IT team */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-12 justify-center">
              {IT.map((member, index) => (
                <div key={`IT-${index}`} className="flex flex-col items-center">
                  {/* Mobile view */}
                  <div className="flex items-center justify-center md:hidden">
                    <Drawer>
                      <DrawerTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-32 w-32 object-cover"
                          />
                          <div className="text-md mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-3xl font-semibold">
                            {member.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-md">
                            Head of IT Team
                          </DrawerDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DrawerHeader>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                  
                  {/* Desktop view */}
                  <div className="hidden md:block">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={member.image}
                            width={200}
                            height={200}
                            alt={member.name}
                            className="rounded-full aspect-square h-52 w-52 object-cover"
                          />
                          <div className="text-lg mt-3 font-semibold">
                            {member.name}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-md">
                            Head of IT Team
                          </DialogDescription>
                          {member.bio.map((p, index) => (
                            <div
                              key={index}
                              className="text-md dark:text-zinc-300 font-medium"
                            >
                              {p}
                            </div>
                          ))}
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose>
                            <Button variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}