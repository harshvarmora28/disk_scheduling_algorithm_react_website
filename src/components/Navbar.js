import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="team_2_logo.svg" className="w-10" alt="" />
            <span className="ml-3 text-xl">G4 - Team 2</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-white">Home</a>
            <a href="/fcfslearnmore" className="mr-5 hover:text-white">FCFS</a>
            <a href="/sstflearnmore" className="mr-5 hover:text-white">SSTF</a>
            <a href="/scanlearnmore" className="mr-5 hover:text-white">SCAN</a>
            <a href="/cscanlearnmore" className="mr-5 hover:text-white">C-SCAN</a>
            <a href="/aboutus" className="mr-5 hover:text-white">About Us</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
