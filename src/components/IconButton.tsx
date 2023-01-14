import { MouseEvent } from "react";
import type { IconType } from "react-icons";

export const IconButton = ({
  Icon,
  onClick,
  classNames,
}: {
  Icon: IconType;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  classNames: string;
}) => {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button className="ml-1  text-white" onClick={(e) => handleClick(e)}>
      <Icon className={` rounded-md p-1 ${classNames} h-8 w-8`} />
    </button>
  );
};
