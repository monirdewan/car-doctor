
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.DB_URL;

export const collectionNameObj = {
  servicesCollection:"services", 
  userCollection:"test_user"
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
 
export default function dbConnect(collectionName){
    const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db(process.env.DB_NAME).collection(collectionName)
}
