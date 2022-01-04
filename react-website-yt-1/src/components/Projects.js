import React from 'react'
import './Cards.css';
import CardItem from './CardItem';
import Project from './Project';
function Projects() {
    return (
           <div className='cards'>
          <div className='cards__container'>
          <ul className='cards__items'>
            <Project
              src='images/checkmate_logo.png'
              text='Checkmate - a Note taking android app'
              label='Checkmate'
              path='https://www.youtube.com/watch?v=zKhZutb--Yc'
            />
            <Project
              src='images/fractalist.png'
              text='Fractalist - Generate unique fractals with spotify playlists'
              label='Fractalist'
              path='https://quence-dev.github.io/fractalist/index.html'
            />
            <Project
              src='images/melspec.png'
              text='Social Sentiment Project - using machine learning to analyze sentiment in audio clips'
              label='Social Sentiment Project'
              path='https://github.com/ksapru/BU-SocialSentiment583'
            />
          </ul>
        </div>
      </div> 

    )
}

export default Projects
