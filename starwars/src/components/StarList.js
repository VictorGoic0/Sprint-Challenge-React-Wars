import React from 'react';
import StarWars from './StarWars';
import './StarWars.css'

const StarList = props => {
  return props.starwarsChars.map((input, index) => (
    <StarWars
     name={input.name}
     birth_year={input.birth_year}
     created={input.created}
     eye_color={input.eye_color}
     films={input.films}
     gender={input.gender}
     hair_color={input.hair_color}
     height={input.height}
     homeworld={input.homeworld}
     mass={input.mass}
     skin_color={input.skin_color}
     species={input.species}
     starships={input.starships}
     url={input.url}
     vehicles={input.vehicles}
     key={index}
     />
  ))
}

export default StarList;
