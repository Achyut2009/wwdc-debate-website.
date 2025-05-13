import Page from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { core, coreteach, org, orgteach } from "@/data";
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
    <div className="min-h-screen w-full">
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-zinc-900 via-zinc-400/20 to-zinc-900/50 dark:from-black dark:via-zinc-900/20 dark:to-zinc-900/50"></div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center gap-16">
          {/* Core Organising Committee Section */}
          <section className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Core Organising Committee
              </h2>
            </div>

            <div className="grid gap-8 justify-center w-full">
              {/* Core Teachers Grid */}
              <div className="grid gap-6 w-full place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1400px] mx-auto">
                {coreteach.map((item, index) => (
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
                        <div
                          key={index}
                          className="m-4 flex items-center justify-end md:hidden"
                        >
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
                        <div
                          key={index}
                          className="m-4 hidden md:flex items-center justify-end"
                        >
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

              {/* Core Members Grid */}
              <div className="grid gap-6 w-full place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
                {core.map((item, index) => (
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
                        <div
                          key={index}
                          className="m-4 flex items-center justify-end md:hidden"
                        >
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
                        <div
                          key={index}
                          className="m-4 hidden md:flex items-center justify-end"
                        >
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
            </div>
          </section>

          {/* Organising Committee Section */}
          <section className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Organising Committee
              </h2>
            </div>

            <div className="grid gap-8 justify-center w-full">
              {/* Org Teachers Grid */}
              <div className="grid gap-6 w-full place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1400px] mx-auto">
                {orgteach.map((item, index) => (
                  <Card key={item.name} className="w-full h-full max-w-md">
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
                        <div
                          key={index}
                          className="m-4 flex items-center justify-end md:hidden"
                        >
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
                        <div
                          key={index}
                          className="m-4 hidden md:flex items-center justify-end"
                        >
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

              {/* Org Members Grid */}
              <div className="grid gap-6 w-full place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
                {org.map((item, index) => (
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
                        <div
                          key={index}
                          className="m-4 flex items-center justify-end md:hidden"
                        >
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
                        <div
                          key={index}
                          className="m-4 hidden md:flex items-center justify-end"
                        >
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
          </section>
        </div>
      </main>
    </div>
  );
}
