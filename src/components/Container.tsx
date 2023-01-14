export const Container = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={`  min-h-screen w-full pb-10 dark:bg-darkbgprimary ${classNames}`}
    >
      {children}
    </div>
  );
};
