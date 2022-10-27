import { useState, useEffect, useMemo } from "react";
import { changeIndex } from "./helperElements/calculations";
import { Button } from "react-bootstrap";

function PositionInput(props) {
  return <span className="title"> Position : {props.positionChoice}</span>;
}

export default function PostionChoiceComponent({
  selectedTableSize,
  setPositionChoice,
  positionChoice,
}) {
  const positions = useMemo(() => ["UTG", "UTG1", "LJ", "HJ", "CO", "BTN"], []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [event, setEvent] = useState(null);
  const renderedPositions = positions.slice(8 - selectedTableSize);

  const callChangeIndex = (e) => {
    const res = changeIndex(e.nativeEvent.wheelDelta);
    setEvent(res);
  };
  const keypress = (key) => {
    const res = key.key === "ArrowUp" ? 1 : -1;
    setEvent(res);
  };
  useEffect(() => {
    document
      .getElementById("position-zone")
      .addEventListener("keydown", keypress);
  }, []);

  useEffect(() => {
    if (event === -1 && selectedIndex < renderedPositions.length - 1) {
      setSelectedIndex((selectedIndex) => selectedIndex + 1);
      setPositionChoice(renderedPositions[selectedIndex + 1]);
    } else if (event === +1 && selectedIndex > 0) {
      setSelectedIndex((selectedIndex) => selectedIndex - 1);
      setPositionChoice(renderedPositions[selectedIndex - 1]);
    }
    setEvent(0);
    return;
  }, [event, selectedIndex, setPositionChoice, positions, renderedPositions]);

  return (
    <div
      id="position-zone"
      className="flex-row-jc-e"
      onWheel={(e) => callChangeIndex(e)}
      onKeyPress={(e) => keypress(e)}
      tabIndex="1"
    >
      <PositionInput positionChoice={positionChoice} />
      {renderedPositions.map((element) => {
        return (
          <Button
            key={element}
            variant="outline-light"
            className="m-1"
            onClick={() => setPositionChoice(element)}
            active={element.toLowerCase() === positionChoice.toLowerCase()}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}
