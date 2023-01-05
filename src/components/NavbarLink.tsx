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
    <div className="mr-2">
      <Link href={href}>
        <Text text={text} classNames={`${classNames}`} />
      </Link>
    </div>
  );
};
