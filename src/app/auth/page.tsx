import { Button } from "@/components/ui/button";
import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) return redirect("/");

  return (
    <div className="flex h-screen justify-center items-center w-screen ">
      <div className=" justify-center items-center gap-2 flex-col">
        <div className="text-3xl bg-slate-900 mb-2 text-white p-2 rounded-lg">
          ChatSync..🗨️
        </div>
        <AuthButtons />
      </div>
    </div>
  );
};
export default page;
