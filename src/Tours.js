import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (
    <ul>
      {props.tours.map(tour => {
        return <Tour key={tour.id} {...tour} update={props.update}/>
      })}
    </ul>
  );
};

export default Tours;
