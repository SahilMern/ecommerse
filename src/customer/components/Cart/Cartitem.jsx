import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Cartitem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://img.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10383.jpg?size=626&ext=jpg&ga=GA1.1.526173709.1699259634&semt=sph"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Women green dress</p>
          <p className="opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
            similique?
          </p>
          <div className="flex space-x-5 text-sm  font-semibold ">
            <p>$122</p>
            <p className="line-through text-red-500">$100</p>
            <p className="text-green-600">15%</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex  items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton>
              <AddCircleOutlineIcon sx={{color:"RGB(145 85 233)"}}/>
            </IconButton>
          
        </div>
        <div>
          <Button sx={{color:"RGB(145 85 233)"}}> remove</Button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
