import Cards from "./components/Cards";
import Contador from "./components/contador";
import Topo from "./components/Topo";
import FLASHCARDS from "./Mock";
import styled from "styled-components";


export default function App() {
  return (
    <AppBody>
      <Header>
        <Topo />
      </Header> 
      <Cards flashcards={FLASHCARDS} />
      <Contador />
    </AppBody>
  )
  }

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #FB6B6B;
  height: 100%;
`

const Header = styled.header`
width: 255.60552978515625;
height: 60;
top: -3041px;
left: -635px;
`