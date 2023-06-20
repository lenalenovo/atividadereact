import { ContainerHeader } from "./styled"

function Header(){
    return(
        // <header>
        <ContainerHeader>
        <h1>Video</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        {/* // </header> */}
        </ContainerHeader>

    )
}

export default Header