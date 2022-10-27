import { useState, useEffect } from "react";
import handsData from "../pokerSources/hands.json";
import NavBar from "../components/NavBar";
import BuilderGrid from "../components/BuilderGrid";

const hands = Object.values(handsData)
  .map((element) => element)
  .flat()
  .map((e) => {
    e.isRaiseHand = false;
    e.isAllinHand = false;
    e.isCallHand = false;
    return e;
  });

export default function RangeBuilderApp() {
  const [selectedCombos, setSelectedCombos] = useState([]);

  const updateSelectedCombos = (combo, bool = false) => {
    console.log("update", combo);
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

  const selectPockets = (action) => {
    const pockets = hands.filter((e) => e.hand[0] === e.hand[1]);
    setSelectedCombos([
      ...selectedCombos,
      ...pockets.map((p) => {
        p[action] = true;
        return p;
      }),
    ]);
  };

  const selectHighCard = (highcard, action) => {
    const cards = hands.filter((e) => e.hand[0] === highcard);
    setSelectedCombos([
      ...selectedCombos,
      ...cards.map((p) => {
        p[action] = true;
        return p;
      }),
    ]);
    return cards;
  };

  function exportUserInfo() {
    const cp = [...selectedCombos];
    cp.map((element) => {
      return {
        hand: element.hand,
        numberOfCombos: element.numberObCombos,
        rank: element.range,
      };
    });
    const fileData = JSON.stringify(selectedCombos);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.json";
    link.href = url;
    link.click();
  }
  useEffect(() => {
    console.log(selectedCombos);
  }, [selectedCombos]);

  return (
    <>
      <NavBar />
      <BuilderGrid
        selectedCombos={selectedCombos}
        setSelectedCombos={updateSelectedCombos}
        resetSelectedCombos={resetSelectedCombos}
        selectHighCard={selectHighCard}
        selectPockets={selectPockets}
        exportUserInfo={exportUserInfo}
        hands={hands}
      />
    </>
  );
}
