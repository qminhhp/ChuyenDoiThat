import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TrafficPatternMapProps {
  regions?: Array<{
    id: string;
    name: string;
    fraudRate: number;
    totalTraffic: number;
  }>;
  selectedTimeframe?: string;
}

const TrafficPatternMap = ({
  regions = [
    { id: "1", name: "Hà Nội", fraudRate: 12.5, totalTraffic: 25000 },
    { id: "2", name: "TP. Hồ Chí Minh", fraudRate: 8.3, totalTraffic: 42000 },
    { id: "3", name: "Đà Nẵng", fraudRate: 5.7, totalTraffic: 15000 },
    { id: "4", name: "Cần Thơ", fraudRate: 15.2, totalTraffic: 8000 },
    { id: "5", name: "Hải Phòng", fraudRate: 9.8, totalTraffic: 12000 },
    { id: "6", name: "Nha Trang", fraudRate: 7.4, totalTraffic: 9500 },
  ],
  selectedTimeframe = "daily",
}: TrafficPatternMapProps) => {
  const [viewMode, setViewMode] = useState("map");
  const [selectedMetric, setSelectedMetric] = useState("fraudRate");

  // Function to determine color intensity based on fraud rate
  const getFraudRateColor = (rate: number) => {
    if (rate > 15) return "bg-red-600";
    if (rate > 10) return "bg-red-500";
    if (rate > 7) return "bg-orange-400";
    if (rate > 5) return "bg-yellow-400";
    return "bg-green-400";
  };

  // Function to determine circle size based on traffic volume
  const getTrafficSizeClass = (traffic: number) => {
    const maxTraffic = Math.max(...regions.map((r) => r.totalTraffic));
    const percentage = (traffic / maxTraffic) * 100;

    if (percentage > 80) return "w-16 h-16";
    if (percentage > 60) return "w-14 h-14";
    if (percentage > 40) return "w-12 h-12";
    if (percentage > 20) return "w-10 h-10";
    return "w-8 h-8";
  };

  return (
    <Card className="w-full h-full bg-white shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          Bản đồ mẫu lưu lượng
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn chỉ số" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fraudRate">Tỷ lệ gian lận</SelectItem>
              <SelectItem value="totalTraffic">Lượng truy cập</SelectItem>
            </SelectContent>
          </Select>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-500 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Hiển thị mẫu lưu lượng truy cập trên khắp Việt Nam, làm nổi
                  bật các khu vực có tỷ lệ gian lận cao
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={viewMode} onValueChange={setViewMode} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="map">Xem bản đồ</TabsTrigger>
            <TabsTrigger value="table">Xem bảng</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="w-full">
            <div className="relative w-full h-[320px] border border-gray-200 rounded-md bg-gray-50 overflow-hidden">
              {/* Vietnam map outline - simplified representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Bản đồ Việt Nam"
                  className="opacity-20 object-contain h-full"
                />

                {/* Plotting regions as circles */}
                {regions.map((region) => {
                  // In a real implementation, you would have actual coordinates
                  // This is just a placeholder positioning
                  const randomTop = Math.floor(Math.random() * 70) + 10;
                  const randomLeft = Math.floor(Math.random() * 70) + 10;

                  return (
                    <div
                      key={region.id}
                      className={`absolute rounded-full flex items-center justify-center ${getTrafficSizeClass(region.totalTraffic)} ${getFraudRateColor(region.fraudRate)}`}
                      style={{
                        top: `${randomTop}%`,
                        left: `${randomLeft}%`,
                        opacity: 0.8,
                      }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="w-full h-full flex items-center justify-center cursor-pointer">
                              <span className="text-xs font-bold text-white">
                                {region.name.substring(0, 2)}
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="p-1">
                              <p className="font-bold">{region.name}</p>
                              <p>Tỷ lệ gian lận: {region.fraudRate}%</p>
                              <p>
                                Lưu lượng:{" "}
                                {region.totalTraffic.toLocaleString()}
                              </p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-600 mr-1"></div>
                  <span>{">"} 15% Gian lận</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>10-15% Gian lận</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mr-1"></div>
                  <span>7-10% Gian lận</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                  <span>5-7% Gian lận</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                  <span>{"<"} 5% Gian lận</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="table">
            <div className="border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Khu vực
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tỷ lệ gian lận
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lượng truy cập
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {regions.map((region) => (
                    <tr key={region.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {region.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {region.fraudRate}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {region.totalTraffic.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {region.fraudRate > 10 ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            <AlertCircle className="h-3 w-3 mr-1" /> Rủi ro cao
                          </span>
                        ) : region.fraudRate > 5 ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Rủi ro trung bình
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Rủi ro thấp
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TrafficPatternMap;
