import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, MousePointer, LineChart, ArrowRight } from "lucide-react";

const MouseTrajectoryModel = () => {
  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-blue-500" />
          Mô hình hóa quỹ đạo chuột (Machine Learning)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kiến trúc mô hình</h3>
            <p className="text-gray-700">
              Mô hình sử dụng mạng nơ-ron tích chập (CNN) kết hợp với LSTM để
              phân tích chuỗi thời gian của quỹ đạo chuột. Mô hình được huấn
              luyện trên tập dữ liệu gồm hơn 50,000 mẫu quỹ đạo chuột từ người
              dùng thật và bot mô phỏng.
            </p>

            <div className="border rounded-md p-4 bg-blue-50">
              <h4 className="font-medium mb-2">Đặc trưng đầu vào</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Tọa độ (x, y) của con trỏ chuột theo thời gian</li>
                <li>Vận tốc và gia tốc tại mỗi điểm</li>
                <li>Góc chuyển động giữa các điểm liên tiếp</li>
                <li>Thời gian dừng tại mỗi vị trí</li>
                <li>Entropy của chuyển động</li>
                <li>Độ cong của quỹ đạo</li>
              </ul>
            </div>

            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Các lớp mô hình</h4>
              <div className="text-sm space-y-2">
                <div className="flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1 text-blue-500" />
                  <span>
                    <strong>Lớp tiền xử lý:</strong> Chuẩn hóa dữ liệu, loại bỏ
                    nhiễu
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1 text-blue-500" />
                  <span>
                    <strong>Lớp CNN:</strong> Trích xuất đặc trưng không gian từ
                    quỹ đạo
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1 text-blue-500" />
                  <span>
                    <strong>Lớp LSTM:</strong> Phân tích chuỗi thời gian và mẫu
                    tuần tự
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1 text-blue-500" />
                  <span>
                    <strong>Lớp kết nối đầy đủ:</strong> Tích hợp đặc trưng và
                    phân loại
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-3 w-3 mr-1 text-blue-500" />
                  <span>
                    <strong>Lớp đầu ra:</strong> Xác suất phân loại người
                    dùng/bot
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hiệu suất mô hình</h3>

            <div className="border rounded-md p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">Độ chính xác tổng thể</h4>
                <Badge className="bg-green-100 text-green-800">96.8%</Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "96.8%" }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">Độ nhạy (Recall)</h4>
                <div className="text-3xl font-bold text-blue-600">94.2%</div>
                <p className="text-xs text-gray-500 mt-1">
                  Khả năng phát hiện bot thực sự
                </p>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">Độ đặc hiệu</h4>
                <div className="text-3xl font-bold text-purple-600">97.5%</div>
                <p className="text-xs text-gray-500 mt-1">
                  Khả năng nhận diện người dùng thật
                </p>
              </div>
            </div>

            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Thời gian phản hồi</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">Thời gian xử lý trung bình:</span>
                <span className="font-bold">~150ms</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm">Thời gian phát hiện bot:</span>
                <span className="font-bold">~200ms</span>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-amber-50">
              <h4 className="font-medium mb-2">Khả năng thích ứng</h4>
              <p className="text-sm">
                Mô hình được cập nhật liên tục với dữ liệu mới, sử dụng học tăng
                cường để thích ứng với các kỹ thuật bot mới. Hệ thống tự động
                điều chỉnh ngưỡng phát hiện dựa trên phản hồi từ người dùng.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Quy trình triển khai</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-md p-4 bg-blue-50">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="font-medium">Thu thập dữ liệu</h4>
              </div>
              <p className="text-sm">
                JavaScript theo dõi chuyển động chuột trên trang web, ghi lại
                tọa độ, thời gian và sự kiện tương tác.
              </p>
            </div>

            <div className="border rounded-md p-4 bg-blue-50">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="font-medium">Xử lý và phân tích</h4>
              </div>
              <p className="text-sm">
                Dữ liệu được tiền xử lý, trích xuất đặc trưng và đưa vào mô hình
                ML để phân loại.
              </p>
            </div>

            <div className="border rounded-md p-4 bg-blue-50">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="font-medium">Phản hồi và hành động</h4>
              </div>
              <p className="text-sm">
                Kết quả phân loại được sử dụng để đánh dấu hoạt động đáng ngờ
                hoặc chặn bot tự động.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="flex items-center">
            <MousePointer className="h-4 w-4 mr-2" />
            Triển khai mô hình quỹ đạo chuột
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MouseTrajectoryModel;
