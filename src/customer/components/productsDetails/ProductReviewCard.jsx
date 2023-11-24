import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <Grid spacing={2} gap={3} className="flex">
      <Grid item xs={1}>
        <Box>
          <Avatar
            className="text-white"
            sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
          >
            R
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <div className="space-y-2">
            <div>
                <p className="font-semibold">Raam ji</p>
                <p className="opacity-70">April 5,2023 </p>
            </div>
            <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur blanditiis, ducimus non, quas iusto</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductReviewCard;
