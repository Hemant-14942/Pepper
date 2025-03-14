import React from 'react'
import HeroSection from '../components/HeroSection'
import LabelledSection from '../components/LabelledSection'
import HeroCard from '../components/HeroCard'
import CardsSection from '../components/CardsSection'
import AnimCards from '../components/AnimCards'
import AnimCardsSec from '../components/AnimCardsSec'
import  Dropdown  from '../components/Dropdown'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <LabelledSection/>
      <CardsSection/>
      <AnimCardsSec/>
    </div>
  )
}

export default Home
