import { ContainerCard, ContainerImg } from "./styled"


function Card(props){
    return(
        <ContainerCard class="box-pagina-principal media1" onClick={props.reproduz}>
        <ContainerImg src={props.link} alt=""></ContainerImg>
        <h4>{props.titulo}</h4>
       </ContainerCard>
     
    )
}

export default Card 