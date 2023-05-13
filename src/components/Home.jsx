import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import classes from "./AuthForm.module.css";

function Home() {
  const events = useLoaderData();
  //console.log(events.results);

  let currentDate = new Date().toJSON().slice(0, 10);
  const teamList = [
    "CSK",
    "DC",
    "GT",
    "KKR",
    "LSG",
    "MI",
    "PBKS",
    "RR",
    "RCB",
    "SRH",
  ];
  const [currentTeam, setcurrentTeam] = useState(0);
  const currentTeamHandler = () => {
    setcurrentTeam((prev) => (prev + 1) % teamList.length);
  };
  return (
    <React.Fragment>
      <h1>  A Team in IPL 2023: {teamList[currentTeam]} </h1>
      <h2>Matches for the date: {currentDate}</h2>
      <ul>
        {events.results.map((match) => (
          <li key={match.id}>
            {match.match_title}&nbsp;
            {match.result}
          </li>
        ))}
      </ul>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="randomBox">A Random Text Box</label>
          <input id="randomBox" type="text" name="randomBox" required />
        </p>
      </Form>
      <button onClick={currentTeamHandler}>Change Team</button>
      <Link className={classes.link} to={"/"}>
        Go back to login
      </Link>
    </React.Fragment>
  );
}

export default Home;
