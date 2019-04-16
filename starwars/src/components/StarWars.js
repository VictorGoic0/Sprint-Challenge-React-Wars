import React from 'react';
import './StarWars.css'

const StarWars = props => {
  return (
    <div className="character">
      <h2>{props.name}</h2>
      <p>Birth Year: {props.birth_year}</p>
      <p>Created: {props.created}</p>
      <p>Eye Color: {props.eye_color}</p>
      <p>Films: {props.films.map((input, index) => (
        <li className="list" key={index}>{input}</li>
      ))}</p>
      <p>Gender: {props.gender}</p>
      <p>Hair Color: {props.hair_color}</p>
      <p>Height: {props.height}</p>
      <p>Homeworld: {props.homeworld}</p>
      <p>Mass: {props.mass}</p>
      <p>Skin Color: {props.skin_color}</p>
      <p>Species: {props.species}</p>
      <p>Starships: {props.starships.map((input, index) => (
        <li className="list" key={index}>{input}</li>
      ))}</p>
      <p>URL: {props.url}</p>
      <p>Vehicles: {props.vehicles}</p>
    </div>
  )
}

export default StarWars
