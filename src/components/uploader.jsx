import { InfoOutlined } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import { Image, Typography, Upload } from "antd";
import axios from "axios";
import { ElementPlus } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB
const serverUrl = import.meta.env.VITE_API_BASE_URL;

const Uploader = ({ fileList, setFileList, id, isUnit }) => {
  //upload
  const [previewImage, setPreviewImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      disabled={uploading}
      type="button"
    >
      {uploading ? (
        <CircularProgress size={24} />
      ) : (
        <ElementPlus className="m-auto text-gray-400" size="24" />
      )}
      <div
        style={{
          marginTop: 8,
        }}
      >
        {uploading ? <>صبر نمایید..</> : <> افزودن تصویر</>}
      </div>
    </button>
  );

  const customRequest = ({ file, onSuccess, onError }) => {
    // Create a new FormData object
    setUploading(true);
    const formData = new FormData();
    formData.append(isUnit ? "UnitId" : "AccommodationId", id);
    formData.append("File", file);
    const token = sessionStorage.token;

    // Use axios to send the file to your server
    const uploadUrl = isUnit
      ? serverUrl + "AccommodationUnitMedia"
      : serverUrl + "AccommodationMedia";

    axios
      .post(uploadUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Make sure axios knows it's form data
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // بر اساس نوع اپلود پیام درست نمایش داده شود
          const successMessage = isUnit
            ? `${file.name} با موفقیت در بخش واحد آپلود شد`
            : `${file.name} با موفقیت در بخش اقامتگاه آپلود شد`;

          toast.success(successMessage, {
            position: "top-center",
          });
          const item = response.data; // Assume response.data is a single object

          const img = {
            uid: item.id, // Ensure that item.id is the unique identifier for the file
            name: item.mediaId, // Use item.mediaId for the file name
            status: "done",
            url:
              serverUrl +
              "Media/Download" +
              "/" +
              item?.mediaId +
              "?type=small", // Adjust URL according to your server's response
          };

          onSuccess(); // Call onSuccess if needed
          setUploading(false);
          setFileList([...fileList, img]);
        } else {
          setUploading(false);
          onError(new Error("خطا در بارگذاری!"));
        }
      })
      .catch((err) => {
        setUploading(false);
      });
  };

  function removeHandler(file) {
    const updatedFileList = [...fileList];
    const filteredArr = updatedFileList.filter((item) => item.uid !== file.uid);

    const token = sessionStorage.token;

    // انتخاب مسیر درست بر اساس مقدار isUnit
    const deleteUrl = isUnit
      ? `http://192.168.11.2:31001/api/AccommodationUnitMedia/${file.uid}`
      : `http://192.168.11.2:31001/api/AccommodationMedia/${file.uid}`;

    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          toast.success("عکس با موفقیت حذف شد", {
            position: "top-center",
          });
          setFileList(filteredArr);
        } else {
          toast.error("خطا در حذف عکس!", {
            position: "top-center",
          });
        }
      })
      .catch((err) => {
        toast.error("خطا در ارتباط با سرور!", {
          position: "top-center",
        });
      });
  }

  return (
    <Box className="p-6 bg-slate-100 bg-opacity-70 rounded-md my-4">
      {/* Uploader */}
      <Upload
        customRequest={customRequest}
        beforeUpload={(file) => {
          const isValidSize = file.size <= MAX_FILE_SIZE;
          const isAllowedType =
            file.type === "image/jpeg" || file.type === "image/png";

          if (!isAllowedType) {
            toast.error("نوع فایل نامعتبر است!", {
              position: "top-center",
            });
          }
          if (!isValidSize) {
            toast.error("حجم فایل بیش از حد است!", {
              position: "top-center",
            });
          }
          return isAllowedType;
        }}
        onChange={(info) => {
          if (info.file.status === "done") {
            toast.success(`${info.file.name} بارگذاری شد!`, {
              position: "top-center",
            });
          } else if (info.file.status === "error") {
            toast.error(`${info.file.name} بارگذاری ناموفق بود.`, {
              position: "top-center",
            });
          }
        }}
        listType="picture-card"
        fileList={fileList}
        onRemove={removeHandler}
      >
        {fileList?.length >= 8 ? null : uploadButton}
      </Upload>
      <Typography
        variant="caption"
        className="bg-slate-200 bg-opacity-50 border-blue-500 rounded-md p-2 mt-1"
      >
        <Box>
          <InfoOutlined color="info" /> حداکثر حجم فایل 3MB می باشد
        </Box>
      </Typography>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          src={previewImage}
        />
      )}
    </Box>
  );
};

export default Uploader;
