import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FiCheck, FiX } from "react-icons/fi";
import { z } from "zod";
import { useAppState } from "../../providers/appState";
import { trpc } from "../../utils/trpc";
import type { RouterInputs } from "../../utils/trpc";
import { IconButton } from "../IconButton";

const addCategoryValidationSchema = z.object({
  name: z
    .string({ required_error: "Category name required" })
    .min(1, "A name is required")
    .max(30, "Too long."),
});

type AddCategoryValidationSchema = z.infer<typeof addCategoryValidationSchema>;

export function AddCategoryInput({
  placeholder = "name...",
}: {
  placeholder?: string;
}) {
  const {
    setAddCategoryForm,
    setEditCategory,
    selectedCategory,
    setAddSubcategoryForm,
    editCategory,
    resetAll,
  } = useAppState();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCategoryValidationSchema>({
    resolver: zodResolver(addCategoryValidationSchema),
    defaultValues: { name: editCategory.name || "" },
  });

  const utils = trpc.useContext();

  const { mutateAsync } = trpc.categories.create.useMutation({
    onSuccess: () => {
      reset();
      utils.categories.getCategories.invalidate();
    },
  });

  const onSubmit: SubmitHandler<AddCategoryValidationSchema> = async (data) => {
    console.log(data);

    const newCat: RouterInputs["categories"]["create"] = {
      name: data.name,
      parentCategoryId: selectedCategory.id,
      categoryId: editCategory.id,
    };

    console.log("addCategoryInput.tsx 57 newCat inputs:", newCat);

    const x = await mutateAsync(newCat);

    console.log("addCategoryInput.tsx 61 x:", x);

    resetAll();
  };

  const handleCancel = () => {
    reset();
    setAddCategoryForm(false);
    setEditCategory({ name: "", id: "" });
    setAddSubcategoryForm(false);
  };
  // console.log("addCategoryInput.tsx 30 addCategory:", addCategory);
  return (
    <div className="pb-4">
      <div className="flex-col">
        <div className="flex  items-center justify-between  py-2 pl-2">
          <form onSubmit={handleSubmit(onSubmit)} className="mr-2 w-full">
            <input
              {...register("name")}
              className="focus:shadow-outline  w-full flex-1 appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none"
              type="text"
              id="name"
              placeholder={placeholder}
            />
          </form>
          <div className="flex pr-2">
            <IconButton
              onClick={handleSubmit(onSubmit)}
              Icon={FiCheck}
              classNames="h-6 w-6 bg-success"
            />

            <IconButton
              Icon={FiX}
              classNames="h-6 w-6 bg-caution"
              onClick={handleCancel}
            />
          </div>
        </div>
        {errors.name && (
          <p className="mt-2 pl-4 text-xs italic text-red-500">
            {errors.name?.message}
          </p>
        )}
      </div>
    </div>
  );
}
