const HomeSectionCard = (item) => {
  console.log(item);
  return (
  
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="image w-[10rem] h-[13rem] ">
        <img src={item.item.image} alt="" className="object-cover object-top w-full h-full"/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">Ketch men shirt</h3>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet Lorem, ipsum.</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
