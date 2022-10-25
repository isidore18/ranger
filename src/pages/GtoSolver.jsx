import { useState, useEffect } from "react";
import RangeGridComponent from "../components/RangeGridComponent";
import ranges from "../pokerSources/preflop.json";
import { countHandsFunction } from "../components/helperElements/calculations";
import { hands } from "../components/helperElements/hands";
import stackChoiceFunction from "../components/helperElements/stacks";
import { GtoSolver } from "../components/GtoSolver";

export default function GtoSolverApp() {
  const [stacksize, setStacksize] = useState("big");
  const [numberOfBigs, setNumberOfBigs] = useState(100);
  const [selectedTableSize, setSelectedTableSize] = useState(8);
  const [positionChoice, setPositionChoice] = useState("utg");
  const [selectedCombos, setSelectedCombos] = useState([]);

  const choices = stackChoiceFunction(stacksize);

  const countHands = () => {
    const newHands = countHandsFunction(
      positionChoice,
      numberOfBigs,
      stacksize,
      hands
    );
    setSelectedCombos(newHands);
  };

  useEffect(() => {
    const newHands = countHandsFunction(
      positionChoice,
      numberOfBigs,
      stacksize,
      hands
    );
    setSelectedCombos(newHands);
  }, [positionChoice, numberOfBigs, stacksize]);

  const range = ranges[`_${numberOfBigs}bb`][positionChoice.toLowerCase()];

  return (
    <div className="app">
      <div className="col">
        <h1>Ranger</h1>
        <GtoSolver
          stacksize={stacksize}
          setStacksize={setStacksize}
          numberOfBigs={numberOfBigs}
          setNumberOfBigs={setNumberOfBigs}
          selectedTableSize={selectedTableSize}
          setSelectedTableSize={setSelectedTableSize}
          positionChoice={positionChoice}
          setPositionChoice={setPositionChoice}
          choices={choices}
          countHands={countHands}
          ranges={ranges}
        ></GtoSolver>
      </div>
      <div className="col">
        <RangeGridComponent
          selectedCombos={selectedCombos}
          selectedRange={range}
        />
      </div>
    </div>
  );
}
