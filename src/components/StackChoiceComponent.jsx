import Button from "react-bootstrap/Button";

export default function StackChoice({ setStackSize, stacksize }) {
  const stackChoices = ["small", "medium", "big"];
  return (
    <div>
      {stackChoices.map((element) => {
        return (
          <>
            <Button
              variant="outline-light"
              onClick={() => setStackSize(element)}
              active={stacksize === element}
              key={element}
            >
              {element}
            </Button>{" "}
          </>
        );
      })}
    </div>
  );
}
