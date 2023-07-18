import Link from "next/link";
import { CommandMenu } from "./CommandMenu";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./Icons";
import { ModeToggle } from "./ui/modeToggle";

const SiteHeader = () => {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="px-4 flex h-14 items-center">
                <MainNav />
                <MobileNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>
                    <nav className="flex items-center">
                        <Link href="www.github.com" target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}>
                                <Icons.gitHub className="h-4 w-4" />
                                <span className="sr-only">Github</span>
                            </div>
                        </Link>
                        <Link href="www.twitter.com" target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}>
                                <Icons.twitter className="h-4 w-4 fill-current" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;