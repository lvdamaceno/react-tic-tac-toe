import { useState } from 'react'

function Square() {
  const [value, steValue] = useState(null)

  function handleClick() {
    steValue('X')
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
