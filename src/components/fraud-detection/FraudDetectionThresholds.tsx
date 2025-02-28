import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, Save, RotateCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ThresholdSetting {
  id: string;
  name: string;
  description: string;
  currentValue: number;
  defaultValue: number;
  min: number;
  max: number;
  unit: string;
  severity: "low" | "medium" | "high";
}

interface FraudDetectionThresholdsProps {
  onSave?: (thresholds: ThresholdSetting[]) => void;
  onReset?: () => void;
}

const FraudDetectionThresholds = ({
  onSave = () => {},
  onReset = () => {},
}: FraudDetectionThresholdsProps) => {
  const [activeTab, setActiveTab] = React.useState("conversion");
  const [thresholds, setThresholds] =
    React.useState<ThresholdSetting[]>(defaultThresholds);

  const handleThresholdChange = (id: string, value: number) => {
    setThresholds(
      thresholds.map((threshold) =>
        threshold.id === id ? { ...threshold, currentValue: value } : threshold,
      ),
    );
  };

  const handleReset = () => {
    setThresholds(
      thresholds.map((threshold) => ({
        ...threshold,
        currentValue: threshold.defaultValue,
      })),
    );
    onReset();
  };

  const handleSave = () => {
    onSave(thresholds);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-amber-100 text-amber-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getThresholdsByCategory = (category: string) => {
    return thresholds.filter((threshold) => threshold.id.startsWith(category));
  };

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Ngưỡng phát hiện gian lận</span>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Đặt lại mặc định
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-1" />
              Lưu thay đổi
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">
          <p className="flex items-center">
            <Info className="h-4 w-4 mr-1" />
            Điều chỉnh các ngưỡng dưới đây để xác định khi nào một hoạt động
            được coi là đáng ngờ.
          </p>
        </div>

        <Tabs
          defaultValue="conversion"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="conversion">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Chuyển đổi bất thường
            </TabsTrigger>
            <TabsTrigger value="location">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Vị trí địa lý
            </TabsTrigger>
            <TabsTrigger value="behavior">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Hành vi người dùng
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conversion" className="space-y-4">
            {getThresholdsByCategory("conversion").map((threshold) => (
              <ThresholdControl
                key={threshold.id}
                threshold={threshold}
                onChange={(value) => handleThresholdChange(threshold.id, value)}
              />
            ))}
          </TabsContent>

          <TabsContent value="location" className="space-y-4">
            {getThresholdsByCategory("location").map((threshold) => (
              <ThresholdControl
                key={threshold.id}
                threshold={threshold}
                onChange={(value) => handleThresholdChange(threshold.id, value)}
              />
            ))}
          </TabsContent>

          <TabsContent value="behavior" className="space-y-4">
            {getThresholdsByCategory("behavior").map((threshold) => (
              <ThresholdControl
                key={threshold.id}
                threshold={threshold}
                onChange={(value) => handleThresholdChange(threshold.id, value)}
              />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface ThresholdControlProps {
  threshold: ThresholdSetting;
  onChange: (value: number) => void;
}

const ThresholdControl = ({ threshold, onChange }: ThresholdControlProps) => {
  return (
    <div className="border rounded-md p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h3 className="font-medium">{threshold.name}</h3>
          <Badge
            className={`ml-2 ${getSeverityColor(threshold.severity)}`}
            variant="outline"
          >
            {threshold.severity === "high"
              ? "Nghiêm trọng"
              : threshold.severity === "medium"
                ? "Trung bình"
                : "Thấp"}
          </Badge>
        </div>
        <div className="text-sm font-medium">
          {threshold.currentValue} {threshold.unit}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        {threshold.description}
      </p>
      <div className="flex items-center space-x-4">
        <span className="text-xs">{threshold.min}</span>
        <Slider
          value={[threshold.currentValue]}
          min={threshold.min}
          max={threshold.max}
          step={1}
          onValueChange={(value) => onChange(value[0])}
          className="flex-1"
        />
        <span className="text-xs">{threshold.max}</span>
      </div>
    </div>
  );
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-amber-100 text-amber-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const defaultThresholds: ThresholdSetting[] = [
  {
    id: "conversion_rapid",
    name: "Nhiều lượt chuyển đổi nhanh",
    description:
      "Số lượt chuyển đổi tối đa trong một khoảng thời gian ngắn từ cùng một người dùng",
    currentValue: 5,
    defaultValue: 5,
    min: 1,
    max: 20,
    unit: "lượt/phút",
    severity: "high",
  },
  {
    id: "conversion_time",
    name: "Thời gian giữa các lượt chuyển đổi",
    description:
      "Thời gian tối thiểu giữa các lượt chuyển đổi từ cùng một người dùng",
    currentValue: 10,
    defaultValue: 10,
    min: 1,
    max: 60,
    unit: "giây",
    severity: "medium",
  },
  {
    id: "conversion_total",
    name: "Tổng số lượt chuyển đổi trong ngày",
    description:
      "Số lượng tối đa các lượt chuyển đổi từ cùng một người dùng trong một ngày",
    currentValue: 20,
    defaultValue: 20,
    min: 5,
    max: 100,
    unit: "lượt/ngày",
    severity: "low",
  },
  {
    id: "location_distance",
    name: "Khoảng cách địa lý bất thường",
    description:
      "Khoảng cách tối đa giữa hai địa điểm truy cập liên tiếp từ cùng một người dùng",
    currentValue: 500,
    defaultValue: 500,
    min: 100,
    max: 1000,
    unit: "km",
    severity: "high",
  },
  {
    id: "location_countries",
    name: "Số quốc gia truy cập",
    description:
      "Số lượng quốc gia khác nhau mà một người dùng truy cập trong một ngày",
    currentValue: 3,
    defaultValue: 3,
    min: 1,
    max: 10,
    unit: "quốc gia",
    severity: "medium",
  },
  {
    id: "location_vpn",
    name: "Phát hiện VPN/Proxy",
    description:
      "Mức độ tin cậy tối thiểu để xác định một kết nối đang sử dụng VPN hoặc proxy",
    currentValue: 75,
    defaultValue: 75,
    min: 50,
    max: 100,
    unit: "%",
    severity: "medium",
  },
  {
    id: "behavior_clicks",
    name: "Tốc độ nhấp chuột",
    description:
      "Số lần nhấp chuột tối đa trong một khoảng thời gian ngắn để phát hiện bot",
    currentValue: 15,
    defaultValue: 15,
    min: 5,
    max: 50,
    unit: "nhấp/phút",
    severity: "high",
  },
  {
    id: "behavior_sessions",
    name: "Số phiên đăng nhập",
    description:
      "Số lượng phiên đăng nhập tối đa từ cùng một người dùng trong một ngày",
    currentValue: 10,
    defaultValue: 10,
    min: 3,
    max: 30,
    unit: "phiên/ngày",
    severity: "low",
  },
  {
    id: "behavior_accounts",
    name: "Tạo nhiều tài khoản",
    description:
      "Số lượng tài khoản tối đa được tạo từ cùng một địa chỉ IP trong một ngày",
    currentValue: 3,
    defaultValue: 3,
    min: 1,
    max: 10,
    unit: "tài khoản/ngày",
    severity: "high",
  },
];

export default FraudDetectionThresholds;
