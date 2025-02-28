import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import MetricsOverview from "./MetricsOverview";
import TimeframeSelector from "./TimeframeSelector";
import ConversionChart from "./ConversionChart";
import SuspiciousActivityTable from "./SuspiciousActivityTable";
import TrafficPatternMap from "./TrafficPatternMap";
import WebsiteSelector from "./WebsiteSelector";

const DashboardPage = () => {
  // State for selected timeframe that will be passed to child components
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");
  const [selectedWebsiteId, setSelectedWebsiteId] = useState<
    string | undefined
  >();

  // Handler for timeframe changes
  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe);
  };

  // Handler for website selection
  const handleWebsiteSelect = (websiteId: string) => {
    setSelectedWebsiteId(websiteId);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Bảng điều khiển</h1>
        <p className="text-gray-500">
          Tổng quan về hoạt động chuyển đổi và phát hiện gian lận
        </p>
      </div>

      {/* Website Selector and Metrics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <WebsiteSelector
            onSelectWebsite={handleWebsiteSelect}
            selectedWebsiteId={selectedWebsiteId}
          />
        </div>
        <div className="lg:col-span-3">
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
        </div>
      </div>

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

export default DashboardPage;
