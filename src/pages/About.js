import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(()=> {
    const getAbout = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        console.log(data)
        setAbout(data)
    };
    getAbout()}, [props.URL]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;