export default function productDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <h1 className="text-xl">
      Details about product <h1 className="font-bold">{params.productId}</h1>
    </h1>
  );
}
