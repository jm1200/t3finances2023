import { AuthPage } from "../components/AuthPage";
import { Container } from "../components/Container";
import { trpc } from "../utils/trpc";
import { AddCategoryInput } from "../components/categories/addCategoryInput";
import { Category } from "../components/categories/category";
import { useState } from "react";
import { AddCategoryOption } from "../components/categories/addCategoryOption";
import { useAppState } from "../providers/appState";

export default function Categories() {
  const { data } = trpc.categories.getCategories.useQuery();

  const { addCategoryForm } = useAppState();

  return (
    <AuthPage route="/import">
      <Container>
        <div className="w-full md:w-1/3 lg:w-1/4">
          {addCategoryForm ? (
            <AddCategoryInput />
          ) : (
            <AddCategoryOption type="category" label="Manage Your Categories" />
          )}

          {data?.map((cat) => {
            // return <div key={cat.id}>{cat.name}</div>;
            return <Category key={cat.id} category={cat} />;
          })}
        </div>
      </Container>
    </AuthPage>
  );
}
