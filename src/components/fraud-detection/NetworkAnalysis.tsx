import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  Globe,
  Network,
  Server,
  AlertTriangle,
  Wifi,
  Map,
  Users,
} from "lucide-react";

const NetworkAnalysis = () => {
  const [activeTab, setActiveTab] = React.useState("datacenter");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Network className="h-5 w-5 mr-2 text-blue-500" />
          Phân tích mạng tiên tiến
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="datacenter"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="datacenter"
              className="flex items-center justify-center"
            >
              <Server className="h-4 w-4 mr-1" />
              Traffic từ Data Center
            </TabsTrigger>
            <TabsTrigger
              value="isp"
              className="flex items-center justify-center"
            >
              <Wifi className="h-4 w-4 mr-1" />
              ISP đáng ngờ
            </TabsTrigger>
            <TabsTrigger
              value="ipblocks"
              className="flex items-center justify-center"
            >
              <Globe className="h-4 w-4 mr-1" />
              IP Blocks tương quan
            </TabsTrigger>
            <TabsTrigger
              value="clustering"
              className="flex items-center justify-center"
            >
              <Users className="h-4 w-4 mr-1" />
              Behavior Clustering
            </TabsTrigger>
          </TabsList>

          <TabsContent value="datacenter" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện traffic từ data center
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống phát hiện và phân tích lưu lượng truy cập từ các data
                  center, thường được sử dụng bởi các farm click ở Việt Nam để
                  tạo ra lưu lượng giả mạo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phát hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Kiểm tra dải IP thuộc về các data center đã biết
                    </li>
                    <li>
                      Phân tích ASN (Autonomous System Number) của địa chỉ IP
                    </li>
                    <li>
                      Kiểm tra thông tin WHOIS và đăng ký IP
                    </li>
                    <li>
                      Phát hiện các mẫu truy cập đồng thời từ cùng một data
                      center
                    </li>
                    <li>
                      So sánh với cơ sở dữ liệu các data center phổ biến tại
                      Việt Nam
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Data center phổ biến tại VN</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">VNPT Data Center:</span> Dải
                      IP 14.160.0.0/11, 14.224.0.0/11, 27.64.0.0/12
                    </li>
                    <li>
                      <span className="font-medium">Viettel IDC:</span> Dải IP
                      27.72.0.0/12, 171.224.0.0/11, 125.234.0.0/15
                    </li>
                    <li>
                      <span className="font-medium">FPT Telecom:</span> Dải IP
                      118.68.0.0/14, 118.72.0.0/13, 125.212.0.0/16
                    </li>
                    <li>
                      <span className="font-medium">CMC Telecom:</span> Dải IP
                      103.9.0.0/22, 103.53.160.0/22, 103.90.220.0/22
                    </li>
                    <li>
                      <span className="font-medium">NetNam:</span> Dải IP
                      203.162.0.0/16, 123.30.0.0/15
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Mẫu phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Mẫu 1: Truy cập đồng thời</p>
                    <p className="text-sm mt-1">
                      Nhiều chuyển đổi từ các IP khác nhau nhưng cùng một data
                      center trong khoảng thời gian ngắn (dưới 5 phút).
                    </p>
                    <Badge className="mt-2 bg-red-100 text-red-800">
                      Rủi ro cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Mẫu 2: Phân bố IP bất thường</p>
                    <p className="text-sm mt-1">
                      Tỷ lệ chuyển đổi từ data center cao bất thường so với
                      lưu lượng thông thường (>30% tổng lưu lượng).
                    </p>
                    <Badge className="mt-2 bg-amber-100 text-amber-800">
                      Rủi ro trung bình
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">94.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">2.1%</p>
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

          <TabsContent value="isp" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Xác định mô hình truy cập từ các ISP đáng ngờ ở Việt Nam
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích mô hình truy cập từ các nhà cung cấp dịch vụ internet
                  (ISP) chính tại Việt Nam như FPT, VNPT, Viettel để phát hiện
                  các mẫu bất thường.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">FPT Telecom</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Dải IP chính: 118.68.0.0/14, 118.72.0.0/13, 125.212.0.0/16
                    </li>
                    <li>
                      Mẫu đáng ngờ: Nhiều chuyển đổi từ các IP liên tiếp trong
                      cùng subnet
                    </li>
                    <li>
                      Điểm nóng: Các trung tâm internet công cộng tại Hà Nội và
                      TP.HCM
                    </li>
                    <li>
                      Tỷ lệ gian lận phát hiện: 3.8% tổng lưu lượng từ FPT
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">VNPT</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Dải IP chính: 14.160.0.0/11, 14.224.0.0/11, 27.64.0.0/12
                    </li>
                    <li>
                      Mẫu đáng ngờ: Truy cập đồng thời từ nhiều IP trong cùng
                      một khu vực địa lý
                    </li>
                    <li>
                      Điểm nóng: Các khu công nghiệp tại Bắc Ninh, Bắc Giang
                    </li>
                    <li>
                      Tỷ lệ gian lận phát hiện: 4.2% tổng lưu lượng từ VNPT
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Viettel</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Dải IP chính: 27.72.0.0/12, 171.224.0.0/11, 125.234.0.0/15
                    </li>
                    <li>
                      Mẫu đáng ngờ: Chuyển đổi theo mẫu thời gian cố định từ
                      nhiều IP
                    </li>
                    <li>
                      Điểm nóng: Các khu vực ngoại thành Hà Nội và Đà Nẵng
                    </li>
                    <li>
                      Tỷ lệ gian lận phát hiện: 3.5% tổng lưu lượng từ Viettel
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Bản đồ nhiệt điểm nóng</h4>
                <div className="relative w-full h-[300px] border border-gray-200 rounded-md bg-gray-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Bản đồ Việt Nam"
                      className="opacity-20 object-contain h-full"
                    />

                    {/* Điểm nóng Hà Nội */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-12 h-12"
                      style={{ top: "30%", left: "40%" }}
                    ></div>

                    {/* Điểm nóng TP.HCM */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-16 h-16"
                      style={{ top: "65%", left: "45%" }}
                    ></div>

                    {/* Điểm nóng Đà Nẵng */}
                    <div
                      className="absolute rounded-full bg-orange-500 opacity-70 w-10 h-10"
                      style={{ top: "48%", left: "48%" }}
                    ></div>

                    {/* Điểm nóng Bắc Ninh */}
                    <div
                      className="absolute rounded-full bg-orange-500 opacity-70 w-8 h-8"
                      style={{ top: "28%", left: "42%" }}
                    ></div>

                    {/* Điểm nóng Bắc Giang */}
                    <div
                      className="absolute rounded-full bg-orange-500 opacity-70 w-8 h-8"
                      style={{ top: "25%", left: "44%" }}
                    ></div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                      <span>Rủi ro cao</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
                      <span>Rủi ro trung bình</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân tích thời gian</h4>
                <p className="text-sm mb-4">
                  Phân tích thời gian hoạt động cho thấy các mẫu đáng ngờ tập
                  trung vào các khung giờ cụ thể, phù hợp với mô hình hoạt động
                  của các farm click tại Việt Nam.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Khung giờ cao điểm</p>
                    <p className="text-lg font-bold">9:00 - 11:00</p>
                    <p className="text-lg font-bold">14:00 - 17:00</p>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Ngày trong tuần</p>
                    <p className="text-lg font-bold">Thứ 2 - Thứ 6</p>
                    <p className="text-sm text-gray-500">Giảm 70% cuối tuần</p>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Mẫu thời gian</p>
                    <p className="text-sm">Chu kỳ chuyển đổi đều đặn</p>
                    <p className="text-sm">Khoảng cách: 3-5 phút/lần</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ipblocks" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Correlating multiple sessions from similar IP blocks
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích mối tương quan giữa các phiên từ các khối IP tương
                  tự để phát hiện các mạng lưới gian lận có tổ chức.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phân tích</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Nhóm các phiên theo subnet (/24, /16) để phát hiện mẫu
                    </li>
                    <li>
                      Phân tích thời gian truy cập giữa các IP trong cùng subnet
                    </li>
                    <li>
                      Tìm kiếm hành vi đồng bộ giữa các phiên khác nhau
                    </li>
                    <li>
                      Phát hiện sự luân chuyển IP trong cùng một dải
                    </li>
                    <li>
                      Xác định các subnet có tỷ lệ chuyển đổi bất thường cao
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Mẫu phát hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Mẫu 1:</span> Nhiều IP trong
                      cùng subnet /24 thực hiện chuyển đổi trong khoảng thời
                      gian ngắn
                    </li>
                    <li>
                      <span className="font-medium">Mẫu 2:</span> Luân chuyển IP
                      - Khi một IP bị chặn, chuyển sang IP khác trong cùng subnet
                    </li>
                    <li>
                      <span className="font-medium">Mẫu 3:</span> Hành vi đồng
                      bộ - Các IP khác nhau thực hiện cùng một chuỗi hành động
                    </li>
                    <li>
                      <span className="font-medium">Mẫu 4:</span> Tỷ lệ chuyển
                      đổi cao bất thường từ một subnet cụ thể
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Subnet: 171.224.178.0/24</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 28 IP khác nhau thực hiện tổng cộng 142 chuyển
                      đổi trong vòng 2 giờ. Các IP luân phiên thực hiện chuyển
                      đổi với khoảng thời gian đều đặn.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Nhà cung cấp: Viettel</p>
                      <p>Vị trí: Hà Nội, Việt Nam</p>
                      <p>Thời gian phát hiện: 15/06/2023 10:23:45</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Subnet: 14.161.22.0/24</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện mẫu luân chuyển IP - Sau khi IP 14.161.22.155 bị
                      đánh dấu, các chuyển đổi chuyển sang IP 14.161.22.156,
                      14.161.22.157 với cùng một user-agent.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Nhà cung cấp: VNPT</p>
                      <p>Vị trí: TP.HCM, Việt Nam</p>
                      <p>Thời gian phát hiện: 14/06/2023 14:45:12</p>
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
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">3.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện mạng lưới</p>
                    <p className="text-lg font-bold">89.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="clustering" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích behavior clustering trên các nguồn IP
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng thuật toán phân cụm (clustering) để nhóm các IP có
                  hành vi tương tự nhau, giúp phát hiện các mạng lưới gian lận
                  có tổ chức ngay cả khi chúng đến từ các subnet khác nhau.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Thuật toán phân cụm</h4>
                  <p className="text-sm mb-3">
                    Hệ thống sử dụng thuật toán DBSCAN (Density-Based Spatial
                    Clustering of Applications with Noise) để phân cụm các IP
                    dựa trên các đặc trưng hành vi.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Đặc trưng phân cụm:</span>
                    </li>
                    <li className="ml-4">Thời gian truy cập và mẫu thời gian</li>
                    <li className="ml-4">Chuỗi hành động trên trang web</li>
                    <li className="ml-4">Thời gian dừng trên mỗi trang</li>
                    <li className="ml-4">Mẫu di chuyển chuột và nhấp chuột</li>
                    <li className="ml-4">User-agent và thông tin trình duyệt</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phát hiện cụm đáng ngờ</h4>
                  <p className="text-sm mb-3">
                    Các cụm được đánh giá dựa trên các chỉ số sau để xác định
                    mức độ đáng ngờ:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Độ đồng nhất hành vi:</span>{" "}
                      Mức độ giống nhau trong hành vi giữa các IP trong cụm
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ chuyển đổi:</span> Tỷ
                      lệ chuyển đổi bất thường cao trong cụm
                    </li>
                    <li>
                      <span className="font-medium">Phân bố địa lý:</span> Sự
                      phân tán địa lý của các IP trong cùng một cụm
                    </li>
                    <li>
                      <span className="font-medium">Đồng bộ thời gian:</span>{" "}
                      Mức độ đồng bộ về thời gian hoạt động
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biểu đồ phân cụm</h4>
                <div className="relative w-full h-[300px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Cụm 1 - Đáng ngờ cao */}
                      <div
                        className="absolute rounded-full bg-red-500 opacity-70"
                        style={{ top: "30%", left: "25%", width: "120px", height: "120px" }}
                      ></div>
                      <div
                        className="absolute text-xs font-bold"
                        style={{ top: "30%", left: "25%" }}
                      >
                        Cụm 1: 42 IP
                      </div>

                      {/* Cụm 2 - Đáng ngờ trung bình */}
                      <div
                        className="absolute rounded-full bg-amber-500 opacity-70"
                        style={{ top: "60%", left: "60%", width: "100px", height: "100px" }}
                      ></div>
                      <div
                        className="absolute text-xs font-bold"
                        style={{ top: "60%", left: "60%" }}
                      >
                        Cụm 2: 28 IP
                      </div>

                      {/* Cụm 3 - Đáng ngờ thấp */}
                      <div
                        className="absolute rounded-full bg-green-500 opacity-70"
                        style={{ top: "40%", left: "70%", width: "80px", height: "80px" }}
                      ></div>
                      <div
                        className="absolute text-xs font-bold"
                        style={{ top: "40%", left: "70%" }}
                      >
                        Cụm 3: 15 IP
                      </div>

                      {/* Các điểm IP riêng lẻ */}
                      {Array.from({ length: 30 }).map((_, index) => {
                        const top = Math.random() * 80 + 10;
                        const left = Math.random() * 80 + 10;
                        return (
                          <div
                            key={index}
                            className="absolute w-2 h-2 rounded-full bg-blue-500"
                            style={{ top: `${top}%`, left: `${left}%` }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                      <span>Cụm đáng ngờ cao</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
                      <span>Cụm đáng ngờ trung bình</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                      <span>Cụm đáng ngờ thấp</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                      <span>IP riêng lẻ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân tích cụm đáng ngờ</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm 1: Farm click có tổ chức</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      42 IP từ nhiều subnet khác nhau nhưng có mẫu hành vi gần
                      như giống hệt nhau. Thời gian truy cập đồng bộ cao, chuỗi
                      hành động giống nhau chính xác, và thời gian dừng trên
                      trang cực ngắn.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Nhà cung cấp: Đa dạng (VNPT, Viettel, FPT)</p>
                      <p>Vị trí: Tập trung tại Hà Nội và TP.HCM</p>
                      <p>Độ đồng nhất hành vi: 94.7%</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm 2: Mạng proxy chia sẻ</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      28 IP có mẫu hành vi tương tự nhưng không hoàn toàn giống
                      nhau. Có dấu hiệu của việc sử dụng proxy chia sẻ, với
                      nhiều user-agent khác nhau nhưng cùng một địa chỉ IP gốc.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Nhà cung cấp: Chủ yếu FPT</p>
                      <p>Vị trí: Đa dạng trên toàn quốc</p>
                      <p>Độ đồng nhất hành vi: 78.3%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">91.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">4.5%</p>
                    <Badge className="mt-2 bg-amber-100 text-amber-800">
                      Trung bình
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện mạng lưới</p>
                    <p className="text-lg font-bold">95.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
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
                Các phương pháp phân tích mạng tiên tiến được tích hợp vào hệ
                thống phát hiện gian lận, kết hợp với các phương pháp phát hiện
                khác để tạo ra một hệ thống bảo vệ đa lớp.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Xem cơ sở dữ liệu IP
                </Button>
                <Button variant="outline" size="sm">
                  <Info className="h-4 w-4 mr-2" />
                  Tài liệu hướng dẫn
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Hiệu suất tổng thể</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Độ chính xác tổng thể:</span>
                    <span className="font-bold">93.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "93.5%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tỷ lệ dương tính giả:</span>
                    <span className="font-bold">2.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "2.8%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Phát hiện farm click VN:</span>
                    <span className="font-bold">96.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "96.2%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="flex items-center">
            <Network className="h-4 w-4 mr-2" />
            Triển khai phân tích mạng tiên tiến
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkAnalysis;
