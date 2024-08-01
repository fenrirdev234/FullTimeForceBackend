import { connect } from "mongoose";
import {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_DATABASE,
} from "../utils/secrets.js";

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority&appName=${MONGO_USER}`;

const dbInit = async () => {
  await connect(MONGO_URI, {
    dbName: MONGO_DATABASE,
  }).catch((error) => console.log(error));
  console.log("DB ready");
};

export default dbInit;
