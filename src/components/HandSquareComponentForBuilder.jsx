import React from "react";

export default function HandSquareComponentForBuilder({
  hand,
  updateSelectedCombos,
  hoverMode,
  selected,
}) {
  return (
    <>
      <div
        className={`${selected && "raise"} handsquare`}
        onMouseEnter={() => hoverMode && updateSelectedCombos(hand, true)}
        onClick={() => updateSelectedCombos(hand)}
      >
        {hand.hand.toUpperCase()}
      </div>
    </>
  );
}
