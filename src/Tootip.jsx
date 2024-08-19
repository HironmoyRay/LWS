export default function Tooltip({ handlePlay, handleUpload }) {
  return (
    <>
      <Button onSmash={handlePlay}>Playing</Button>
      <Button onSmash={handleUpload}>Uploading</Button>
    </>
  );
}

function Button({ onSmash, children }) {
  return (
    <>
      <button onClick={onSmash}>{children}</button>
      {/* <button>Uploading</button> */}
    </>
  );
}
