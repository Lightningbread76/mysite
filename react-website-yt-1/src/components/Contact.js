import React from 'react'
import './Cards.css';
import Card from 'react-bootstrap/Card'
import Skillcard from './Skillcard'
function Contact() {
    return (
        <div className='cards'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='cards__portrait'>
            <img
              src='images/goodlookin.jpg'
              alt=''
            />
            </div>
            <div className='cards__item'>
            <Card className="category-title">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="card-title">Contact Info: (I will most likely respond to emails)</Card.Title>
                <hr />
                <Card.Text className="card-text">
                <Skillcard
                  src = 'images/insta.png'
                  text = "I kevinguo76"
                  path = "https://www.instagram.com/kevinguo76/"
                  />
                  <Skillcard
                  src = 'images/gmaillogo.png'
                  text = "Gma kg76@bu.edu"
                  path = "gmail.com"
                  />
                  <Skillcard
                  src = 'images/linkedin.png'
                  text = ""
                  path = "https://www.linkedin.com/in/kevin-guo-a24123196/"
                  />
                  </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </ul>

          </div>

      </div>
    )
}

export default Contact
