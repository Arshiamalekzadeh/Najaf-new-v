import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { Typography } from "@mui/material";
import { TextalignJustifycenter } from "iconsax-react";
import { useEffect, useState } from "react";
import CustomGridLoading from "./customLoading";

// Custom cell component
const RightAlignedCell = React.forwardRef((props, ref) => (
  <div
    {...props}
    style={{
      ...props.style,
      textAlign: "right",
      direction: "rtl",
    }}
    ref={ref}
  />
));

// Create a styled wrapper for the DataGrid
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-cell:focus-visible": {
    outline: "none",
  },
}));

export default function AppDataGrid({
  data,
  columns,
  totalRow,
  loading,
  pageSize,
  page,
  setPageSize,
  setPage,
}) {
  const [rows, setrows] = useState([]);



  const [gridColumns, setGridColumns] = useState([]);
  useEffect(() => {
    if (data) {
      setrows(data);
    }
    if (columns) {
      setGridColumns(columns);
    }
  }, [data]);

  const HandlePageChange = (page) => {
    setPageSize(page?.pageSize);
    setPage(page?.page * page?.pageSize);
  };
  return (
    <Box className="w-full h-full">
      <StyledDataGrid
        className={` bg-white`}
        rows={rows}
        density="compact"
        rowCount={totalRow}
        columns={gridColumns}
        loading={loading}
        editMode="false"
        paginationMode="server"
        onPaginationModelChange={(page) => HandlePageChange(page)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        components={{
          Cell: RightAlignedCell,
        }}
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          loadingOverlay: CustomGridLoading,
        }}
        pageSizeOptions={[10, 30, 50]}
        showCellVerticalBorder
        disableSelectionOnClick={true} // Disable cell selection on click
        disableRowSelectionOnClick
      />
    </Box>
  );
}

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .no-rows-primary": {
    fill: "#3D4751",
    ...theme.applyStyles("light", {
      fill: "#AEB8C2",
    }),
  },
  "& .no-rows-secondary": {
    fill: "#1D2126",
    ...theme.applyStyles("light", {
      fill: "#E8EAED",
    }),
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <TextalignJustifycenter size={58} className="text-slate-300" />
      <Typography className="text-slate-300 !font-light mt-2" variant="inherit">
        ردیفی وجود ندارد
      </Typography>
    </StyledGridOverlay>
  );
}
