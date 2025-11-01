import { format } from "date-fns";

export const formatDate = (iso: string) => {
  try {
    return format(new Date(iso), "yyyy-MM-dd HH:mm");
  } catch {
    return iso;
  }
};
