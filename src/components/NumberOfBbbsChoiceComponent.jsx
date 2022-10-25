import { Button } from "react-bootstrap";

export default function NumberOfBbbsChoice({
  setNumberOfBigs,
  choices,
  numberOfBigs,
}) {
  return (
    <div>
      Tapis (bb) :
      {choices.map((element) => {
        return (
          <Button
            key={element}
            onClick={() => setNumberOfBigs(element)}
            variant="outline-light"
            active={numberOfBigs === element}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}
