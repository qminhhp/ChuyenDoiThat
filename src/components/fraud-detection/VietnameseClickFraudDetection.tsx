import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  Database,
  BarChart,
  AlertTriangle,
  Moon,
  Map,
  Zap,
} from "lucide-react";

const VietnameseClickFraudDetection = () => {
  const [activeTab, setActiveTab] = React.useState("nighttime");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Map className="h-5 w-5 mr-2 text-blue-500" />
          Phát hiện Click Fraud đặc thù Việt Nam
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="nighttime"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="nighttime"
              className="flex items-center justify-center"
            >
              <Moon className="h-4 w-4 mr-1" />
              Thời gian đáng ngờ
            </TabsTrigger>
            <TabsTrigger
              value="ipcluster"
              className="flex items-center justify-center"
            >
              <Users className="h-4 w-4 mr-1" />
              Cụm IP tương tự
            </TabsTrigger>
            <TabsTrigger
              value="database"
              className="flex items-center justify-center"
            >
              <Database className="h-4 w-4 mr-1" />
              Database Click Farm
            </TabsTrigger>
            <TabsTrigger
              value="campaign"
              className="flex items-center justify-center"
            >
              <BarChart className="h-4 w-4 mr-1" />
              Phân tích chiến dịch
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nighttime" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Nhận diện thời gian click đáng ngờ
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích và phát hiện các mẫu click bất thường trong khung giờ
                  đêm khuya (1-4 giờ sáng), thời điểm người dùng thật thường
                  không hoạt động nhưng các farm click vẫn hoạt động.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Mẫu thời gian đáng ngờ</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Cao điểm đêm khuya:</span>{" "}
                      Tập trung click từ 1-4 giờ sáng
                    </li>
                    <li>
                      <span className="font-medium">Mẫu đều đặn:</span> Click
                      với tần suất cố định trong đêm
                    </li>
                    <li>
                      <span className="font-medium">Phân bố bất thường:</span>{" "}
                      Tỷ lệ click đêm cao hơn 30% so với ban ngày
                    </li>
                    <li>
                      <span className="font-medium">Đồng bộ cao:</span> Nhiều
                      click từ các IP khác nhau cùng thời điểm đêm
                    </li>
                    <li>
                      <span className="font-medium">Chu kỳ lặp lại:</span> Mẫu
                      thời gian giống nhau qua nhiều ngày
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phân tích thời gian</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Tỷ lệ click 1-2 giờ sáng:</span>
                        <span className="font-bold text-red-500">32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "32%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Tỷ lệ click 2-3 giờ sáng:</span>
                        <span className="font-bold text-red-500">28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "28%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Tỷ lệ click 3-4 giờ sáng:</span>
                        <span className="font-bold text-red-500">25%</span>
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
                        <span className="text-sm">Tỷ lệ click 9-17 giờ:</span>
                        <span className="font-bold text-green-500">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biểu đồ phân bố thời gian</h4>
                <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                    {/* Giả lập biểu đồ cột phân bố thời gian */}
                    {Array.from({ length: 24 }).map((_, index) => {
                      // Tạo chiều cao ngẫu nhiên cho các cột, với cao điểm vào đêm khuya
                      let height = 20; // Chiều cao cơ bản
                      if (index >= 1 && index <= 4) {
                        height = 80 + Math.random() * 20; // Cao điểm đêm khuya
                      } else if (index >= 9 && index <= 17) {
                        height = 30 + Math.random() * 20; // Giờ làm việc
                      } else {
                        height = 20 + Math.random() * 15; // Các giờ khác
                      }

                      // Màu sắc dựa trên thời gian
                      let color = "bg-blue-400";
                      if (index >= 1 && index <= 4) {
                        color = "bg-red-500"; // Đánh dấu giờ đáng ngờ
                      } else if (index >= 9 && index <= 17) {
                        color = "bg-green-500"; // Giờ làm việc
                      }

                      return (
                        <div
                          key={index}
                          className={`w-2 md:w-3 ${color} rounded-t-sm`}
                          style={{ height: `${height}%` }}
                          title={`${index}:00 - ${index + 1}:00: ${Math.round(
                            height,
                          )}%`}
                        ></div>
                      );
                    })}
                  </div>

                  {/* Trục thời gian */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500 border-t pt-1">
                    <span>0h</span>
                    <span>6h</span>
                    <span>12h</span>
                    <span>18h</span>
                    <span>24h</span>
                  </div>

                  {/* Vùng đánh dấu thời gian đáng ngờ */}
                  <div
                    className="absolute bottom-6 left-[calc(1/24*100%+16px)] right-[calc(20/24*100%+16px)] border-t border-b border-red-300 bg-red-100 bg-opacity-30 flex items-center justify-center"
                    style={{ height: "20px" }}
                  >
                    <span className="text-xs text-red-500 font-medium">
                      Thời gian đáng ngờ (1-4h)
                    </span>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">94.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">2.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện farm click</p>
                    <p className="text-lg font-bold">96.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ipcluster" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện cụm click từ các IP tương tự trong cùng khu vực
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích và nhóm các IP có mối quan hệ địa lý và hành vi
                  tương tự để phát hiện các farm click hoạt động trong cùng một
                  khu vực địa lý tại Việt Nam.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phát hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Phân tích địa lý:</span> Nhóm
                      IP theo vị trí địa lý chi tiết đến cấp quận/huyện
                    </li>
                    <li>
                      <span className="font-medium">Phân tích subnet:</span> Xác
                      định các IP thuộc cùng subnet /24 hoặc /16
                    </li>
                    <li>
                      <span className="font-medium">Phân tích ISP:</span> Nhóm
                      theo nhà cung cấp dịch vụ internet (VNPT, Viettel, FPT)
                    </li>
                    <li>
                      <span className="font-medium">Phân tích thời gian:</span>{" "}
                      Tìm mẫu click đồng bộ từ các IP trong cùng khu vực
                    </li>
                    <li>
                      <span className="font-medium">Phân tích hành vi:</span>{" "}
                      Tìm mẫu hành vi giống nhau giữa các IP
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Khu vực đáng ngờ tại VN</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Hà Nội:</span> Quận Cầu
                      Giấy, Hai Bà Trưng, Đống Đa
                    </li>
                    <li>
                      <span className="font-medium">TP.HCM:</span> Quận 1, Quận
                      3, Quận Tân Bình, Quận Gò Vấp
                    </li>
                    <li>
                      <span className="font-medium">Đà Nẵng:</span> Quận Hải
                      Châu, Quận Thanh Khê
                    </li>
                    <li>
                      <span className="font-medium">Bắc Ninh:</span> Khu công
                      nghiệp Quế Võ, Tiên Sơn
                    </li>
                    <li>
                      <span className="font-medium">Bình Dương:</span> Thành phố
                      Thủ Dầu Một, Thuận An
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Bản đồ nhiệt cụm IP</h4>
                <div className="relative w-full h-[300px] border border-gray-200 rounded-md bg-gray-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Bản đồ Việt Nam"
                      className="opacity-20 object-contain h-full"
                    />

                    {/* Điểm nóng Hà Nội */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-16 h-16"
                      style={{ top: "30%", left: "40%" }}
                    ></div>

                    {/* Điểm nóng TP.HCM */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-20 h-20"
                      style={{ top: "65%", left: "45%" }}
                    ></div>

                    {/* Điểm nóng Đà Nẵng */}
                    <div
                      className="absolute rounded-full bg-orange-500 opacity-70 w-12 h-12"
                      style={{ top: "48%", left: "48%" }}
                    ></div>

                    {/* Điểm nóng Bắc Ninh */}
                    <div
                      className="absolute rounded-full bg-orange-500 opacity-70 w-10 h-10"
                      style={{ top: "28%", left: "42%" }}
                    ></div>

                    {/* Điểm nóng Bình Dương */}
                    <div
                      className="absolute rounded-full bg-orange-500 opacity-70 w-10 h-10"
                      style={{ top: "67%", left: "47%" }}
                    ></div>

                    {/* Kết nối giữa các IP trong cùng cụm */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ zIndex: -1 }}
                    >
                      {/* Kết nối trong cụm Hà Nội */}
                      {Array.from({ length: 8 }).map((_, index) => {
                        const x1 = 40 + Math.random() * 5 - 2.5;
                        const y1 = 30 + Math.random() * 5 - 2.5;
                        const x2 = 40 + Math.random() * 5 - 2.5;
                        const y2 = 30 + Math.random() * 5 - 2.5;
                        return (
                          <line
                            key={`hn-${index}`}
                            x1={`${x1}%`}
                            y1={`${y1}%`}
                            x2={`${x2}%`}
                            y2={`${y2}%`}
                            stroke="rgba(239, 68, 68, 0.5)"
                            strokeWidth="1"
                          />
                        );
                      })}

                      {/* Kết nối trong cụm TP.HCM */}
                      {Array.from({ length: 10 }).map((_, index) => {
                        const x1 = 45 + Math.random() * 6 - 3;
                        const y1 = 65 + Math.random() * 6 - 3;
                        const x2 = 45 + Math.random() * 6 - 3;
                        const y2 = 65 + Math.random() * 6 - 3;
                        return (
                          <line
                            key={`hcm-${index}`}
                            x1={`${x1}%`}
                            y1={`${y1}%`}
                            x2={`${x2}%`}
                            y2={`${y2}%`}
                            stroke="rgba(239, 68, 68, 0.5)"
                            strokeWidth="1"
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                      <span>Cụm IP cao (>50 IP)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
                      <span>Cụm IP trung bình (20-50 IP)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm IP tại Quận 1, TP.HCM</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 68 IP trong cùng subnet 113.161.72.0/24 (VNPT)
                      thực hiện tổng cộng 342 click trong vòng 3 giờ. Các IP có
                      mẫu click đồng bộ và thời gian giữa các click rất đều đặn.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Nhà cung cấp: VNPT</p>
                      <p>Vị trí: Quận 1, TP.HCM, Việt Nam</p>
                      <p>Thời gian phát hiện: 15/06/2023 02:23:45</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm IP tại Cầu Giấy, Hà Nội</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 42 IP từ dải 27.72.98.0/24 (Viettel) thực hiện
                      click với mẫu thời gian tương tự nhau. Các IP này đều truy
                      cập từ khu vực Cầu Giấy và có hành vi tương tự.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Nhà cung cấp: Viettel</p>
                      <p>Vị trí: Cầu Giấy, Hà Nội, Việt Nam</p>
                      <p>Thời gian phát hiện: 14/06/2023 23:45:12</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="database" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Pattern matching với database click farm đã biết tại Việt Nam
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng cơ sở dữ liệu về các click farm đã biết tại Việt Nam
                  để so khớp và phát hiện các mẫu click tương tự từ các nguồn đã
                  được xác định là gian lận.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Cơ sở dữ liệu click farm</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Số lượng click farm:</span>{" "}
                      247 click farm đã xác định tại Việt Nam
                    </li>
                    <li>
                      <span className="font-medium">Dải IP đã biết:</span> Hơn
                      12,000 IP đã được xác định thuộc click farm
                    </li>
                    <li>
                      <span className="font-medium">Mẫu hành vi:</span> 35 mẫu
                      hành vi đặc trưng của click farm Việt Nam
                    </li>
                    <li>
                      <span className="font-medium">Vị trí địa lý:</span> 28
                      điểm nóng tập trung click farm tại Việt Nam
                    </li>
                    <li>
                      <span className="font-medium">Cập nhật:</span> Cơ sở dữ
                      liệu được cập nhật hàng tuần
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp so khớp</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">IP matching:</span> So khớp
                      trực tiếp với danh sách IP đã biết
                    </li>
                    <li>
                      <span className="font-medium">Subnet matching:</span> So
                      khớp với các subnet đã biết có click farm
                    </li>
                    <li>
                      <span className="font-medium">Behavioral matching:</span>{" "}
                      So khớp mẫu hành vi với các mẫu đã biết
                    </li>
                    <li>
                      <span className="font-medium">Temporal matching:</span> So
                      khớp mẫu thời gian với các mẫu đã biết
                    </li>
                    <li>
                      <span className="font-medium">Fuzzy matching:</span> So
                      khớp mờ cho các trường hợp có sự thay đổi nhỏ
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Thống kê click farm tại VN</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phân bố theo khu vực</p>
                    <div className="mt-2 space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">TP.HCM:</span>
                          <span className="text-xs font-bold">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: "42%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Hà Nội:</span>
                          <span className="text-xs font-bold">35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Đà Nẵng:</span>
                          <span className="text-xs font-bold">12%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: "12%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Khác:</span>
                          <span className="text-xs font-bold">11%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: "11%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phân bố theo ISP</p>
                    <div className="mt-2 space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">VNPT:</span>
                          <span className="text-xs font-bold">38%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Viettel:</span>
                          <span className="text-xs font-bold">32%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "32%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">FPT:</span>
                          <span className="text-xs font-bold">22%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "22%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Khác:</span>
                          <span className="text-xs font-bold">8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: "8%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Loại click farm</p>
                    <div className="mt-2 space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Thủ công:</span>
                          <span className="text-xs font-bold">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-green-600 h-1.5 rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Bán tự động:</span>
                          <span className="text-xs font-bold">35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-green-600 h-1.5 rounded-full"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs">Tự động hoàn toàn:</span>
                          <span className="text-xs font-bold">20%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-green-600 h-1.5 rounded-full"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">98.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">0.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Thời gian phát hiện</p>
                    <p className="text-lg font-bold">~50ms</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất nhanh
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="campaign" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích thời điểm click theo chiến dịch quảng cáo
                </h3>
                <p className="text-gray-700 mb-4">
                  Phát hiện các mẫu click bất thường theo thời gian của chiến
                  dịch quảng cáo, đặc biệt là đột biến click khi chiến dịch mới
                  được triển khai - một đặc điểm phổ biến của gian lận quảng cáo
                  tại Việt Nam.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Mẫu click đáng ngờ</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Đột biến ban đầu:</span> Tỷ
                      lệ click cao bất thường trong 24-48 giờ đầu tiên
                    </li>
                    <li>
                      <span className="font-medium">Phân bố không tự nhiên:</span>{" "}
                      Tỷ lệ click không phù hợp với phân bố tự nhiên theo thời
                      gian
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ chuyển đổi thấp:</span>{" "}
                      Click cao nhưng tỷ lệ chuyển đổi thấp bất thường
                    </li>
                    <li>
                      <span className="font-medium">Thời gian xem trang thấp:</span>{" "}
                      Thời gian dừng trên trang đích cực ngắn
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ bounce cao:</span> Tỷ
                      lệ người dùng rời trang ngay lập tức cao bất thường
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phân tích chiến dịch</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">So sánh lịch sử:</span> So
                      sánh với mẫu click của các chiến dịch tương tự trước đây
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo giờ:</span>{" "}
                      Phân tích chi tiết mẫu click theo từng giờ trong ngày
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo ngày:</span>{" "}
                      Phân tích xu hướng click theo ngày trong tuần
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo nguồn:</span>{" "}
                      Phân tích phân bố click theo nguồn traffic
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo thiết bị:</span>{" "}
                      Phân tích phân bố click theo loại thiết bị
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biểu đồ phân tích chiến dịch</h4>
                <div className="relative w-full h-[250px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                    {/* Giả lập biểu đồ đường cho chiến dịch */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Đường click thực tế */}
                      <path
                        d="M0,80 L5,30 L10,40 L15,45 L20,50 L25,55 L30,60 L35,62 L40,65 L45,68 L50,70 L55,72 L60,73 L65,75 L70,76 L75,77 L80,78 L85,79 L90,80 L95,80 L100,80"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                      />

                      {/* Đường click kỳ vọng */}
                      <path
                        d="M0,80 L5,75 L10,70 L15,68 L20,65 L25,63 L30,62 L35,60 L40,59 L45,58 L50,57 L55,56 L60,55 L65,54 L70,53 L75,52 L80,51 L85,50 L90,49 L95,48 L100,47"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="2,2"
                      />

                      {/* Vùng đánh dấu đột biến */}
                      <rect
                        x="0"
                        y="0"
                        width="10"
                        height="100"
                        fill="rgba(239, 68, 68, 0.1)"
                      />
                      <text
                        x="5"
                        y="20"
                        fontSize="3"
                        fill="#ef4444"
                        textAnchor="middle"
                      >
                        Đột biến
                      </text>
                    </svg>

                    {/* Chú thích */}
                    <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                      <div className="flex items-center mb-1">
                        <div className="w-3 h-1 bg-red-500 mr-1"></div>
                        <span>Click thực tế</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-1 bg-blue-500 mr-1 border-dashed border-b border-blue-500"></div>
                        <span>Click kỳ vọng</span>
                      </div>
                    </div>

                    {/* Trục thời gian */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500 border-t pt-1">
                      <span>Ngày 1</span>
                      <span>Ngày 3</span>
                      <span>Ngày 7</span>
                      <span>Ngày 14</span>
                      <span>Ngày 30</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Chiến dịch: Khuyến mãi mùa hè</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện đột biến 458% lượng click trong 24 giờ đầu tiên
                      so với mức trung bình của các chiến dịch tương tự. 78% số
                      click có thời gian dừng trên trang dưới 5 giây và tỷ lệ
                      bounce là 92%.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 12 giờ sau khi bắt đầu chiến dịch</p>
                      <p>Tiết kiệm ngân sách: ~12,500,000 VND</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Chiến dịch: Ra mắt sản phẩm mới</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện tỷ lệ click cao bất thường (215% so với dự kiến)
                      trong 48 giờ đầu, chủ yếu từ các thiết bị di động. Tỷ lệ
                      chuyển đổi thấp hơn 75% so với chiến dịch tương tự trước
                      đây.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 36 giờ sau khi bắt đầu chiến dịch</p>
                      <p>Tiết kiệm ngân sách: ~8,200,000 VND</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">92.7%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Thời gian phát hiện</p>
                    <p className="text-lg font-bold">12-24h</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Nhanh
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tiết kiệm ngân sách</p>
                    <p className="text-lg font-bold">~25%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Hiệu quả cao
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Tích hợp phát hiện</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Cách triển khai</h4>
              <p className="text-sm mb-4">
                Các phương pháp phát hiện click fraud đặc thù Việt Nam được tích
                hợp vào hệ thống phát hiện gian lận, kết hợp với các phương pháp
                phát hiện khác để tạo ra một hệ thống bảo vệ toàn diện.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Map className="h-4 w-4 mr-2" />
                  Xem bản đồ click farm
                </Button>
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  Cập nhật cơ sở dữ liệu
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Hiệu suất tổng thể</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Độ chính xác tổng thể:</span>
                    <span className="font-bold">94.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "94.5%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tỷ lệ dương tính giả:</span>
                    <span className="font-bold">1.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "1.8%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tiết kiệm ngân sách quảng cáo:</span>
                    <span className="font-bold">22.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "22.5%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            Triển khai phát hiện Click Fraud Việt Nam
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VietnameseClickFraudDetection;
