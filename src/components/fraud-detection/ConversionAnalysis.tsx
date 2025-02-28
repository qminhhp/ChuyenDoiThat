import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Database,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
} from "lucide-react";

const ConversionAnalysis = () => {
  const [activeTab, setActiveTab] = React.useState("contact");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2 text-blue-500" />
          Phân tích chuyển đổi đặc thù
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="contact"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="contact"
              className="flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-1" />
              Kiểm tra thông tin liên hệ
            </TabsTrigger>
            <TabsTrigger
              value="submission"
              className="flex items-center justify-center"
            >
              <Clock className="h-4 w-4 mr-1" />
              Mẫu form submission
            </TabsTrigger>
            <TabsTrigger
              value="database"
              className="flex items-center justify-center"
            >
              <Database className="h-4 w-4 mr-1" />
              Cross-check database
            </TabsTrigger>
            <TabsTrigger
              value="nlp"
              className="flex items-center justify-center"
            >
              <FileText className="h-4 w-4 mr-1" />
              Phân tích NLP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Kiểm tra hợp lệ của thông tin liên hệ Việt Nam
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống kiểm tra tính hợp lệ của số điện thoại, email và địa
                  chỉ theo định dạng và quy tắc đặc thù của Việt Nam để phát
                  hiện thông tin giả mạo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Số điện thoại Việt Nam</h4>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Định dạng:</span> 10 chữ số,
                      bắt đầu bằng 0
                    </li>
                    <li>
                      <span className="font-medium">Đầu số di động:</span> 03x,
                      05x, 07x, 08x, 09x
                    </li>
                    <li>
                      <span className="font-medium">Đầu số cố định:</span> 02x +
                      7 chữ số
                    </li>
                    <li>
                      <span className="font-medium">Kiểm tra:</span> Đối chiếu
                      với danh sách đầu số hợp lệ của nhà mạng Việt Nam
                    </li>
                    <li>
                      <span className="font-medium">Phát hiện:</span> Số không
                      tồn tại, số ảo, số tạm thời
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Email</h4>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Kiểm tra cơ bản:</span> Định
                      dạng email hợp lệ
                    </li>
                    <li>
                      <span className="font-medium">Kiểm tra nâng cao:</span>{" "}
                      Xác minh tên miền tồn tại và có bản ghi MX
                    </li>
                    <li>
                      <span className="font-medium">Phát hiện:</span> Email tạm
                      thời, email dùng một lần
                    </li>
                    <li>
                      <span className="font-medium">Đặc thù VN:</span> Phát hiện
                      email từ các dịch vụ phổ biến tại Việt Nam (zing.vn,
                      vnn.vn)
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ sử dụng:</span> So
                      sánh với phân bố email thông thường tại Việt Nam
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Địa chỉ Việt Nam</h4>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Cấu trúc:</span> Kiểm tra
                      cấu trúc địa chỉ Việt Nam (số nhà, đường, phường/xã,
                      quận/huyện, tỉnh/thành)
                    </li>
                    <li>
                      <span className="font-medium">Đối chiếu:</span> So sánh
                      với CSDL đơn vị hành chính Việt Nam
                    </li>
                    <li>
                      <span className="font-medium">Tính nhất quán:</span> Kiểm
                      tra sự phù hợp giữa các cấp hành chính
                    </li>
                    <li>
                      <span className="font-medium">Mã bưu chính:</span> Xác
                      minh mã bưu chính phù hợp với địa chỉ
                    </li>
                    <li>
                      <span className="font-medium">Phát hiện:</span> Địa chỉ
                      không tồn tại, địa chỉ giả mạo
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Số điện thoại không hợp lệ</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện số điện thoại 0123456789 không thuộc đầu số nào
                      của nhà mạng Việt Nam. Đầu số 012x đã bị thu hồi từ năm
                      2018.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 15/06/2023 14:23:45</p>
                      <p>Tỷ lệ xuất hiện: 3.2% tổng số đơn hàng</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Địa chỉ không nhất quán</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện địa chỉ "123 Lê Lợi, Phường Bến Nghé, Quận 3,
                      TP.HCM" không nhất quán vì Phường Bến Nghé thuộc Quận 1,
                      không thuộc Quận 3.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 14/06/2023 09:45:12</p>
                      <p>Tỷ lệ xuất hiện: 1.8% tổng số đơn hàng</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">95.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">2.1%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện gian lận</p>
                    <p className="text-lg font-bold">8.7%</p>
                    <Badge className="mt-2 bg-amber-100 text-amber-800">
                      Đáng kể
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="submission" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện mẫu form submission từ click farm
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích thời gian và cách thức điền form để phát hiện các
                  mẫu bất thường đặc trưng của click farm tại Việt Nam.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phân tích thời gian</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Thời điểm gửi form:</span>{" "}
                      Tập trung vào giờ đêm khuya (1-4 giờ sáng)
                    </li>
                    <li>
                      <span className="font-medium">Mẫu thời gian:</span> Nhiều
                      form được gửi với khoảng thời gian đều đặn
                    </li>
                    <li>
                      <span className="font-medium">Thời gian điền form:</span>{" "}
                      Quá nhanh so với độ phức tạp của form
                    </li>
                    <li>
                      <span className="font-medium">Thời gian giữa các
                      trường:</span> Không có sự khác biệt khi điền các trường
                      phức tạp
                    </li>
                    <li>
                      <span className="font-medium">Phân bố thời gian:</span>{" "}
                      Không phù hợp với phân bố tự nhiên của người dùng thật
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phân tích tốc độ nhập liệu</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Tốc độ gõ:</span> Quá đều
                      đặn hoặc quá nhanh (>100 WPM)
                    </li>
                    <li>
                      <span className="font-medium">Keystroke dynamics:</span>{" "}
                      Không có sự biến thiên tự nhiên trong thời gian giữa các
                      phím
                    </li>
                    <li>
                      <span className="font-medium">Lỗi gõ:</span> Không có lỗi
                      gõ và sửa lỗi như người dùng thật
                    </li>
                    <li>
                      <span className="font-medium">Copy-paste:</span> Phát hiện
                      dữ liệu được dán vào form thay vì gõ
                    </li>
                    <li>
                      <span className="font-medium">Tự động điền:</span> Phát
                      hiện form được điền tự động bởi script
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biểu đồ phân tích thời gian</h4>
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
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Form submission đồng bộ</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 28 form được gửi trong khoảng thời gian 10 phút,
                      với khoảng cách thời gian giữa các lần gửi là 20-22 giây,
                      quá đều đặn so với hành vi người dùng thật.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 15/06/2023 02:15:30</p>
                      <p>Nguồn: Nhiều IP khác nhau nhưng cùng ISP</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Tốc độ nhập liệu bất thường</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện form với 15 trường thông tin được điền trong 8
                      giây, bao gồm cả thông tin phức tạp như địa chỉ và số
                      CMND. Tốc độ này vượt quá khả năng gõ của con người.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 14/06/2023 03:22:45</p>
                      <p>Phương thức: Có dấu hiệu sử dụng script tự động điền</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">97.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">1.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Thời gian phát hiện</p>
                    <p className="text-lg font-bold">Thời gian thực</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Ngay lập tức
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="database" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Cross-check với danh sách SĐT/email đáng ngờ trong database
                </h3>
                <p className="text-gray-700 mb-4">
                  Hệ thống đối chiếu thông tin liên hệ với cơ sở dữ liệu các số
                  điện thoại và email đã được xác định là đáng ngờ hoặc liên
                  quan đến hoạt động gian lận trước đây.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Cơ sở dữ liệu đối chiếu</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Danh sách đen nội bộ:</span>{" "}
                      SĐT/email đã từng thực hiện gian lận
                    </li>
                    <li>
                      <span className="font-medium">Danh sách chia sẻ:</span>{" "}
                      Dữ liệu từ mạng lưới chia sẻ thông tin gian lận
                    </li>
                    <li>
                      <span className="font-medium">Danh sách tạm thời:</span>{" "}
                      SĐT/email đang trong quá trình theo dõi
                    </li>
                    <li>
                      <span className="font-medium">Danh sách click farm:</span>{" "}
                      SĐT/email đã xác định thuộc về click farm
                    </li>
                    <li>
                      <span className="font-medium">Danh sách tái phạm:</span>{" "}
                      SĐT/email có lịch sử tái phạm nhiều lần
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp đối chiếu</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Đối chiếu chính xác:</span>{" "}
                      So khớp chính xác SĐT/email
                    </li>
                    <li>
                      <span className="font-medium">Đối chiếu mờ:</span> Phát
                      hiện các biến thể nhỏ (thêm/bớt ký tự)
                    </li>
                    <li>
                      <span className="font-medium">Đối chiếu mẫu:</span> Phát
                      hiện mẫu SĐT liên tiếp (0912345678, 0912345679)
                    </li>
                    <li>
                      <span className="font-medium">Đối chiếu tên miền:</span>{" "}
                      Phát hiện email từ cùng tên miền đáng ngờ
                    </li>
                    <li>
                      <span className="font-medium">Đối chiếu liên kết:</span>{" "}
                      Phát hiện mối liên hệ giữa các SĐT/email
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Thống kê cơ sở dữ liệu</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Số lượng SĐT đáng ngờ</p>
                    <p className="text-lg font-bold">42,587</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Cập nhật: Hàng ngày</p>
                      <p>Nguồn: Nội bộ + Chia sẻ</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Số lượng email đáng ngờ</p>
                    <p className="text-lg font-bold">68,932</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Cập nhật: Hàng ngày</p>
                      <p>Nguồn: Nội bộ + Chia sẻ</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ phát hiện</p>
                    <p className="text-lg font-bold">5.8%</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Của tổng số chuyển đổi</p>
                      <p>Tăng 0.7% so với tháng trước</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">SĐT nằm trong danh sách đen</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện số điện thoại 0987654321 đã có trong danh sách
                      đen với 7 lần gian lận trước đây. Số này liên quan đến
                      hoạt động click farm tại khu vực Hà Nội.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 15/06/2023 10:23:45</p>
                      <p>Mức độ tin cậy: 99.8%</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Mẫu email đáng ngờ</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 12 email với mẫu tương tự
                      (user1@tempmail.vn, user2@tempmail.vn, ...) được sử dụng
                      trong cùng một chiến dịch. Tên miền tempmail.vn đã được
                      đánh dấu là dịch vụ email tạm thời.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 14/06/2023 15:45:12</p>
                      <p>Mức độ tin cậy: 87.5%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">99.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">0.3%</p>
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

          <TabsContent value="nlp" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích ngôn ngữ tự nhiên cho dữ liệu nhập tiếng Việt
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng kỹ thuật xử lý ngôn ngữ tự nhiên (NLP) để phân tích
                  tính hợp lệ và nhất quán của dữ liệu tiếng Việt được nhập vào
                  form, giúp phát hiện dữ liệu giả mạo hoặc được tạo tự động.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phân tích</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Kiểm tra ngữ pháp:</span>{" "}
                      Phát hiện cấu trúc câu không tự nhiên
                    </li>
                    <li>
                      <span className="font-medium">Phân tích ngữ nghĩa:</span>{" "}
                      Kiểm tra tính nhất quán của nội dung
                    </li>
                    <li>
                      <span className="font-medium">Phát hiện từ khóa:</span>{" "}
                      Tìm các từ khóa đáng ngờ hoặc spam
                    </li>
                    <li>
                      <span className="font-medium">Phân tích cảm xúc:</span>{" "}
                      Đánh giá tính tự nhiên của văn bản
                    </li>
                    <li>
                      <span className="font-medium">Phát hiện mẫu:</span> Tìm
                      các mẫu văn bản lặp lại hoặc tương tự
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Đặc điểm tiếng Việt</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Dấu thanh:</span> Kiểm tra
                      việc sử dụng dấu thanh hợp lệ trong tiếng Việt
                    </li>
                    <li>
                      <span className="font-medium">Từ địa phương:</span> Phát
                      hiện sự không nhất quán trong việc sử dụng từ ngữ địa
                      phương
                    </li>
                    <li>
                      <span className="font-medium">Cách viết tắt:</span> Phân
                      tích các cách viết tắt phổ biến trong tiếng Việt
                    </li>
                    <li>
                      <span className="font-medium">Lỗi chính tả:</span> Phát
                      hiện lỗi chính tả phổ biến của người Việt
                    </li>
                    <li>
                      <span className="font-medium">Tiếng lóng:</span> Nhận diện
                      tiếng lóng và từ ngữ đặc thù của Việt Nam
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Mô hình NLP tiếng Việt</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">PhoBERT</p>
                      <Badge className="bg-blue-100 text-blue-800">
                        Mô hình chính
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Sử dụng mô hình PhoBERT (Pretrained language models for
                      Vietnamese) được huấn luyện trên tập dữ liệu lớn tiếng
                      Việt để phân tích văn bản. Mô hình này hiểu được ngữ cảnh
                      và đặc thù của tiếng Việt.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">VnCoreNLP</p>
                      <Badge className="bg-blue-100 text-blue-800">
                        Xử lý cơ bản
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Sử dụng VnCoreNLP để thực hiện các tác vụ xử lý ngôn ngữ
                      cơ bản như tách từ, gán nhãn từ loại, phân tích cú pháp
                      và nhận dạng thực thể có tên riêng trong văn bản tiếng
                      Việt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Văn bản được tạo tự động</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện mô tả sản phẩm được tạo tự động bởi công cụ AI.
                      Văn bản có cấu trúc quá hoàn hảo, thiếu các lỗi chính tả
                      tự nhiên và sử dụng các mẫu câu lặp lại.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 15/06/2023 11:23:45</p>
                      <p>Độ tin cậy: 92.7%</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Sự không nhất quán trong phương ngữ</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện sự không nhất quán trong việc sử dụng từ ngữ địa
                      phương. Người dùng tự nhận là ở Hà Nội nhưng sử dụng từ
                      ngữ đặc trưng của miền Nam ("xe gắn máy" thay vì "xe
                      máy", "cà phê sữa đá" thay vì "nâu đá").
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Thời gian phát hiện: 14/06/2023 14:45:12</p>
                      <p>Độ tin cậy: 78.5%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">89.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">4.2%</p>
                    <Badge className="mt-2 bg-amber-100 text-amber-800">
                      Trung bình
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện văn bản AI</p>
                    <p className="text-lg font-bold">93.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
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
                Các phương pháp phân tích chuyển đổi đặc thù được tích hợp vào
                hệ thống xử lý form và API xác thực, giúp phát hiện và ngăn chặn
                các chuyển đổi giả mạo ngay khi chúng xảy ra.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Xem tài liệu API
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Kiểm tra thông tin
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Hiệu suất tổng thể</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Độ chính xác phát hiện:</span>
                    <span className="font-bold">95.3%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "95.3%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tỷ lệ dương tính giả:</span>
                    <span className="font-bold">2.1%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "2.1%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tiết kiệm chi phí:</span>
                    <span className="font-bold">18.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "18.7%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Triển khai phân tích chuyển đổi
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionAnalysis;
