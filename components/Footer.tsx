"use client";

import { useRouter } from "next/navigation";
import { logoutAccount } from "@/lib/actions/user.actions";
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = ({ user, type = "desktop" }: FooterProps) => {

  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) router.push("/sign-in");
  };


  return (
    <footer className="footer" >
      <div className="flex items-center gap-2">
        <Image
          src={'/avatars/av_1.png'}
          alt="user"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{user.name}</span>
          <span className="text-xs text-muted-foreground">{user.email}</span>
        </div>
      </div>
      <Button variant={'destructive'} className="hover:ring-4 text-black shadow-none hover:text-white bg-muted ring-red-200" size="icon" onClick={handleLogOut} >
        <LogOut />
      </Button>
    </footer>
  )
}

export default Footer