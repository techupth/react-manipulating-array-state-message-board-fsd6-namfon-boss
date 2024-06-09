import { useState } from "react";
function MessageBoard() {
  const [messages, setMessage] = useState([]);
  const [messageName, setMessageName] = useState('');

  const handleAddMessage = (event) => {
    setMessageName(event.target.value)
  }
  const addMessage = (event) => {
    event.preventDefault()
    const newMessage = [...messages]
    newMessage.push(messageName)
    setMessage(newMessage)
  }
  const deleteMessage = (index) => {
    const newMessage = [...messages]
    newMessage.splice(index, 1)
    setMessage(newMessage)
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleAddMessage}
            value={messageName}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      <div class="board"> 
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                <div className="message">
                 {message}
                 <button className="delete-button" onClick={() => deleteMessage(index)}>x</button>
                </div>
              </li>
            ))}         
          </ul>
      </div>
    </div>
  );
}

export default MessageBoard;
