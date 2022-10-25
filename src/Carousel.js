import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './css/Carousel.css'

function CarouselComponent() {
  return (
    <div className='carousel-size mb-5'>
      <div className='projects-container'>
        <h3 className='text-center mb-5 '>Projects.</h3>
        <hr className='mt-5 mb-5 hr-carousel' />
      </div>
      <div className='carousel'>
        <Carousel interval={10000} className='w-100'>
          <Carousel.Item>
            <div className='w-100'>
              <iframe
                title='werkin'
                className='iframe-block w-100'
                src='https://www.werklify.com'
              ></iframe>
            </div>

            <Carousel.Caption className='caption-carousel'>
              <h2 className='text-black'>Werklify</h2>
              <p className='text-black'>
                Built and deployed social-media/job-posting site using React,
                Redux, Firebase Authentication, Storage and Firestore DB.
              </p>

              <a
                class='btn btn-outline-primary'
                href='https://www.werklify.com'
                target='_blank'
                rel='noreferrer'
              >
                Connect
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='w-100'>
              <iframe
                title='tree-map'
                className='iframe-block w-100'
                src='https://distracted-sammet-cde354.netlify.app/'
              ></iframe>
            </div>

            <Carousel.Caption className='caption-carousel'>
              <h3 className='text-black'>Tree Map</h3>
              <p className='text-black'>
                Developed a tree map that displays location and conditions of
                NYC trees utilizing google maps API and open-source data.
              </p>
              <a
                class='btn btn-outline-primary'
                href='https://distracted-sammet-cde354.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Connect
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselComponent
