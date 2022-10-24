import React from "react";

export default function HandSquareComponent({ hand, updateSelectedCombos }) {
  return (
    <div
      className="handsquare"
      onClick={() => updateSelectedCombos(hand.numberOfCombos)}
    >
      {hand.hand.toUpperCase()}
    </div>
  );
}
