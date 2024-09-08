import React from "react";

function InputField({ text, setText, handleSubmit }) {
  return (
    <>
      <div>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button onClick={() => handleSubmit(text)}>Add Todo </button>
      </div>
    </>
  );
}

export default InputField;
