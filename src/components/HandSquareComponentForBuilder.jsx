import React from "react";

export default function HandSquareComponentForBuilder({
  hand,
  updateSelectedCombos,
  hoverMode,
  action,
}) {
  getHandClass();
  function getHandClass() {
    if (hand.isAllinHand) {
      return "allin handsquare";
    } else if (hand.isRaiseHand) {
      return "raise handsquare";
    } else if (hand.isCallHand) {
      return "call handsquare";
    }
    return "handsquare";
  }

  function selectHandWithAction(hand, action) {
    console.log(action);
    if (action === "isRaiseHand") {
      hand.isAllinHand = false;
      hand.isRaiseHand = true;
      hand.isCallHand = false;
      updateSelectedCombos(hand);
    } else if (action === "isCallHand") {
      hand.isAllinHand = false;
      hand.isRaiseHand = false;
      hand.isCallHand = true;
      updateSelectedCombos(hand);
    } else if (action === "isAllinHand") {
      hand.isAllinHand = true;
      hand.isRaiseHand = false;
      hand.isCallHand = false;
      updateSelectedCombos(hand);
    }
  }
  return (
    <>
      <div
        className={getHandClass()}
        onMouseEnter={() => hoverMode && updateSelectedCombos(hand, true)}
        onClick={() => selectHandWithAction(hand, action)}
      >
        {hand.hand.toUpperCase()}
      </div>
    </>
  );
}
