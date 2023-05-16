import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import classes from "./AuthForm.module.css";

function Home() {
  const events = useLoaderData();
  let currentDate = new Date().toJSON().slice(0, 10);
  const funActivities = [
    "Picnic in Park",
    "Beach Volleyball",
    "Movie Marathon",
    "Scavenger Hunt",
    "Karaoke Night",
  ];
  const photos = ["Photo", "Photo", "Photo", "Photo"];
  return (
    <React.Fragment>
      <div id={classes["photo-container"]}>
        {photos.map((photo, index) => (
          <div key={index}>
            <p>{photo}</p>
          </div>
        ))}
      </div>

      <h2>Alternative Choices: </h2>

      <ul className={classes.ul}>
        {funActivities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>

      <div id={classes["main-container"]}>
        <div id={classes["text-box"]}>
          <p>Hello XYZ,</p>
          <p>Your recommended activity for {currentDate} is:</p>
          <ul className={classes.ul}>
            <li>
              <b>Activity:</b> {events.activity}
            </li>
            <li>
              <b>Type: </b>
              {events.type}
            </li>
            <li>
              <b>Participants: </b>
              {events.participants}
            </li>
          </ul>
          <p>
            Regards,<br></br>ABC
          </p>
        </div>

        <div>
          <Link id={classes["confirmButton"]} className={classes.link} to={"/"}>
            Confirm
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
