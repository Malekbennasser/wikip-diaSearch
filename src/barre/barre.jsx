import { useEffect, useState } from "react";
import Menu from "../menu/menu";
import List from "../list/list";
import "./barre.css";

function Barre() {
  const [input, setInput] = useState("");
  const [Array, setArray] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  async function Actus() {
    let response = await fetch(
      ` https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${input}&format=json`
    );
    console.log(response);
    let donnes = await response.json();
    console.log(donnes);
    setArray(donnes[3]);
    console.log("1", donnes);
  }
  useEffect(() => {
    console.log("Array", Array);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderList = () => {
    return Array.map((item, index) => {
      return (
        <div key={index}>
          <List content={item} />
        </div>
      );
    });
  };
  return (
    <div className="barre">
      <Menu />
      <input type="text" onChange={handleInput} />
      <button onClick={Actus}>Valider</button>
      <ul>{renderList()}</ul>
    </div>
  );
}

export default Barre;
