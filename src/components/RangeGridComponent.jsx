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

  useEffect(() => {
    console.log(selectedCombos);
  }, [selectedCombos]);

  return (
    <div className="col">
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
              <HandSquareComponent
                hand={e}
                key={e.hand}
                selectedRange={selectedRange}
              />
            );
          });
        })}
      </div>
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
        <div>{numberOfCombinations} / 1326 combinaisons</div>
        <div>{((numberOfCombinations * 100) / 1326).toFixed(1)}% </div>
      </div>
      {/* <p>
        {combinations.map((element) => element.hand).join(" ")}{" "}
        {combinations.length}
      </p> */}
      <Button
        variant="outline-light"
        className="m-1"
        onClick={() => resetSelectedCombos()}
      >
        reset{" "}
      </Button>
    </div>
  );
}
