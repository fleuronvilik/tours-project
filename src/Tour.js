import React, { useState } from 'react';

const Tour = (props) => {
  const [more, setMore] = useState(false);
  const {id, image, info, name, price, update} = props;
  const shortInfo = info.slice(0, 200);
  //console.log(shortInfo)
  return (
    <li className="single-tour">
      <img src={image} alt=""/>

      <footer>
        <h4 className="tour-info">
          {name} <span className="tour-price">${price}</span>
        </h4>

        <p>{more ? info : `${shortInfo}...`}
          <button onClick={() => setMore(!more)}>
            {more ? "Show Less" : "Read More"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => update(id)}>
          Not Interested
        </button>
      </footer>
    </li>
  );
};

export default Tour;
