import React from "react";
import DashboardLayout from "./dashboard/DashboardLayout";
import MetricsOverview from "./dashboard/MetricsOverview";
import TimeframeSelector from "./dashboard/TimeframeSelector";
import ConversionChart from "./dashboard/ConversionChart";
import SuspiciousActivityTable from "./dashboard/SuspiciousActivityTable";
import TrafficPatternMap from "./dashboard/TrafficPatternMap";

const Home = () => {
  // State for selected timeframe that will be passed to child components
  const [selectedTimeframe, setSelectedTimeframe] = React.useState("daily");

  // Handler for timeframe changes
  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Phát hiện gian lận</h1>
        <p className="text-gray-500">
          Giám sát và phân tích chuyển đổi quảng cáo cho thị trường Việt Nam
        </p>
      </div>

      {/* Metrics Overview */}
      <MetricsOverview
        totalConversions={15782}
        suspiciousActivities={423}
        legitimateConversions={15359}
        fraudRate={2.7}
        totalConversionsChange={8}
        suspiciousActivitiesChange={15}
        legitimateConversionsChange={7}
        fraudRateChange={-3}
      />

      {/* Timeframe Selector */}
      <TimeframeSelector
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={handleTimeframeChange}
      />

      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversion Chart - Takes 2/3 of the width on large screens */}
        <div className="lg:col-span-2">
          <ConversionChart
            title="Xu hướng chuyển đổi"
            description="Biểu đồ chuyển đổi hợp lệ và đáng ngờ theo thời gian"
          />
        </div>

        {/* Traffic Pattern Map - Takes 1/3 of the width on large screens */}
        <div>
          <TrafficPatternMap selectedTimeframe={selectedTimeframe} />
        </div>
      </div>

      {/* Suspicious Activity Table - Full width */}
      <SuspiciousActivityTable
        onViewDetails={(id) => console.log(`Xem chi tiết hoạt động ${id}`)}
        onFlagActivity={(id) => console.log(`Đánh dấu hoạt động ${id}`)}
        onConfirmFraud={(id) =>
          console.log(`Xác nhận gian lận cho hoạt động ${id}`)
        }
        onDismissFraud={(id) =>
          console.log(`Bỏ qua gian lận cho hoạt động ${id}`)
        }
      />
    </DashboardLayout>
  );
};

export default Home;
