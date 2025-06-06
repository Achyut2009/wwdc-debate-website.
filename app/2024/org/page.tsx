import Page from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { core, coreteach, org, orgteach, twentyfour } from "@/data";
import Image from "next/image";
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

export default function Home() {
  return (
    <div className="flex-1 flex-col">
      <div className="h-full flex">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>

        <div className="flex items-start justify-center z-20 w-full">
          <div className="w-full">
            <div className="relative flex flex-col z-50 items-center justify-center">
              {/* Core Organising Committee Heading */}
              <div className="mx-auto w-full px-4 py-10 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 pb-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Core Organising Committee
                    </h2>
                  </div>
                </div>
              </div>

              {/* Original core section (unchanged) */}
              <div className="grid py-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {twentyfour.core.map((item, index) => (
                  <Card key={item.name} className="w-full max-w-md">
                    <CardContent className="grid grid-cols-[100px_1fr] gap-4 p-6">
                      <div>
                        <Image
                          alt="Profile Photo"
                          className="rounded-full"
                          height="100"
                          src={item.image}
                          style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                          }}
                          width="100"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          {item.bio[0]}...
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full">
                        <div className="m-4 flex items-center justify-end md:hidden">
                          <Drawer>
                            <DrawerTrigger>
                              <Button variant="geist" className="ml-auto">
                                Know more
                              </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader>
                                <DrawerTitle className="text-3xl font-semibold">
                                  {item.name}
                                </DrawerTitle>
                                <DrawerDescription className="text-md">
                                  Core Organising Committee
                                </DrawerDescription>
                                {item.bio.map((p, index) => (
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
                        <div className="m-4 hidden md:flex items-center justify-end">
                          <Dialog>
                            <DialogTrigger>
                              <Button variant="geist" className="ml-auto">
                                Know more
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="text-3xl font-semibold">
                                  {item.name}
                                </DialogTitle>
                                <DialogDescription className="text-md">
                                  Core Organising Committee
                                </DialogDescription>
                                {item.bio.map((p, index) => (
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
                    </CardFooter>
                  </Card>
                ))}
              </div>              

              {/* Organising Committee Heading */}
              <div className="mx-auto w-full px-4 py-10 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 pb-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Organising Committee
                    </h2>
                  </div>
                </div>
              </div>

              {/* Original org section (unchanged) */}
              <div className="grid gap-6 py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {twentyfour.org.map((item, index) => (
                  <Card key={item.name} className="w-full max-w-md">
                    <CardContent className="grid grid-cols-[100px_1fr] gap-4 p-6">
                      <div>
                        <Image
                          alt="Profile Photo"
                          className="rounded-full"
                          height="100"
                          src={item.image}
                          style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                          }}
                          width="100"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          {item.bio[0]}...
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full">
                        <div className="m-4 flex items-center justify-end md:hidden">
                          <Drawer>
                            <DrawerTrigger>
                              <Button variant="geist" className="ml-auto">
                                Know more
                              </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader>
                                <DrawerTitle className="text-3xl font-semibold">
                                  {item.name}
                                </DrawerTitle>
                                <DrawerDescription className="text-md">
                                  Organising Committee
                                </DrawerDescription>
                                {item.bio.map((p, index) => (
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
                        <div className="m-4 hidden md:flex items-center justify-end">
                          <Dialog>
                            <DialogTrigger>
                              <Button variant="geist" className="ml-auto">
                                Know more
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="text-3xl font-semibold">
                                  {item.name}
                                </DialogTitle>
                                <DialogDescription className="text-md">
                                  Organising Committee
                                </DialogDescription>
                                {item.bio.map((p, index) => (
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
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}