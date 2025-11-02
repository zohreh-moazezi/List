import React, { useEffect } from "react";
import { Input } from "../../../../components/UI/Input/Input";
import { Button } from "../../../../components/UI/Button/Button";
import { Label } from "../../../../components/UI/Label/Label";
import { Modal } from "../Modal/Modal";
import { CategorySelect } from "../../../category/components/CategorySelect/CategorySelect";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Props } from "./itemModal.type";
import { schema, type FormData } from "../../schema/itemSchema";

export const ItemModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
  isEditing,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      subTitle: "",
      categoryId: null,
      ...defaultValues,
    },
  });
  useEffect(() => {
    reset({
      title: defaultValues?.title ?? "",
      subTitle: defaultValues?.subTitle ?? "",
    });
  }, [defaultValues, isOpen, reset]);

  const submit = (data: FormData) => {
    onSubmit(data);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white  rounded-lg p-6 md:p-8 w-full max-w-md mx-auto space-y-6">
        <h3 className="text-xl font-semibold text-gray-600">
          {isEditing ? "Edit Item" : "Create Item"}
        </h3>
        <form
          className="space-y-5 px-2 sm:px-4"
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <Label htmlFor="title" hasError={!!errors.title}>
            Title
          </Label>
          <Input
            id="title"
            {...register("title")}
            hasError={!!errors.title}
            className="w-full"
          />
          {errors.title && (
            <p className="text-sm text-red-500" role="alert">
              {errors.title.message}
            </p>
          )}

          <Label htmlFor="subtitle" hasError={!!errors.subTitle}>
            Subtitle
          </Label>
          <Input
            id="subtitle"
            {...register("subTitle")}
            hasError={!!errors.subTitle}
            className="w-full"
          />
          {errors.subTitle && (
            <p role="alert" className="text-sm text-red-500">
              {errors.subTitle.message}
            </p>
          )}
          <Label htmlFor="category">Category</Label>
          <CategorySelect
            value={watch("categoryId")}
            onChange={(id) => setValue("categoryId", id)}
          />
          <div className="flex justify-center gap-20 ">
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={isSubmitting}>
              {isEditing ? "Save" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
