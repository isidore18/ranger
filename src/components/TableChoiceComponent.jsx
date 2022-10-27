import React from "react";
import Button from "react-bootstrap/Button";

export default function TableChoice({
  setSelectedTableSize,
  selectedTableSize,
}) {
  const tableSizes = [8, 7, 6, 5, 4, 3];
  return (
    <div className="flex-row-jc-e">
      <span className="title"> Players/table : </span>
      {tableSizes.map((element) => {
        return (
          <Button
            variant="outline-light"
            onClick={() => setSelectedTableSize(element)}
            className="m-1"
            key={element + "t"}
            active={selectedTableSize === element}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}
