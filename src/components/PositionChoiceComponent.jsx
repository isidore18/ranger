import Button from "react-bootstrap/Button";

export default function PostionChoiceComponent({
  selectedTableSize,
  setPositionChoice,
  positionChoice,
}) {
  const positions = ["UTG", "UTG1", "LJ", "HJ", "CO", "BTN", "SB", "BB"];

  const renderedPositions = positions.slice(8 - selectedTableSize);

  return (
    <div>
      {renderedPositions.map((element) => {
        return (
          <Button
            key={element}
            variant="outline-light"
            className="m-1"
            onClick={() => setPositionChoice(element)}
            disabled={["SB", "BB"].includes(element)}
            active={element.toLowerCase() === positionChoice.toLowerCase()}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}
