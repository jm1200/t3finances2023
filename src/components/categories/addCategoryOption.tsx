import { FiPlusCircle } from "react-icons/fi";
import { useAppState } from "../../providers/appState";
import { IconButton } from "../IconButton";

export const AddCategoryOption = ({
  label,
  type,
}: {
  label: string;
  type: "category" | "subcategory";
}) => {
  const {
    setAddSubcategoryForm,
    setAddCategoryForm,
    setEditCategory,
    closeCategories,
  } = useAppState();

  const handleAddClick = () => {
    if (type === "category") {
      setEditCategory({ name: "", id: "" });
      // left off about to have 3 ifs category subcategory and edit fordifferent types of options. but that won't work
      //this is option not input...
      setAddCategoryForm(true);
      setAddSubcategoryForm(false);
      closeCategories();
    } else {
      setEditCategory({ name: "", id: "" });
      setAddCategoryForm(false);
      setAddSubcategoryForm(true);
    }
  };
  return (
    <div className="flex items-center justify-between ">
      <h1 className="m-2 text-white">{label}</h1>
      <div className="flex pr-2">
        <IconButton
          Icon={FiPlusCircle}
          classNames="h-6 w-6 bg-primary"
          onClick={handleAddClick}
        />
      </div>
    </div>
  );
};
