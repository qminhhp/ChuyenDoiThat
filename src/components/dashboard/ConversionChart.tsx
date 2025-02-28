import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Download, ZoomIn, ZoomOut, RefreshCw } from "lucide-react";

interface ConversionDataPoint {
  date: string;
  legitimate: number;
  suspicious: number;
  total: number;
}

interface ConversionChartProps {
  data?: ConversionDataPoint[];
  title?: string;
  description?: string;
  isLoading?: boolean;
}

const defaultData: ConversionDataPoint[] = [
  { date: "01/05", legitimate: 400, suspicious: 40, total: 440 },
  { date: "02/05", legitimate: 380, suspicious: 30, total: 410 },
  { date: "03/05", legitimate: 420, suspicious: 45, total: 465 },
  { date: "04/05", legitimate: 450, suspicious: 60, total: 510 },
  { date: "05/05", legitimate: 470, suspicious: 75, total: 545 },
  { date: "06/05", legitimate: 500, suspicious: 90, total: 590 },
  { date: "07/05", legitimate: 520, suspicious: 110, total: 630 },
  { date: "08/05", legitimate: 480, suspicious: 100, total: 580 },
  { date: "09/05", legitimate: 460, suspicious: 85, total: 545 },
  { date: "10/05", legitimate: 490, suspicious: 95, total: 585 },
  { date: "11/05", legitimate: 510, suspicious: 105, total: 615 },
  { date: "12/05", legitimate: 530, suspicious: 120, total: 650 },
  { date: "13/05", legitimate: 550, suspicious: 130, total: 680 },
  { date: "14/05", legitimate: 540, suspicious: 125, total: 665 },
];

const ConversionChart = ({
  data = defaultData,
  title = "Xu hướng chuyển đổi",
  description = "Biểu đồ chuyển đổi hợp lệ và đáng ngờ theo thời gian",
  isLoading = false,
}: ConversionChartProps) => {
  const [chartType, setChartType] = useState("all");

  return (
    <Card className="w-full h-full bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setChartType}
        >
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">Tất cả chuyển đổi</TabsTrigger>
            <TabsTrigger value="legitimate">Hợp lệ</TabsTrigger>
            <TabsTrigger value="suspicious">Đáng ngờ</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Tổng"
                />
                <Line
                  type="monotone"
                  dataKey="legitimate"
                  stroke="#4ade80"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Hợp lệ"
                />
                <Line
                  type="monotone"
                  dataKey="suspicious"
                  stroke="#f43f5e"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Đáng ngờ"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="legitimate" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="legitimate"
                  stroke="#4ade80"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Hợp lệ"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="suspicious" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="suspicious"
                  stroke="#f43f5e"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Đáng ngờ"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConversionChart;
