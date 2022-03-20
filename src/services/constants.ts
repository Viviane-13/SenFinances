import { Filters } from "../models/Filter";
import {
  TransactionType,
  TransactionCategory,
} from "./../models/Transaction/index";




const currentDate = new Date();

const currentMonth = currentDate.getMonth();



const currentYear = currentDate.getFullYear();

const transactionCollection = "transactions";

const transactionTypes = [TransactionType.In, TransactionType.Out];

const transactionCategories = [
  TransactionCategory.Clothing,
  TransactionCategory.Education,
  TransactionCategory.Food,
  TransactionCategory.Others,
  TransactionCategory.Services,
  TransactionCategory.Transport,
];

const defaultFilterValue = "";

const defaultFilters: Filters = {
  keyword: defaultFilterValue,
  type: defaultFilterValue,
  category: defaultFilterValue,
};

export {

  currentDate,
  currentMonth,
  currentYear,
  transactionCollection,
  transactionTypes,
  transactionCategories,
  defaultFilterValue,
  defaultFilters,
};
