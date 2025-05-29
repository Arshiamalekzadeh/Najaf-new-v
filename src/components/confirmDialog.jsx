import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import * as React from "react";
import { useEffect, useState } from "react";
import { useConfirmModalState } from "../store";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ConfirmDialog = ({
  confirmTitle,
  confirmContent,
  CancelText,
  SubmitText,
  handleConfirmClose,
  handleConfirSubmit,
  icon,
  submitButtonColor,
}) => {
  const { openConfirm } = useConfirmModalState();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(openConfirm);
  }, [openConfirm]);

  const handleClose = () => {
    handleConfirmClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="flex items-center text-gray-500">
          <span className="bg-slate-100 p-1 rounded-full ml-2">{icon}</span>
          {confirmTitle}
        </DialogTitle>
        <DialogContent className="min-w-96 ">
          <DialogContentText
            className="!text-slate-700"
            id="alert-dialog-slide-description"
          >
            {confirmContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="!p-5">
          <Button variant="text" color="inherit" onClick={handleConfirmClose}>
            {CancelText}
          </Button>
          <Button
            variant="contained"
            color={submitButtonColor}
            onClick={handleConfirSubmit}
          >
            {SubmitText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default ConfirmDialog;
