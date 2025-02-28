import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Activity,
  AlertTriangle,
  BarChart2,
  Clock,
  Filter,
  Gauge,
  GitBranch,
  History,
  Layers,
  RefreshCw,
  Settings,
  Sliders,
  TrendingUp,
  Weight,
  Users,
} from "lucide-react";

const FraudScoreSystem = () => {
  const [activeTab, setActiveTab] = React.useState("realtime");

  // Sample data for charts
  const realtimeScoreData = [
    { time: "00:00", score: 12 },
    { time: "01:00", score: 15 },
    { time: "02:00", score: 18 },
    { time: "03:00", score: 14 },
    { time: "04:00", score: 10 },
    { time: "05:00", score: 8 },
    { time: "06:00", score: 12 },
    { time: "07:00", score: 25 },
    { time: "08:00", score: 45 },
    { time: "09:00", score: 65 },
    { time: "10:00", score: 72 },
    { time: "11:00", score: 68 },
    { time: "12:00", score: 74 },
    { time: "13:00", score: 78 },
    { time: "14:00", score: 82 },
    { time: "15:00", score: 88 },
    { time: "16:00", score: 92 },
    { time: "17:00", score: 86 },
    { time: "18:00", score: 72 },
    { time: "19:00", score: 65 },
    { time: "20:00", score: 58 },
    { time: "21:00", score: 52 },
    { time: "22:00", score: 45 },
    { time: "23:00", score: 35 },
  ];

  const factorWeightData = [
    { name: "IP Reputation", weight: 25 },
    { name: "Browser Fingerprint", weight: 20 },
    { name: "Mouse Movement", weight: 15 },
    { name: "Session Timing", weight: 15 },
    { name: "Geographic Location", weight: 10 },
    { name: "User Agent", weight: 8 },
    { name: "Click Pattern", weight: 7 },
  ];

  const thresholdHistoryData = [
    { date: "01/05", threshold: 65, detectionRate: 82 },
    { date: "02/05", threshold: 65, detectionRate: 83 },
    { date: "03/05", threshold: 68, detectionRate: 85 },
    { date: "04/05", threshold: 68, detectionRate: 84 },
    { date: "05/05", threshold: 70, detectionRate: 87 },
    { date: "06/05", threshold: 70, detectionRate: 86 },
    { date: "07/05", threshold: 72, detectionRate: 88 },
    { date: "08/05", threshold: 72, detectionRate: 89 },
    { date: "09/05", threshold: 75, detectionRate: 91 },
    { date: "10/05", threshold: 75, detectionRate: 92 },
    { date: "11/05", threshold: 75, detectionRate: 91 },
    { date: "12/05", threshold: 72, detectionRate: 90 },
    { date: "13/05", threshold: 72, detectionRate: 89 },
    { date: "14/05", threshold: 70, detectionRate: 88 },
  ];

  const sessionScoreData = [
    { action: "Page Visit", score: 5, time: "10:15:23" },
    { action: "Login Attempt", score: 12, time: "10:16:45" },
    { action: "Form Fill", score: 8, time: "10:18:12" },
    { action: "Multiple Tab Open", score: 15, time: "10:19:30" },
    { action: "Rapid Navigation", score: 25, time: "10:20:15" },
    { action: "Unusual Click Pattern", score: 35, time: "10:21:22" },
    { action: "Bot-like Behavior", score: 45, time: "10:22:18" },
    { action: "Conversion Attempt", score: 55, time: "10:23:05" },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
    "#FCCDE5",
  ];

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gauge className="h-5 w-5 mr-2 text-blue-500" />
          Hệ thống chấm điểm gian lận đa chiều
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="realtime"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger
              value="realtime"
              className="flex items-center justify-center"
            >
              <Activity className="h-4 w-4 mr-1" />
              Điểm số thời gian thực
            </TabsTrigger>
            <TabsTrigger
              value="factors"
              className="flex items-center justify-center"
            >
              <Weight className="h-4 w-4 mr-1" />
              Trọng số các yếu tố
            </TabsTrigger>
            <TabsTrigger
              value="thresholds"
              className="flex items-center justify-center"
            >
              <Sliders className="h-4 w-4 mr-1" />
              Ngưỡng tự điều chỉnh
            </TabsTrigger>
            <TabsTrigger
              value="session"
              className="flex items-center justify-center"
            >
              <Layers className="h-4 w-4 mr-1" />
              Điểm số tích lũy theo phiên
            </TabsTrigger>
            <TabsTrigger
              value="ensemble"
              className="flex items-center justify-center"
            >
              <GitBranch className="h-4 w-4 mr-1" />
              Ensemble Approach
            </TabsTrigger>
            <TabsTrigger
              value="feedback"
              className="flex items-center justify-center"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Feedback Loop
            </TabsTrigger>
          </TabsList>

          <TabsContent value="realtime" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Chấm điểm theo thời gian thực dựa trên nhiều yếu tố
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống chấm điểm gian lận theo thời gian thực, phân tích và
                  tổng hợp nhiều yếu tố để đưa ra điểm số chính xác về khả năng
                  gian lận của mỗi phiên truy cập.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Điểm số hiện tại</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Cập nhật: 15:32:45
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center py-6">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-200"
                          strokeWidth="10"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-blue-500"
                          strokeWidth="10"
                          strokeDasharray={2 * Math.PI * 40}
                          strokeDashoffset={2 * Math.PI * 40 * (1 - 88 / 100)}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">88</span>
                        <span className="text-sm text-gray-500">/100</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Ngưỡng hiện tại: 75</span>
                      <Badge
                        className={`${88 >= 75 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                      >
                        {88 >= 75 ? "Đáng ngờ" : "Bình thường"}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${88 >= 75 ? "bg-red-500" : "bg-green-500"}`}
                        style={{ width: `${88}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4 col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Xu hướng điểm số 24 giờ qua</h4>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Làm mới
                    </Button>
                  </div>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={realtimeScoreData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="time" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="score"
                          name="Điểm số gian lận"
                          stroke="#8884d8"
                          strokeWidth={2}
                          dot={{ r: 2 }}
                          activeDot={{ r: 6 }}
                        />
                        {/* Horizontal line for threshold */}
                        <Line
                          type="monotone"
                          dataKey={() => 75}
                          name="Ngưỡng cảnh báo"
                          stroke="#ff7300"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-4">
                  Các yếu tố ảnh hưởng đến điểm số hiện tại
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1 text-red-500" />
                        Mẫu nhấp chuột bất thường
                      </span>
                      <span className="font-medium">+35 điểm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1 text-red-500" />
                        Nhiều phiên từ cùng một IP
                      </span>
                      <span className="font-medium">+25 điểm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                        Thời gian giữa các hành động quá ngắn
                      </span>
                      <span className="font-medium">+15 điểm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-amber-500 h-2 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm flex items-center">
                        <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                        Browser fingerprint đáng ngờ
                      </span>
                      <span className="font-medium">+13 điểm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-amber-500 h-2 rounded-full"
                        style={{ width: "13%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="factors" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Weighted scoring theo mức độ nghiêm trọng của hành vi
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống áp dụng trọng số khác nhau cho từng yếu tố dựa trên
                  mức độ nghiêm trọng và độ tin cậy của các dấu hiệu gian lận,
                  giúp tăng độ chính xác trong việc phát hiện.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-4">
                    Phân bố trọng số các yếu tố
                  </h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={factorWeightData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="weight"
                        >
                          {factorWeightData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Trọng số"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-4">Điều chỉnh trọng số</h4>
                  <div className="space-y-4">
                    {factorWeightData.map((factor, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">{factor.name}</span>
                          <span className="text-sm font-medium">
                            {factor.weight}%
                          </span>
                        </div>
                        <Slider
                          defaultValue={[factor.weight]}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    ))}
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="mr-2">
                        Đặt lại mặc định
                      </Button>
                      <Button size="sm">Lưu thay đổi</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-4">
                  Mức độ nghiêm trọng của các hành vi
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Nghiêm trọng cao</p>
                        <Badge className="bg-red-100 text-red-800">
                          Trọng số 20-25%
                        </Badge>
                      </div>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-red-500" />
                          IP từ danh sách đen hoặc proxy đáng ngờ
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-red-500" />
                          Browser fingerprint giống hệt nhau trên nhiều IP
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-red-500" />
                          Mẫu nhấp chuột rõ ràng là bot
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Nghiêm trọng trung bình</p>
                        <Badge className="bg-amber-100 text-amber-800">
                          Trọng số 10-19%
                        </Badge>
                      </div>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          Thời gian giữa các hành động quá ngắn
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          Vị trí địa lý không phù hợp với lịch sử
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          User-agent bất thường hoặc giả mạo
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Nghiêm trọng thấp</p>
                        <Badge className="bg-green-100 text-green-800">
                          Trọng số 5-9%
                        </Badge>
                      </div>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-green-500" />
                          Thời gian trên trang quá ngắn
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-green-500" />
                          Nhiều tab mở cùng lúc
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-green-500" />
                          Điều hướng không theo mẫu thông thường
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Yếu tố giảm điểm</p>
                        <Badge className="bg-blue-100 text-blue-800">
                          Trọng số -5 đến -15%
                        </Badge>
                      </div>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-blue-500" />
                          Lịch sử truy cập đáng tin cậy
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-blue-500" />
                          Xác thực hai yếu tố thành công
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-blue-500" />
                          Hành vi người dùng tự nhiên
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="thresholds" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Threshold tự điều chỉnh dựa trên dữ liệu lịch sử và học máy
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống tự động điều chỉnh ngưỡng phát hiện gian lận dựa trên
                  dữ liệu lịch sử và các thuật toán học máy, giúp tối ưu hóa tỷ
                  lệ phát hiện và giảm thiểu cảnh báo sai.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Ngưỡng hiện tại</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Tự động điều chỉnh
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center py-6">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-200"
                          strokeWidth="10"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-amber-500"
                          strokeWidth="10"
                          strokeDasharray={2 * Math.PI * 40}
                          strokeDashoffset={2 * Math.PI * 40 * (1 - 75 / 100)}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">75</span>
                        <span className="text-sm text-gray-500">/100</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tỷ lệ phát hiện:</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tỷ lệ dương tính giả:</span>
                      <span className="font-medium">3.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cập nhật lần cuối:</span>
                      <span className="font-medium">Hôm nay, 10:45</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4 col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Lịch sử điều chỉnh ngưỡng</h4>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-3 w-3 mr-1" />
                        Lọc
                      </Button>
                      <Button variant="outline" size="sm">
                        <History className="h-3 w-3 mr-1" />
                        Xem đầy đủ
                      </Button>
                    </div>
                  </div>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={thresholdHistoryData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="left" domain={[0, 100]} />
                        <YAxis
                          yAxisId="right"
                          orientation="right"
                          domain={[0, 100]}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="threshold"
                          name="Ngưỡng phát hiện"
                          stroke="#8884d8"
                          strokeWidth={2}
                          dot={{ r: 3 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="detectionRate"
                          name="Tỷ lệ phát hiện (%)"
                          stroke="#82ca9d"
                          strokeWidth={2}
                          dot={{ r: 3 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-4">
                  Cơ chế tự điều chỉnh ngưỡng
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex items-center mb-2">
                        <GitBranch className="h-4 w-4 mr-2 text-blue-500" />
                        <p className="font-medium">Thuật toán học máy</p>
                      </div>
                      <p className="text-sm text-gray-700">
                        Hệ thống sử dụng thuật toán học máy để phân tích dữ liệu
                        lịch sử về các phiên đã được xác nhận là gian lận hoặc
                        hợp lệ, từ đó tự động điều chỉnh ngưỡng phát hiện để tối
                        ưu hóa tỷ lệ phát hiện và giảm thiểu cảnh báo sai.
                      </p>
                      <div className="mt-2 flex items-center">
                        <Badge className="bg-green-100 text-green-800">
                          Random Forest
                        </Badge>
                        <Badge className="ml-2 bg-green-100 text-green-800">
                          Gradient Boosting
                        </Badge>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        <p className="font-medium">Chu kỳ điều chỉnh</p>
                      </div>
                      <p className="text-sm text-gray-700">
                        Ngưỡng phát hiện được điều chỉnh tự động theo các chu kỳ
                        định kỳ hoặc khi có sự thay đổi đáng kể trong mẫu gian
                        lận. Hệ thống cũng cho phép điều chỉnh thủ công trong
                        trường hợp cần thiết.
                      </p>
                      <div className="mt-2 flex items-center">
                        <Badge className="bg-blue-100 text-blue-800">
                          Hàng ngày: 00:00
                        </Badge>
                        <Badge className="ml-2 bg-blue-100 text-blue-800">
                          Khi phát hiện mẫu mới
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                        <p className="font-medium">Các yếu tố ảnh hưởng</p>
                      </div>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          Tỷ lệ dương tính giả trong 7 ngày qua
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          Tỷ lệ phát hiện thành công trong 7 ngày qua
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          Phân phối điểm số của các phiên hợp lệ
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          Phân phối điểm số của các phiên gian lận
                        </li>
                        <li className="flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                          Mức độ nghiêm trọng của các cuộc tấn công gần đây
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-md border">
                      <div className="flex items-center mb-2">
                        <Settings className="h-4 w-4 mr-2 text-blue-500" />
                        <p className="font-medium">Điều chỉnh thủ công</p>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Điều chỉnh ngưỡng phát hiện thủ công (chỉ dành cho quản
                        trị viên):
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <Slider
                            defaultValue={[75]}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between mt-1 text-xs text-gray-500">
                            <span>0</span>
                            <span>25</span>
                            <span>50</span>
                            <span>75</span>
                            <span>100</span>
                          </div>
                        </div>
                        <Button size="sm">Áp dụng</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="session" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Điểm số tích lũy theo phiên làm việc
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống theo dõi và tích lũy điểm số gian lận trong suốt
                  phiên làm việc của người dùng, phân tích chuỗi hành động để
                  phát hiện các mẫu hành vi đáng ngờ theo thời gian.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Thông tin phiên hiện tại</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Đang hoạt động
                    </Badge>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">ID Phiên:</span>
                      <span className="font-medium text-sm">sess_8a72b391</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Bắt đầu:</span>
                      <span className="font-medium text-sm">10:15:23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Thời gian hoạt động:</span>
                      <span className="font-medium text-sm">00:08:42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Số hành động:</span>
                      <span className="font-medium text-sm">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">IP:</span>
                      <span className="font-medium text-sm">
                        113.161.72.105
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Thiết bị:</span>
                      <span className="font-medium text-sm">
                        Chrome/Windows
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Điểm số tích lũy:</span>
                      <Badge
                        className={`${200 >= 75 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                      >
                        {200 >= 75 ? "Đáng ngờ" : "Bình thường"}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${Math.min(200, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">
                      200 điểm (vượt ngưỡng 75)
                    </p>
                  </div>
                </div>

                <div className="border rounded-md p-4 col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">
                      Tích lũy điểm theo thời gian
                    </h4>
                    <Button variant="outline" size="sm">
                      <BarChart2 className="h-3 w-3 mr-1" />
                      Xem chi tiết
                    </Button>
                  </div>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={sessionScoreData.map((item, index) => ({
                          ...item,
                          cumulativeScore: sessionScoreData
                            .slice(0, index + 1)
                            .reduce((sum, curr) => sum + curr.score, 0),
                        }))}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="action" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="score"
                          name="Điểm số hành động"
                          fill="#8884d8"
                        />
                        <Bar
                          dataKey="cumulativeScore"
                          name="Điểm số tích lũy"
                          fill="#82ca9d"
                        />
                        {/* Horizontal line for threshold */}
                        <Line
                          type="monotone"
                          dataKey={() => 75}
                          name="Ngưỡng cảnh báo"
                          stroke="#ff7300"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={false}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-4">
                  Chi tiết hành động trong phiên
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Thời gian
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Hành động
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Chi tiết
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Điểm số
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tích lũy
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sessionScoreData.map((item, index) => {
                        const cumulativeScore = sessionScoreData
                          .slice(0, index + 1)
                          .reduce((sum, curr) => sum + curr.score, 0);
                        return (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.time}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.action}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {index === 0 && "Truy cập trang chủ"}
                              {index === 1 && "Đăng nhập với tài khoản mới"}
                              {index === 2 && "Điền form đăng ký"}
                              {index === 3 && "Mở 5 tab trong 10 giây"}
                              {index === 4 && "Di chuyển giữa các trang nhanh"}
                              {index === 5 && "Mẫu click không tự nhiên"}
                              {index === 6 && "Tốc độ tương tác quá nhanh"}
                              {index === 7 && "Cố gắng hoàn thành giao dịch"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge
                                className={`${item.score >= 30 ? "bg-red-100 text-red-800" : item.score >= 15 ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}
                              >
                                +{item.score}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge
                                className={`${cumulativeScore >= 75 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                              >
                                {cumulativeScore}
                              </Badge>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ensemble" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Ensemble Approach - Kết hợp nhiều mô hình phát hiện gian lận
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống sử dụng phương pháp kết hợp (ensemble) nhiều mô hình
                  phát hiện gian lận khác nhau, tận dụng điểm mạnh của từng mô
                  hình để đạt được độ chính xác cao hơn và khả năng phát hiện
                  toàn diện hơn.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Decision Tree-based Voting</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Độ chính xác: 97.2%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Kết hợp nhiều mô hình Decision Tree với cơ chế bỏ phiếu để
                    đưa ra quyết định cuối cùng, giúp tăng độ chính xác và giảm
                    thiểu tỷ lệ dương tính giả.
                  </p>
                  <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        {/* Root node */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-100 border border-blue-300 rounded-md p-2 text-xs text-center w-32">
                          IP Reputation
                          <br />
                          &gt; 75?
                        </div>

                        {/* Level 1 - Left */}
                        <div className="absolute top-[60px] left-[25%] transform -translate-x-1/2 bg-blue-100 border border-blue-300 rounded-md p-2 text-xs text-center w-32">
                          Mouse Pattern
                          <br />
                          &gt; 60?
                        </div>

                        {/* Level 1 - Right */}
                        <div className="absolute top-[60px] left-[75%] transform -translate-x-1/2 bg-blue-100 border border-blue-300 rounded-md p-2 text-xs text-center w-32">
                          Session Time
                          <br />
                          &lt; 30s?
                        </div>

                        {/* Level 2 - Left Left */}
                        <div className="absolute top-[120px] left-[12.5%] transform -translate-x-1/2 bg-green-100 border border-green-300 rounded-md p-2 text-xs text-center w-24">
                          Legitimate
                          <br />
                          92%
                        </div>

                        {/* Level 2 - Left Right */}
                        <div className="absolute top-[120px] left-[37.5%] transform -translate-x-1/2 bg-amber-100 border border-amber-300 rounded-md p-2 text-xs text-center w-24">
                          Suspicious
                          <br />
                          68%
                        </div>

                        {/* Level 2 - Right Left */}
                        <div className="absolute top-[120px] left-[62.5%] transform -translate-x-1/2 bg-red-100 border border-red-300 rounded-md p-2 text-xs text-center w-24">
                          Fraudulent
                          <br />
                          95%
                        </div>

                        {/* Level 2 - Right Right */}
                        <div className="absolute top-[120px] left-[87.5%] transform -translate-x-1/2 bg-amber-100 border border-amber-300 rounded-md p-2 text-xs text-center w-24">
                          Suspicious
                          <br />
                          72%
                        </div>

                        {/* Connecting lines */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          style={{ zIndex: -1 }}
                        >
                          {/* Root to Level 1 Left */}
                          <line
                            x1="50%"
                            y1="20px"
                            x2="25%"
                            y2="60px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                          />

                          {/* Root to Level 1 Right */}
                          <line
                            x1="50%"
                            y1="20px"
                            x2="75%"
                            y2="60px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                          />

                          {/* Level 1 Left to Level 2 Left Left */}
                          <line
                            x1="25%"
                            y1="80px"
                            x2="12.5%"
                            y2="120px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                          />

                          {/* Level 1 Left to Level 2 Left Right */}
                          <line
                            x1="25%"
                            y1="80px"
                            x2="37.5%"
                            y2="120px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                          />

                          {/* Level 1 Right to Level 2 Right Left */}
                          <line
                            x1="75%"
                            y1="80px"
                            x2="62.5%"
                            y2="120px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                          />

                          {/* Level 1 Right to Level 2 Right Right */}
                          <line
                            x1="75%"
                            y1="80px"
                            x2="87.5%"
                            y2="120px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                      <div className="flex items-center mb-1">
                        <div className="w-3 h-3 rounded-sm bg-green-100 border border-green-300 mr-1"></div>
                        <span>Legitimate</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <div className="w-3 h-3 rounded-sm bg-amber-100 border border-amber-300 mr-1"></div>
                        <span>Suspicious</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-sm bg-red-100 border border-red-300 mr-1"></div>
                        <span>Fraudulent</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Unsupervised Clustering</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Phát hiện mẫu mới: 89.5%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Sử dụng các thuật toán phân cụm không giám sát để phát hiện
                    các mẫu gian lận mới chưa được biết đến trước đó, giúp hệ
                    thống liên tục cập nhật và thích ứng với các kỹ thuật gian
                    lận mới.
                  </p>
                  <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        {/* Legitimate cluster */}
                        <div className="absolute top-[40px] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                          {Array.from({ length: 30 }).map((_, index) => {
                            const angle = (index / 30) * Math.PI * 2;
                            const radius = 30 + Math.random() * 10;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            return (
                              <div
                                key={`leg-${index}`}
                                className="absolute w-1.5 h-1.5 rounded-full bg-green-500"
                                style={{
                                  left: `${x + 50}px`,
                                  top: `${y + 50}px`,
                                }}
                              ></div>
                            );
                          })}
                          <div className="absolute left-[50px] top-[50px] text-xs font-medium text-green-700">
                            Legitimate
                          </div>
                        </div>

                        {/* Suspicious cluster */}
                        <div className="absolute top-[40px] right-[30%] transform translate-x-1/2 -translate-y-1/2">
                          {Array.from({ length: 20 }).map((_, index) => {
                            const angle = (index / 20) * Math.PI * 2;
                            const radius = 20 + Math.random() * 8;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            return (
                              <div
                                key={`sus-${index}`}
                                className="absolute w-1.5 h-1.5 rounded-full bg-amber-500"
                                style={{
                                  left: `${x + 50}px`,
                                  top: `${y + 50}px`,
                                }}
                              ></div>
                            );
                          })}
                          <div className="absolute left-[50px] top-[50px] text-xs font-medium text-amber-700">
                            Suspicious
                          </div>
                        </div>

                        {/* Fraudulent cluster */}
                        <div className="absolute bottom-[40px] left-[50%] transform -translate-x-1/2 translate-y-1/2">
                          {Array.from({ length: 25 }).map((_, index) => {
                            const angle = (index / 25) * Math.PI * 2;
                            const radius = 25 + Math.random() * 5;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            return (
                              <div
                                key={`fraud-${index}`}
                                className="absolute w-1.5 h-1.5 rounded-full bg-red-500"
                                style={{
                                  left: `${x + 50}px`,
                                  top: `${y + 50}px`,
                                }}
                              ></div>
                            );
                          })}
                          <div className="absolute left-[50px] top-[50px] text-xs font-medium text-red-700">
                            Fraudulent
                          </div>
                        </div>

                        {/* Unknown pattern - new cluster forming */}
                        <div className="absolute bottom-[60px] right-[25%] transform translate-x-1/2 translate-y-1/2">
                          {Array.from({ length: 12 }).map((_, index) => {
                            const angle = (index / 12) * Math.PI * 2;
                            const radius = 15 + Math.random() * 5;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            return (
                              <div
                                key={`new-${index}`}
                                className="absolute w-1.5 h-1.5 rounded-full bg-purple-500"
                                style={{
                                  left: `${x + 30}px`,
                                  top: `${y + 30}px`,
                                }}
                              ></div>
                            );
                          })}
                          <div className="absolute left-[30px] top-[30px] text-xs font-medium text-purple-700">
                            New Pattern
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Bayesian Networks</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Xác suất chính xác: 95.8%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Sử dụng mạng Bayesian để mô hình hóa các mối quan hệ xác
                    suất giữa các yếu tố khác nhau, cho phép hệ thống tính toán
                    xác suất gian lận dựa trên bằng chứng từ nhiều nguồn khác
                    nhau.
                  </p>
                  <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        {/* Bayesian Network Nodes */}
                        {/* Fraud Node (Center) */}
                        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-300 rounded-full p-2 text-xs text-center w-20 h-20 flex items-center justify-center">
                          <div>
                            Fraud
                            <br />
                            P(F) = 0.12
                          </div>
                        </div>

                        {/* IP Reputation Node */}
                        <div className="absolute top-[20%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 border border-blue-300 rounded-full p-2 text-xs text-center w-16 h-16 flex items-center justify-center">
                          <div>
                            IP Rep
                            <br />
                            P(IP|F) = 0.85
                          </div>
                        </div>

                        {/* Browser Fingerprint Node */}
                        <div className="absolute top-[20%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 border border-blue-300 rounded-full p-2 text-xs text-center w-16 h-16 flex items-center justify-center">
                          <div>
                            Browser
                            <br />
                            P(B|F) = 0.78
                          </div>
                        </div>

                        {/* Mouse Pattern Node */}
                        <div className="absolute top-[80%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 border border-blue-300 rounded-full p-2 text-xs text-center w-16 h-16 flex items-center justify-center">
                          <div>
                            Mouse
                            <br />
                            P(M|F) = 0.92
                          </div>
                        </div>

                        {/* Session Timing Node */}
                        <div className="absolute top-[80%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 border border-blue-300 rounded-full p-2 text-xs text-center w-16 h-16 flex items-center justify-center">
                          <div>
                            Timing
                            <br />
                            P(T|F) = 0.81
                          </div>
                        </div>

                        {/* Connecting arrows */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          style={{ zIndex: -1 }}
                        >
                          {/* Fraud to IP */}
                          <line
                            x1="50%"
                            y1="50%"
                            x2="30%"
                            y2="20%"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Fraud to Browser */}
                          <line
                            x1="50%"
                            y1="50%"
                            x2="70%"
                            y2="20%"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Fraud to Mouse */}
                          <line
                            x1="50%"
                            y1="50%"
                            x2="30%"
                            y2="80%"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Fraud to Timing */}
                          <line
                            x1="50%"
                            y1="50%"
                            x2="70%"
                            y2="80%"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Define arrowhead marker */}
                          <defs>
                            <marker
                              id="arrowhead"
                              markerWidth="10"
                              markerHeight="7"
                              refX="9"
                              refY="3.5"
                              orient="auto"
                            >
                              <polygon
                                points="0 0, 10 3.5, 0 7"
                                fill="#94a3b8"
                              />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-4">
                    Ensemble Model Performance
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Decision Tree Accuracy:</span>
                        <span className="font-medium">94.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "94.2%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Clustering Accuracy:</span>
                        <span className="font-medium">89.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "89.5%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">
                          Bayesian Network Accuracy:
                        </span>
                        <span className="font-medium">95.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "95.8%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-200 mt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">
                          Ensemble Combined Accuracy:
                        </span>
                        <span className="font-bold text-green-600">98.3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full"
                          style={{ width: "98.3%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">False Positive Rate:</span>
                        <span className="font-medium text-green-600">1.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "1.2%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">False Negative Rate:</span>
                        <span className="font-medium text-green-600">0.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "0.5%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-4">
                  Lợi ích của Ensemble Approach
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 p-2 rounded-full mr-2">
                        <Activity className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="font-medium">Độ chính xác cao hơn</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Kết hợp nhiều mô hình giúp bù đắp điểm yếu của từng mô
                      hình riêng lẻ, dẫn đến độ chính xác tổng thể cao hơn và tỷ
                      lệ lỗi thấp hơn.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 p-2 rounded-full mr-2">
                        <AlertTriangle className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="font-medium">Phát hiện mẫu mới</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Các thuật toán không giám sát có thể phát hiện các mẫu
                      gian lận mới chưa được biết đến trước đó, giúp hệ thống
                      liên tục cập nhật và thích ứng.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 p-2 rounded-full mr-2">
                        <GitBranch className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="font-medium">Khả năng giải thích</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Mô hình Bayesian và Decision Tree cung cấp khả năng giải
                      thích rõ ràng về lý do tại sao một phiên bị đánh dấu là
                      gian lận, giúp quá trình xem xét thủ công hiệu quả hơn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Feedback Loop System - Học từ phản hồi người dùng
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống liên tục học hỏi và cải thiện từ phản hồi của người
                  dùng, tự động điều chỉnh các ngưỡng và thuật toán phát hiện
                  dựa trên kết quả xác nhận/phủ nhận, giúp tăng độ chính xác và
                  giảm thiểu cảnh báo sai theo thời gian.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">
                      Học từ phản hồi xác nhận/phủ nhận
                    </h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Tự động cải thiện
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Hệ thống ghi nhận và học hỏi từ các quyết định xác nhận hoặc
                    phủ nhận của người dùng đối với các cảnh báo gian lận, giúp
                    cải thiện độ chính xác của các dự đoán trong tương lai.
                  </p>
                  <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        {/* Feedback Loop Diagram */}
                        {/* Detection System */}
                        <div className="absolute top-[30px] left-[50%] transform -translate-x-1/2 bg-blue-100 border border-blue-300 rounded-md p-2 text-xs text-center w-40">
                          Hệ thống phát hiện gian lận
                        </div>

                        {/* Alert */}
                        <div className="absolute top-[80px] left-[50%] transform -translate-x-1/2 bg-amber-100 border border-amber-300 rounded-md p-2 text-xs text-center w-32">
                          Cảnh báo gian lận
                        </div>

                        {/* Human Review */}
                        <div className="absolute top-[130px] left-[50%] transform -translate-x-1/2 bg-purple-100 border border-purple-300 rounded-md p-2 text-xs text-center w-36">
                          Xem xét của người dùng
                        </div>

                        {/* Feedback - Confirm */}
                        <div className="absolute top-[180px] left-[30%] transform -translate-x-1/2 bg-red-100 border border-red-300 rounded-md p-2 text-xs text-center w-28">
                          Xác nhận gian lận
                        </div>

                        {/* Feedback - Dismiss */}
                        <div className="absolute top-[180px] left-[70%] transform -translate-x-1/2 bg-green-100 border border-green-300 rounded-md p-2 text-xs text-center w-28">
                          Phủ nhận gian lận
                        </div>

                        {/* Learning System */}
                        <div className="absolute bottom-[30px] left-[50%] transform -translate-x-1/2 bg-indigo-100 border border-indigo-300 rounded-md p-2 text-xs text-center w-40">
                          Hệ thống học tập & điều chỉnh
                        </div>

                        {/* Connecting arrows */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          style={{ zIndex: -1 }}
                        >
                          {/* Detection to Alert */}
                          <line
                            x1="50%"
                            y1="50px"
                            x2="50%"
                            y2="80px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Alert to Human Review */}
                          <line
                            x1="50%"
                            y1="100px"
                            x2="50%"
                            y2="130px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Human Review to Confirm */}
                          <line
                            x1="50%"
                            y1="150px"
                            x2="30%"
                            y2="180px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Human Review to Dismiss */}
                          <line
                            x1="50%"
                            y1="150px"
                            x2="70%"
                            y2="180px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Confirm to Learning */}
                          <line
                            x1="30%"
                            y1="200px"
                            x2="50%"
                            y2="230px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Dismiss to Learning */}
                          <line
                            x1="70%"
                            y1="200px"
                            x2="50%"
                            y2="230px"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Learning back to Detection (completing the loop) */}
                          <path
                            d="M 50 250 C 20 250 20 50 50 50"
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="1"
                            strokeDasharray="4"
                            markerEnd="url(#arrowhead)"
                          />

                          {/* Define arrowhead marker */}
                          <defs>
                            <marker
                              id="arrowhead"
                              markerWidth="10"
                              markerHeight="7"
                              refX="9"
                              refY="3.5"
                              orient="auto"
                            >
                              <polygon
                                points="0 0, 10 3.5, 0 7"
                                fill="#94a3b8"
                              />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Auto-tuning threshold</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Tối ưu hóa tự động
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Hệ thống tự động điều chỉnh ngưỡng phát hiện dựa trên tỷ lệ
                    dương tính giả và âm tính giả, tìm điểm cân bằng tối ưu giữa
                    độ nhạy và độ đặc hiệu của hệ thống phát hiện gian lận.
                  </p>
                  <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                    <div className="h-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={[
                            {
                              threshold: 50,
                              falsePositive: 15,
                              falseNegative: 2,
                              f1Score: 0.82,
                            },
                            {
                              threshold: 55,
                              falsePositive: 12,
                              falseNegative: 3,
                              f1Score: 0.85,
                            },
                            {
                              threshold: 60,
                              falsePositive: 10,
                              falseNegative: 4,
                              f1Score: 0.87,
                            },
                            {
                              threshold: 65,
                              falsePositive: 8,
                              falseNegative: 5,
                              f1Score: 0.89,
                            },
                            {
                              threshold: 70,
                              falsePositive: 6,
                              falseNegative: 7,
                              f1Score: 0.91,
                            },
                            {
                              threshold: 75,
                              falsePositive: 4,
                              falseNegative: 9,
                              f1Score: 0.93,
                            },
                            {
                              threshold: 80,
                              falsePositive: 3,
                              falseNegative: 12,
                              f1Score: 0.91,
                            },
                            {
                              threshold: 85,
                              falsePositive: 2,
                              falseNegative: 16,
                              f1Score: 0.88,
                            },
                            {
                              threshold: 90,
                              falsePositive: 1,
                              falseNegative: 22,
                              f1Score: 0.84,
                            },
                            {
                              threshold: 95,
                              falsePositive: 0.5,
                              falseNegative: 30,
                              f1Score: 0.78,
                            },
                          ]}
                          margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f0f0f0"
                          />
                          <XAxis
                            dataKey="threshold"
                            label={{
                              value: "Ngưỡng phát hiện",
                              position: "insideBottom",
                              offset: -15,
                            }}
                          />
                          <YAxis yAxisId="left" domain={[0, 30]} />
                          <YAxis
                            yAxisId="right"
                            orientation="right"
                            domain={[0.7, 1]}
                          />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="falsePositive"
                            name="Dương tính giả (%)"
                            stroke="#ef4444"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                          <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="falseNegative"
                            name="Âm tính giả (%)"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                          <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="f1Score"
                            name="F1 Score"
                            stroke="#10b981"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                          {/* Optimal threshold marker */}
                          <line
                            x1="75%"
                            y1="0%"
                            x2="75%"
                            y2="100%"
                            stroke="#6366f1"
                            strokeWidth="2"
                            strokeDasharray="5 5"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">
                      A/B Testing các thuật toán mới
                    </h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Cải tiến liên tục
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Hệ thống thực hiện A/B testing các thuật toán phát hiện mới
                    trên một phần nhỏ lưu lượng trước khi triển khai rộng rãi,
                    đảm bảo hiệu suất cải thiện và giảm thiểu rủi ro.
                  </p>
                  <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                    <div className="h-full">
                      <div className="grid grid-cols-2 h-full">
                        <div className="border-r border-gray-200 p-2">
                          <div className="text-center font-medium text-sm mb-2 text-blue-600">
                            Thuật toán A (Hiện tại)
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Độ chính xác:</span>
                                <span className="font-medium">94.2%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-blue-500 h-1.5 rounded-full"
                                  style={{ width: "94.2%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Dương tính giả:</span>
                                <span className="font-medium">3.8%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-red-500 h-1.5 rounded-full"
                                  style={{ width: "3.8%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Âm tính giả:</span>
                                <span className="font-medium">2.0%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-amber-500 h-1.5 rounded-full"
                                  style={{ width: "2.0%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>F1 Score:</span>
                                <span className="font-medium">0.942</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-green-500 h-1.5 rounded-full"
                                  style={{ width: "94.2%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-2">
                          <div className="text-center font-medium text-sm mb-2 text-purple-600">
                            Thuật toán B (Mới)
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Độ chính xác:</span>
                                <span className="font-medium">96.5%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-purple-500 h-1.5 rounded-full"
                                  style={{ width: "96.5%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Dương tính giả:</span>
                                <span className="font-medium">2.1%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-red-500 h-1.5 rounded-full"
                                  style={{ width: "2.1%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Âm tính giả:</span>
                                <span className="font-medium">1.4%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-amber-500 h-1.5 rounded-full"
                                  style={{ width: "1.4%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>F1 Score:</span>
                                <span className="font-medium">0.965</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-green-500 h-1.5 rounded-full"
                                  style={{ width: "96.5%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comparison result */}
                      <div className="absolute bottom-2 left-0 right-0 text-center">
                        <Badge className="bg-purple-100 text-purple-800">
                          Thuật toán B cải thiện +2.3% độ chính xác
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">
                      Human-in-the-loop Verification
                    </h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      Xác minh nâng cao
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Đối với các trường hợp không chắc chắn (điểm số gần ngưỡng),
                    hệ thống chuyển sang quy trình xác minh có sự tham gia của
                    con người, giúp cải thiện độ chính xác và cung cấp dữ liệu
                    huấn luyện chất lượng cao.
                  </p>
                  <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        {/* Score distribution */}
                        <div className="absolute bottom-0 left-0 right-0 h-[100px]">
                          {/* Score axis */}
                          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300"></div>
                          <div className="absolute bottom-0 left-0 h-2 w-[1px] bg-gray-300"></div>
                          <div className="absolute bottom-0 left-[20%] h-2 w-[1px] bg-gray-300"></div>
                          <div className="absolute bottom-0 left-[40%] h-2 w-[1px] bg-gray-300"></div>
                          <div className="absolute bottom-0 left-[60%] h-2 w-[1px] bg-gray-300"></div>
                          <div className="absolute bottom-0 left-[80%] h-2 w-[1px] bg-gray-300"></div>
                          <div className="absolute bottom-0 right-0 h-2 w-[1px] bg-gray-300"></div>

                          {/* Score labels */}
                          <div className="absolute bottom-4 left-0 text-[10px] text-gray-500">
                            0
                          </div>
                          <div className="absolute bottom-4 left-[20%] text-[10px] text-gray-500">
                            20
                          </div>
                          <div className="absolute bottom-4 left-[40%] text-[10px] text-gray-500">
                            40
                          </div>
                          <div className="absolute bottom-4 left-[60%] text-[10px] text-gray-500">
                            60
                          </div>
                          <div className="absolute bottom-4 left-[80%] text-[10px] text-gray-500">
                            80
                          </div>
                          <div className="absolute bottom-4 right-0 text-[10px] text-gray-500">
                            100
                          </div>

                          {/* Distribution curve */}
                          <svg
                            className="absolute inset-0"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M0,100 C10,95 20,80 30,70 C40,60 45,40 50,30 C55,40 60,60 70,70 C80,80 90,95 100,100"
                              fill="none"
                              stroke="#94a3b8"
                              strokeWidth="2"
                            />
                          </svg>

                          {/* Threshold line */}
                          <div className="absolute bottom-0 left-[75%] top-0 w-[2px] bg-amber-500 border-l border-r border-amber-600"></div>
                          <div className="absolute bottom-[100px] left-[75%] transform -translate-x-1/2 text-[10px] text-amber-600 font-medium">
                            Ngưỡng: 75
                          </div>

                          {/* Uncertainty region */}
                          <div className="absolute bottom-0 left-[65%] top-0 w-[20%] bg-amber-100 opacity-40"></div>
                          <div className="absolute bottom-[80px] left-[75%] transform -translate-x-1/2 text-[10px] text-amber-700 font-medium">
                            Vùng không chắc chắn
                          </div>
                          <div className="absolute bottom-[70px] left-[75%] transform -translate-x-1/2 text-[10px] text-amber-700">
                            (65-85)
                          </div>

                          {/* Human verification label */}
                          <div className="absolute top-[20px] left-[75%] transform -translate-x-1/2 bg-purple-100 border border-purple-300 rounded-md p-1 text-[10px] text-center w-32">
                            Chuyển cho người xác minh
                          </div>

                          {/* Arrows */}
                          <svg
                            className="absolute inset-0"
                            style={{ zIndex: -1 }}
                          >
                            <line
                              x1="75%"
                              y1="40px"
                              x2="75%"
                              y2="60px"
                              stroke="#a855f7"
                              strokeWidth="1"
                              strokeDasharray="3"
                              markerEnd="url(#arrowhead2)"
                            />
                            <defs>
                              <marker
                                id="arrowhead2"
                                markerWidth="10"
                                markerHeight="7"
                                refX="9"
                                refY="3.5"
                                orient="auto"
                              >
                                <polygon
                                  points="0 0, 10 3.5, 0 7"
                                  fill="#a855f7"
                                />
                              </marker>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-4">
                  Hiệu quả của Feedback Loop System
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 p-2 rounded-full mr-2">
                        <RefreshCw className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="font-medium">Cải thiện liên tục</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Hệ thống tự động cải thiện theo thời gian dựa trên phản
                      hồi của người dùng, giúp tăng độ chính xác và giảm thiểu
                      cảnh báo sai, đặc biệt hiệu quả với các mẫu gian lận mới.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 p-2 rounded-full mr-2">
                        <Sliders className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="font-medium">Tối ưu hóa tự động</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Ngưỡng phát hiện được tự động điều chỉnh dựa trên tỷ lệ
                      dương tính giả và âm tính giả, giúp tìm điểm cân bằng tối
                      ưu giữa độ nhạy và độ đặc hiệu của hệ thống.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 p-2 rounded-full mr-2">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="font-medium">Kết hợp người-máy</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      Kết hợp sức mạnh của AI với khả năng phán đoán của con
                      người trong các trường hợp không chắc chắn, tạo ra hệ
                      thống phát hiện gian lận mạnh mẽ và linh hoạt hơn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-4">
                  Hiệu suất cải thiện theo thời gian
                </h4>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: "T1", accuracy: 88.5, falsePositive: 8.2 },
                        { month: "T2", accuracy: 90.2, falsePositive: 6.8 },
                        { month: "T3", accuracy: 91.5, falsePositive: 5.7 },
                        { month: "T4", accuracy: 92.8, falsePositive: 4.9 },
                        { month: "T5", accuracy: 93.6, falsePositive: 4.2 },
                        { month: "T6", accuracy: 94.5, falsePositive: 3.6 },
                        { month: "T7", accuracy: 95.2, falsePositive: 3.1 },
                        { month: "T8", accuracy: 95.8, falsePositive: 2.7 },
                        { month: "T9", accuracy: 96.3, falsePositive: 2.4 },
                        { month: "T10", accuracy: 96.7, falsePositive: 2.1 },
                        { month: "T11", accuracy: 97.1, falsePositive: 1.9 },
                        { month: "T12", accuracy: 97.5, falsePositive: 1.7 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" domain={[85, 100]} />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        domain={[0, 10]}
                      />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="accuracy"
                        name="Độ chính xác (%)"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="falsePositive"
                        name="Dương tính giả (%)"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Tích hợp hệ thống</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Cách triển khai</h4>
              <p className="text-sm mb-4">
                Hệ thống chấm điểm gian lận đa chiều được tích hợp vào mã
                JavaScript theo dõi, phân tích hành vi người dùng theo thời gian
                thực và tính toán điểm số dựa trên nhiều yếu tố khác nhau.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Cấu hình hệ thống
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Báo cáo hiệu suất
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Hiệu suất tổng thể</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Độ chính xác phát hiện:</span>
                    <span className="font-bold">94.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "94.8%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tỷ lệ dương tính giả:</span>
                    <span className="font-bold">3.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "3.2%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Thời gian phản hồi:</span>
                    <span className="font-bold">~50ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" />
            Triển khai hệ thống chấm điểm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FraudScoreSystem;
