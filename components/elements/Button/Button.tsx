import clsx from "clsx";
import Link from "next/link";
import { ButtonType } from "./types";

export function Button({ url, label, style, type, onClick }: ButtonType) {
  const className = clsx({
    "bg-primary px-7 py-3 rounded-full text-white border-solid border border-primary text-sm font-medium":
      style === "primary",
    " px-7 py-3 rounded-full border-solid border text-sm font-medium border-primary":
      style === "outline",
  });
  if (url === "#") {
    return (
      <button className={className} onClick={onClick}>
        {label}
      </button>
    );
  }
  return (
    <Link
      href={url}
      className={className}
      target={type === "external" ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
}
