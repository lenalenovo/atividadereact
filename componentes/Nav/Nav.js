import { ContainerNav, TodaNav } from "./styled"




function Nav(){
    return(
        <TodaNav>
            <ul>
              <ContainerNav class="botoes-meunu-vertical">Início</ContainerNav>
              <ContainerNav class="botoes-meunu-vertical">Em alta</ContainerNav>
              <ContainerNav class="botoes-meunu-vertical">Inscrições</ContainerNav>
              <hr></hr>
              <ContainerNav class="botoes-meunu-vertical">Originais</ContainerNav>
              <ContainerNav class="botoes-meunu-vertical">Histórico</ContainerNav>
            </ul>
          </TodaNav>
    )
}

export default Nav