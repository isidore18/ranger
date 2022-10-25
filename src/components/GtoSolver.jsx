import StackChoice from "./StackChoiceComponent";
import NumberOfBbbsChoice from "./NumberOfBbbsChoiceComponent";
import TableChoice from "./TableChoiceComponent";
import PositionChoice from "./PositionChoiceComponent";
import Button from "react-bootstrap/Button";

export function GtoSolver(props) {
  return (
    <div className="left-choices">
      <StackChoice
        setStackSize={props.setStacksize}
        stacksize={props.stacksize}
      />
      <NumberOfBbbsChoice
        stacksize={props.stacksize}
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

      <div className="left-range">
        {" "}
        {props.positionChoice && (
          <div className="title">
            <p>
              Raise:{" "}
              <span className="raiseFont">
                {
                  props.ranges[`_${props.numberOfBigs}bb`][
                    props.positionChoice.toLowerCase()
                  ].raise
                }
              </span>{" "}
            </p>
            <p>
              Call:{" "}
              <span className="callFont">
                {
                  props.ranges[`_${props.numberOfBigs}bb`][
                    props.positionChoice.toLowerCase()
                  ].call
                }
              </span>{" "}
            </p>
            <p>
              All-in:{" "}
              <span className="allinFont">
                {
                  props.ranges[`_${props.numberOfBigs}bb`][
                    props.positionChoice.toLowerCase()
                  ].allin
                }
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
