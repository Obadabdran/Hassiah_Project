import {Header,Footer,ClientsInfo} from './secations/index'
import {Container,Reservation} from  './components/index'
function App() {
  

  return (
    <>
     <Header/>
     <Container>
      <Reservation/>
     </Container>
     <Footer/>
    </>
  )
}

export default App
