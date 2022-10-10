export type Category = {
  id: number;
  title: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  image: string;
  images?: string[];
  category: number;
  price: string;
  description?: string;
};

export type ProductItemProps = {
  title: string;
  price: string;
  image: string;
  onPress?: () => void;
};

export type FlatPropCategory = {
  item: Category;
  index: number;
};

export type FlatPropProduct = {
  item: Product;
  index: number;
};
