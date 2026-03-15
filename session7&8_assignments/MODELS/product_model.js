import { Schema, model } from "mongoose";

const procutSchema = new Schema({
    productid: {
        type: Number,
        required: [true, "product is required"],
  /*minLength: [4, "Min length of Username is 4 chars"],
        maxLength: [6, "Username size exceeds 6 chars"] // Note: "JohnDoe" will fail this!*/
    },
    productname: {
        type: String,
        required: [true, "product name required"]
    },
    price: {
        type: Number,
        required: [true, "product price is required"],
       /* unique:[true,"email alredy existed"]*/
       min:[10000,"min price of product"],
       max:[50000,"max price of product"]
    },
    brand: {
        type: String,
        required:[true,"product brand is required"]
    }
},{
    versionKey:false,
    timestamps:true
});

export const usermodel = model("users",procutSchema);