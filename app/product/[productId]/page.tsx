import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function productDetails({ params }: Props) {
  return (
    <h1 className="text-xl font-bold">
      Details about product {params.productId}
    </h1>
  );
}
