import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";


const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
      .then((response) => response.json())
      .then((data) => {setFeedbackItems(data.feedbacks);
      setIsLoading(false);
  });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id}/>
      ))}
    </ol>
  );
};

export default FeedbackList;
