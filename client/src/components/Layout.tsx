import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="absolute inset-0">
      <header className="container flex mx-auto justify-between py-4 fixed z-50">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav>
          <ul className="flex gap-2">
            <li>Links</li>
            <li>Links</li>
            <li>Links</li>
            <li>Links</li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
