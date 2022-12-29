import { signIn, useSession } from "next-auth/react";

export const AuthPage = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    console.log("AuthPage.tsx 18 got here:", session, status);
    signIn(undefined, { callbackUrl: route });

    return null;
  }

  return <div>{children}</div>;
};
