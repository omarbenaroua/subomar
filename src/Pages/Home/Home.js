import {Landing, Equipment, DivingGuide, Footer, Gallery, Clubs} from '../../sections/index';
import {Container} from '../../components/index';

const Home = () => {
  return (
    <>
    <Landing/>
    <Container>
      <Clubs/>
      <Equipment/>
      <DivingGuide/>
    </Container>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Home