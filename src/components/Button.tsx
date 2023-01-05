import { Text } from "./Text";

export const Button = ({
  text,
  onClick,
}: {
  text?: string;
  onClick: () => void;
}) => {
  return (
    <button className="rounded-sm bg-primary py-2 px-4" onClick={onClick}>
      <Text text={text} classNames="text-sm" />
    </button>
  );
};
