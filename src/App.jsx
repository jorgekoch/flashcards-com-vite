import Cards from "./components/Cards";
import Contador from "./components/contador";
import Topo from "./components/Topo";
import FLASHCARDS from "./Mock";


export default function App() {
  return (
    <>
      <Topo />
      <Cards flashcards={FLASHCARDS} />
      <Contador />
    </>
  )

  }

