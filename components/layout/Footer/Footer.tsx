import Link from "next/link";
import TW from "../../../public/twitter.svg";
import IG from "@/public/instagram.svg";
import IN from "../../../public/linkedin.svg";
import Image from "next/image";

export function Footer({ copyright, footer_links }: Footer) {
  const menu = [
    { name: "Become a Volunteer", link: "/#" },
    { name: "Speakers", link: "/#" },
    { name: "Agenda", link: "/#" },
    { name: "FAQ", link: "/#" },
  ];

  return (
    <footer className=" w-full mx-auto bottom-0 text-white bg-primary p-8 mt-10 ">
      <div className="container  max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-2 text-sm font-light">
          <p className="order-last md:order-none">
            &copy; {`${new Date().getFullYear()} ${copyright} `}
          </p>

          {/* <div className="flex flex-col md:flex-row text-center md:items-center md:justify-between -ml-20">
            {footer_links.map((link) => (
              <Link
                className="mr-0 md:mr-4 text-[#7D7E8C] "
                key={link._uid}
                href={link.url}
              >
                <span className="">{link.label}</span>
              </Link>
            ))}
          </div> */}
          <div className="flex gap-4 ">
            <Link
              href="https://twitter.com/cmfestafrica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={TW} alt="Twitter Icon" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/cmfestafrica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={IG} alt="Instagram Icon" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/cmfestafrica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={IN} alt="LinkedIN Icon" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
