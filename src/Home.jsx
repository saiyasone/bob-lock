import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [formField, setFormField] = useState({
    request: "",
    second: "",
  });

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
    // console.log(formField);
    // let interval = setInterval(() => {
    for (let index = 0; index < 10000000; index++) {
      console.log(index + 1);
    }
    // }, 1000);

    // clearInterval(interval);
    // 192.168.100.4
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
        <div>
          <input
            name="request"
            type="text"
            placeholder="Request time"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            name="second"
            type="text"
            placeholder="Second time"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            name="Data"
            type="text"
            placeholder="Data"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mt-3">
          <button onClick={insertData}>Test api</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
