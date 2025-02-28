import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  Clock,
  MapPin,
  MousePointer,
  Users,
  Zap,
} from "lucide-react";

interface AnomalyType {
  id: string;
  name: string;
  description: string;
  indicators: string[];
  thresholds: {
    low: string;
    medium: string;
    high: string;
  };
  examples: string[];
}

const AnomalyDetectionGuide = () => {
  const [activeTab, setActiveTab] = React.useState("rapid_conversion");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
          Hướng dẫn phát hiện bất thường
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="rapid_conversion"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger
              value="rapid_conversion"
              className="flex items-center justify-center"
            >
              <Zap className="h-4 w-4 mr-1" />
              Chuyển đổi nhanh
            </TabsTrigger>
            <TabsTrigger
              value="geo_anomaly"
              className="flex items-center justify-center"
            >
              <MapPin className="h-4 w-4 mr-1" />
              Vị trí địa lý
            </TabsTrigger>
            <TabsTrigger
              value="bot_behavior"
              className="flex items-center justify-center"
            >
              <MousePointer className="h-4 w-4 mr-1" />
              Hành vi bot
            </TabsTrigger>
          </TabsList>

          {anomalyTypes.map((anomaly) => (
            <TabsContent
              key={anomaly.id}
              value={anomaly.id}
              className="space-y-4"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{anomaly.name}</h3>
                <p className="text-gray-700">{anomaly.description}</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Chỉ số nhận biết:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {anomaly.indicators.map((indicator, index) => (
                    <li key={index} className="text-gray-700">
                      {indicator}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Ngưỡng phát hiện:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">
                      Thấp: {anomaly.thresholds.low}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-sm">
                      Trung bình: {anomaly.thresholds.medium}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm">
                      Cao: {anomaly.thresholds.high}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Ví dụ thực tế:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {anomaly.examples.map((example, index) => (
                    <li key={index} className="text-gray-700">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

const anomalyTypes: AnomalyType[] = [
  {
    id: "rapid_conversion",
    name: "Nhiều lượt chuyển đổi nhanh",
    description:
      "Xảy ra khi một người dùng thực hiện nhiều lượt chuyển đổi trong một khoảng thời gian ngắn, vượt quá mức bình thường của người dùng thực.",
    indicators: [
      "Nhiều lượt chuyển đổi từ cùng một địa chỉ IP trong thời gian ngắn",
      "Thời gian giữa các lượt chuyển đổi quá ngắn (dưới 10 giây)",
      "Tổng số lượt chuyển đổi trong ngày vượt quá ngưỡng bình thường",
      "Mẫu chuyển đổi có tính lặp lại chính xác",
    ],
    thresholds: {
      low: "3-5 lượt chuyển đổi/phút",
      medium: "6-10 lượt chuyển đổi/phút",
      high: ">10 lượt chuyển đổi/phút",
    },
    examples: [
      "Một địa chỉ IP thực hiện 15 lượt chuyển đổi trong vòng 2 phút",
      "Người dùng hoàn thành quá trình chuyển đổi chỉ trong 3 giây (không đủ thời gian để đọc nội dung)",
      "Một tài khoản thực hiện 50 lượt chuyển đổi trong một ngày",
    ],
  },
  {
    id: "geo_anomaly",
    name: "Vị trí địa lý bất thường",
    description:
      "Phát hiện khi có sự thay đổi đáng ngờ về vị trí địa lý của người dùng hoặc khi vị trí không phù hợp với hành vi thông thường.",
    indicators: [
      "Thay đổi vị trí địa lý đột ngột giữa các phiên truy cập",
      "Truy cập từ nhiều quốc gia khác nhau trong thời gian ngắn",
      "Vị trí địa lý không phù hợp với thông tin người dùng",
      "Sử dụng VPN hoặc proxy đã biết",
    ],
    thresholds: {
      low: "Truy cập từ 2 thành phố khác nhau trong cùng ngày",
      medium: "Truy cập từ 2-3 quốc gia khác nhau trong cùng ngày",
      high: "Truy cập từ >3 quốc gia hoặc di chuyển >500km trong vòng 1 giờ",
    },
    examples: [
      "Người dùng đăng nhập từ Hà Nội, sau đó 30 phút sau đăng nhập từ TP.HCM",
      "Một tài khoản truy cập từ Việt Nam, Trung Quốc và Mỹ trong cùng một ngày",
      "Địa chỉ IP được xác định là thuộc về dịch vụ VPN phổ biến",
    ],
  },
  {
    id: "bot_behavior",
    name: "Mẫu nhấp chuột giống bot",
    description:
      "Phát hiện các mẫu tương tác không tự nhiên trên trang web, thường là do bot hoặc script tự động thực hiện.",
    indicators: [
      "Tốc độ nhấp chuột không tự nhiên (quá nhanh hoặc quá đều đặn)",
      "Không có chuyển động chuột trước khi nhấp",
      "Thời gian dừng trên trang quá ngắn để đọc nội dung",
      "Mẫu điều hướng trang web không tự nhiên",
    ],
    thresholds: {
      low: "10-15 nhấp chuột/phút với mẫu đều đặn",
      medium: "15-25 nhấp chuột/phút hoặc không có chuyển động chuột",
      high: ">25 nhấp chuột/phút hoặc thời gian dừng <2 giây/trang",
    },
    examples: [
      "Người dùng nhấp chính xác 20 lần mỗi phút trong 5 phút liên tục",
      "Không có chuyển động chuột nào được ghi nhận trước khi nhấp vào các nút CTA",
      "Người dùng duyệt qua 30 trang trong vòng 1 phút (không đủ thời gian để đọc)",
    ],
  },
];

export default AnomalyDetectionGuide;
