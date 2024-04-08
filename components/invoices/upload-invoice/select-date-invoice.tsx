"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui";
import moment from "moment";

interface SelectDateInvoiceProps {
  setYearAndMonth: (yearAndMonth: {
    year: string | null;
    month: string | null;
  }) => void;
  yearAndMonth: { year: string | null; month: string | null };
}

export const SelectDateInvoice = ({
  setYearAndMonth,
  yearAndMonth,
}: SelectDateInvoiceProps) => {
  const years = Array.from(
    { length: new Date().getFullYear() - 2022 + 1 },
    (_, i) => 2022 + i
  );

  const months = Array.from({ length: 12 }, (_, i) =>
    moment().month(i).format("MMMM")
  );

  return (
    <div className="flex gap-3 mb-3">
      <Select
        onValueChange={(value) =>
          setYearAndMonth({ year: value, month: yearAndMonth.month })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) =>
          setYearAndMonth({ month: value, year: yearAndMonth.year })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          {months.map((month) => (
            <SelectItem key={month} value={month.toString()}>
              {month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
