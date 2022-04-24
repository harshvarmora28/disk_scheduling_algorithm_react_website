import React from "react";
import { Link } from "react-router-dom";

const SCANLearnMore = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="flex flex-col text-center w-full pt-8 -mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            SCAN Algorithm
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="" src="scan_image.jpg" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  What is SCAN (Elevator) Method?
                </h2>
                <p className="leading-relaxed text-base">
                  In SCAN disk scheduling algorithm, head starts from one end of
                  the disk and moves towards the other end, servicing requests
                  in between one by one and reach the other end. Then the
                  direction of the head is reversed and the process continues as
                  head continuously scan back and forth to access the disk.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Characteristics of SCAN method
                </h2>
                <p className="leading-relaxed text-base">
                  - In SCAN disk scheduling algorithm, head starts from one end
                  of the disk and moves towards the other end, servicing
                  requests in between one by one and reach the other end. <br />{" "}
                  - Then the direction of the head is reversed and the process
                  continues as head continuously scan back and forth to access
                  the disk.
                  <br /> - So, this algorithm works as an elevator and hence
                  also known as the elevator algorithm.
                  <br /> - As a result, the requests at the midrange are
                  serviced more and those arriving behind the disk arm will have
                  to wait.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Advantages of SCAN
                </h2>
                <p className="leading-relaxed text-base">
                  - This algorithm is simple and easy to understand. <br />
                  - SCAN algorithm have no starvation.
                  <br /> - This algorithm is better than FCFS Scheduling
                  algorithm.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-2 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Disadvantages of SCAN
                </h2>
                <p className="leading-relaxed text-base">
                  - More complex algorithm to implement.
                  <br />
                  - This algorithm is not fair because it cause long waiting
                  time for the cylinders just visited by the head.
                  <br />- It causes the head to move till the end of the disk in
                  this way the requests arriving ahead of the arm position would
                  get immediate service but some other requests that arrive
                  behind the arm position will have to wait for the request to
                  complete.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/scancalculate">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Calculate
          </button>
        </Link>
      </section>
    </>
  );
};

export default SCANLearnMore;
