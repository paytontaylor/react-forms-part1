import { useState } from "react";
import Box from "../Box/Box";
import NewBoxForm from "../NewBoxForm/NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes(boxes => [...boxes, box])
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      { boxes.map(({ id, height, width,color }) => <Box key={id} height={height} width={width} backgroundColor={color} />) }
    </div>
  )
}

export default BoxList;