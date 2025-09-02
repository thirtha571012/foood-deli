import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      name: String,
      description: String,
      price: Number,
      image: String,
      category: String,
      quantity: Number
    }
  ],

  amount: { type: Number, required: true },

  address: {
    firstName: String,
    lastName: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    phone: String
  },

  status: { type: String, default: "Pending" },

  date: { type: Date, default: Date.now },

  payment: { type: String, required: true,default:"COD" } // e.g. "COD", "Card"
});

const orderModel =
  mongoose.models.Order || mongoose.model("Order", orderSchema);

export default orderModel;
