import axios from "axios";
import { Base } from "../config";

export const createTransaction = async (transaction) => {
  console.log("from api", transaction);
  try {
    const response = await axios.post(
      `http://localhost:8080/api/transactions`,
      transaction
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTransactions = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/transactions?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
