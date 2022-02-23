import React from "react";

const FCFSCalculate = () => {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font h-screen">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-2/6 flex justify-center md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Disk Scheduling Algorithms
            </h1>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-400">
                Track
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Eg: 90, 23, 39 ..."
                class="placeholder-gray-500 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">
                Head Position
              </label>
              <input
                placeholder="Eg: 23"
                type="email"
                id="email"
                name="email"
                class="placeholder-gray-500 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              Calculate
            </button>
            <p class="text-xs mt-3">
              You can get both seek time and graph through calculate.
            </p>
          </div>
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ml-10">
            <h1 class="title-font font-medium text-3xl text-white">
              Output will be shown here
            </h1>
            <p class="leading-relaxed mt-4">
              Graph will be shown here as soon as we'll integrate backend
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FCFSCalculate;
