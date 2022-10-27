import React, { useState, useRef, useEffect } from "react";
import HandSquareComponentForBuilder from "./HandSquareComponentForBuilder";
import handsData from "../pokerSources/hands.json";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function BuilderGrid({
  selectedCombos,
  setSelectedCombos,
  resetSelectedCombos,
  selectPockets,
  selectHighCard,
  exportUserInfo,
}) {
  const [hoverMode, setHoverMode] = useState(false);
  const [action, setAction] = useState("isRaiseHand");
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
    "q",
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
        onClick={() => selectHighCard(props.hand, action)}
      >
        {props.hand}{" "}
      </Button>
    );
  };

  function setNewAction(action) {
    setAction(action);
  }

  return (
    <div className={"range-builder-container"}>
      <div>
        <Form className="hovermode-switch">
          <Form.Check
            type="switch"
            id="hovermode-switch"
            label="hover mode"
            ref={toggleHoverModeRef}
            onChange={toggleHoverMode}
          />
        </Form>
        <Form>
          <div key={`default-radio`} className="mb-3">
            <Form.Check
              type={"radio"}
              id={`default-radio-raise`}
              label={`raise`}
              name="action-type"
              className="raiseFont"
              onChange={() => setAction("isRaiseHand")}
            />
            <Form.Check
              type={"radio"}
              id={`default-radio-call`}
              label={`call`}
              name="action-type"
              className="callFont"
              onChange={() => setAction("isCallHand")}
            />
            <Form.Check
              type={"radio"}
              id={`default-radio-allin`}
              label={`allin`}
              name="action-type"
              className="allinFont"
              onChange={() => setAction("isAllinHand")}
            />
          </div>
        </Form>
        <div className="range-builder-results-container">
          <div>{numberOfCombinations} / 1326 </div>
          <div>{((numberOfCombinations * 100) / 1326).toFixed(1)}% </div>
        </div>
      </div>
      <div className="handgrid">
        {Object.values(handsData).map((element) => {
          return element.map((e) => {
            return (
              <HandSquareComponentForBuilder
                hand={e}
                key={e.hand}
                updateSelectedCombos={setSelectedCombos}
                hoverMode={hoverMode}
                selected={selectedCombos.map((el) => el.hand).includes(e.hand)}
              />
            );
          });
        })}
      </div>

      <div className="range-builder-results-controls">
        <Button
          variant="outline-light"
          className="m-1 resetButton"
          onClick={() => resetSelectedCombos()}
        >
          reset{" "}
        </Button>
        <div>
          <Button
            variant="outline-light"
            className="m-1"
            onClick={() => selectPockets(action)}
          >
            Pockets{" "}
          </Button>
          {[...handfiltersArray].map((element) => (
            <HandFilter hand={element} />
          ))}
        </div>
        <Button onClick={() => exportUserInfo()}>export user Info</Button>
      </div>
    </div>
  );
}
