import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      {" "}
      <Link
        href="/news"
        className=" hover:bg-slate-300 hover:underline p-4 hover:text-red-400"
      >
        News
      </Link>
      <Link
        href="/tickets"
        className=" hover:bg-slate-300 hover:underline p-4 hover:text-red-400"
      >
        Tickets
      </Link>
      <Link
        href="/news/latest"
        className=" hover:bg-slate-300 hover:underline p-4 hover:text-red-400"
      >
        latest
      </Link>
    </div>
  );
}
