export const Container = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div className={` h-full w-full pb-10 dark:bg-darkbgprimary ${classNames}`}>
      {children}
    </div>
  );
};
