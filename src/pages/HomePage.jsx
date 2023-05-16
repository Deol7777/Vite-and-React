import Home from "../components/Home";

function HomePage() {
  return <Home />;
}

export default HomePage;

export async function loadEvents() {
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate); // "2022-06-17"

  const url = "https://www.boredapi.com/api/activity";
  console.log(url);

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
