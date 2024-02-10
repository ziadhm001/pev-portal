import { Stack } from "@chakra-ui/react";
import FormTextField from "./FormTextField";
import { useEffect, useState } from "react";

// create a function To Generate  years from x to y

const isValueChanged = (value1, value2) => {
  let valueChanged = value1 !== value2;
  return valueChanged;
};

function BirthDateField({
  day,
  onDayChange,
  month,
  onMonthChange,
  year,
  onYearChange,
  dayError,
  monthError,
  yearError,
  dayTouched,
  monthTouched,
  yearTouched,
}) {
  return (
    <Stack spacing={2} direction={"row"} w={"100%"}>
      <FormTextField
        name={`day`}
        type={"number"}
        label={"Day"}
        placeholder={"Day"}
        value={day}
        onChange={onDayChange}
        error={dayError}
        touched={dayTouched}
        bg={"white"}
      />
      <FormTextField
        name={`month`}
        type={"number"}
        label={"Month"}
        placeholder={"Month"}
        value={month}
        onChange={onMonthChange}
        error={monthError}
        touched={monthTouched}
        bg={"white"}
      />
      <FormTextField
        name={`'year`}
        type={"number"}
        label={"Year"}
        placeholder={"Year"}
        value={year}
        onChange={onYearChange}
        error={yearError}
        touched={yearTouched}
        bg={"white"}
      />
    </Stack>
  );
}

export default BirthDateField;
