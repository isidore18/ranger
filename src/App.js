import "./App.css";
import { useState, useEffect } from "react";

import StackChoice from "./components/StackChoiceComponent";
import NumberOfBbbsChoice from "./components/NumberOfBbbsChoiceComponent";
import RangeGridComponent from "./components/RangeGridComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import handsData from "./pokerSources/hands.json";
import TableChoice from "./components/TableChoiceComponent";
import PositionChoice from "./components/PositionChoiceComponent";
import ranges from "./pokerSources/preflop.json";

const totalCombos = 1326;

function App() {
  const [stacksize, setStacksize] = useState("big");
  const [numberOfBigs, setNumberOfBigs] = useState(100);
  const [selectedTableSize, setSelectedTableSize] = useState(8);
  const [positionChoice, setPositionChoice] = useState("utg");

  const shallowStackChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const smallStackChoices = [10, 12, 14, 17, 20, 25];
  const bigStackChoices = [30, 35, 40, 50, 60, 80, 100];

  const choices =
    stacksize === "shallow"
      ? shallowStackChoices
      : stacksize === "small"
      ? smallStackChoices
      : bigStackChoices;

  return (
    <div className="app">
      <div className="col">
        <h1>Ranger</h1>
        <StackChoice setStackSize={setStacksize} stacksize={stacksize} />
        <NumberOfBbbsChoice
          stacksize={stacksize}
          setNumberOfBigs={setNumberOfBigs}
          choices={choices}
          numberOfBigs={numberOfBigs}
        />

        <TableChoice
          setSelectedTableSize={setSelectedTableSize}
          selectedTableSize={selectedTableSize}
        />

        <PositionChoice
          selectedTableSize={selectedTableSize}
          setPositionChoice={setPositionChoice}
          positionChoice={positionChoice}
        />

        <div className="row">
          {" "}
          {positionChoice && (
            <div>
              Raise:{" "}
              {ranges[`_${numberOfBigs}bb`][positionChoice.toLowerCase()].raise}{" "}
              Call:{" "}
              {ranges[`_${numberOfBigs}bb`][positionChoice.toLowerCase()].call}{" "}
              All-in:{" "}
              {ranges[`_${numberOfBigs}bb`][positionChoice.toLowerCase()].allin}
            </div>
          )}
        </div>
      </div>
      <div className="col">
        <RangeGridComponent />
      </div>
    </div>
  );
}

export default App;
