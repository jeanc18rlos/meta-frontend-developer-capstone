import React, { useEffect } from "react";
import "./booking-form.css";
import { Card } from "./card";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Select } from "./select";
import Button from "./button";
import { DatePicker } from "./datePicker";
import { Input } from "./input";
import { hashString } from "../utils/hashString";
import { OCCASIONS } from "../constants";
import { submitAPI } from "../utils/Api";
import { openInNewTab } from "../utils/routing";

const schema = yup
  .object({
    date: yup.date().required(),
    time: yup.string().required(),
    guests: yup.number().positive().integer().required().max(10).min(1),
    occasion: yup
      .string()
      .oneOf(["Birthday", "Anniversary", "Engagement"])
      .required(),
  })
  .required();

const BookingForm = ({ availableTimes, updateTime }) => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
    const stringifiedData = JSON.stringify(data);
    const hash = hashString(stringifiedData);
    submitAPI(data, hash);
    openInNewTab(`${window.location.origin}/reservation/${hash}`);
  };

  const date = watch("date");

  useEffect(() => {
    updateTime(date);
  }, [date, updateTime]);

  return (
    <Card animated={false}>
      <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
        <Select
          placeholder="Occasion"
          icon={"cheers"}
          value={watch("occasion")}
          {...register("occasion")}
          options={OCCASIONS}
        />
        <p className="error">{errors.occasion?.message}</p>

        <DatePicker
          placeholder="Select a date"
          value={date}
          {...register("date")}
        />
        <p className="error">{errors.date?.message}</p>

        <Input
          placeholder="Number of guests"
          type="number"
          isEmpty={watch("guests")}
          {...register("guests")}
        />
        <p className="error">{errors.guests?.message}</p>

        {date && availableTimes.length > 0 && (
          <Select
            style={{
              zIndex: 7,
            }}
            placeholder="Select a time"
            value={watch("time")}
            {...register("time")}
            icon={"clock"}
            options={availableTimes.map((time) => ({
              value: time,
              label: time,
              icon: "clock",
            }))}
          />
        )}
        {!date && (
          <p className="select-time-message select-date">
            Select A date to see available times
          </p>
        )}
        {date && availableTimes.length === 0 && (
          <p className="select-time-message no-available-times">
            No available times for this date
          </p>
        )}

        <p className="error">{errors.time?.message}</p>
        <Button type="submit" variant={"primary"}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default BookingForm;
