import React from "react";
import Gallery from "./gallery";
import Uploader from "./uploader";
import Equipments from "./equipments";
import { useState } from "react";
import { Grid } from "@mui/material";
import Seperator from "./seperator";

const Examples = () => {
  const [selected, setSelected] = useState([4, 5]); //Equeipmnt Selected

  return (
    <Grid container spacing={6}>
      <Grid item md={12}>
        <Seperator title="جداکننده با عنوان سمت راست" />
        <Uploader />
      </Grid>
      <Grid item md={12}>
        <Seperator center title="جداکننده با عنوان وسط" />
        <Equipments data={data} setSelected={setSelected} selected={selected} />
      </Grid>
      <Grid item md={12}>
        {" "}
        <Gallery data={galleryData} />
      </Grid>
    </Grid>
  );
};

export default Examples;
