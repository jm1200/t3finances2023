export interface IKnownCategory {
  name: string;
  categoryName: string;
  subCategoryName: string;
}

export const KNOWN_CATEGORIES: IKnownCategory[] = [
  { name: "mcdonald's", categoryName: "Food", subCategoryName: "Fast food" },
  { name: "starbucks", categoryName: "Food", subCategoryName: "Fast food" },
  { name: "a&w", categoryName: "Food", subCategoryName: "Fast food" },
  { name: "tim hortons", categoryName: "Food", subCategoryName: "Fast food" },
  { name: "burger king", categoryName: "Food", subCategoryName: "Fast food" },
  { name: "impark", categoryName: "Auto", subCategoryName: "Parking" },
  { name: "parking", categoryName: "Auto", subCategoryName: "Parking" },
  {
    name: "five guys burgers",
    categoryName: "Food",
    subCategoryName: "Fast food",
  },
  { name: "amazon.ca", categoryName: "Shopping", subCategoryName: "Online" },
  { name: "amzn", categoryName: "Shopping", subCategoryName: "Online" },
  { name: "foodland", categoryName: "Food", subCategoryName: "Groceries" },
  { name: "metro", categoryName: "Food", subCategoryName: "Groceries" },
  { name: "rcss", categoryName: "Food", subCategoryName: "Groceries" },
  { name: "remark", categoryName: "Food", subCategoryName: "Groceries" },

  { name: "esso", categoryName: "Auto", subCategoryName: "Gas" },
  { name: "petrocan", categoryName: "Auto", subCategoryName: "Gas" },
  { name: "onroute", categoryName: "Auto", subCategoryName: "Gas" },
  { name: "petroleum", categoryName: "Auto", subCategoryName: "Gas" },

  { name: "homesense", categoryName: "Shopping", subCategoryName: "Meghan" },
  { name: "dollarama", categoryName: "Shopping", subCategoryName: "Meghan" },
  {
    name: "shoppers drug mart",
    categoryName: "Shopping",
    subCategoryName: "Essentials",
  },
  { name: "lcbo", categoryName: "Food", subCategoryName: "Booze" },
  {
    name: "pioneer pools",
    categoryName: "Home",
    subCategoryName: "Pool/Hot tub",
  },
  {
    name: "payment / paiement - cibc",
    categoryName: "zzIgnore",
    subCategoryName: "uncategorized",
  },
  {
    name: "d'lux auto spa",
    categoryName: "Auto",
    subCategoryName: "Maintenance",
  },
  { name: "tvdsb", categoryName: "Income", subCategoryName: "Meghan" },
  { name: "air canada", categoryName: "Income", subCategoryName: "John" },
];
