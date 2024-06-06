import { useState } from "react";

function MessageBoard() {
  const [textInput, setTextInput] = useState("");
  const [messages, setMessage] = useState([]);

  const handleInput = (event) => setTextInput(event.target.value);
  const handleSubmit = () => setMessage([...messages, textInput]);
  const handleDelete = (index) =>
    setMessage([...messages].filter((_, i) => i !== index));

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
