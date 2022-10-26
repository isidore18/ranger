import NumberOfBbbsChoice from "./NumberOfBbbsChoiceComponent";
import TableChoice from "./TableChoiceComponent";
import PositionChoice from "./PositionChoiceComponent";

export function GtoSolver(props) {
  return (
    <>
      <NumberOfBbbsChoice
        setNumberOfBigs={props.setNumberOfBigs}
        choices={props.choices}
        numberOfBigs={props.numberOfBigs}
      />

      <TableChoice
        setSelectedTableSize={props.setSelectedTableSize}
        selectedTableSize={props.selectedTableSize}
      />

      <PositionChoice
        selectedTableSize={props.selectedTableSize}
        setPositionChoice={props.setPositionChoice}
        positionChoice={props.positionChoice}
      />

      {props.positionChoice && (
        <div className="flex-column jcse">
          <div className="big-title">
            Raise:{" "}
            <span className="raiseFont">
              {
                props.ranges[`_${props.numberOfBigs}bb`][
                  props.positionChoice.toLowerCase()
                ].raise
              }
            </span>{" "}
          </div>
          <div className="big-title">
            Call:{" "}
            <span className="callFont">
              {
                props.ranges[`_${props.numberOfBigs}bb`][
                  props.positionChoice.toLowerCase()
                ].call
              }
            </span>{" "}
          </div>
          <div className="big-title">
            All-in:{" "}
            <span className="allinFont">
              {
                props.ranges[`_${props.numberOfBigs}bb`][
                  props.positionChoice.toLowerCase()
                ].allin
              }
            </span>
          </div>
        </div>
      )}
    </>
  );
}
