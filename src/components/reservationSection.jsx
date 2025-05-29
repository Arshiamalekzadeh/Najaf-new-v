import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useBookDay } from "../hooks/useBookDay";
import DayCardReserve from "./stay/dayCardReserve";

const ReservationSection = (props) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [bookId, setBookId] = useState();
  const { createBookDay, deleteBookDay } = useBookDay();


  useEffect(() => {
    if (props.data) {
      const selected = props.data?.days.map((day) => day?.day?.date);
      setSelectedDates(selected);
      setBookId(props.data.id);
    }
  }, [props.data]);

  useEffect(() => {
    props.refetch();
  }, [props.refetch]);

  const handlePostClick = (date) => {
    if (!selectedDates.includes(date.date)) {
      createBookDay(
        {
          bookId: bookId,
          dayId: date.id,
        },
        {
          onSuccess: (response) => {
            setSelectedDates((prevDates) => [...prevDates, date?.date]);
            props.refetch();
          },
          onError: (error) => {
            console.error("Error creating book day:", error);
          },
        }
      );
    }
  };

  const handleDeleteClick = async (date) => {

    const bookDay = props.data?.days;

    const dayToDelete = bookDay.find((day) => day.dayId === date.id);
    if (dayToDelete) {
      const dayId = dayToDelete.id;

      await deleteBookDay(dayId, {
        onSuccess: () => {
          setSelectedDates((prevDates) =>
            prevDates.filter((d) => d !== date.date)
          );
        },
        onError: (error) => {
        },
      });
    } else {
      console.error("Day not found for the selected date.");
    }
  };

  return (
    <Grid item md={12}>
      <div className="mb-5 w-full p-[24px]">
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="center"
          gap={2} // Adds space between cards
        >
          {props.data?.stay.days.map((day, dayIndex) => (
            <DayCardReserve
              key={dayIndex}
              date={day}
              selectedDates={selectedDates}
              onPostClick={handlePostClick}
              onDeleteClick={handleDeleteClick}
              readOnly={props.readOnly}
            />
          ))}
        </Box>
      </div>
    </Grid>
  );
};

export default ReservationSection;
