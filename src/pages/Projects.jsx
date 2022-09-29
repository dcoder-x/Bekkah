import React from 'react'
import { services } from '../data/services'
import '../styles/services.css'

const Projects = () => {
  return (
    <main id='services'>
    <div className="header">
      <div className="header-text">
        <p>
          Projects
        </p>
      </div>
      <div className="header-image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Doloremque itaque at 
        </p>
      
      </div>
    </div>
    {
      services.map((service)=>{
          return(
              <section className="service">
                  <div style={{width:"40%"}}>
                      <div className="title">
                          {
                              service.title
                          }
                      </div>
                      <p className='desc'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                          Dolore nulla quas quod vitae accusantium eum reprehenderit 
                          obcaecati ratione nesciunt, molestiae quaerat itaque 
                          explicabo perferendis necessitatibus, nobis suscipit, 
                          delectus repellat sequi!
                          Voluptas nobis ratione a earum laboriosam, sint ea quis 
                          quam reprehenderit ad. Eum at veniam magnam reiciendis 
                          ipsam, suscipit perferendis provident ducimus recusandae 
                          commodi. Molestias placeat ad ratione mollitia necessitatibus?
                      </p>
                  </div>
                  
                  <img src={service.img} alt="" />

              </section>  
          )
      })
    }
      <div className="book">
          <p>
              Have any project in mind??
          </p>
          <button>
              Contact Us
          </button>
      </div>
  </main>
  )
}

export default Projects