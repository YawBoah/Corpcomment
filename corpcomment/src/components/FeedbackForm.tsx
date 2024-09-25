import React, { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void
};

const FeedbackForm = ({onAddToList}: FeedbackFormProps) => {
  const [text, setText] = useState("");

  const charCount = MAX_CHARS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARS) {
      return;
    }
    setText(newText);
  };

  const handleSubmit =(event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    onAddToList(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
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
