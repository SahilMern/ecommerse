
const NewSectionCard = (item) => {
  // console.log(item.item.imageUrl,"Uetm");
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[13rem] mx-3   mr-[15rem]">
          <div className="image w-[10rem] h-[13rem] ">
            <img src={item.item.imageUrl} alt="" className="object-cover object-top w-full h-full"/>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Ketch men shirt</h3>
            <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet Lorem, ipsum.</p>
          </div>
        </div>
      );
}

export default NewSectionCard