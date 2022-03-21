import React, { useState } from "react";
import SCANChart from "./SCANChart";

const SCANCalculate = () => {
  const [result, setResult] = useState("");
  const [count, setCount] = useState("");
  const [finArray, setFinArray] = useState([]);
  const [direction, setDirection] = useState("");

  var arry;
  // var arr = [176, 229, 564, 60, 92, 11, 41, 114];
  // console.log(arr)
  console.log(finArray);
  function returnFinArray3() {
    return finArray;
  }

  const alertName = async (e) => {
    // console.log(head);

    var h_pos = document.getElementById("head").value;
    if(h_pos < 0){
      console.log("enter positive values")
      alert("Please Enter positive value only!");
    }
    // console.log(h_pos);

    var ftrack = document.getElementById("track").value;
    // console.log(ftrack);

    arry = ftrack.split(", ");

    // var finArray = [];

    // finArray = arry.map(Number);
    // setFinArray(finArray);

    let length = arry.length;

    SCAN(arry, h_pos, direction);
    e.preventDefault();
  };

  function SCAN(arr, h_pos, direction) {
    let disk_size = 200;
    let seek_count = 0;
    let distance, cur_track;
    let left = [],
      right = [];
    let seek_sequence = [];

    // appending end values
    // which has to be visited
    // before reversing the direction
    if (direction == "left") left.push(0);
    else if (direction == "right") right.push(disk_size - 1);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < h_pos) left.push(arr[i]);
      if (arr[i] > h_pos) right.push(arr[i]);
    }

    // sorting left and right vectors
    left.sort(function (a, b) {
      return a - b;
    });
    right.sort(function (a, b) {
      return a - b;
    });

    // run the while loop two times.
    // one by one scanning right
    // and left of the head
    let run = 2;
    while (run-- > 0) {
      if (direction == "left") {
        for (let i = left.length - 1; i >= 0; i--) {
          cur_track = left[i];

          // appending current track to seek sequence
          seek_sequence.push(cur_track);

          // calculate absolute distance
          distance = Math.abs(cur_track - h_pos);

          // increase the total count
          seek_count += distance;

          // accessed track is now the new head
          h_pos = cur_track;
        }
        direction = "right";
      } else if (direction == "right") {
        for (let i = 0; i < right.length; i++) {
          cur_track = right[i];

          // appending current track to seek sequence
          seek_sequence.push(cur_track);

          // calculate absolute distance
          distance = Math.abs(cur_track - h_pos);

          // increase the total count
          seek_count += distance;

          // accessed track is now new head
          h_pos = cur_track;
        }
        direction = "left";
      }
    }

    setCount(seek_count);
    var result = "";

    for (let i = 0; i < seek_sequence.length; i++) {
      if (seek_sequence[i] < 0) {
        alert("Enter positive value only!");
        break;
      }
      result += seek_sequence[i] + ", ";
    }
    setResult(result);

    arry = result.split(", ");
    var finArray = [];
    finArray = arry.map(Number);
    setFinArray(finArray);
  }

  return (
    <>
      <form>
        <section className="text-gray-400 bg-gray-900 body-font h-screen">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-2/6 flex justify-center md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">
                SCAN (Elevator) Algorithm
              </h2>

              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Track
                </label>
                <input
                  type="text"
                  id="track"
                  name="track"
                  placeholder="Eg: 90, 23, 39 ..."
                  className="track placeholder-gray-500 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="head"
                  className="leading-7 text-sm text-gray-400"
                >
                  Head Position
                </label>
                <input
                  placeholder="Eg: 23"
                  type="number"
                  id="head"
                  name="head"
                  className="placeholder-gray-500 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="direction"
                  className="leading-7 text-sm text-gray-400"
                >
                  Direction
                </label>
                <br />
                <input
                  type="radio"
                  value="left"
                  name="direction"
                  onChange={(e) => setDirection(e.target.value)}
                  className="placeholder-gray-500 mr-2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                Left
                <input
                  type="radio"
                  value="right"
                  name="direction"
                  onChange={(e) => setDirection(e.target.value)}
                  className="placeholder-gray-500 ml-6 mr-2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                Right
              </div>
              <button
                onClick={alertName}
                // type="submit"
                className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Calculate
              </button>
              <p className="text-xs mt-3">
                You can get both seek time and graph through calculate.
              </p>
            </div>
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ml-10">
              <h1 className="title-font font-medium text-3xl text-white">
                Output
              </h1>
              <p className="output_string leading-relaxed mt-4">
                Seek Sequence: {result}
              </p>
              <p className="output_string leading-relaxed mt-4">
                Seek Time: {count}
              </p>
              {/* <div style={{width: 300}}> */}
              {/* <LineChart chartData={userData} /> */}
              <SCANChart returnFinArray3={returnFinArray3} />
              {/* </div> */}
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default SCANCalculate;
