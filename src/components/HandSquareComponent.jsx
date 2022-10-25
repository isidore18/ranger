import React from "react";

export default function HandSquareComponent({
  hand,
  updateSelectedCombos,
  hoverMode,
}) {
  return (
    <>
      <div
        className={`${
          hand.isAllinHand
            ? "allin"
            : hand.isRaiseHand
            ? "raise"
            : hand.isCallHand
            ? "call handsquare"
            : "handsquare"
        } handsquare`}
        onMouseEnter={() => hoverMode && updateSelectedCombos(hand, true)}
        onClick={() => updateSelectedCombos(hand)}
      >
        {hand.hand.toUpperCase()}
      </div>
    </>
  );
}
