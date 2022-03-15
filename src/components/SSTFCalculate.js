
import React, { useEffect, useState } from "react";
import SSTFChart from "./SSTFChart";

const SSTFCalculate = () => {
  const [result, setResult] = useState("");
  const [count, setCount] = useState("");
  const [finArray, setFinArray] = useState([]);

  var arry;
  // var arr = [176, 229, 564, 60, 92, 11, 41, 114];
  // console.log(arr)
  console.log(finArray);
  function returnFinArray2() {
    return finArray;
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
    // if(h_pos < 0){
    //   console.log("enter positive values")
    //   alert("Please Enter positive value only!");
    // }
    // console.log(h_pos);

    var ftrack = document.getElementById("track").value;
    // console.log(ftrack);

    arry = ftrack.split(", ");

    // var finArray = [];

    // finArray = arry.map(Number);
    // setFinArray(finArray);

    let length = arry.length;

    SSTF(arry, h_pos, length);
    e.preventDefault();
  };

  function SSTF(arr, head_pos, size)
	{
		if (size <= 0)
		{
			return;
		}
		var seek_time = 0.0;
		var minimum = 0.0;
		//This are storing the information of seek sequence
		var skeek = Array(size + 1).fill(0);
		//Create 2d array which is used to store distance and visited status
		var auxiliary = Array(size).fill(0).map(() => new Array(size).fill(0));
		// Loop controlling variable
		var i = 0;
		var j = 0;
		var location = 0;
		for (i = 0; i < size; ++i)
		{
			// set initial distance
			auxiliary[i][0] = 0;
			// set the visiting element status
			auxiliary[i][1] = 0;
		}
		for (i = 0; i < size; i++)
		{
      
			skeek[i] = head_pos;
      
			// Find distance using head value
			for (j = 0; j < size; ++j)
			{
				auxiliary[j][0] = arr[j] - head_pos;
				if (auxiliary[j][0] < 0)
				{
					auxiliary[j][0] = -auxiliary[j][0];
				}
			}
			minimum = Number.MAX_VALUE;
			location = -1;
			//Find the minimum element location that is not visited
			for (j = 0; j < size; ++j)
			{
				if (auxiliary[j][1] == 0 && auxiliary[j][0] <= minimum)
				{
					// Get the new minimum distance element location
					location = j;
					minimum = auxiliary[j][0];
				}
			}
			// Update the visited status of new get element
			auxiliary[location][1] = 1;
			// Update head data into current track value
			head_pos = arr[location];
			// Add current distance into seek
			seek_time += auxiliary[location][0];
		}
		if (head_pos != 0)
		{
			// Add last skee info
			skeek[size] = head_pos;
		}
		// process.stdout.write("\n Seek Sequence : ");
		//Display given queue elements

    setCount(seek_time)

    var result = "";

    for (var i = 0; i < size+1; i++) {
      if(skeek[i] < 0){
        alert("Enter positive value only!")
        break;
      }
      result += skeek[i] + ", ";
    }

    setResult(result);

    console.log(result);
    arry = result.split(", ");

    var finArray = [];

    finArray = arry.map(Number);
    setFinArray(finArray);

    // let length = result.length;
		
	}

  return (
    <>
      <form>
        <section className="text-gray-400 bg-gray-900 body-font h-screen">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-2/6 flex justify-center md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">
                Shortest Seek Time First
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
              <SSTFChart returnFinArray2={returnFinArray2} />
              {/* </div> */}
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default SSTFCalculate;
