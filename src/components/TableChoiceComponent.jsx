import React from "react";
import Button from "react-bootstrap/Button";

export default function TableChoice({
  setSelectedTableSize,
  selectedTableSize,
}) {
  const tableSizes = [8, 6, 5, 4, 3];
  return (
    <div className="flex-column ctr">
      <span className="title" style={{ maxWidth: "10%" }}>
        {" "}
        Players/table
      </span>
      {tableSizes.map((element) => {
        return (
          <Button
            variant="outline-light"
            onClick={() => setSelectedTableSize(element)}
            className="m-1"
            key={element}
            active={selectedTableSize === element}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}
