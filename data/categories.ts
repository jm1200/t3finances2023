import type { ICategories, ICategory } from "../src/types/appTypes";

// export const createDefaultCategories = (): ICategories => {
//   const cats = {} as ICategories;
//   defaultCategories.userCategories.forEach((category, i) => {
//     const newCatId = i.toString();

//     const cat = {
//       id: newCatId,
//       name: category.name,
//       subCategories: {} as ICategories,
//       parent: true,
//     };

//     if (category.subCategories) {
//       category.subCategories.forEach((subCat, j) => {
//         const newSubCatId = j.toString();
//         const newSubCat: ICategory = {
//           id: newSubCatId,
//           name: subCat,
//           parent: false,
//           subCategories: null,
//         };

//         cat.subCategories[newSubCatId] = newSubCat;
//       });
//     }

//     cats[newCatId] = cat;
//   });

//   return cats;
// };

export const defaultCategories = {
  userCategories: [
    {
      name: "uncategorized",
    },
    {
      name: "Income",
      subCategories: [
        "John",
        "Meghan",
        "377 Hyde Park Rd.",
        "214 South St.",
        "Credit Card Payment",
        "Government",
        "Interest",
      ],
    },
    {
      name: "Travel",
      subCategories: ["Airline", "Hotel", "Rental Car", "Tax/Uber"],
    },
    {
      name: "Auto",
      subCategories: [
        "Maintenance",
        "Insurance",
        "Gas",
        "Licensing",
        "Parking",
        "407",
      ],
    },
    {
      name: "Family",
      subCategories: [
        "Shopping",
        "Essentials",
        "Clothes",
        "Entertainment",
        "Healthcare",
        "Daycare",
        "School",
      ],
    },
    {
      name: "Money Transfers",
      subCategories: [
        "Creditcard Payments",
        "Pension Payments",
        "RESP transfers",
        "John RRSP transfer",
        "Meghan RRSP transfer",
        "Donations",
        "Banking Charges",
        "Transfer to Savings",
        "Taxes",
      ],
    },
    {
      name: "377 Hyde Park Rd.",
      subCategories: [
        "Mortgage",
        "Cleaning",
        "Property Taxes",
        "Cable",
        "Gas",
        "Electricity",
        "Water",
        "Insurance",
        "Maintenance",
        "Credit Card Payment",
      ],
    },
    {
      name: "Home",
      subCategories: [
        "Mortgage",
        "Cleaning",
        "Property Taxes",
        "Cable",
        "Gas",
        "Electricity",
        "Water",
        "Insurance",
        "Pool/Hot tub",
        "Maintenance",
        "Credit Card Payment",
      ],
    },
    {
      name: "Food",
      subCategories: [
        "Fast food",
        "Restaurants",
        "Groceries",
        "Booze",
        "Treats",
      ],
    },
    {
      name: "Pets",
      subCategories: ["Food/Treats", "Vet bill", "Grooming"],
    },
    {
      name: "Meghan",
      subCategories: [
        "Employement Expenses",
        "Cell Phone",
        "Transfer to Savings",
      ],
    },
    {
      name: "John",
      subCategories: [
        "Employement Expenses",
        "Away Food",
        "Cell Phone",
        "Transfer to Savings",
      ],
    },
    {
      name: "Shopping",
      subCategories: ["Gifts", "Essentials", "Online", "Meghan", "John"],
    },
    {
      name: "Entertainement",
      subCategories: ["Kids", "Family", "Meghan", "John"],
    },
    {
      name: "Healthcare",
      subCategories: ["Kids", "Family", "Meghan", "John"],
    },
  ],
};
