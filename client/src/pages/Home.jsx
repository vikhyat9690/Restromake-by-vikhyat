import About from '../components/About'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Menu from '../components/Menu'
import Qualities from '../components/Qualities'
import Reservation from '../components/Reservation'
import Team from '../components/Team'
import WhoWeAre from '../components/WhoWeAre'

function Home() {
  return (
    <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoWeAre/>
        <Team/>
        <Reservation/>
        <Footer/>
    </>
  )
}

export default Home