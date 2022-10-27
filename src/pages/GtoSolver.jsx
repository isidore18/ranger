import { useState, useEffect } from "react";
import RangeGridComponent from "../components/RangeGridComponent";
import ranges from "../pokerSources/preflop.json";
import { countHandsFunction } from "../components/helperElements/calculations";
import { hands } from "../components/helperElements/hands";
import { GtoSolver } from "../components/GtoSolver";
import NavBar from "../components/NavBar";
const stackChoices = [
  100, 80, 60, 50, 40, 35, 30, 20, 17, 14, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2,
];

export default function GtoSolverApp() {
  const [stacksize, setStacksize] = useState("big");
  const [numberOfBigs, setNumberOfBigs] = useState(40);
  const [selectedTableSize, setSelectedTableSize] = useState(8);
  const [positionChoice, setPositionChoice] = useState("utg");
  const [selectedCombos, setSelectedCombos] = useState([]);


  useEffect(() => {
    const newHands = countHandsFunction(positionChoice, numberOfBigs, hands);
    setSelectedCombos(newHands);
  }, [positionChoice, numberOfBigs, stacksize]);

  const range =
    ranges[`_${numberOfBigs}bb`][positionChoice.toLowerCase()] || null;
  const { raise, allin, call } = positionChoice
    ? ranges[`_${numberOfBigs}bb`][positionChoice.toLowerCase()]
    : null;

  return (
    <div className="gto-solver-container">
      <NavBar />
      <div className="gto-solver-body">
        {positionChoice && (
          <div className="flex-row jcse">
            <div className="title">
              Raise : <span className="raiseFont">{raise}</span>{" "}
            </div>
            <div className="title">
              Call : <span className="callFont">{call}</span>{" "}
            </div>
            <div className="title">
              All-in : <span className="allinFont">{allin}</span>
            </div>
          </div>
        )}
        <RangeGridComponent
          selectedCombos={selectedCombos}
          selectedRange={range}
        />
        <div className="gto-solver-options">
          <GtoSolver
            stacksize={stacksize}
            setStacksize={setStacksize}
            numberOfBigs={numberOfBigs}
            setNumberOfBigs={setNumberOfBigs}
            selectedTableSize={selectedTableSize}
            setSelectedTableSize={setSelectedTableSize}
            positionChoice={positionChoice}
            setPositionChoice={setPositionChoice}
            ranges={ranges}
            stackChoices={stackChoices}
          ></GtoSolver>
        </div>
      </div>
    </div>
  );
}
