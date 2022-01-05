import React from 'react';
//import { Link } from 'react-router-dom';

function Textcard(props) {
  return (
    <>
      <li className='cards__item'>

          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <br></br>
            <h5 className='cards__item__text'>{props.text1}</h5>
          </div>
      </li>
    </>
  );
}

export default Textcard;
