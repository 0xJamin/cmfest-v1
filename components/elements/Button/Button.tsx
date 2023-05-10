import clsx from "clsx";
import Link from "next/link";

export function Button({ url, label, style, type }: ElementLinkType) {
  return (
    <Link
      href={url}
      className={clsx({
        "bg-primary px-10 py-4 rounded-full text-white border-solid border border-primary text-sm font-bold":
          style === "primary",
        "px-7 py-3 border-solid rounded-full border border-primary":
          style === "outline",
      })}
      target={type === "external" ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
}
