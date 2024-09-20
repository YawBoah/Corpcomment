import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";


const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedbacks));
  }, []);

  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id}/>
      ))}
    </ol>
  );
};

export default FeedbackList;
