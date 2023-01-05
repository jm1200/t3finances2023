import type { IconType } from "react-icons";

export const IconButton = ({
  Icon,
  onClick,
  classNames,
}: {
  Icon: IconType;
  onClick?: () => void;
  classNames: string;
}) => {
  return (
    <button className="ml-1  text-white" onClick={onClick}>
      <Icon className={` rounded-md p-1 ${classNames} h-8 w-8`} />
    </button>
  );
};
