import type { MouseEvent } from "react";
import { FiChevronDown, FiChevronUp, FiEdit, FiTrash2 } from "react-icons/fi";
import { useAppState } from "../../providers/appState";
import { RouterOutputs, trpc } from "../../utils/trpc";
import { IconButton } from "../IconButton";
import { AddCategoryInput } from "./addCategoryInput";
import { AddCategoryOption } from "./addCategoryOption";
import { SubCategory } from "./subCategory";

interface ICategoryProps {
  category: RouterOutputs["categories"]["getCategories"][number];
}

export const Category = ({ category }: ICategoryProps) => {
  const { selectedCategory, addSubcategoryForm, editCategory } = useAppState();

  return (
    <div className="flex-col pb-2">
      {editCategory.id === category.id ? (
        <AddCategoryInput />
      ) : (
        <EditCategoryOption category={category} />
      )}

      {selectedCategory.id === category.id && (
        <div>
          <div className="ml-8 flex-col  rounded-md pb-2 text-black">
            {addSubcategoryForm ? (
              <AddCategoryInput />
            ) : (
              <AddCategoryOption type="subcategory" label="Add Subcategory" />
            )}

            {category.subCategories &&
              category.subCategories.map((subCat) => {
                return <SubCategory key={subCat.id} subcategory={subCat} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

interface EditCategoryOptionProps {
  category: RouterOutputs["categories"]["getCategories"][number];
}
const EditCategoryOption = ({ category }: EditCategoryOptionProps) => {
  const { selectedCategory, setSelectedCategory, setEditCategory } =
    useAppState();

  const handleClick = () => {
    console.log("category.tsx 15 category:", category);
    if (category.id === selectedCategory.id) {
      setSelectedCategory({ name: "", id: "" });
    } else {
      setSelectedCategory({ name: category.name, id: category.id });
    }
  };

  const utils = trpc.useContext();

  const { mutateAsync } = trpc.categories.delete.useMutation({
    onSuccess: () => {
      utils.categories.getCategories.invalidate();
    },
  });

  const handleEditCategory = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    console.log("category.tsx 73 clicked edit:", category.name);
    setEditCategory({ name: category.name, id: category.id });

    e.stopPropagation();
    console.log("category.tsx 36 category.name:", category.name);
  };

  const handleDeleteCategory = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    mutateAsync({ id: category.id });
  };

  return (
    <div className="flex items-center justify-between" onClick={handleClick}>
      <div className="flex items-center text-white">
        {selectedCategory.name === category.name ? (
          <IconButton Icon={FiChevronDown} classNames=" bg-inherit" />
        ) : (
          <IconButton Icon={FiChevronUp} classNames="" />
        )}
        <p className="ml-2">{category.name}</p>
      </div>
      <div className="flex">
        <IconButton
          Icon={FiEdit}
          classNames="bg-caution"
          onClick={(e) => handleEditCategory(e)}
        />
        <IconButton
          Icon={FiTrash2}
          classNames="bg-warning"
          onClick={handleDeleteCategory}
        />
      </div>
    </div>
  );
};
