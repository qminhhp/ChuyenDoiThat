import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ArrowDown,
  ArrowUp,
  AlertTriangle,
  CheckCircle,
  BarChart,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  iconColor?: string;
  changeType?: "increase" | "decrease" | "neutral";
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  change = 0,
  icon,
  iconColor = "text-blue-500",
  changeType = "neutral",
}: MetricCardProps) => {
  const getChangeColor = () => {
    if (changeType === "increase") return "text-green-500";
    if (changeType === "decrease") return "text-red-500";
    return "text-gray-500";
  };

  const getChangeIcon = () => {
    if (changeType === "increase") return <ArrowUp className="h-4 w-4" />;
    if (changeType === "decrease") return <ArrowDown className="h-4 w-4" />;
    return null;
  };

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
        <div className={`rounded-full p-2 ${iconColor} bg-opacity-10`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <div className="flex items-center mt-1">
            <span className={`flex items-center text-xs ${getChangeColor()}`}>
              {getChangeIcon()}
              {Math.abs(change)}%
            </span>
            <span className="text-xs text-gray-500 ml-1">so với kỳ trước</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface MetricsOverviewProps {
  totalConversions?: number;
  suspiciousActivities?: number;
  legitimateConversions?: number;
  fraudRate?: number;
  totalConversionsChange?: number;
  suspiciousActivitiesChange?: number;
  legitimateConversionsChange?: number;
  fraudRateChange?: number;
}

const MetricsOverview = ({
  totalConversions = 12458,
  suspiciousActivities = 347,
  legitimateConversions = 12111,
  fraudRate = 2.8,
  totalConversionsChange = 12,
  suspiciousActivitiesChange = 24,
  legitimateConversionsChange = 10,
  fraudRateChange = -5,
}: MetricsOverviewProps) => {
  return (
    <div className="w-full bg-gray-50 p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Tổng lượt chuyển đổi"
          value={totalConversions.toLocaleString()}
          change={totalConversionsChange}
          changeType="increase"
          icon={<BarChart className="h-5 w-5" />}
          iconColor="text-blue-500"
        />
        <MetricCard
          title="Hoạt động đáng ngờ"
          value={suspiciousActivities.toLocaleString()}
          change={suspiciousActivitiesChange}
          changeType="increase"
          icon={<AlertTriangle className="h-5 w-5" />}
          iconColor="text-amber-500"
        />
        <MetricCard
          title="Chuyển đổi hợp lệ"
          value={legitimateConversions.toLocaleString()}
          change={legitimateConversionsChange}
          changeType="increase"
          icon={<CheckCircle className="h-5 w-5" />}
          iconColor="text-green-500"
        />
        <MetricCard
          title="Tỷ lệ gian lận"
          value={`${fraudRate}%`}
          change={fraudRateChange}
          changeType="decrease"
          icon={<AlertTriangle className="h-5 w-5" />}
          iconColor="text-red-500"
        />
      </div>
    </div>
  );
};

export default MetricsOverview;
