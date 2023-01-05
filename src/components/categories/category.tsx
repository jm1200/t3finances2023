import type { Dispatch, SetStateAction } from "react";
import { FiChevronDown, FiChevronUp, FiEdit, FiTrash2 } from "react-icons/fi";
import { useAppState } from "../../providers/appState";
import type { ICategories, ICategory } from "../../types/appTypes";
import { RouterOutputs } from "../../utils/trpc";
import { IconButton } from "../IconButton";
import { AddCategoryInput } from "./addCategoryInput";
import { SubCategory } from "./subCategory";

interface ICategoryProps {
  category: RouterOutputs["categories"]["getCategories"][number];
}

export const Category = ({ category }: ICategoryProps) => {
  const { activeCategory, setActiveCategory } = useAppState();
  const handleClick = () => {
    if (category.name === activeCategory) {
      setActiveCategory("");
    } else {
      setActiveCategory(category.name);
    }

    console.log(
      "categories.tsx 66 category.subCategories:",
      category.subCategories
    );
  };

  //   const handleDeleteCategory = (item:string) => {
  //     let updatedCategories =  deleteCategory(item, categories)
  //   };
  return (
    <div className="flex-col pb-2" onClick={handleClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white">
          {activeCategory === category.name ? (
            <IconButton Icon={FiChevronDown} classNames=" bg-inherit" />
          ) : (
            // <FiChevronDown size="28px" className="" />
            <IconButton Icon={FiChevronUp} classNames="" />
            // <FiChevronUp size="28px" className="" />
          )}
          <p className="ml-2">{category.name}</p>
        </div>
        <div className="flex">
          <IconButton Icon={FiEdit} classNames="bg-caution" />
          <IconButton Icon={FiTrash2} classNames="bg-warning" />
          {/* <FiEdit className="h-6 w-6" /> */}
          {/* <FiTrash2 className="ml-2 h-6 w-6" /> */}
        </div>
      </div>
      {activeCategory === category.name && (
        <div>
          <div className="ml-8 flex-col  rounded-md bg-gray-400 pb-2 text-black">
            <AddCategoryInput
              label="Manage Your Categories"
              parentCategory={category.id}
            />
            {/* <div className="flex items-center justify-end p-2">
              <Button size="xs">
                <FiPlusCircle className="h-6 w-6" />
              </Button>
            </div> */}
            {category.subCategories &&
              category.subCategories.map((subCat) => {
                return <SubCategory key={subCat.id} subCategory={subCat} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};
