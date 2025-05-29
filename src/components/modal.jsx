import { CloseTwoTone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";

const CustomModal = ({
  open,
  handleClose,
  title,
  content,
  titleIcon,
  size,
}) => {
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Main modal  */}
        <div
          className={`relative flex items-center justify-center m-auto p-4 w-full h-full max-w-2xl  transition-all duration-200
            ${size === "full" && "max-w-full h-screen min-h-screen"} 
            ${size === "small" && "max-w-xl"} 
            `}
        >
          {/* Modal content  */}
          <div
            className={`relative bg-white rounded-lg shadow dark:bg-gray-700 w-full h-3/4 ${
              size === "full" && "!h-full max-h-full"
            } `}
          >
            {/* Modal header */}

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
            {/* Modal body */}
            <div className="px-8 overflow-auto h-[calc(100%-70px)]">
              {content}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["full", "normal", "small"]).isRequired,
};

export default CustomModal;
