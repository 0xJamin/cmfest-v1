import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Menu from "../../../public/menu-icon.png";
import Close from "../../../public/Close.png";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="container-fluid w-full mx-auto fixed top-0 left-0 bg-primary px-10 shadow-md">
      <div className="md:flex items-center justify-between py-4  max-w-screen-2xl">
        <Image
          src={Logo}
          alt="CMFest Logo"
          width={undefined}
          height={undefined}
        />
        <button onClick={() => setOpen(!open)} className="absolute right-10 top-8 cursor-pointer md:hidden">
          <Image src={open ? Close : Menu} alt="menu icon" width={undefined} height={undefined} className="w-5 h-5" />
        </button>
        <div className={`md:flex md:items-center md:w-auto pl-10 md:pl-0 mt-2 md:mt-0 md:pb-0 md:pt-0 py-8 absolute md:static bg-primary md:z-auto z-[-1] left-0 w-full transition-all duration-500 ease-in ${open ? 'top-16 border-t border-white md:border-0 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
        <button className="text-white border-white border-2 rounded-full px-6 py-2 text-[14px]">
          See CMFest23
        </button>
        </div>
      </div>
    </header>
  );
}
