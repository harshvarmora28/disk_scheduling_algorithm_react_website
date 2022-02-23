import React from "react";

const FCFSLearnMore = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="flex flex-col text-center w-full pt-8 -mb-6">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">
            First Come First Serve Algorithm
          </h1>
        </div>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" class="" src="fcfs_image.jpg" />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  What is First Come First Serve Method?
                </h2>
                <p class="leading-relaxed text-base">
                  First Come First Serve (FCFS) is an operating system
                  scheduling algorithm that automatically executes queued
                  requests and processes in order of their arrival. It is the
                  easiest and simplest CPU scheduling algorithm. In this type of
                  algorithm, processes which requests the CPU first get the CPU
                  allocation first. This is managed with a FIFO queue. The full
                  form of FCFS is First Come First Serve.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Characteristics of FCFS method
                </h2>
                <p class="leading-relaxed text-base">
                  - It supports non-preemptive and pre-emptive scheduling
                  algorithm. <br /> - Jobs are always executed on a first-come,
                  first-serve basis.
                  <br /> - It is easy to implement and use.
                  <br /> - This method is poor in performance, and the general
                  wait time is quite high.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Advantages of FCFS
                </h2>
                <p class="leading-relaxed text-base">
                  - The simplest form of a CPU scheduling algorithm <br />
                  - Easy to program <br />- First come first served
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Disadvantages of FCFS
                </h2>
                <p class="leading-relaxed text-base">
                  - It is a Non-Preemptive CPU scheduling algorithm, so after
                  the process has been allocated to the CPU, it will never
                  release the CPU until it finishes executing.
                  <br />
                  - The Average Waiting Time is high.
                  <br />
                  - Short processes that are at the back of the queue have to
                  wait for the long process at the front to finish.
                  <br />
                  - Not an ideal technique for time-sharing systems.
                  <br />- Because of its simplicity, FCFS is not very efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FCFSLearnMore;
