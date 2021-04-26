import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sellerSchema = Schema(
     {
          shopName:{
               type: String,
               required: true
          },
          category: {
               type: String,
               required: true
          },
          no_of_posts: {
               type: String,
               required: true
          },
          no_of_followers: {
               type: String,
               required: true
          },
          price_range: {
               type: String,
               required: true
          },
          Ideal_for_roko: {
               type: Boolean,
               required: false,
               default: false
          },
          brand_focused: {
               type: Boolean,
               required: false,
               default : false
          },
          status: {
               type: Array,
               required: false,
               default : 'Onbording'
          },
          level: {
               type: String,
               required:true
          },
          user : {
               type:Schema.Types.ObjectId,
               ref: "User",
               required: true
          }
     },
     {
          timestamps: true
     }
);

export default mongoose.model("Seller", sellerSchema);

//ShopName
//No_of_followers
//No_of_posts
//Date time 
//boolean ideal for roko?
//brand focused boolean
// price range
// status