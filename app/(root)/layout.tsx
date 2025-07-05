import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import ModeToggle from "@/components/themes/ModeToggle";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const loggedIn = { firstName: 'Maithya', lastName: 'Labs' };
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />
            <div className="flex size-full flex-col ">
                <div className="root-layout">
                    <Image
                        src="/icons/antv.svg"
                        width={30}
                        height={30}
                        alt="Menu icon"
                        className="size-[29px] invert-0 dark:invert"
                    />
                    <div className="flex gap-2">
                        {/* Mobile navbar */}
                        < MobileNav user={loggedIn} />
                        <span>
                            <ModeToggle />
                        </span>
                    </div>
                </div>
                {children}
            </div>

        </main>
    );
}
