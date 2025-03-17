import { useState } from "react";
import Cards from "./components/Cards";
import Contador from "./components/contador";
import Topo from "./components/Topo";
import FLASHCARDS from "./Mock";
import styled from "styled-components";


export default function App() {
  const [completedCount, setCompletedCount] = useState(0);

  const incrementCompletedCount = () => {
    setCompletedCount(prevCount => prevCount + 1);
  };

  return (
    <AppBody>
      <Header>
        <Topo />
      </Header> 
      <Cards flashcards={FLASHCARDS} incrementCompletedCount={incrementCompletedCount} />
      <Footer>
        <Contador completedCount={completedCount} flashcards={FLASHCARDS}/>
      </Footer>
    </AppBody>
  )
  }

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #FB6B6B;
  min-height: 100vh; /* Garante pelo menos a altura da tela */
  overflow-y: auto; /* Permite rolagem se o conteúdo for maior que a tela */
  position: relative;
  padding-bottom: 70px; /* Evita que o footer cubra conteúdo */
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: white;
    width: 100%;
    height: 70px;
    bottom: 0px;

`

const Header = styled.header`
  width: 255.60552978515625;
  height: 60;
  top: -3041px;
  left: -635px;
`