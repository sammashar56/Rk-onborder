import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const feedbackSchema = Schema(
     {
          shopName:{
               type: Schema.Types.ObjectId,
               ref: "Seller"
          },
          Feedback: {
               type: String,
               required: true
          },
          upvotes: {
               type: Number,
               required: false,
               default: 0
          },
     },
     {
          timestamps: true
     }
);

export default mongoose.model("Feedback", feedbackSchema);