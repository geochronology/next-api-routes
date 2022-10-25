// Dynamic API routes
import { buildFeedbackPath, extractFeedback } from './feedback';

function handler(req, res) {
  console.log(req.query);

  // return feedback for specific feedback item
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  console.log(selectedFeedback);
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
