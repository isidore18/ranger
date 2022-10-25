import React from "react";

export default function HandSquareComponent({ hand, updateSelectedCombos }) {
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
        onClick={() => updateSelectedCombos(hand)}
      >
        {hand.hand.toUpperCase()}
      </div>
    </>
  );
}
