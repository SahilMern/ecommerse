import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div className="ProductCard w-[15rem] transition-all m-3 cursor-pointer p-2">
      <div className="h-[20rem]">
        <img
          src={item.imageUrl}
          alt=""
          className="w-full object-cover object-left-top h-full"
        />
      </div>
      <div className="bg-white p-3">
        <div>
          <p>{item.brand}t</p>
          <p className=" text-start ">
            {item.description && item.description.length > 45
              ? `${item.description.slice(0, 45)}...`
              : item.description}
          </p>
        </div>
        <div className="flex items-center  space-x-2">
          <p className=" font-semibold">Rs{item.discountedPrice}</p>
          <p className="font-semibold line-through text-red-600">
            {" "}
            Rs.{item.price}
          </p>
          <p className="text-green-500">{item.discountPersent}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
