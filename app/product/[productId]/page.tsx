export default function productDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <h1 className="text-xl font-bold">
      Details about product {params.productId}
    </h1>
  );
}
