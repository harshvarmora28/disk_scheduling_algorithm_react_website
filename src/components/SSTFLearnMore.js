import React from "react";
import { Link } from "react-router-dom";

const SSTFLearnMore = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="flex flex-col text-center w-full pt-8 -mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Shortest Seek Time First Algorithm
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="" src="sstf_image.png" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  What is Shortest Seek Time First Method?
                </h2>
                <p className="leading-relaxed text-base">
                  SSTF is abbreviation of Shortest Seek Time First (SSTF) which
                  is a disk scheduling algorithm. It selects the request which
                  is closest to the current head position before moving the head
                  away to service other requests. This is done by selecting the
                  request which has the least seek time from the current head
                  position.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Characteristics of SSTF method
                </h2>
                <p className="leading-relaxed text-base">
                  - The SSTF algorithm selects the request having the minimum
                  distance from the current head position. <br /> - Arrange all
                  the I/O requests in ascending order.
                  <br /> - The head will find the nearest request (which has a
                  minimum distance from the head) present in any direction (left
                  or right) and will move to that request.
                  <br /> - Then the head will move another nearest request which
                  has not been serviced present in any direction.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Advantages of SSTF
                </h2>
                <p className="leading-relaxed text-base">
                  - Better performance than FCFS scheduling algorithm. <br />
                  - It provides better throughput. <br /> - This algorithm is
                  used in Batch Processing system where throughput is more
                  important. <br /> - It has less average response and waiting time.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-2 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Disadvantages of SSTF
                </h2>
                <p className="leading-relaxed text-base">
                  - Starvation is possible for some requests as it favours easy to reach request and ignores the far away processes.
                  <br />
                  - Their is lack of predictability because of high variance of response time.
                  <br />
                  - Switching direction slows things down.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/sstfcalculate">
        <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Calculate</button>
        </Link>
      </section>
    </>
  );
};

export default SSTFLearnMore;
