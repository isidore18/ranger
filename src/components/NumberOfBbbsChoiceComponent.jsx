import { Button } from "react-bootstrap";

export default function NumberOfBbbsChoice({
  setNumberOfBigs,
  choices,
  numberOfBigs,
}) {
  return (
    <div>
      {choices.map((element) => {
        return (
          <Button
            key={element}
            onClick={() => setNumberOfBigs(element)}
            variant="outline-light"
            className="m-1"
            active={numberOfBigs === element}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}
