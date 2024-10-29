import React from 'react'
import Section2 from './Section2'
import Footer from './Footer'
import './css/Cards.css'

function AboutMe() {
  return (
    <section>
      <div className='container mt-5'>
        <div className='text-center mb-4'>
          <h1 className='display-4 fw-bold about-heading'>About Me</h1>
          <h3 className='title-primary lead mt-5 mb-5'>
            A Full Stack Developer based in Louisville, Kentucky
          </h3>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <p className='about-text fs-5'>
              I’m passionate about problem-solving and enjoy breaking down
              complex challenges into manageable steps to create effective
              solutions. With over 5 years of experience in web development, I
              specialize in creating efficient, user-friendly applications.
            </p>
            <p className='about-text fs-5'>
              My primary expertise lies in React.js, but my skill set extends
              across Python, Java, and a diverse array of other technologies
              including HTML, CSS, JavaScript, Jest, React Testing Library, SQL,
              NoSQL, Express, and Node.js. I’m also well-versed in modern
              styling libraries like Material UI, Tailwind CSS, and Bootstrap.
            </p>
            <p className='about-text fs-5'>
              Adaptability and a commitment to lifelong learning are at the core
              of my professional philosophy. I thrive in environments that
              challenge me to learn new technologies and continuously enhance my
              skill set.
            </p>
          </div>
        </div>
      </div>
      <hr className='about-hr mt-5' />
      <Section2 />
      <Footer />
    </section>
  )
}

export default AboutMe
