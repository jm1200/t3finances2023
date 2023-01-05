import { FiEdit, FiTrash2 } from "react-icons/fi";
import type { RouterOutputs } from "../../utils/trpc";
import { IconButton } from "../IconButton";

interface ISubCategoryProps {
  subCategory: RouterOutputs["categories"]["getCategories"][number]["subCategories"][number];
}

export const SubCategory = ({ subCategory }: ISubCategoryProps) => {
  const handleClick = () => {
    console.log("subCategory.tsx 11 subCategory:", subCategory);
  };
  return (
    <div className="flex items-center justify-between bg-green-300 p-2">
      <p>{subCategory.name}</p>
      <div className="flex">
        <IconButton Icon={FiEdit} classNames="h-6 w-6 bg-caution" />
        <IconButton Icon={FiTrash2} classNames="h-6 w-6 bg-warning" />
        {/* <FiEdit className="h-5 w-5" />
        <FiTrash2 className="ml-1 h-5 w-5" /> */}
      </div>
    </div>
  );
};
