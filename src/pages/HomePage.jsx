import Home from "../components/Home"


function HomePage()
{


    return <Home/>
}

export default HomePage;

export async function loadEvents() {
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate); // "2022-06-17"

  const url =
    "https://cricket-live-data.p.rapidapi.com/fixtures-by-date/" + currentDate;
    console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6de22193e5msh5a2f722a22432e3p1e4f24jsnd5a18b596110",
      "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    return result;
  } catch (error) {
    console.error(error);
  }
}