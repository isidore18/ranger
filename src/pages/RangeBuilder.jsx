import { useState } from "react";
import RangeGridComponent from "../components/RangeGridComponent";
import handsData from "../pokerSources/hands.json";

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

  console.log(handsData);

  return (
    <RangeGridComponent
      selectedCombos={selectedCombos}
      setSelectedCombos={updateSelectedCombos}
      resetSelectedCombos={resetSelectedCombos}
    />
  );
}
