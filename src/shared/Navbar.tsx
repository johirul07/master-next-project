import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center justify-center  py-9 shadow">
      <Link href="/performance">performance</Link>
      <Link href="/reliability">reliability</Link>
    </div>
  );
};

export default Navbar;
