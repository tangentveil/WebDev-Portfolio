import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64' />

            <article>
                <SectionTitle text='code and coffee'/>

                <p className='text-slate-600 mt-6 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla repudiandae incidunt! Odio rem id molestiae aspernatur asperiores, a perspiciatis, ex exercitationem ipsam magnam aliquam quaerat laudantium quos. Repellendus nihil quia nisi facilis minus beatae corrupti, nulla ipsam expedita culpa?</p>
            </article>
        </div>
    </section>
  )
}

export default About