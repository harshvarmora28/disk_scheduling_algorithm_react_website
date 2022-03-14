import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
// import { UserData } from "../Data";

const FCFSCalculate = () => {

  const [result, setResult] = useState("");
  const [count, setCount] = useState("");
  const [finArray, setFinArray] = useState([]);

  var arry;
  // var arr = [176, 229, 564, 60, 92, 11, 41, 114];
    // console.log(arr)
    console.log(finArray)
    function returnFinArray(){
      return finArray
    }

  // Graph

    // const [userData, setUserData] = useState({
    //   labels: UserData.map((data) => data.id),
    //   datasets: [
    //     {
    //       label: "Seek Time",
    //       data: arr,
          // backgroundColor: "rgba(40, 196, 93, 0.07)",
          // borderColor: "white",
          // borderWidth: 1,
          // pointBorderWidth: 2.4,
          // pointBackgroundColor: "tranparent",
          // pointBorderColor: "#22c55e",
          // fill: true,
    //     },
    //   ],
    // },
    // );


  const alertName = async (e) => {
    // console.log(head);

    var h_pos = document.getElementById("head").value;

    // console.log(h_pos);

    var ftrack = document.getElementById("track").value;
    // console.log(ftrack);

    arry = ftrack.split(", ");

    var finArray = [];
    
    finArray = arry.map(Number)
    setFinArray(finArray)

    let length = arry.length;

    FCFS(arry, h_pos, length);
    e.preventDefault();

  };

  function FCFS(arr, head_pos, size) {
    var seek_count = 0;
    var distance, cur_track;

    for (var i = 0; i < size; i++) {
      cur_track = arr[i];

      distance = Math.abs(cur_track - head_pos);

      seek_count += distance;

      head_pos = cur_track;
    }

    setCount(seek_count);

    var result = "";

    for (var i = 0; i < size; i++) {
      result += arr[i] + " ";
    }
    setResult(result);

  }

  return (
    <>
      <form>
        <section className="text-gray-400 bg-gray-900 body-font h-screen">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-2/6 flex justify-center md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">
                First Come First Serve
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
              <LineChart returnFinArray={returnFinArray}/>
              {/* </div> */}
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default FCFSCalculate;
