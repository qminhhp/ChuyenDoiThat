import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Fingerprint,
  Smartphone,
  Laptop,
  Users,
  Keyboard,
  Hand,
  BarChart,
  Database,
} from "lucide-react";

const BehavioralBiometrics = () => {
  const [activeTab, setActiveTab] = React.useState("profile");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Fingerprint className="h-5 w-5 mr-2 text-indigo-500" />
          Behavioral Biometrics cho Market Việt Nam
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="profile"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="profile"
              className="flex items-center justify-center"
            >
              <Users className="h-4 w-4 mr-1" />
              Profile hành vi
            </TabsTrigger>
            <TabsTrigger
              value="keystroke"
              className="flex items-center justify-center"
            >
              <Keyboard className="h-4 w-4 mr-1" />
              Keystroke Dynamics
            </TabsTrigger>
            <TabsTrigger
              value="device"
              className="flex items-center justify-center"
            >
              <Laptop className="h-4 w-4 mr-1" />
              Mobile vs Desktop
            </TabsTrigger>
            <TabsTrigger
              value="touch"
              className="flex items-center justify-center"
            >
              <Hand className="h-4 w-4 mr-1" />
              Touch Interactions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Thu thập profile hành vi người dùng thật tại Việt Nam
                </h3>
                <p className="text-gray-700 mb-4">
                  Xây dựng cơ sở dữ liệu về hành vi người dùng thật tại Việt Nam để làm chuẩn so sánh và phát hiện hành vi bất thường.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp thu thập dữ liệu</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Phân tích hành vi thụ động:</span> Thu thập dữ liệu từ người dùng thật mà không cần sự tương tác trực tiếp
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo vùng miền:</span> Phân biệt hành vi người dùng theo các vùng miền khác nhau tại Việt Nam
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo độ tuổi:</span> Phân biệt hành vi người dùng theo các nhóm tuổi khác nhau
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo thiết bị:</span> Phân biệt hành vi người dùng trên các loại thiết bị phổ biến tại Việt Nam
                    </li>
                    <li>
                      <span className="font-medium">Phân tích theo thời gian:</span> Phân biệt hành vi người dùng theo thời gian trong ngày và các ngày trong tuần
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Đặc điểm hành vi người dùng Việt Nam</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Thời gian sử dụng:</span> Cao điểm vào buổi tối (20:00-23:00), thấp điểm vào buổi sáng sớm (4:00-6:00)
                    </li>
                    <li>
                      <span className="font-medium">Tốc độ tương tác:</span> Nhanh hơn 15-20% so với trung bình toàn cầu
                    </li>
                    <li>
                      <span className="font-medium">Thời gian xem trang:</span> Ngắn hơn 25% so với trung bình toàn cầu
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ sử dụng mobile:</span> Cao hơn 30% so với desktop (75% mobile vs 25% desktop)
                    </li>
                    <li>
                      <span className="font-medium">Mẫu điều hướng:</span> Thường xuyên quay lại trang chủ sau mỗi lần xem sản phẩm
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân bố hành vi theo vùng miền</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Miền Bắc</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs mt-2">
                      <li>Thời gian xem trang dài hơn 15%</li>
                      <li>Tỷ lệ sử dụng desktop cao hơn</li>
                      <li>Tương tác nhiều vào buổi tối</li>
                      <li>Tỷ lệ tìm kiếm theo giá cao hơn</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Miền Trung</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs mt-2">
                      <li>Thời gian xem trang trung bình</li>
                      <li>Tỷ lệ sử dụng mobile/desktop cân bằng</li>
                      <li>Tương tác đều trong ngày</li>
                      <li>Tỷ lệ so sánh sản phẩm cao hơn</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Miền Nam</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs mt-2">
                      <li>Thời gian xem trang ngắn hơn 10%</li>
                      <li>Tỷ lệ sử dụng mobile rất cao</li>
                      <li>Tương tác nhiều vào buổi trưa và tối</li>
                      <li>Tỷ lệ mua ngay cao hơn</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Kích thước dữ liệu thu thập</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Số lượng phiên</p>
                    <p className="text-lg font-bold">5.2 triệu</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất lớn
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Số lượng người dùng</p>
                    <p className="text-lg font-bold">1.8 triệu</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Đa dạng
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Thời gian thu thập</p>
                    <p className="text-lg font-bold">12 tháng</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Toàn diện
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="keystroke" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích keystroke dynamics đặc trưng thị trường Việt Nam
                </h3>
                <p className="text-gray-700 mb-4">
                  Nghiên cứu và phân tích mẫu gõ phím đặc trưng của người dùng Việt Nam, giúp phân biệt người dùng thật với bot tự động.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Đặc điểm gõ phím người Việt</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Tốc độ gõ trung bình:</span> 35-45 WPM (Words Per Minute), thấp hơn trung bình toàn cầu
                    </li>
                    <li>
                      <span className="font-medium">Thời gian giữa các phím:</span> Biến thiên cao khi gõ tiếng Việt có dấu
                    </li>
                    <li>
                      <span className="font-medium">Mẫu lỗi phổ biến:</span> Gõ thiếu dấu, sửa dấu sau khi gõ xong từ
                    </li>
                    <li>
                      <span className="font-medium">Kiểu gõ tiếng Việt:</span> Đa dạng (Telex, VNI, VIQR) với đặc trưng riêng
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ backspace:</span> Cao hơn 20% so với trung bình khi gõ tiếng Việt
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phân tích</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Thời gian giữ phím (dwell time):</span> Thời gian từ khi nhấn đến khi thả phím
                    </li>
                    <li>
                      <span className="font-medium">Thời gian giữa các phím (flight time):</span> Thời gian từ khi thả phím này đến khi nhấn phím tiếp theo
                    </li>
                    <li>
                      <span className="font-medium">Mẫu gõ dấu tiếng Việt:</span> Phân tích thời gian và trình tự khi gõ các dấu
                    </li>
                    <li>
                      <span className="font-medium">Tốc độ gõ theo ngữ cảnh:</span> Phân tích sự thay đổi tốc độ gõ theo loại nội dung
                    </li>
                    <li>
                      <span className="font-medium">Phân tích lỗi gõ:</span> Mẫu và tần suất các lỗi gõ phổ biến
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">So sánh kiểu gõ tiếng Việt</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Kiểu gõ Telex</p>
                      <Badge className="bg-blue-100 text-blue-800">
                        Phổ biến nhất (65%)
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Đặc trưng: Sử dụng các ký tự Latin để biểu diễn dấu (aa = â, aw = ă, dd = đ, ow = ơ, w = ư, ...). Thời gian giữa các phím khi gõ dấu ngắn hơn, tốc độ gõ nhanh hơn các kiểu khác.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Ví dụ: "Tiếng Việt" = "Tieesng Vieejt"</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Kiểu gõ VNI</p>
                      <Badge className="bg-blue-100 text-blue-800">
                        Phổ biến thứ hai (25%)
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Đặc trưng: Sử dụng các số để biểu diễn dấu (a1 = á, a2 = à, a3 = ả, a4 = ã, a5 = ạ, ...). Thời gian chuyển từ phím chữ sang phím số dài hơn, tạo ra mẫu thời gian đặc trưng.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Ví dụ: "Tiếng Việt" = "Tie1ng Vie6t"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phát hiện bot dựa trên keystroke</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác phát hiện</p>
                    <p className="text-lg font-bold">94.7%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">1.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Thời gian phát hiện</p>
                    <p className="text-lg font-bold">~5 giây gõ</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Nhanh
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="device" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân biệt hành vi mobile vs desktop phổ biến tại VN
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích sự khác biệt trong hành vi người dùng giữa thiết bị di động và máy tính để bàn tại thị trường Việt Nam, giúp xây dựng mô hình phát hiện gian lận chính xác hơn.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Smartphone className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Hành vi trên thiết bị di động</h4>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Thời gian phiên:</span> Ngắn hơn (3-5 phút/phiên)
                    </li>
                    <li>
                      <span className="font-medium">Tần suất phiên:</span> Cao hơn (5-8 phiên/ngày)
                    </li>
                    <li>
                      <span className="font-medium">Thời điểm sử dụng:</span> Phân tán trong ngày, cao điểm giờ nghỉ trưa và tối
                    </li>
                    <li>
                      <span className="font-medium">Mẫu cuộn trang:</span> Cuộn nhanh, ít dừng lại
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ click:</span> Thấp hơn, nhiều thao tác cuộn hơn
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ chuyển đổi:</span> Thấp hơn 15-20% so với desktop
                    </li>
                    <li>
                      <span className="font-medium">Thiết bị phổ biến:</span> Samsung (32%), Oppo (18%), Xiaomi (15%), Vivo (12%)
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <Laptop className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Hành vi trên máy tính để bàn</h4>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Thời gian phiên:</span> Dài hơn (8-12 phút/phiên)
                    </li>
                    <li>
                      <span className="font-medium">Tần suất phiên:</span> Thấp hơn (2-3 phiên/ngày)
                    </li>
                    <li>
                      <span className="font-medium">Thời điểm sử dụng:</span> Tập trung vào giờ hành chính và tối muộn
                    </li>
                    <li>
                      <span className="font-medium">Mẫu cuộn trang:</span> Cuộn chậm, nhiều điểm dừng
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ click:</span> Cao hơn, nhiều tương tác với các phần tử
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ chuyển đổi:</span> Cao hơn, đặc biệt với các giao dịch giá trị lớn
                    </li>
                    <li>
                      <span className="font-medium">Trình duyệt phổ biến:</span> Chrome (65%), Cốc Cốc (15%), Firefox (8%), Edge (7%)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân bố thiết bị tại Việt Nam</h4>
                <div className="relative w-full h-[200px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                    {/* Giả lập biểu đồ cột phân bố thiết bị */}
                    <div className="flex items-end space-x-8 w-full justify-around">
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-500 w-16 h-[75%] rounded-t"></div>
                        <p className="text-xs mt-1">Mobile</p>
                        <p className="text-xs font-bold">75%</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-green-500 w-16 h-[20%] rounded-t"></div>
                        <p className="text-xs mt-1">Desktop</p>
                        <p className="text-xs font-bold">20%</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-purple-500 w-16 h-[5%] rounded-t"></div>
                        <p className="text-xs mt-1">Tablet</p>
                        <p className="text-xs font-bold">5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Dấu hiệu phát hiện bot theo thiết bị</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Bot giả lập mobile</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Dấu hiệu: Thời gian phiên quá dài cho mobile (>15 phút), tỷ lệ click quá cao, mẫu cuộn trang quá đều đặn, không có sự thay đổi tốc độ cuộn theo nội dung, user-agent mobile nhưng có đặc điểm hành vi của desktop.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Bot giả lập desktop</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Dấu hiệu: Thời gian xem trang quá ngắn cho desktop, không có sự thay đổi tốc độ chuột theo nội dung, không có hành vi hover trước khi click, mẫu di chuyển chuột quá đều đặn, thiếu các đặc điểm hành vi desktop điển hình.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="touch" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Đánh giá touch interactions trên thiết bị di động phổ biến
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích các mẫu tương tác cảm ứng đặc trưng của người dùng Việt Nam trên các thiết bị di động phổ biến, giúp phát hiện các tương tác không tự nhiên.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Đặc điểm touch interactions</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Vùng tương tác phổ biến:</span> Tập trung ở giữa và phần dưới màn hình
                    </li>
                    <li>
                      <span className="font-medium">Tốc độ vuốt (swipe):</span> Nhanh hơn 20% so với trung bình toàn cầu
                    </li>
                    <li>
                      <span className="font-medium">Thời gian chạm (tap duration):</span> Ngắn (80-120ms), đặc biệt ở người dùng trẻ
                    </li>
                    <li>
                      <span className="font-medium">Mẫu multi-touch:</span> Ít phổ biến, chủ yếu sử dụng single-touch
                    </li>
                    <li>
                      <span className="font-medium">Độ chính xác tap:</span> Thấp hơn, nhiều tap lệch vị trí mục tiêu
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phân tích theo thiết bị phổ biến</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Samsung (màn hình lớn):</span> Tương tác hai tay, nhiều thumb swipe, ít sử dụng ngón trỏ
                    </li>
                    <li>
                      <span className="font-medium">Oppo/Vivo (màn hình vừa):</span> Tương tác một tay, nhiều thumb tap, swipe ngắn
                    </li>
                    <li>
                      <span className="font-medium">Xiaomi (đa dạng kích cỡ):</span> Mẫu tương tác đa dạng, phụ thuộc vào model
                    </li>
                    <li>
                      <span className="font-medium">iPhone (ít phổ biến hơn):</span> Tương tác chính xác hơn, nhiều gesture phức tạp
                    </li>
                    <li>
                      <span className="font-medium">Thiết bị giá rẻ:</span> Touch không chính xác, nhiều tap lặp lại, độ nhạy thấp
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Heatmap tương tác cảm ứng</h4>
                <div className="relative w-full h-[300px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Giả lập hình dáng smartphone */}
                    <div className="relative w-[150px] h-[300px] border-4 border-gray-800 rounded-3xl bg-gray-100">
                      {/* Màn hình */}
                      <div className="absolute inset-0 m-1 bg-white rounded-2xl overflow-hidden">
                        {/* Heatmap */}
                        <div
                          className="absolute rounded-full bg-red-500 opacity-40"
                          style={{
                            top: "30%",
                            left: "50%",
                            width: "80px",
                            height: "80px",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                        <div
                          className="absolute rounded-full bg-red-500 opacity-60"
                          style={{
                            top: "60%",
                            left: "50%",
                            width: "100px",
                            height: "100px",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                        <div
                          className="absolute rounded-full bg-orange-500 opacity-40"
                          style={{
                            top: "80%",
                            left: "30%",
                            width: "60px",
                            height: "60px",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                        <div
                          className="absolute rounded-full bg-orange-500 opacity-40"
                          style={{
                            top: "80%",
                            left: "70%",
                            width: "60px",
                            height: "60px",
                            transform: "translate(-50%, -50%)",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                      <div className="flex items-center mb-1">
                        <div className="w-3 h-3 rounded-full bg-red-500 opacity-60 mr-1"></div>
                        <span>Tương tác cao</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-orange-500 opacity-40 mr-1"></div>
                        <span>Tương tác trung bình</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Dấu hiệu phát hiện bot</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Mẫu tap không tự nhiên</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Dấu hiệu: Vị trí tap quá chính xác (luôn ở chính giữa phần tử), thời gian giữa các tap quá đều đặn, không có tap lỗi, không có sự thay đổi vị trí tap khi kích thước màn hình thay đổi.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Mẫu swipe không tự nhiên</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Dấu hiệu: Tốc độ swipe quá đều đặn, quỹ đạo swipe quá thẳng, không có sự thay đổi tốc độ trong quá trình swipe, không có sự thay đổi hướng nhỏ, không có sự dừng lại khi gặp nội dung quan trọng.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">93.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">2.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Thời gian phát hiện</p>
                    <p className="text-lg font-bold">3-5 tương tác</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Nhanh
                    </Badge>
                  </div>
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
                Hệ thống behavioral biometrics được tích hợp vào mã JavaScript theo dõi, thu thập dữ liệu hành vi người dùng và so sánh với các mẫu chuẩn của người dùng Việt Nam để phát hiện bất thường.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  Xem dữ liệu chuẩn
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart className="h-4 w-4 mr-2" />
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
                    <span className="font-bold">1.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "1.7%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Thời gian phát hiện:</span>
                    <span className="font-bold">~3-8 giây</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="flex items-center">
            <Fingerprint className="h-4 w-4 mr-2" />
            Triển khai Behavioral Biometrics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BehavioralBiometrics;
