import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './css/Carousel.css'

function CarouselComponent() {
  return (
    <div className='carousel-size mb-5'>
      <h3 className='text-center mb-5'>Projects.</h3>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 className='text-white'>Werkin</h3>
            <p>
              {' '}
              Built and deployed social-media/job-posting site using React,
              Redux, Firebase Authentication, Storage and Firestore DB.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 className='text-white'>Tree Map</h3>
            <p>
              {' '}
              Developed a Tree map that displays location and conditions of NYC
              trees utilizing google maps API and open-source data.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3 className='text-white'>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
