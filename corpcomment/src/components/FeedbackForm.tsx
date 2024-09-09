import React, { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const charCount = MAX_CHARS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARS) {
      return;
    }
    setText(newText);
  };

  return (
    <form action="" className="form">
      <textarea
        value={text}
        onChange={handleChange} 
        id="feedback-textarea"
        spellCheck={false}
        maxLength={MAX_CHARS}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div className="">
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
