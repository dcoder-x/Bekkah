
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import React from 'react'
import { useRef } from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import { home } from '../assets/assets'
import { tabData } from '../data/tabData'
import '../styles/home.css'

const Home = () => {
    const heroref= useRef(null)
    const [index, setindex] = useState(0)
    const tl = useRef()
    const ref = useRef()
    const productRef = useRef()


    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
        const homeref = ref.current
        const products = document.querySelectorAll('.product')

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    gsap.fromTo(entry.target,
                        {
                            xPercent:100,
                            opacity:0,
                            stagger:1
                        },
                        {
                            xPercent:0,
                            opacity:1,
                            stagger:1,
                            duration:4,
                            ease:'power3.out',
                        }
                    )
                    // entry.target.style.display='none'
                    console.log(entry.target)
                }
            })
        })
        products.forEach(product=>{
            observer.observe(product)
        })
        
        tl.current = gsap.timeline()
        // .fromTo(homeref.querySelectorAll('.product'),
        // {
        //     y:100,
        //     opacity:0
        //   },
        //   {
        //     y:0,
        //     opacity:1,
        //     stagger:1,
        //     ease:'power3.out',
        //     scrollTrigger: {
        //       trigger: homeref.querySelector(".product"),
        //       start:'top center',
        //       // end: "center 100", pin:true,
        //       pinSpacing:false,
        //       toggleActions:'restart reverse restart reverse',
        //       // scrub: true,
        //       markers:true
        //     }
        //   }
        // )
        gsap.fromTo(homeref.querySelector('.hero-text'),{
            xPercent:-100,

        },
        {
            xPercent:0,
            ease:"power4.out",
            duration:3,
        })
        gsap.fromTo(homeref.querySelector('.hero-image'),
        {
            xPercent:100,

        },
        {
            xPercent:0,
            ease:'power1.out',
            duration:3,
        },
        '<'
        )
        gsap.fromTo(
            homeref.querySelector(".mission"),
            {
              yPercent:100,
              opacity:0
            },
            {
              yPercent:0,
              opacity:1,
              ease:'power3.out',
              duration:3,
              scrollTrigger: {
                trigger: homeref.querySelector(".mission"),
                start: "top bottom",
                // end: "center 100", pin:true,
                pinSpacing:false,
                toggleActions:'restart reverse restart reverse',
                // scrub: true,
                // markers:true
              }
            }
          );
          gsap.fromTo(
            homeref.querySelector(".goal"),
            {
              yPercent:100,
              opacity:0
            },
            {
              yPercent:0,
              opacity:1,
              ease:'power3.out',
              duration:3,
              scrollTrigger: {
                trigger: homeref.querySelector(".goal"),
                start: "top 200%",
                pinSpacing:false,
                // end: "center 100",
                toggleActions:'restart reverse restart reverse',
                // scrub: true,
                // markers:true
              }
            }
          );

    },[])

  return (
    <main id="home" ref={ref}>
        <section className='hero'>
            <div ref={heroref} className="hero-text">
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
            <div ref={productRef} className="product">
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
        <marquee behavior="" direction="">
            <div className="patners">
            <Icon icon="cib:co-op" />
            <Icon icon="carbon:logo-discord" />
            <Icon icon="carbon:logo-npm" />
            <Icon icon="carbon:logo-npm" />
            <Icon icon="dashicons:buddicons-buddypress-logo" />
            <Icon icon="carbon:logo-linkedin" />
            <Icon icon="carbon:logo-github" />
            <Icon icon="carbon:logo-python" />
            </div>
        </marquee>
        <section className="contact">
            
        </section>
    </main>
  )
}

export default Home