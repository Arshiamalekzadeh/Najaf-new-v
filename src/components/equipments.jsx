import React from "react";
import { getIconComponent } from "../utils/MuiIcon";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";

const Equipments = ({
  data,
  setSelected,
  selected,
  onPostClick,
  onDeleteClick,
  isDisabled,
}) => {
  const toggleSelection = async (id) => {
    if (isDisabled) return;

    try {
      if (selected?.includes(id)) {
        await onDeleteClick(id);
        toast.success("امکانات مورد نظر حذف شد!");
      } else {
        await onPostClick(id);
        toast.success("امکانات مورد نظر اضافه شد!");
      }

      setSelected(
        selected?.includes(id)
          ? selected.filter((s) => s !== id)
          : [...selected, id]
      );
    } catch (error) {
      toast.error("خطایی در انجام عملیات رخ داد.");
      console.error("Error toggling equipment:", error);
    }
  };

  return (
    <div>
      {data?.map((item) => {
        const IconComponent = getIconComponent(item?.icon);
        return (
          <IconButton
            key={item?.id}
            label={item?.label}
            onClick={!isDisabled ? () => toggleSelection(item?.id) : null}
            color={selected?.includes(item?.id) ? "warning" : "default"}
            className={`flex flex-col px-3 !mx-1 !mt-4 transition-transform`}
            sx={{
              backgroundColor: selected?.includes(item?.id)
                ? "rgba(255, 138, 13, 0.1)"
                : "#f5f5f5",
              border: selected?.includes(item?.id)
                ? "1px solid rgba(255, 138, 13, 0.5)"
                : isDisabled
                ? "1px solid blue"
                : "1px solid #e5e5e5",
              color: isDisabled ? "blue" : "inherit",
              borderRadius: "4px",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: isDisabled
                  ? "#f5f5f5"
                  : selected?.includes(item?.id)
                  ? "rgba(255, 138, 13, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
              },
              cursor: isDisabled ? "not-allowed" : "pointer",
            }}
          >
            {IconComponent ? <IconComponent /> : null}
            <span className={`text-base ${isDisabled ? "text-blue-500" : ""}`}>
              {item?.name}
            </span>
          </IconButton>
        );
      })}
    </div>
  );
};

export default Equipments;
