import { useState, useEffect } from "react";
import { changeIndex } from "./helperElements/calculations";
export default function NumberOfBbbsChoice({
  setNumberOfBigs,
  numberOfBigs,
  stackChoices,
}) {
  const [selectedIndex, setSelectedIndex] = useState(
    stackChoices.reverse().indexOf(numberOfBigs)
  );
  const [event, setEvent] = useState(null);

  const callChangeIndex = (e) => {
    const res = changeIndex(e.nativeEvent.wheelDelta);
    setEvent(res);
  };

  const keypress = (key) => {
    const res = key.key === "ArrowUp" ? 1 : -1;
    setEvent(res);
  };

  useEffect(() => {
    document.getElementById("bb-zone").addEventListener("keydown", keypress);
  }, []);

  useEffect(() => {
    if (event === -1 && selectedIndex < stackChoices.length - 1) {
      setSelectedIndex((selectedIndex) => selectedIndex + 1);
      setNumberOfBigs(stackChoices[selectedIndex + 1]);
    } else if (event === +1 && selectedIndex > 0) {
      setSelectedIndex((selectedIndex) => selectedIndex - 1);
      setNumberOfBigs(stackChoices[selectedIndex - 1]);
    }
    setEvent(0);

    return;
  }, [event, selectedIndex, stackChoices, setNumberOfBigs]);

  function chooseNumberOfBigs(params, index) {
    console.log(params);
    setNumberOfBigs(params);
setSelectedIndex(index)
  }

  return (
    <>
      <div
        id="bb-zone"
        className="flex-row-jc-e"
        onKeyPress={(e) => keypress(e)}
        onWheel={(e) => callChangeIndex(e)}
        tabIndex="0"
      >
        <div className="title mr-a jc-c">
          Tapis (bb) : {stackChoices[selectedIndex]}
        </div>
        {stackChoices.map((element, i) => (
          <div
            className={`"blind-digit" ${
              stackChoices[selectedIndex] === element && "title"
            }`}
            key={element}
            onClick={() => chooseNumberOfBigs(element, i)}
          >
            {element}
          </div>
        ))}
      </div>
    </>
  );
}
