import styled from "styled-components";

export const ContainerCard = styled.div `
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin; 
    align-items: start;
    justify-items: stretch;  
    width: 250px;
    justify-content: space-between;
`
export const ContainerImg = styled.img`
    width: 250px;
    height: 100%;
     display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

