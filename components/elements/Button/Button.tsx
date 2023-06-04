import clsx from "clsx";
import Link from "next/link";

export function Button({ url, label, style, type }: ElementLinkType) {
  return (
    <Link
      href={url}
      className={clsx({
        "bg-primary px-7 py-3 rounded-full text-white border-solid border border-primary text-sm font-medium":
          style === "primary",
        " px-7 py-3 rounded-full border-solid border text-sm font-medium border-primary":
          style === "outline",
      })}
      target={type === "external" ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
}
