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
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
export default function Contact() {
  return (
    <>
      <div className="hidden md:flex">
        <Dialog>
          <DialogTrigger>
            <Button size={"sm"} variant={"geist"}>
              Contact <ArrowRight className="ml-1.5 h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact us</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-start">
                <Mail className="h-4 w-4 mr-2" /> Email: wwwdc.dpsmis@gmail.com{" "}
              </div>
              <div className="flex items-center justify-start">
                <Phone className="h-4 w-4 mr-2" /> Ms. Asha Kurian: +974 6677
                3020{" "}
              </div>
              <div className="flex items-center justify-start">
                <Phone className="h-4 w-4 mr-2" /> Surya Kauthik: +974 3313
                5466{" "}
              </div>
              <div className="flex items-center justify-start">
                <Phone className="h-4 w-4 mr-2" /> Nikkil Dcruz: +974 3366
                3649{" "}
              </div>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <Button size={"sm"} variant={"geist"}>
              Contact <ArrowRight className="ml-1.5 h-5 w-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Contact us</DrawerTitle>
            </DrawerHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-start">
                <Mail className="h-4 w-4 mr-2" /> Email: wwwdc.dpsmis@gmail.com{" "}
              </div>
              <div className="flex items-center justify-start">
                <Phone className="h-4 w-4 mr-2" /> Ms. Asha Kurian: +974 6677
                3020{" "}
              </div>
              <div className="flex items-center justify-start">
                <Phone className="h-4 w-4 mr-2" /> Surya Kauthik: +974 3313
                5466{" "}
              </div>
              <div className="flex items-center justify-start">
                <Phone className="h-4 w-4 mr-2" /> Nikkil Dcruz: +974 3366
                3649{" "}
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}