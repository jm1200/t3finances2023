import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiCheck, FiPlusCircle, FiX } from "react-icons/fi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { trpc } from "../../utils/trpc";

interface IAddCategoryInputProps {
  label: string;
  parentCategory?: string | null;
}

const addCategoryValidationSchema = z.object({
  name: z
    .string({ required_error: "Category name required" })
    .min(1, "A name is required")
    .max(30, "Too long."),
});

type AddCategoryValidationSchema = z.infer<typeof addCategoryValidationSchema>;

export function AddCategoryInput({
  label,
  parentCategory = null,
}: IAddCategoryInputProps) {
  const [addCategory, setAddCategory] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCategoryValidationSchema>({
    resolver: zodResolver(addCategoryValidationSchema),
  });

  const { mutateAsync } = trpc.categories.create.useMutation({
    onSuccess: () => {
      setAddCategory(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<AddCategoryValidationSchema> = (data) => {
    console.log(data);

    mutateAsync({ name: data.name });
  };

  return (
    <div>
      {addCategory ? (
        <div className="flex-col">
          <div className="flex  items-center justify-between  py-2 pl-2">
            <form onSubmit={handleSubmit(onSubmit)} className="mr-2 w-full">
              <input
                {...register("name")}
                className="focus:shadow-outline  w-full flex-1 appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 focus:outline-none"
                type="text"
                id="name"
                placeholder="  name..."
              />
              {errors.name && (
                <p className="mt-2 text-xs italic text-red-500">
                  {" "}
                  {errors.name?.message}
                </p>
              )}
            </form>
            <div className="flex">
              <IconButton
                onClick={handleSubmit(onSubmit)}
                Icon={FiCheck}
                classNames="h-6 w-6 bg-success"
              />

              <IconButton
                Icon={FiX}
                classNames="h-6 w-6 bg-caution"
                onClick={() => {
                  reset();
                  setAddCategory(false);
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between ">
          <h1 className="m-4 text-white">{label}</h1>
          <IconButton
            Icon={FiPlusCircle}
            classNames="h-6 w-6 bg-primary"
            onClick={() => setAddCategory(true)}
          />
        </div>
      )}
    </div>
  );
}
