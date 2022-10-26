import React, { useState, useRef, useEffect } from "react";
import HandSquareComponent from "./HandSquareComponent";
import HandSquareComponentForBuilder from "./HandSquareComponentForBuilder";
import handsData from "../pokerSources/hands.json";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function RangeGridComponent({
  selectedCombos,
  setSelectedCombos,
  selectedRange,
  resetSelectedCombos,
  selectPockets,
  selectHighCard,
}) {
  const isUsedForRangeBuilder =
    window.location.pathname.includes("range-builder");
  const [hoverMode, setHoverMode] = useState(false);
  const toggleHoverModeRef = useRef();

  const numberOfCombos = selectedCombos.map(
    (element) => element.numberOfCombos
  );

  const numberOfCombinations =
    numberOfCombos.reduce((prev, curr) => prev + curr, 0) || 0;

  const toggleHoverMode = () => {
    setHoverMode((hoverMode) => !hoverMode);
  };

  useEffect(() => {}, [selectedCombos]);

  const handfiltersArray = [
    "a",
    "k",
    "j",
    "t",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  const HandFilter = (props) => {
    return (
      <Button
        variant="outline-light"
        className="m-1"
        onClick={() => selectHighCard(props.hand)}
      >
        {props.hand}{" "}
      </Button>
    );
  };

  return (
    <div className={`${isUsedForRangeBuilder && "range-builder-container"}`}>
      {isUsedForRangeBuilder && (
        <Form className="hovermode-switch">
          <Form.Check
            type="switch"
            id="hovermode-switch"
            label="hover mode"
            ref={toggleHoverModeRef}
            onChange={toggleHoverMode}
          />
        </Form>
      )}
      <div className="range-builder-results-container">
        <div>{numberOfCombinations} / 1326 </div>
        <div>{((numberOfCombinations * 100) / 1326).toFixed(1)}% </div>
      </div>
      <div className="handgrid">
        {Object.values(handsData).map((element) => {
          return element.map((e) => {
            return isUsedForRangeBuilder ? (
              <HandSquareComponentForBuilder
                hand={e}
                key={e.hand}
                updateSelectedCombos={setSelectedCombos}
                hoverMode={hoverMode}
                selectedRange={selectedRange}
                selected={selectedCombos.map((el) => el.hand).includes(e.hand)}
              />
            ) : (
              <HandSquareComponent hand={e} key={e.hand} />
            );
          });
        })}
      </div>

      {/* <p>
        {combinations.map((element) => element.hand).join(" ")}{" "}
        {combinations.length}
      </p> */}
      {isUsedForRangeBuilder && (
        <div className="range-builder-results-controls">
          <Button
            variant="outline-light"
            className="m-1"
            onClick={() => resetSelectedCombos()}
          >
            reset{" "}
          </Button>
          <Button
            variant="outline-light"
            className="m-1"
            onClick={() => selectPockets()}
          >
            Pockets{" "}
          </Button>
          {[...handfiltersArray].map((element) => (
            <HandFilter hand={element} />
          ))}
        </div>
      )}
    </div>
  );
}
