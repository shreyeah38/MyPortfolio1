import React from 'react'
import './project.css'
import { FiGithub } from 'react-icons/fi'
import img from '/home/shreyarai0308/portfolio/src/Assets/profile.jpeg'


const data = [
  {
    id: 1,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 2,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 3,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 4,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 5,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 6,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 7,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 8,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  },
  {
    id: 9,
    image: img,
    demo: 'https://www.youtube.com/watch?v=Ei9bZJ-EG80',
    liveLink: '',
    github: '',
    title: 'Hotel Incidents Docket',
    desc: 'This is an active internal system for a certain Hotel, a Database that helps in storing all the incidents on hotel. ',
    tech1: 'Html',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech3: 'PHP',
  }
]

const project = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03</span>
          <h5 className="titleText">Projects
            <div className="underline">
              <span></span>
            </div>
          </h5>
      </div>
      <div className="projectContainer grid">
        {
          data.map(({id,github,image,livelink,desc,demo,title,tech1,tech2,tech3,tech4,})=>{
            return(
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={github} target="_blank">
                      <FiGithub className="icon"/>
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank">
                      <FiGithub className="icon"/>
                    </a>
                  </div>
                </div>
                <div className="imgDiv">
                <a href={github} target="_blank">
                  <img src={image} alt={title}/>
                </a>
                </div>
                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>
                <div className="desc">
                  {desc}
                </div>
                <div className="technologies flex">
                <small>{tech1}</small>
                <small>{tech2}</small>
                <small>{tech3}</small>
                <small>{tech4}</small>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default project