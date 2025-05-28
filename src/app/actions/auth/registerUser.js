'use server'
import bcrypt from "bcrypt";

import dbConnect, { collectionNameObj } from "@/lib/DBConnect"

export  const registerUser = async(Paylods) =>{
  const userCollection = dbConnect(collectionNameObj.userCollection)
  const {email, password} = Paylods;
  if(!email || !password) return {success:false};
  const user = await userCollection.findOne({email:Paylods.email})
  if(!user){
    const hashePassword = await bcrypt.hash(password, 10);
     Paylods.password = hashePassword
   const result = await userCollection.insertOne(Paylods)
    return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString(),  // ✅ convert ObjectId to string
  };
  }
  return {success:false};
}