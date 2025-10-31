import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[5vh] bg-gray-900 text-gray-300 py-4 text-center text-sm">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">Green University</span>.
        All rights reserved.
      </p>
    </footer>
  );
}