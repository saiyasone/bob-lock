import { useEffect, useState } from "react";

import axios from "axios";

function Home() {
  const [formField, setFormField] = useState({
    request: "",
    second: "",
  });
  const [progress, setProgress] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const cancelTokenSource = axios.CancelToken.source();
  const [isLoading, setIsLoading] = useState(false);

  async function handleApi() {
    try {
      const result = await axios.get("https://192.168.0.105");
      console.log(result);
      // const intervalData = setInterval(async () => {
      //   const result = await axios.get(
      //     "https://jsonplaceholder.typicode.com/"
      //   );

      //   console.log(result.data);
      // }, 1000);

      // return () => clearInterval(intervalData);
    } catch (error) {
      console.log(error);
    }
  }

  async function insertData() {
    const startTime = new Date();
    try {
      setIsLoading(true);
      // console.log(formField);
      // let interval = setInterval(() => {
      for (let index = 0; index < formField.request || 1; index++) {
        await axios.post(
          "http://192.168.100.4:5000/api/v1/user",
          {
            id: index + 1,
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
          },
          {
            onUploadProgress: ({ loaded, total }) => {
              const percent = Math.round((loaded * 100) / total);
              setProgress(percent);
            },
            cancelToken: cancelTokenSource.token,
          }
        );
      }

      const endTime = new Date();
      const elapsedTime = endTime - startTime;
      setCurrentDate(elapsedTime.toString());
      // }, 1000);

      // clearInterval(interval);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request is cancelled", error);
      } else {
        console.log("Something went wrong ", error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCancelToken() {
    cancelTokenSource.cancel("Request is cancelled by user.");
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormField((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    // handleApi();
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <p>time used: {currentDate}</p>
        <div>
          <input
            name="request"
            type="number"
            placeholder="Request time"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <div>
          <input
            name="second"
            type="text"
            placeholder="Second time"
            onChange={(e) => handleChange(e)}
          />
        </div> */}

        <div
          className="mt-3"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <button
            disabled={formField.request ? false : true}
            onClick={insertData}
          >
            Test api
          </button>

          <button
            disabled={!isLoading ? true : false}
            onClick={handleCancelToken}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
