export interface Props {
  selectedCategory: string | null;
  onSelect: (categoryId: string | null) => void;
}
