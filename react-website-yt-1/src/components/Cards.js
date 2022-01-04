import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Card from './Card';
import Icon from './Icon';

function Cards() {
  return (
    <div className='cards'>
      <h1>About Me:</h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='cards__portrait'>
            <Icon
              src='images/goodlookin.jpg'
              path='/services'
              text = "-------------------------------"
            />
            </div>
            <Card
              text="As someone who has been coding since the age of 14, I consider myself a relatively experienced programmer. I’ve done a variety of projects in different fields, my most notable ones are the Note taking android app(Checkmate) and an interactive web book website. 

              What I can bring to the table is a deep understanding in Object Oriented Programming,HTML/CSS,  javascript, typescript, MongoDB and Firebase. 
              I also have experience in python, R, and the agile development workflow from my past internships and classes.
              
              I am a fast learner, especially when I come to develop a passion for the subject. My favorite method of learning is pair programming as we can not only share and exchange our knowledge but also create a sense of understanding and comradeship. 
              One of my strengths is having the ability to recognize who is best at doing what while working in a team environment and I often use that intuition to maximize efficiency and productivity.
              "
            />
          </ul>
          </div>
          <div className='cards'>
          <h2>Hobbies:</h2>
          <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Sports'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      </div>
  );
}

export default Cards;
