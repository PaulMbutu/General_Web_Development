import {
        Sheet,
        SheetContent,
        SheetHeader,
        SheetTitle,
        SheetTrigger,
        } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from "./NavItems";
import { LoggedInUser } from "@/lib/type";

const MobileNavbar = ({loggedInUser}: {loggedInUser? :LoggedInUser}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu className="text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-center font-bold text-xl">
            DigitalShop
          </SheetTitle>
        </SheetHeader>

        <NavItems mobile loggedInUser={loggedInUser}/>

        {/* <SheetClose className="overflow-y-auto">
          <NavItems mobile />
        </SheetClose> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;