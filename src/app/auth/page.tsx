import { Button } from "@/components/ui/button";
import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) return redirect("/");

  return (
    <div className="flex h-screen w-full">
      <div
        className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative 
      justify-center items-center"
      >
        <div className="flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold">
          <div className="text-3xl bg-gradient-to-r from-pink-500 to-violet-500 p-2 text-black rounded-sm">
            Chat Sync
          </div>
          <AuthButtons />
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex bg-noise">
        <Image
          src={"/hero-right.jpg"}
          alt="Hero Image"
          fill
          className="object-cover dark:opacity-60 opacity-90 pointer-events-none select-none h-full"
        />
      </div>
    </div>
  );
};
export default page;
