import { Button } from "@mui/material";
import Cartitem from "./Cartitem";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item, index) => <Cartitem key={index} />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <h1 className="uppercase font-bold opacity-60 pb-4">
              Price Details
            </h1>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$120</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Discount </span>
                <span>-10</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span>free</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Total Amont</span>
                <span>110</span>
              </div>
            </div>
            <Button
              variant="contained"
              className=" w-full mt-5"
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
