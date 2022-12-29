import Link from "next/link";
import { Text } from "./Text";

export const NavBarLink = ({
  href,
  classNames = "",
  text,
}: {
  href: string;
  classNames?: string;
  text: string;
}) => {
  return (
    <Link href={href}>
      <Text text={text} classNames={`${classNames}`} />
    </Link>
  );
};
