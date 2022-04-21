import React from "react";
import { Link } from "react-router-dom";

const SCANLearnMore = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="flex flex-col text-center w-full pt-8 -mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            C-SCAN Algorithm
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img className="pt-20" alt="feature" src="cscan_algo.png" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  What is C-SCAN Method?
                </h2>
                <p className="leading-relaxed text-base">
                  The circular SCAN (C-SCAN) scheduling algorithm is a modified
                  version of the SCAN disk scheduling algorithm that deals with
                  the inefficiency of the SCAN algorithm by servicing the
                  requests more uniformly.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Characteristics of C-SCAN method
                </h2>
                <p className="leading-relaxed text-base">
                  - Like SCAN (Elevator Algorithm) C-SCAN moves the head from one end servicing all the requests to the other end. <br />{" "}
                  - However, as soon as the head reaches the other end, it immediately returns to the beginning of the disk without servicing any requests on the return trip (see chart below) and starts servicing again once reaches the beginning.
                  <br /> This is also known as the “Circular Elevator Algorithm” as it essentially treats the cylinders as a circular list that wraps around from the final cylinder to the first one.
                  <br /> - The distance variable is used to store the absolute distance between the head and current track position.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Advantages of C-SCAN
                </h2>
                <p className="leading-relaxed text-base">
                  - Works well with moderate to heavy loads.
 <br />
                  - It provides better response time and uniform waiting time.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-2 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Disadvantages of C-SCAN
                </h2>
                <p className="leading-relaxed text-base">
                  - May not be fair to service requests for tracks at the extreme end.

                  <br />
                  - It has more seek movements as compared to the SCAN Algorithm.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/cscancalculate">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Calculate
          </button>
        </Link>
      </section>
    </>
  );
};

export default SCANLearnMore;
