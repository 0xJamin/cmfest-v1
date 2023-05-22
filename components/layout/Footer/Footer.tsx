import Link from "next/link";
import TW from "../../../public/twitter.png";
import IG from "../../../public/instagram.png";
import IN from "../../../public/linkedin.png";
import Image from "next/image";

export function Footer() {
  const menu = [
    { name: "Become a Volunteer", link: "/volunteer" },
    { name: "Speakers", link: "/speakers" },
    { name: "Agenda", link: "/agenda" },
    { name: "FAQ", link: "/faq" },
  ];

  return (
    <footer className="container-fluid w-full mx-auto fixed bottom-0 text-white left-0 bg-primary px-10 shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-4 md:items-center md:justify-between max-w-screen-2xl py-5 pt-8 md:pt-0">
        <div className="md:flex grid grid-cols-1 text-center gap-4 md:items-center md:justify-center text-[17px]">
          <div className="hidden md:inline-block mr-0 md:mr-32">
            <p>&copy; 2023 CMFEST 2023, Inc. All rights reserved</p>
          </div>
          <div className="flex flex-col md:flex-row text-center md:items-center md:justify-between">
            {menu.map((name) => (
              <Link
                className="mr-0 md:mr-4 text-[#7D7E8C]"
                key={name.name}
                href={name.link}
              >
                <span className="">{name.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com/cmfestafrica">
            <Image
              src={TW}
              alt="Twitter Icon"
              width={undefined}
              height={undefined}
              className="w-6 h-6"
            />
          </Link>
          <Link href="https://www.instagram.com/cmfestafrica/">
            <Image
              src={IG}
              alt="Twitter Icon"
              width={undefined}
              height={undefined}
              className="w-6 h-6"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/cmfestafrica">
            <Image
              src={IN}
              alt="Twitter Icon"
              width={undefined}
              height={undefined}
              className="w-6 h-6"
            />
          </Link>
        </div>
        <div className="md:hidden text-sm">
          <p>&copy; 2023 CMFEST 2023, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
