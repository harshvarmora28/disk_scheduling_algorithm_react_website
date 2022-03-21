import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-green-400 tracking-widest font-medium title-font mb-1">
              G4 - TEAM 2
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Disk Scheduling Algorithms
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A Process makes the I/O requests to the operating system to access
              the disk. Disk Scheduling Algorithm manages those requests and
              decides the order of the disk access given to the requests.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                FCFS Algorithm
              </h2>
              <p className="leading-relaxed text-base mb-4">
                First Come First Serve (FCFS) is an algorithm that automatically
                executes queued requests and processes in order to handle their
                arrival.
              </p>
              <div className="flex md:mt-4 mt-6">
                <Link to="/fcfscalculate">
                <button className="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">
                  Calculate
                </button>
                </Link>
                <Link to="/fcfslearnmore">
                <a className="text-green-400 inline-flex items-center ml-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                SSTF Algorithm
              </h2>
              <p className="leading-relaxed text-base mb-4">
                SSTF is an algorithm with an abbreviation of Shortest Seek Time
                First (SSTF) which is one of the important disk scheduling
                algorithm.
              </p>
              <div className="flex md:mt-4 mt-6">
                <Link to="/sstfcalculate">
                <button className="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">
                  Calculate
                </button>
                </Link>
                <Link to="/sstflearnmore">
                <a className="text-green-400 inline-flex items-center ml-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                SCAN Algorithm
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Here head starts from one end of the disk and moves towards the
                other end, servicing requests in between one by one and reach
                the other end.
              </p>
              <div className="flex md:mt-4 mt-6">
                <Link to="/scancalculate">
                <button className="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">
                  Calculate
                </button>
                </Link>
                <a className="text-green-400 inline-flex items-center ml-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                C-SCAN Algorithm
              </h2>
              <p className="leading-relaxed text-base mb-4">
                It is a modified version of the SCAN disk scheduling algorithm
                that deals with the inefficiency of the SCAN algorithm by
                servicing the requests more uniformly.
              </p>
              <div className="flex md:mt-4 mt-6">
                <button className="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">
                  Calculate
                </button>
                <a className="text-green-400 inline-flex items-center ml-4">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
