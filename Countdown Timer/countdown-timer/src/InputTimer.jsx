export default function InputTimer({handleInput,handleStart}) {
  return (
    <div className="input-container">
      <div className="input-box">
        <input
          type="text"
          onChange={handleInput}
          name=""
          id="hours"
          placeholder="HH"
        />
        <input
          type="text"
          onChange={handleInput}
          name=""
          id="minutes"
          placeholder="MM"
        />
        <input
          type="text"
          onChange={handleInput}
          name=""
          id="seconds"
          placeholder="SS"
        />
      </div>
      <button onClick={handleStart} className="timer-button">
        Start
      </button>
    </div>
  );
}
