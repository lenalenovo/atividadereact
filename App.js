import "./style.css"
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Nav from './componentes/Nav/Nav'
import Home from './page/Home/Home'
import StyledGlobal, { Body, ContainerMain, PaineldeVideo, TelaInteira } from "./styledGlobal.jsx"


function App() {
  function alertovideo(onClick) {
    alert("O vídeo não está sendo reproduzido");
  }
  return (
    <> 
    <StyledGlobal/>
      <TelaInteira>
        <Header/>
        <ContainerMain>
          <Nav/>
          <PaineldeVideo>
          <Home reproduz={alertovideo}/>
          </PaineldeVideo>
        </ContainerMain>
        <Footer/>
      </TelaInteira> 

    </>
  );
}

export default App;
