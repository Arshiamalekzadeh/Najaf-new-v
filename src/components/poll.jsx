import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { Danger } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usePoll } from "../hooks/usePoll";

const Poll = ({ readOnly, data, userId, bookId, poll, refetch }) => {
  const [checkedValues, setCheckedValues] = useState([]);
  const [responseId, setResponseId] = useState("");
  
  // poll hook
  const { postPoll, deletePoll } = usePoll();

  useEffect(() => {
    // Initialize checkedValues based on the poll prop
    const initialCheckedValues = poll?.map((item) => item.type.id);
    setCheckedValues(initialCheckedValues);
  }, [poll]);

  const handleCheckboxChange = async (id) => {
    let u = responseId;
    const pollItem = poll.find((item) => item.type.id === id);

    let arr = [...checkedValues];
    if (checkedValues?.includes(id)) {
      const deleteId = pollItem?.id || u;
      deletePoll(deleteId, {
        onSuccess: () => {
          const t = arr.filter((item) => item !== id);
          setCheckedValues(t);
        },
      });
    } else {
      await postPoll(
        {
          userId: userId,
          bookId: bookId,
          typeId: id,
        },
        {
          onSuccess: (response) => {
            setResponseId(response?.id);
            arr.push(id);
            setCheckedValues(arr);
            refetch();
          },
          onError: (res) => {
            toast.error(res?.response?.data?.TypeId[0], {
              theme: "colored",
            });
          },
        }
      );
      setCheckedValues(arr);
    }
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Grid container spacing={1} className="bg-white p-4">
        {data?.map((item) => (
          <Grid item key={item.id}>
            {!readOnly ? (
              <Box
                className={`pl-4 flex items-center border border-slate-200 bg-slate-50 rounded-lg ${
                  checkedValues?.includes(item.id) &&
                  "bg-orange-100 border-orange-300"
                }`}
              >
                <Checkbox
                  value={item.id}
                  onChange={() => handleCheckboxChange(item.id, responseId)}
                  checked={checkedValues?.includes(item?.id)}
                  size="large"
                  color={
                    checkedValues?.includes(item?.id) ? "warning" : "primary"
                  }
                />
                <div>
                  <Typography className="text-nowrap">{item?.name}</Typography>
                  <Typography
                    variant="body2"
                    className="text-nowrap !font-normal opacity-70"
                  >
                    {item.description}
                  </Typography>
                </div>
              </Box>
            ) : (
              <Box
                className={`pl-4 py-1 flex items-center border rounded-lg bg-orange-50 border-orange-200`}
              >
                <Danger className="text-orange-600 mx-2" size={26} />
                <div>
                  <Typography className="text-nowrap">{item.name}</Typography>
                  <Typography
                    variant="body2"
                    className="text-nowrap !font-normal opacity-70"
                  >
                    {item.description}
                  </Typography>
                </div>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Poll;
