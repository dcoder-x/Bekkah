import React from 'react'
import { useState } from 'react'
import { home } from '../assets/assets'
import { tabData } from '../data/tabData'
import '../styles/home.css'

const Home = () => {
    const [index, setindex] = useState(0)
  return (
    <main id="home">
        <section className='hero'>
            <div className="hero-text">
                <h2>
                We build technology for humanity
                </h2>
                <p>
                Based on nuanced thinking, holistic action, and cutting-edge innovation.
                </p>
            </div>
            <div className="hero-image">
                <div className="bg">

                </div>
                <img src={home.heroimg} alt="" />
            </div>
        </section>
        <section className="mission">
            <p>
                Our mission
            </p>
            <h3>
            Our products continuously raise the bar in the human flourishing space.
            </h3>
        </section>
        <section className="goal">
            <div className="header">
                <p>
                    How do we help
                </p>
                <h3>
                We nurture humanity’s potential to become the most 
                resilient and compassionate civilization in history.
                </h3>
            </div>
            <div className="tab">
                <ul>
                    <p className='index'>
                        {
                            `0${index+1} - 0${tabData.length}`
                        }
                    </p>
                    {
                        tabData.map((tab,i)=>{
                            return(
                                <li onClick={e=>{
                                    setindex(i)
                                }}
                                className={i==index?'active':null}
                                >
                                    {
                                        tab.name
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="tab-info">
                    <img src={tabData[index].image} alt="" />
                    <p className="desc">
                        {
                            tabData[index].desc
                        }
                    </p>
                    <button>
                        Learn more
                    </button>
                </div>
            </div>
        </section>
        <section className="Products">
            <p style={{fontSize:'25px'}} className={'title'}>
            Products
            </p>
            <p className='subtitle' >
            Check out our newest applications
            </p>
            <div className="product">
                <img  src={home.track} alt="" />
                <div className="product-text">
                    <p className='title'>
                    Scientific Self-Discovery
                    </p>
                    <p className='subtitle'>
                    Making self-awareness gains fun and scientific.
                    </p>
                    <button className="action-btn">
                        Join wait list
                    </button>
                </div>
            </div>
            <div className="product">
                <img  src={home.science} alt="" />
                <div className="product-text">
                    <p className='title'>
                    Tenacious Tracking
                    </p>
                    <p className='subtitle'>
                    Discover what makes YOU happy, energized, and fulfilled.
                    </p>
                    <button className="action-btn">
                        Join wait list
                    </button>
                </div>
            </div>
        </section >
        <section className="founder">
            <img src={home.founder} alt="" />
            <div className="text">
                <p className="title">
                    Founder
                </p>
                <p className='intro'>
                    Meet Richard, founder of Bekkah AI
                </p>
                <p className="info">
                " We need to create scalable interventions that empower humans much better than anything 
                currently out there. There are already a lot of large-scale interventions 
                (e.g., conventional apps, books, online courses, podcasts) but they are all highly untailored 
                and without a serious drive to evaluate and improve their impact.
                Based on my     deep expertise from working as a scientist and life coach, 
                I see many opportunities to build unprecedentedly impactful products that promote flourishing at great scale”
                </p>
            </div>
        </section>
        <section className="roadmap">
            <div className="text">
                <p style={{fontSize:'20px'}}>
                ROADMAP 2022
                </p>
                <p className='subtitle'>
                Current roadmap for our upcoming two digital products
                </p> 
            </div>

            <div className="roadmap-chart">
                <img src={home.roadmap} alt="" />
            </div>
        </section>
    </main>
  )
}

export default Home