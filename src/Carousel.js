import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './css/Carousel.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function CarouselComponent() {
  return (
    <div className='carousel-size mb-5'>
      <div className='project-container'>
        <h3 className='text-center mb-5 '>Projects.</h3>
        <hr className='mt-5 mb-5 hr-carousel' />
      </div>
      <Carousel interval={10000} className='mt-5'>
        <Carousel.Item>
          <div className='w-100'>
            <iframe
              className='iframe-block w-100'
              src='https://werkin.netlify.app/'
            ></iframe>
          </div>

          <Carousel.Caption className='caption-carousel'>
            <h2 className='text-black'>Werkin</h2>
            <p className='text-black'>
              Built and deployed social-media/job-posting site using React,
              Redux, Firebase Authentication, Storage and Firestore DB.
            </p>

            <a
              class='btn btn-outline-primary'
              href='https://werkin.netlify.app/'
              target='_blank'
            >
              Connect
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='w-100'>
            <iframe
              className='iframe-block w-100'
              src='https://distracted-sammet-cde354.netlify.app/'
            ></iframe>
          </div>

          <Carousel.Caption className='caption-carousel'>
            <h3 className='text-black'>Tree Map</h3>
            <p className='text-black'>
              Developed a tree map that displays location and conditions of NYC
              trees utilizing google maps API and open-source data.
            </p>
            <a
              class='btn btn-outline-primary'
              href='https://distracted-sammet-cde354.netlify.app/'
              target='_blank'
            >
              Connect
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <div className='w-100'>
            <iframe
              className='iframe-block w-100'
              src='https://afternoon-woodland-43403.herokuapp.com/'
            ></iframe>
          </div>

          <Carousel.Caption>
            <h3 className='text-white'>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}

export default CarouselComponent
