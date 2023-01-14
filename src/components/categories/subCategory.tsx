import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useAppState } from "../../providers/appState";
import type { RouterOutputs } from "../../utils/trpc";
import { trpc } from "../../utils/trpc";
import { IconButton } from "../IconButton";
import { AddCategoryInput } from "./addCategoryInput";

interface ISubCategoryProps {
  subcategory: RouterOutputs["categories"]["getCategories"][number]["subCategories"][number];
}

export const SubCategory = ({ subcategory }: ISubCategoryProps) => {
  const { setEditCategory, editCategory } = useAppState();

  const utils = trpc.useContext();

  const { mutateAsync } = trpc.categories.delete.useMutation({
    onSuccess: () => {
      utils.categories.getCategories.invalidate();
    },
  });

  const handleDeleteCategory = () => {
    console.log("subCategory.tsx 23 subCategory:", subcategory);
    mutateAsync({ id: subcategory.id });
  };

  const handleEditCategory = () => {
    setEditCategory({ name: subcategory.name, id: subcategory.id });
  };

  return (
    <>
      {subcategory.id === editCategory.id ? (
        <AddCategoryInput />
      ) : (
        <div className="flex items-center justify-between p-2 text-white">
          <p>{subcategory.name}</p>
          <div className="flex">
            <IconButton
              Icon={FiEdit}
              classNames="h-6 w-6 bg-caution"
              onClick={handleEditCategory}
            />
            <IconButton
              Icon={FiTrash2}
              classNames="h-6 w-6 bg-warning"
              onClick={handleDeleteCategory}
            />
          </div>
        </div>
      )}
    </>
  );
};
