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
                                  className="rounded-full aspect-square md:h-56 md:w-56 object-cover"
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

      {/* Organising Committee Section */}
<div id="organising" className="relative z-50 py-10">
  <div className="mx-auto max-w-7xl px-4 md:px-6">
    <div className="flex flex-col items-center justify-center text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Our Organising Committee
      </h2>
    </div>

    {/* Teachers - 1 on top, 2 below */}
    <div className="flex flex-col items-center gap-10 mb-16">
      {/* First teacher (Ms. Asha Kurian) */}
      <div className="flex justify-center">
        <MemberCard member={orgteach[0]} idPrefix="orgteach" />
      </div>

      {/* Next two teachers (Mr. Dipin Joseph, Ms. Nida Farooq) */}
      <div className="flex justify-center gap-10">
        {orgteach.slice(1, 3).map((member, index) => (
          <MemberCard key={index + 1} member={member} idPrefix="orgteach" />
        ))}
      </div>
    </div>

    {/* Students - 3 in one row, 4 in the next */}
    <div className="flex flex-col items-center gap-12">
      {/* First 3 students */}
      <div className="flex justify-center gap-10">
        {org.slice(0, 3).map((member, index) => (
          <MemberCard key={index} member={member} idPrefix="org" />
        ))}
      </div>

      {/* Remaining 4 students */}
      <div className="flex justify-center gap-10">
        {org.slice(3, 7).map((member, index) => (
          <MemberCard key={index + 3} member={member} idPrefix="org" />
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
                            className="rounded-full aspect-square md:h-56 md:w-56 object-cover"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 w-full max-w-5xl justify-self-center place-items-center">
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
              {code ? "org" : "Our Marketing Team"}
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Marketing team */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 w-full max-w-5xl justify-self-center place-items-center">
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
                            Head of Marketing Team
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
                            Head of Marketing Team
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
              {code ? "org" : "Our Press Team"}
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Press team */}
          <div className="flex justify-center">
            <div className="flex flex-row md:flex-row lg:flex-row gap-12 justify-center">
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
                            Head of Team
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
            <div className="flex flex-row md:flex-row lg:flex-row gap-12 justify-center">
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
