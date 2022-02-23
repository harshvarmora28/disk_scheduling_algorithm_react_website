import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="team_2_logo.svg" class="w-10" alt="" />
            <span class="ml-3 text-xl">G4 - Team 2</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-white">Home</a>
            <a class="mr-5 hover:text-white">FCFS</a>
            <a class="mr-5 hover:text-white">SSTF</a>
            <a class="mr-5 hover:text-white">SCAN</a>
            <a class="mr-5 hover:text-white">C-SCAN</a>
            <a class="mr-5 hover:text-white">About Us</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
