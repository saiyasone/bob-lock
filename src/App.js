import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  async function handleApi() {
    const intervalData = setInterval(async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log(result.data);
    }, 1000);

    return () => clearInterval(intervalData);
  }

  useEffect(() => {
    // handleApi();
  }, []);

  async function insertData() {
    // let interval = setInterval(() => {
    for (let index = 0; index < 1000; index++) {
      console.log(index + 1);
    }
    // }, 1000);

    // clearInterval(interval);
  }

  return (
    <div className="App">
      <button onClick={() => insertData()}>Test api</button>
    </div>
  );
}

export default App;
