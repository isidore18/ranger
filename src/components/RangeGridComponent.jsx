import React, { useState } from "react";
import HandSquareComponent from "./HandSquareComponent";
import handsData from "../pokerSources/hands.json";

export default function RangeGridComponent() {
  const [selectedCombos, setSelectedCombos] = useState([]);

  const updateSelectedCombos = (combo) => {
    console.log(combo);
    if (selectedCombos.includes(combo)) {
      setSelectedCombos(selectedCombos.filter((element) => element !== combo));
    }
    const newSelection = [...selectedCombos, combo];
    console.log(newSelection);
    setSelectedCombos(newSelection);
  };
  return (
    <>
      <div className="handgrid">
        {Object.values(handsData).map((element) => {
          return element.map((e) => (
            <HandSquareComponent
              hand={e}
              key={e.hand}
              updateSelectedCombos={updateSelectedCombos}
            />
          ));
        })}
      </div>
      <p>
        {selectedCombos.length} / {1326}
      </p>
    </>
  );
}
