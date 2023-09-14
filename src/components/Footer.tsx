import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-12 md:h-18 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between border-t-2 border-red-500">
            <Link href="/" className="font-bold text-xl">
                MASSIMO
            </Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;
