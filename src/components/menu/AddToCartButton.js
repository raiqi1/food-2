
export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className=" mt-4">
        <div onClick={onClick} className=" cursor-pointer bg-orange-600">
          Add to cart ${basePrice}
        </div>
        {/* <FlyingButton
          targetTop={"5%"}
          targetLeft={"95%"}
          src={image}
        ></FlyingButton> */}
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-white rounded-full px-8 py-2"
    >
      <span>Add to cart (from ${basePrice})</span>
    </button>
  );
}
