import React from "react";
import { Row } from "antd";
import AlgorithmDropDown from "./AlgorithmDropDown";
import InputSizeSlider from "./InputSizeSlider";
import RandomizeButton from "./RandomizeButton";
import SpeedSlider from "./SpeedSlider";
import StartButton from "./StartButton";

const HomeHeader = ({
  algorithms,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  onStart,
  isVisualizing,
}) => {
  return (
    <Row
      style={{
        background: "#4267B2",
        color: "white",
        padding: "10px 0px 10px 0px",
        width: "100%",
      }}
      align="middle"
      justify="space-around"
    >
      <AlgorithmDropDown
        currentAlgorithm={currentAlgorithm}
        algorithms={algorithms}
        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
      />
      <SpeedSlider
        onSpeedChange={onSpeedChange}
        isVisualizing={isVisualizing}
      />
      <InputSizeSlider
        onInputSizeChanged={onInputSizeChanged}
        isVisualizing={isVisualizing}
      />
      <RandomizeButton onClick={onRandomize} />
      <StartButton onClick={onStart} />
    </Row>
  );
};

export default HomeHeader;
