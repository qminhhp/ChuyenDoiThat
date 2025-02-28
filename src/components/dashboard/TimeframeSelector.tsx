import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface TimeframeOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface TimeframeSelectorProps {
  selectedTimeframe?: string;
  onTimeframeChange?: (timeframe: string) => void;
  showCustomOption?: boolean;
}

const TimeframeSelector = ({
  selectedTimeframe = "daily",
  onTimeframeChange = () => {},
  showCustomOption = true,
}: TimeframeSelectorProps) => {
  const timeframeOptions: TimeframeOption[] = [
    { value: "hourly", label: "Theo giờ" },
    { value: "daily", label: "Hàng ngày" },
    { value: "monthly", label: "Hàng tháng" },
    { value: "quarterly", label: "Hàng quý" },
    { value: "yearly", label: "Hàng năm" },
  ];

  const handleTimeframeChange = (value: string) => {
    onTimeframeChange(value);
  };

  return (
    <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-sm flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Khung thời gian</h3>
        {showCustomOption && (
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            <span>Tùy chỉnh</span>
          </Button>
        )}
      </div>

      <div className="flex items-center">
        <Clock className="h-5 w-5 text-gray-500 mr-2" />
        <Tabs
          defaultValue={selectedTimeframe}
          onValueChange={handleTimeframeChange}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-5">
            {timeframeOptions.map((option) => (
              <TabsTrigger
                key={option.value}
                value={option.value}
                className="text-sm"
              >
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="text-xs text-gray-500 flex items-center justify-end">
        <span>Cập nhật lần cuối: {new Date().toLocaleString()}</span>
      </div>
    </div>
  );
};

export default TimeframeSelector;
