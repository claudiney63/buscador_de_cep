import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep..."></input>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFFF"></FiSearch>
        </button>
      </div>

      <main>
        <h2>Cep: 4565432</h2>

        <span>Rua: Teste</span>
        <span>Complemento: vhhkjl</span>
        <span>Cila Rosa</span>
        <span>Campo Grande</span>
      </main>
    </div>
  );
}

export default App;
