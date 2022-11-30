const getResponse = async () => {
  const response = await fetch("https://fws3p8-5001.csb.app/json");
  const jsonData = await response.json();
  console.log(jsonData);
};

getResponse();
