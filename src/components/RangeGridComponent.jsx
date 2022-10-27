import React from "react";
import HandSquareComponent from "./HandSquareComponent";
import handsData from "../pokerSources/hands.json";

export default function RangeGridComponent({ selectedCombos }) {
  const numberOfCombos = selectedCombos.map(
    (element) => element.numberOfCombos
  );

  const numberOfCombinations =
    numberOfCombos.reduce((prev, curr) => prev + curr, 0) || 0;

  return (
    <div>
      <div className="flex-row jcse">
        <div className="title">{numberOfCombinations} / 1326 </div>
        <div className="title">
          {((100 * numberOfCombinations) / 1326).toFixed(1)}%{" "}
        </div>
      </div>
      <div className="handgrid">
        {Object.values(handsData).map((element) => {
          return element.map((e) => {
            return <HandSquareComponent hand={e} key={e.hand} />;
          });
        })}
      </div>
    </div>
  );
}
