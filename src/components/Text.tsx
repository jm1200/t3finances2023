export const Text = ({
  text,
  classNames = "",
}: {
  text: string;
  classNames?: string;
}) => {
  return <p className={`${classNames} dark:text-white`}>{text}</p>;
};
