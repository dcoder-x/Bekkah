import React from 'react'
import { about, headerImg } from '../assets/assets'
import Header from '../components/Header'
import '../styles/about.css'

const About = () => {
  return (
    <main id="about">
      <Header 
      pageTitle={'About Us'}
      desc={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Doloremque itaque at `}
      bgImage={headerImg.digital}
      />
        <section className="backstory">
          <h2>
            Back Story
          </h2>
          <hr />
          <div className='content'>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium molestiae distinctio quidem officia suscipit 
              culpa beatae, nulla illo. Esse omnis aliquam placeat 
              sapiente vel temporibus iure eum culpa expedita reprehenderit.
              Tenetur a, impedit officiis autem illum ratione laborum fugit 
              ea ut hic incidunt, modi doloremque eos porro provident sint 
              soluta repudiandae eligendi dolorem sequi, vero eaque. Corrupti 
              nulla odio temporibus.
              Fugit dolorem praesentium iste facilis ipsam, tenetur, fugiat 
              iure, pariatur ducimus porro inventore eius tempora doloremque 
              nobis cumque similique magni voluptatibus. Perspiciatis, dolorum 
              eum cumque deleniti deserunt quae quidem quas!
            </p>
            <img src={about.backstory} className='content-image' alt="" />
          </div>


        </section>
        <section className="mission">
          <h2 style={{textAlign:"right"}}>
            Mission
          </h2>
          <hr />
          <div className="content" style={{flexDirection:"row-reverse",borderRight:'none',borderLeft:'1px solid white'}}>
            <div className='text'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quos aut sapiente consequatur. Sunt sint, aliquam labore dolores 
                quia libero fugit accusantium, 
                vitae repellat doloremque esse autem. Aliquam repellat tempore quisquam.
              </p>
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <img src={about.aboutmission} alt="" />

          </div>

        </section>
        <section className="vision">
          <h2>
            Vision
          </h2>
          <hr />
          <div className="content">
            <div className='text'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quos aut sapiente consequatur. Sunt sint, aliquam labore dolores 
                quia libero fugit accusantium, 
                vitae repellat doloremque esse autem. Aliquam repellat tempore quisquam.
              </p>
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <img src={about.vision} alt="" />

          </div>

        </section>
        <section className="team">
          <h2>
            Team
          </h2>
          <div className="members">
            <div className="teammate">
              <img src={about.sample} alt="" />
              <p>
                Richard
              </p>
              <p>
                Co-founder
              </p>
            </div>
            <div className="teammate">
              <img src={about.sample} alt="" />
              <p>
                Olawale
              </p>
              <p>
                Co-founder
              </p>
            </div>
            <div className="teammate">
              <img src={about.sample} alt="" />
              <p>
                Omobankole
              </p>
              <p>
                Frontend developer
              </p>
            </div>
            <div className="teammate">
              <img src={about.sample} alt="" />
              <p>
                Wisdom
              </p>
              <p>
                Frontend devloper
              </p>
            </div>
          </div>

        </section>
    </main>
  )
}

export default About