const FeedbackForm = () => {
  return <form action="" className="form">
   <textarea id="feedback-textarea"/>

   <label htmlFor="feedback-textarea">
    Enter your feedback here, remember to #hashtag the company
   </label>
   
   <div className="">
    <p className="u-italic">150</p>
    <button><span>Submit</span></button>
   </div>
  </form>
}

export default FeedbackForm