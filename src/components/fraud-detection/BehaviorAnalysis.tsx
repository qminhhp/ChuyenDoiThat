import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  MousePointer,
  Clock,
  ArrowDownUp,
  Eye,
  Brain,
} from "lucide-react";

const BehaviorAnalysis = () => {
  const [activeTab, setActiveTab] = React.useState("mouse");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-blue-500" />
          Phân tích hành vi chi tiết
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="mouse"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="mouse"
              className="flex items-center justify-center"
            >
              <MousePointer className="h-4 w-4 mr-1" />
              Quỹ đạo chuột
            </TabsTrigger>
            <TabsTrigger
              value="keystroke"
              className="flex items-center justify-center"
            >
              <Clock className="h-4 w-4 mr-1" />
              Keystroke Dynamics
            </TabsTrigger>
            <TabsTrigger
              value="scroll"
              className="flex items-center justify-center"
            >
              <ArrowDownUp className="h-4 w-4 mr-1" />
              Mẫu cuộn trang
            </TabsTrigger>
            <TabsTrigger
              value="honeypot"
              className="flex items-center justify-center"
            >
              <Eye className="h-4 w-4 mr-1" />
              Honeypot Elements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mouse" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích quỹ đạo chuột
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng machine learning để phân biệt quỹ đạo chuột tự nhiên
                  của người dùng thật với các mẫu di chuyển chuột của bot.
                </p>
                <Button
                  variant="outline"
                  className="mb-4"
                  onClick={() =>
                    window.open("/fraud-detection?tab=mouse-model", "_blank")
                  }
                >
                  <MousePointer className="h-4 w-4 mr-2" />
                  Xem chi tiết mô hình ML quỹ đạo chuột
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Đặc điểm quỹ đạo chuột tự nhiên
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Chuyển động không đều và có độ cong tự nhiên</li>
                    <li>Tốc độ thay đổi khi tiếp cận mục tiêu</li>
                    <li>Có các điểm dừng và thay đổi hướng ngẫu nhiên</li>
                    <li>
                      Đôi khi có các chuyển động "overshoot" và điều chỉnh
                    </li>
                    <li>Entropy cao trong dữ liệu chuyển động</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Đặc điểm quỹ đạo chuột bot
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Chuyển động quá thẳng hoặc quá đều đặn</li>
                    <li>Tốc độ không đổi hoặc thay đổi theo mẫu</li>
                    <li>Thiếu các điểm dừng tự nhiên</li>
                    <li>
                      Di chuyển trực tiếp đến mục tiêu không có sự điều chỉnh
                    </li>
                    <li>Entropy thấp trong dữ liệu chuyển động</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Mô hình phát hiện</h4>
                <p className="text-sm mb-2">
                  Mô hình machine learning được huấn luyện trên hàng nghìn mẫu
                  quỹ đạo chuột thực và giả lập, đạt độ chính xác 96.8% trong
                  việc phân biệt người dùng thật và bot.
                </p>
                <div className="flex items-center space-x-4 mt-3">
                  <Badge className="bg-green-100 text-green-800">
                    Độ chính xác: 96.8%
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    Độ nhạy: 94.2%
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800">
                    Độ đặc hiệu: 97.5%
                  </Badge>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="keystroke" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích thời gian giữa các tương tác
                </h3>
                <p className="text-gray-700 mb-4">
                  Keystroke dynamics phân tích mẫu thời gian giữa các lần nhấn
                  phím và tương tác để xác định hành vi người dùng thật và bot.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Mẫu thời gian người dùng thật
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Thời gian giữa các nhấn phím không đều</li>
                    <li>Tốc độ gõ thay đổi theo nội dung</li>
                    <li>Có lỗi gõ và sửa lỗi tự nhiên</li>
                    <li>
                      Thời gian suy nghĩ trước khi nhập thông tin phức tạp
                    </li>
                    <li>Biến thiên cao trong thời gian giữa các tương tác</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Mẫu thời gian bot</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Thời gian giữa các nhấn phím quá đều đặn</li>
                    <li>Tốc độ gõ không thay đổi hoặc thay đổi theo mẫu</li>
                    <li>Không có lỗi gõ hoặc sửa lỗi</li>
                    <li>
                      Không có thời gian suy nghĩ khi nhập thông tin phức tạp
                    </li>
                    <li>Biến thiên thấp trong thời gian giữa các tương tác</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Chỉ số phát hiện</h4>
                <p className="text-sm mb-2">
                  Hệ thống tính toán các chỉ số biến thiên thời gian (CV),
                  entropy, và so sánh với mẫu chuẩn để xác định tính tự nhiên
                  của tương tác.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Biến thiên thời gian (CV)
                    </p>
                    <p className="text-lg font-bold">Người dùng: &gt;0.3</p>
                    <p className="text-lg font-bold">Bot: &lt;0.1</p>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Entropy tương tác</p>
                    <p className="text-lg font-bold">Người dùng: &gt;4.5</p>
                    <p className="text-lg font-bold">Bot: &lt;2.0</p>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Độ chính xác phát hiện
                    </p>
                    <p className="text-lg font-bold">93.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scroll" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện mẫu cuộn trang bất thường
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích hành vi cuộn trang để phát hiện các mẫu không tự
                  nhiên thường thấy ở bot và script tự động.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Mẫu cuộn trang tự nhiên</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Tốc độ cuộn thay đổi khi đọc nội dung</li>
                    <li>Có các điểm dừng để đọc thông tin</li>
                    <li>Đôi khi cuộn ngược lại để xem lại thông tin</li>
                    <li>Tốc độ cuộn phụ thuộc vào độ phức tạp của nội dung</li>
                    <li>Có sự kết hợp giữa cuộn nhỏ và cuộn lớn</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Mẫu cuộn trang bất thường
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Tốc độ cuộn quá đều đặn hoặc quá nhanh</li>
                    <li>Không có điểm dừng để đọc nội dung</li>
                    <li>Cuộn thẳng từ đầu đến cuối trang</li>
                    <li>Tốc độ cuộn không thay đổi theo nội dung</li>
                    <li>Mẫu cuộn lặp lại chính xác giữa các phiên</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ngưỡng phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tốc độ cuộn đáng ngờ
                    </p>
                    <p className="text-lg font-bold">&gt;1000px/giây</p>
                    <Badge className="mt-2 bg-red-100 text-red-800">
                      Rủi ro cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Không có điểm dừng</p>
                    <p className="text-lg font-bold">0 điểm dừng</p>
                    <Badge className="mt-2 bg-amber-100 text-amber-800">
                      Rủi ro trung bình
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ đều đặn cuộn</p>
                    <p className="text-lg font-bold">CV &lt; 0.1</p>
                    <Badge className="mt-2 bg-amber-100 text-amber-800">
                      Rủi ro trung bình
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="honeypot" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Tỷ lệ tương tác với Honeypot Elements
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng các phần tử ẩn (không hiển thị với người dùng thật) để
                  phát hiện bot tự động tương tác với tất cả các phần tử trên
                  trang.
                </p>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">Cách thức hoạt động</h4>
                <p className="text-sm mb-4">
                  Hệ thống đặt các phần tử "honeypot" ẩn trong trang web (CSS:
                  display:none hoặc visibility:hidden). Người dùng thật không
                  thể nhìn thấy và tương tác với các phần tử này, trong khi bot
                  tự động thường sẽ tương tác với chúng.
                </p>
                <div className="bg-gray-100 p-3 rounded-md text-sm font-mono">
                  <p className="text-xs text-gray-500 mb-1">
                    Ví dụ mã HTML honeypot:
                  </p>
                  <code>{`<input type="text" name="website" style="display:none" />`}</code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Chỉ số phát hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Tương tác với phần tử honeypot:{" "}
                      <Badge className="ml-2 bg-red-100 text-red-800">
                        Bot
                      </Badge>
                    </li>
                    <li>
                      Điền thông tin vào trường ẩn:{" "}
                      <Badge className="ml-2 bg-red-100 text-red-800">
                        Bot
                      </Badge>
                    </li>
                    <li>
                      Click vào liên kết ẩn:{" "}
                      <Badge className="ml-2 bg-red-100 text-red-800">
                        Bot
                      </Badge>
                    </li>
                    <li>
                      Gửi form với dữ liệu trong trường ẩn:{" "}
                      <Badge className="ml-2 bg-red-100 text-red-800">
                        Bot
                      </Badge>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium">
                        Tỷ lệ phát hiện bot:
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1">92%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Tỷ lệ dương tính giả:
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div
                          className="bg-red-600 h-2.5 rounded-full"
                          style={{ width: "0.5%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-right mt-1">0.5%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Lưu ý triển khai</h4>
                    <p className="text-sm">
                      Các phần tử honeypot nên được thiết kế để không ảnh hưởng
                      đến trải nghiệm người dùng thật. Đảm bảo rằng các phần tử
                      này hoàn toàn ẩn với người dùng thông thường nhưng vẫn có
                      thể được truy cập bởi bot tự động.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button>Triển khai phân tích hành vi</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BehaviorAnalysis;
