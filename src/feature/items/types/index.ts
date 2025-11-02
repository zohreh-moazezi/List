export type Item = {
  id: string;
  title: string;
  subTitle: string;
  createdAt: string;
  categoryId?: string | null;
  completed: boolean;
};
