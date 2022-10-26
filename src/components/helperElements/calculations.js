import hands from "../../pokerSources/hands.json";
import ranges from "../../pokerSources/preflop.json";

export function createHandsFunction() {
  const res = [];
  Object.values(hands).forEach((element) =>
    element.forEach((e) => {
      if (e.rank) {
        res.push(e);
      }
    })
  );
  res.sort((a, b) => a.rank > b.rank);
  return res;
}

export function countHandsFunction(positionChoice, numberOfBigs, hands) {
  let selectedRange = 0;
  let res = 0;
  let rangeToPush = [];
  if (!(positionChoice && numberOfBigs)) return;
  selectedRange = ranges[`_${numberOfBigs}bb`][positionChoice.toLowerCase()];
  for (let i = 0; i < hands.length; i++) {
    const percentage = (hands[i].numberOfCombos / 1326) * 100;
    const total =
      selectedRange.raise + selectedRange.call + selectedRange.allin;
    res += percentage;
    hands[i].range = selectedRange;
    hands[i].isAllinHand = res < selectedRange.allin;

    hands[i].isRaiseHand = res < selectedRange.allin + selectedRange.raise;
    hands[i].isCallHand =
      res > selectedRange.allin + selectedRange.raise && res < total;
    hands[i].percentage = res;

    if (res < total) {
      rangeToPush.push(hands[i]);
    }
  }
  return rangeToPush;
}
