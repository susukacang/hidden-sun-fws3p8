import React, { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState({});
  // const [jsonData, setJsonData] = useState({ key: "000" });

  useEffect(() => {
    async function getResponse() {
      const response = await fetch("https://fws3p8-5001.csb.app/json");
      const json = await response.json();
      setData({ key: json.key });
    }

    getResponse();
  }, []);

  return (
    <>
      {/* <p>key {jsonData.key}</p> */}
      <p>data {data.key}</p>
    </>
  );
};

export default App;
