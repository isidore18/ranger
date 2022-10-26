import { useState } from "react";
import RangeGridComponent from "../components/RangeGridComponent";
import handsData from "../pokerSources/hands.json";
import NavBar from "../components/NavBar";

const hands = Object.values(handsData)
  .map((element) => element)
  .flat();

export default function RangeBuilderApp() {
  const [selectedCombos, setSelectedCombos] = useState([]);

  const updateSelectedCombos = (combo, bool = false) => {
    if (!bool && selectedCombos.includes(combo)) {
      setSelectedCombos(selectedCombos.filter((element) => element !== combo));
      return;
    }
    const newSelection = [...selectedCombos, combo];
    const unique = [...new Set(newSelection)];
    setSelectedCombos(unique);
  };

  const resetSelectedCombos = () => {
    setSelectedCombos([]);
  };

  const selectPockets = () => {
    const pockets = hands.filter((e) => e.hand[0] === e.hand[1]);
    setSelectedCombos([...selectedCombos, ...pockets]);
  };

  const selectHighCard = (highcard) => {
    const aces = hands.filter((e) => e.hand[0] === highcard);
    setSelectedCombos([...selectedCombos, ...aces]);
  };

  return (
    <>
      <NavBar />
      <RangeGridComponent
        selectedCombos={selectedCombos}
        setSelectedCombos={updateSelectedCombos}
        resetSelectedCombos={resetSelectedCombos}
        selectHighCard={selectHighCard}
        selectPockets={selectPockets}
      />
    </>
  );
}
