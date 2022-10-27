import NumberOfBbbsChoice from "./NumberOfBbbsChoiceComponent";
import TableChoice from "./TableChoiceComponent";
import PositionChoice from "./PositionChoiceComponent";

export function GtoSolver(props) {
  return (
    <>
      <NumberOfBbbsChoice
        setNumberOfBigs={props.setNumberOfBigs}
        numberOfBigs={props.numberOfBigs}
        stackChoices={props.stackChoices}
      />
      <PositionChoice
        selectedTableSize={props.selectedTableSize}
        setPositionChoice={props.setPositionChoice}
        positionChoice={props.positionChoice}
      />
      <TableChoice
        setSelectedTableSize={props.setSelectedTableSize}
        selectedTableSize={props.selectedTableSize}
      />
    </>
  );
}
