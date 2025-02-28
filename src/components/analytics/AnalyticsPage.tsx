import React, { useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import MetricsOverview from "../dashboard/MetricsOverview";
import TimeframeSelector from "../dashboard/TimeframeSelector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Filter, Share, Sliders } from "lucide-react";
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

const AnalyticsPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly");
  const [activeTab, setActiveTab] = useState("overview");

  // Handler for timeframe changes
  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe);
  };

  // Sample data for charts
  const conversionData = [
    { month: "T1", organic: 4000, paid: 2400, referral: 1800 },
    { month: "T2", organic: 3000, paid: 1398, referral: 2000 },
    { month: "T3", organic: 2000, paid: 9800, referral: 2200 },
    { month: "T4", organic: 2780, paid: 3908, referral: 2500 },
    { month: "T5", organic: 1890, paid: 4800, referral: 2300 },
    { month: "T6", organic: 2390, paid: 3800, referral: 2100 },
    { month: "T7", organic: 3490, paid: 4300, referral: 2400 },
    { month: "T8", organic: 4000, paid: 2400, referral: 1800 },
    { month: "T9", organic: 3000, paid: 1398, referral: 2000 },
    { month: "T10", organic: 2000, paid: 9800, referral: 2200 },
    { month: "T11", organic: 2780, paid: 3908, referral: 2500 },
    { month: "T12", organic: 1890, paid: 4800, referral: 2300 },
  ];

  const deviceData = [
    { name: "Máy tính", value: 45 },
    { name: "Di động", value: 40 },
    { name: "Máy tính bảng", value: 15 },
  ];

  const sourceData = [
    { name: "Google", value: 35 },
    { name: "Facebook", value: 25 },
    { name: "Trực tiếp", value: 20 },
    { name: "Giới thiệu", value: 15 },
    { name: "Khác", value: 5 },
  ];

  const locationData = [
    { name: "Hà Nội", value: 35 },
    { name: "TP.HCM", value: 30 },
    { name: "Đà Nẵng", value: 15 },
    { name: "Cần Thơ", value: 10 },
    { name: "Khác", value: 10 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Phân tích</h1>
        <p className="text-gray-500">
          Phân tích chi tiết về chuyển đổi quảng cáo và hành vi người dùng
        </p>
      </div>

      {/* Metrics Overview */}
      <MetricsOverview
        totalConversions={24567}
        suspiciousActivities={578}
        legitimateConversions={23989}
        fraudRate={2.4}
        totalConversionsChange={12}
        suspiciousActivitiesChange={-8}
        legitimateConversionsChange={14}
        fraudRateChange={-12}
      />

      {/* Timeframe Selector */}
      <TimeframeSelector
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={handleTimeframeChange}
      />

      {/* Analytics Tabs */}
      <Card className="w-full bg-white shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">
            Phân tích chi tiết
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Lọc
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Chia sẻ
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="sources">Nguồn lưu lượng</TabsTrigger>
              <TabsTrigger value="devices">Thiết bị</TabsTrigger>
              <TabsTrigger value="locations">Vị trí</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="h-[400px] w-full">
                <h3 className="text-lg font-medium mb-4">
                  Xu hướng chuyển đổi theo nguồn
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={conversionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="organic"
                      name="Tìm kiếm tự nhiên"
                      stackId="a"
                      fill="#8884d8"
                    />
                    <Bar
                      dataKey="paid"
                      name="Quảng cáo trả phí"
                      stackId="a"
                      fill="#82ca9d"
                    />
                    <Bar
                      dataKey="referral"
                      name="Giới thiệu"
                      stackId="a"
                      fill="#ffc658"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Tỷ lệ chuyển đổi theo thiết bị
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Tỷ lệ chuyển đổi theo nguồn
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sourceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {sourceData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Tỷ lệ chuyển đổi theo vị trí
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={locationData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {locationData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Nguồn lưu lượng hàng đầu
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sourceData.map((source, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <div
                              className="w-3 h-3 rounded-full mr-2"
                              style={{
                                backgroundColor: COLORS[index % COLORS.length],
                              }}
                            ></div>
                            <span>{source.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-semibold">
                              {source.value}%
                            </span>
                            <div className="w-24 h-2 bg-gray-200 rounded-full ml-2">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${source.value}%`,
                                  backgroundColor:
                                    COLORS[index % COLORS.length],
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Tỷ lệ chuyển đổi theo nguồn
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={[
                          { name: "Google", value: 4.2 },
                          { name: "Facebook", value: 3.8 },
                          { name: "Trực tiếp", value: 5.1 },
                          { name: "Giới thiệu", value: 6.3 },
                          { name: "Email", value: 7.2 },
                        ]}
                        margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 10]} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip
                          formatter={(value) => [
                            `${value}%`,
                            "Tỷ lệ chuyển đổi",
                          ]}
                        />
                        <Bar
                          dataKey="value"
                          fill="#8884d8"
                          name="Tỷ lệ chuyển đổi"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Xu hướng nguồn lưu lượng theo thời gian
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { date: "T1", google: 45, facebook: 30, direct: 25 },
                        { date: "T2", google: 50, facebook: 25, direct: 25 },
                        { date: "T3", google: 35, facebook: 40, direct: 25 },
                        { date: "T4", google: 40, facebook: 35, direct: 25 },
                        { date: "T5", google: 30, facebook: 45, direct: 25 },
                        { date: "T6", google: 35, facebook: 40, direct: 25 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="google"
                        name="Google"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="facebook"
                        name="Facebook"
                        stroke="#82ca9d"
                      />
                      <Line
                        type="monotone"
                        dataKey="direct"
                        name="Trực tiếp"
                        stroke="#ffc658"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="devices" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Phân bố thiết bị
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Tỷ lệ chuyển đổi theo thiết bị
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={[
                          { name: "Máy tính", value: 5.2 },
                          { name: "Di động", value: 3.8 },
                          { name: "Máy tính bảng", value: 4.5 },
                        ]}
                        margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 6]} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip
                          formatter={(value) => [
                            `${value}%`,
                            "Tỷ lệ chuyển đổi",
                          ]}
                        />
                        <Bar
                          dataKey="value"
                          fill="#8884d8"
                          name="Tỷ lệ chuyển đổi"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Xu hướng sử dụng thiết bị theo thời gian
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { date: "T1", desktop: 50, mobile: 35, tablet: 15 },
                        { date: "T2", desktop: 45, mobile: 40, tablet: 15 },
                        { date: "T3", desktop: 40, mobile: 45, tablet: 15 },
                        { date: "T4", desktop: 45, mobile: 40, tablet: 15 },
                        { date: "T5", desktop: 40, mobile: 45, tablet: 15 },
                        { date: "T6", desktop: 35, mobile: 50, tablet: 15 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="desktop"
                        name="Máy tính"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="mobile"
                        name="Di động"
                        stroke="#82ca9d"
                      />
                      <Line
                        type="monotone"
                        dataKey="tablet"
                        name="Máy tính bảng"
                        stroke="#ffc658"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="locations" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Phân bố vị trí địa lý
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={locationData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {locationData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Tỷ lệ chuyển đổi theo vị trí
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={[
                          { name: "Hà Nội", value: 4.8 },
                          { name: "TP.HCM", value: 5.2 },
                          { name: "Đà Nẵng", value: 3.9 },
                          { name: "Cần Thơ", value: 3.5 },
                          { name: "Hải Phòng", value: 3.7 },
                        ]}
                        margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 6]} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip
                          formatter={(value) => [
                            `${value}%`,
                            "Tỷ lệ chuyển đổi",
                          ]}
                        />
                        <Bar
                          dataKey="value"
                          fill="#8884d8"
                          name="Tỷ lệ chuyển đổi"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Xu hướng chuyển đổi theo vị trí
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { date: "T1", hanoi: 35, hcm: 40, danang: 25 },
                        { date: "T2", hanoi: 40, hcm: 35, danang: 25 },
                        { date: "T3", hanoi: 30, hcm: 45, danang: 25 },
                        { date: "T4", hanoi: 35, hcm: 40, danang: 25 },
                        { date: "T5", hanoi: 45, hcm: 30, danang: 25 },
                        { date: "T6", hanoi: 40, hcm: 35, danang: 25 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="hanoi"
                        name="Hà Nội"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="hcm"
                        name="TP.HCM"
                        stroke="#82ca9d"
                      />
                      <Line
                        type="monotone"
                        dataKey="danang"
                        name="Đà Nẵng"
                        stroke="#ffc658"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
