import { CloseTwoTone } from "@mui/icons-material";
import { Grow, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";

const AppModal = ({ open, handleClose, title, content, titleIcon, size, actions }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ direction: "rtl" }}
    >
      <Grow in={open}>
        <div
          className={`relative flex items-center justify-center m-auto p-4 w-full h-full max-w-2xl transition-all duration-200
            ${size === "full" && "max-w-full h-screen min-h-screen"} 
            ${size === "small" && "max-w-xl"} 
            ${size === "medium" && "max-w-xl"} 
          `}
        >
          <div
            className={`relative bg-white rounded-lg shadow dark:bg-gray-700 w-full
              ${size === "full" && "!h-full max-h-full"}
              ${size === "medium" && "h-[90vh]"} `}
          >
            <div className="flex items-center mb-2 rounded-t-md bg-blue-50 bg-opacity-60 py-3 px-4 border border-b-slate-100">
              <div className="ml-2 w-8 h-8 rounded-full bg-blue-50 text-blue-400 flex justify-center items-center">
                {titleIcon}
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography className="text-slate-500" variant="body1">
                  {title}
                </Typography>
              </div>
              <IconButton onClick={handleClose} color="primary">
                <CloseTwoTone className="text-slate-400" />
              </IconButton>
            </div>
            <div className="px-8 overflow-auto h-[calc(100%-85px)] flex flex-col">
              <div className="flex-1">{content}</div>
              {actions && (
                <div className="mt-4 border-t border-slate-100 pt-4 flex justify-end gap-2">
                  {actions}
                </div>
              )}
            </div>
          </div>
        </div>
      </Grow>
    </Modal>
  );
};

export default AppModal;