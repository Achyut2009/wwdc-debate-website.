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
import { core, coreteach, org, orgteach } from "@/data";
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
      <div id="team" className="relative z-50">
        <div className="mx-auto max-w-7xl px-4  py-10 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 pb-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {code ? "core" : "Our Core Organising Committee"}
              </h2>
            </div>
          </div>
        </div>
        <div className="container gap-8 relative z-50 flex flex-col flex-wrap justify-center">
          <div className="grid grid-cols-2 gap-x-8">
            {coreteach.map((member, index) => (
              <>
                <div
                  key={index}
                  className="m-4 flex items-center justify-center md:hidden"
                >
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
                                className="rounded-full aspect-square h-32 w-32 md:h-52 md:w-52 object-cover"
                              />
                              <div className="text-md md:text-lg mt-3 font-semibold">
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
                <div
                  key={index}
                  className="m-4 hidden md:flex items-center justify-center"
                >
                  <Dialog>
                    <DialogTrigger>
                      <div className="flex flex-col items-center justify-center text-center">
                        <Image
                          src={member.image}
                          width={200}
                          height={200}
                          alt={member.name}
                          className="rounded-full aspect-square h-32 w-32 md:h-52 md:w-52 object-cover"
                        />
                        <div className="text-md md:text-lg mt-3 font-semibold">
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
              </>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8">
            {core.map((member, index) => (
              <>
                <div
                  key={index}
                  className="m-4  flex items-center justify-center md:hidden"
                >
                  <Drawer>
                    <DrawerTrigger>
                      <div className="flex flex-col items-center justify-center text-center">
                        <Image
                          src={member.image}
                          width={200}
                          height={200}
                          alt={member.name}
                          className="rounded-full aspect-square h-32 w-32 md:h-48 md:w-48 object-cover"
                        />
                        <div className="text-md md:text-lg mt-3 font-semibold">
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
                <div
                  key={index}
                  className="m-4 hidden md:flex items-center justify-center"
                >
                  <Dialog>
                    <DialogTrigger>
                      <div className="flex flex-col items-center justify-center text-center">
                        <Image
                          src={member.image}
                          width={200}
                          height={200}
                          alt={member.name}
                          className="rounded-full aspect-square h-32 w-32 md:h-48 md:w-48 object-cover"
                        />
                        <div className="text-md md:text-lg mt-3 font-semibold">
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
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-50">
        <div className="mx-auto  max-w-[95rem] px-4  py-10 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 pb-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {code ? "org" : "Our Organising Committee"}
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto  md:max-w-[95rem] container gap-8 pb-5 flex flex-col flex-wrap justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8">
            {orgteach.map((member, index) => (
              <>
                <div
                  key={index}
                  className="m-4 flex items-center justify-center md:hidden"
                >
                  <Drawer>
                    <DrawerTrigger>
                      <div className="flex flex-col items-center justify-center text-center">
                        <Image
                          src={member.image}
                          width={200}
                          height={200}
                          alt={member.name}
                          className="rounded-full aspect-square h-32 w-32 md:h-52 md:w-52 object-cover"
                        />
                        <div className="text-md md:text-lg mt-3 font-semibold">
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
                <div
                  key={index}
                  className="m-4 hidden md:flex items-center justify-center"
                >
                  <Dialog>
                    <DialogTrigger>
                      <div className="flex flex-col items-center justify-center text-center">
                        <Image
                          src={member.image}
                          width={200}
                          height={200}
                          alt={member.name}
                          className="rounded-full aspect-square h-32 w-32 md:h-52 md:w-52 object-cover"
                        />
                        <div className="text-md md:text-lg mt-3 font-semibold">
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
              </>
            ))}
          </div>
          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8">
            {org.map((member, index) => (
              <>
                <div
                  key={index}
                  className="m-4 flex items-center justify-center md:hidden"
                >
                  <Drawer>
                    <DrawerTrigger>
                      <div className="flex flex-col items-center justify-center text-center">
                        <Image
                          src={member.image}
                          width={200}
                          height={200}
                          alt={member.name}
                          className="rounded-full aspect-square h-32 w-32 md:h-48 md:w-48 object-cover"
                        />
                        <div className="text-md md:text-lg mt-3 font-semibold">
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
                <div
                  key={index}
                  className="m-4 hidden md:flex items-center justify-center"
                >
                  <Dialog>
                    <DialogTrigger>
                      <div className="flex flex-col items-center justify-center text-center">
                        <Image
                          src={member.image}
                          width={200}
                          height={200}
                          alt={member.name}
                          className="rounded-full aspect-square h-32 w-32 md:h-48 md:w-48 object-cover"
                        />
                        <div className="text-md md:text-lg mt-3 font-semibold">
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
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
