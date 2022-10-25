import React, { useState, useRef, useEffect } from "react";
import HandSquareComponent from "./HandSquareComponent";
import handsData from "../pokerSources/hands.json";

export default function RangeGridComponent({
  selectedCombos,
  setSelectedCombos,
  selectedRange,
}) {
  const [hoverMode, setHoverMode] = useState(false);
  const toggleHoverModeRef = useRef();

  const numberOfCombos = selectedCombos.map(
    (element) => element.numberOfCombos
  );
  const combinations = selectedCombos.map((element) => {
    return { hand: element.hand, range: element.range };
  });

  const numberOfCombinations = numberOfCombos.reduce(
    (prev, curr) => prev + curr,
    0
  );

  const updateSelectedCombos = (combo, bool = false) => {
    if (!bool && selectedCombos.includes(combo)) {
      setSelectedCombos(selectedCombos.filter((element) => element !== combo));
      return;
    }
    const newSelection = [...selectedCombos, combo];
    setSelectedCombos(newSelection);
  };

  const toggleHoverMode = () => {
    setHoverMode((hoverMode) => !hoverMode);
  };

  useEffect(() => {
    // console.log(selectedCombos);
  }, [selectedCombos]);

  return (
    <>
      {/* <Form className="hovermode-switch">
        <Form.Check
          type="switch"
          id="hovermode-switch"
          label="hover mode"
          ref={toggleHoverModeRef}
          onChange={toggleHoverMode}
        />
      </Form> */}
      <div className="handgrid">
        {Object.values(handsData).map((element) => {
          return element.map((e) => {
            return (
              <HandSquareComponent
                hand={e}
                key={e.hand}
                updateSelectedCombos={updateSelectedCombos}
                selected={combinations
                  .map((element) => element.hand)
                  .includes(e.hand)}
                hoverMode={hoverMode}
                selectedRange={selectedRange}
              />
            );
          });
        })}
      </div>
      {/* <p>{numberOfCombinations} / 1326</p>
      <p>{((numberOfCombinations * 100) / 1326).toFixed(2)}% </p> */}
      {/* <p>
        {combinations.map((element) => element.hand).join(" ")}{" "}
        {combinations.length}
      </p> */}
      {/* <Button
        variant="outline-light"
        className="m-1"
        onClick={() => setSelectedCombos([])}
      >
        reset{" "}
      </Button> */}
    </>
  );
}
