import { Button } from "react-bootstrap";

export default function NumberOfBbbsChoice({ setNumberOfBigs, numberOfBigs }) {
  const bigStacksChoices = [
    100, 80, 60, 50, 40, 35, 30, 5, 20, 17, 14, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
    2,
  ];
  const mediumStacksChoices = [25, 20, 17, 14, 12, 11, 10];
  const smallStacksChoices = [9, 8, 7, 6, 5, 4, 3, 2];
  const arr = [bigStacksChoices, mediumStacksChoices, smallStacksChoices];

  const ButtonCol = ({ choices }) => {
    return (
      <div className="flex-column">
        {choices.map((element) => {
          return (
            <Button
              key={element}
              onClick={() => setNumberOfBigs(element)}
              variant="outline-light"
              active={numberOfBigs === element}
              className="numberOfBigs-btn"
            >
              {element}
            </Button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex-column">
      <span className="title">Tapis (bb) :</span>
      <div className="number-of-bigs-choices">
        {bigStacksChoices.map((choice) => (
          <Button
            key={choice}
            onClick={() => setNumberOfBigs(choice)}
            variant="outline-light"
            active={numberOfBigs === choice}
            className="numberOfBigs-btn"
          >
            {choice}
          </Button>
        ))}
      </div>
    </div>
  );
}
