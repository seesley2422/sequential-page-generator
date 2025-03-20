
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface MonthYearPickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const MonthYearPicker: React.FC<MonthYearPickerProps> = ({
  value,
  onChange,
  placeholder = '請選擇日期',
  required = false,
}) => {
  const dateValue = value ? new Date(value) : undefined;

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      // Format as YYYY-MM
      const formattedDate = format(date, 'yyyy-MM');
      onChange(formattedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
            "border border-gray-300 rounded-md"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(new Date(value + '-01'), 'yyyy/MM') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={dateValue}
          onSelect={handleSelect}
          initialFocus
          defaultMonth={dateValue}
          showOutsideDays={false}
          className={cn("p-3 pointer-events-auto")}
          required={required}
          captionLayout="dropdown-buttons"
          fromYear={1900}
          toYear={2050}
          // Only show month and year selectors
          ISOWeek={false}
          // Hide day names row
          showWeekNumber={false}
          disabled={(date) => false}
          // Only allow selecting the 1st of each month and hide the date display
          modifiers={{
            hidden: (date) => date.getDate() !== 1,
          }}
          modifiersStyles={{
            hidden: { visibility: 'hidden' }
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default MonthYearPicker;
