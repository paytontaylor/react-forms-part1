const Box = ({ height, width, backgroundColor }) => {
  return (
    <div style={{ height: `${height}px`, width: `${width}px`, backgroundColor }} data-testid="boxDiv"></div>
  )
}

export default Box;