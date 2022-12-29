import { signIn, signOut, useSession } from "next-auth/react";

import { NavBarLink } from "./NavbarLink";
import { Text } from "./Text";

export default function Navbar() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex items-center  px-4 py-2 dark:bg-slate-700 ">
      <div className="pr-8">
        {/* <p className="text-xl dark:text-white">Finances</p> */}
        <NavBarLink text="Finances" href="/" classNames="text-2xl" />
      </div>
      <div className="flex w-full items-center justify-between">
        {sessionData && (
          <div>
            <NavBarLink text="Import" href="/import" classNames="text-sm" />
          </div>
        )}

        <div>
          <button
            className="rounded-sm bg-primary py-2 px-4"
            onClick={sessionData ? () => signOut() : () => signIn()}
          >
            <Text
              text={sessionData ? "Sign Out" : "Sign In"}
              classNames="text-sm"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
