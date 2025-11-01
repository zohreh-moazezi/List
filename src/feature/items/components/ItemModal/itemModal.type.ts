import type { FormData } from "../../schema/itemSchema";

export type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  defaultValues?: Partial<FormData>;
  isEditing?: boolean;
};
