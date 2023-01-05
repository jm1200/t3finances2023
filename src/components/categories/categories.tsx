import type { Category } from "@prisma/client";
import { UseTRPCQueryResult } from "@trpc/react-query/shared";
import { RouterOutputs } from "../../utils/trpc";
import { AddCategoryInput } from "./addCategoryInput";

interface CategoriesProps {
  categories: RouterOutputs;
}

export function Categories({ data }: CategoriesProps) {
  console.log("categories.tsx 17 categories:", data);
  return (
    <div>
      <AddCategoryInput label="Manage Your Categories" />

      {/* {categories}
      {categories.map((cat) => (
        <Category key={cat.name} category={cat} />
      ))} */}
    </div>
  );
}
