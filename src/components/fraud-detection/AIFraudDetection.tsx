import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Activity,
  AlertTriangle,
  BarChart,
  Zap,
  Network,
} from "lucide-react";

const AIFraudDetection = () => {
  const [activeTab, setActiveTab] = React.useState("classification");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-purple-500" />
          Trí tuệ nhân tạo cho việc phát hiện bot
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="classification"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="classification"
              className="flex items-center justify-center"
            >
              <Brain className="h-4 w-4 mr-1" />
              Phân loại ML
            </TabsTrigger>
            <TabsTrigger
              value="anomaly"
              className="flex items-center justify-center"
            >
              <AlertTriangle className="h-4 w-4 mr-1" />
              Anomaly Detection
            </TabsTrigger>
            <TabsTrigger
              value="collective"
              className="flex items-center justify-center"
            >
              <Network className="h-4 w-4 mr-1" />
              Collective Anomalies
            </TabsTrigger>
            <TabsTrigger
              value="lstm"
              className="flex items-center justify-center"
            >
              <Activity className="h-4 w-4 mr-1" />
              LSTM Networks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classification" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Mô hình ML phân loại hành vi người dùng
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng mô hình học máy để phân loại hành vi người dùng thật
                  và giả dựa trên các đặc trưng hành vi và tương tác.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Đặc trưng đầu vào</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Mẫu di chuyển chuột (tốc độ, gia tốc, quỹ đạo)</li>
                    <li>
                      Thời gian giữa các lần nhấn phím (keystroke dynamics)
                    </li>
                    <li>Mẫu cuộn trang (tốc độ, điểm dừng, hướng)</li>
                    <li>Thời gian dừng trên trang và các phần tử</li>
                    <li>Chuỗi tương tác với các phần tử trên trang</li>
                    <li>Tỷ lệ lỗi và sửa lỗi khi nhập liệu</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Kiến trúc mô hình</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Mô hình chính:</span> Random
                      Forest Classifier
                    </li>
                    <li>
                      <span className="font-medium">Mô hình hỗ trợ:</span>{" "}
                      XGBoost và LightGBM
                    </li>
                    <li>
                      <span className="font-medium">Ensemble:</span> Kết hợp dự
                      đoán từ nhiều mô hình
                    </li>
                    <li>
                      <span className="font-medium">Tiền xử lý:</span> Chuẩn hóa
                      đặc trưng và giảm chiều dữ liệu
                    </li>
                    <li>
                      <span className="font-medium">Cập nhật:</span> Học tăng
                      cường (online learning)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu suất mô hình</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">97.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">1.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">F1-Score</p>
                    <p className="text-lg font-bold">0.968</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Xuất sắc
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phân loại</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Người dùng thật</p>
                      <Badge className="bg-green-100 text-green-800">
                        98.2% tin cậy
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Đặc trưng: Quỹ đạo chuột không đều, thời gian dừng tự
                      nhiên, có lỗi gõ và sửa lỗi, tốc độ cuộn trang thay đổi
                      theo nội dung.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Bot tự động</p>
                      <Badge className="bg-red-100 text-red-800">
                        99.5% tin cậy
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Đặc trưng: Quỹ đạo chuột quá thẳng, không có thời gian
                      dừng, không có lỗi gõ, tốc độ cuộn trang đều đặn không phụ
                      thuộc nội dung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="anomaly" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Thuật toán Anomaly Detection cho mẫu tương tác
                </h3>
                <p className="text-gray-700 mb-4">
                  Phát hiện các mẫu tương tác bất thường bằng cách sử dụng các
                  thuật toán phát hiện điểm dị thường (anomaly detection) tiên
                  tiến.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Thuật toán sử dụng</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Isolation Forest:</span>{" "}
                      Phát hiện điểm dị thường dựa trên độ phức tạp phân tách
                    </li>
                    <li>
                      <span className="font-medium">One-Class SVM:</span> Học
                      mẫu hành vi bình thường và phát hiện sai lệch
                    </li>
                    <li>
                      <span className="font-medium">Local Outlier Factor:</span>
                      Phát hiện điểm dị thường dựa trên mật độ cục bộ
                    </li>
                    <li>
                      <span className="font-medium">Autoencoder:</span> Mạng
                      neural học biểu diễn nén và phát hiện lỗi tái tạo
                    </li>
                    <li>
                      <span className="font-medium">
                        Gaussian Mixture Models:
                      </span>
                      Mô hình hóa phân phối dữ liệu bình thường
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Loại bất thường phát hiện
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Point Anomalies:</span> Các
                      tương tác đơn lẻ bất thường
                    </li>
                    <li>
                      <span className="font-medium">Contextual Anomalies:</span>
                      Bất thường trong ngữ cảnh cụ thể
                    </li>
                    <li>
                      <span className="font-medium">Seasonal Anomalies:</span>
                      Bất thường theo mẫu thời gian
                    </li>
                    <li>
                      <span className="font-medium">Behavioral Anomalies:</span>
                      Thay đổi đột ngột trong hành vi người dùng
                    </li>
                    <li>
                      <span className="font-medium">Velocity Anomalies:</span>
                      Tốc độ thay đổi bất thường trong dữ liệu
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ mã phát hiện</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`# Sử dụng Isolation Forest để phát hiện anomaly
from sklearn.ensemble import IsolationForest
import numpy as np

# Dữ liệu đặc trưng tương tác người dùng
X = extract_user_interaction_features(user_sessions)

# Huấn luyện mô hình
model = IsolationForest(n_estimators=100, contamination=0.05, random_state=42)
model.fit(X)

# Dự đoán anomaly score (-1 cho anomaly, 1 cho normal)
predictions = model.predict(X)
anomaly_scores = model.decision_function(X)

# Xác định ngưỡng phát hiện động
threshold = np.percentile(anomaly_scores, 5)  # 5% dữ liệu bất thường nhất

# Phát hiện các phiên bất thường
anomaly_sessions = []
for i, score in enumerate(anomaly_scores):
    if score < threshold:
        anomaly_sessions.append({
            'session_id': user_sessions[i]['id'],
            'anomaly_score': score,
            'features': X[i],
            'confidence': min(100, 100 * (threshold - score) / threshold)
        })

# Phân tích và phân loại loại bất thường
classify_anomaly_types(anomaly_sessions)`}</code>
                </pre>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">95.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">2.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Thời gian phát hiện</p>
                    <p className="text-lg font-bold">~180ms</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Nhanh
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="collective" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện Collective Anomalies trong luồng truy cập
                </h3>
                <p className="text-gray-700 mb-4">
                  Phát hiện các mẫu bất thường tập thể trong luồng truy cập, khi
                  một nhóm các sự kiện hoặc hành vi cùng nhau tạo thành một mẫu
                  bất thường mặc dù riêng lẻ chúng có thể bình thường.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phát hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">
                        Graph-based Detection:
                      </span>
                      Xây dựng đồ thị kết nối giữa các phiên và phát hiện cụm
                      bất thường
                    </li>
                    <li>
                      <span className="font-medium">Sequence Mining:</span> Phát
                      hiện chuỗi sự kiện bất thường trong luồng truy cập
                    </li>
                    <li>
                      <span className="font-medium">Clustering Anomalies:</span>
                      Nhóm các phiên có hành vi tương tự và phát hiện cụm bất
                      thường
                    </li>
                    <li>
                      <span className="font-medium">Time Series Analysis:</span>
                      Phân tích chuỗi thời gian của các sự kiện tập thể
                    </li>
                    <li>
                      <span className="font-medium">Correlation Analysis:</span>
                      Phát hiện tương quan bất thường giữa các phiên
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Mẫu tập thể phát hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Coordinated Attacks:</span>
                      Nhiều IP cùng thực hiện hành vi tương tự
                    </li>
                    <li>
                      <span className="font-medium">Traffic Bursts:</span> Đột
                      biến lưu lượng bất thường từ nhiều nguồn
                    </li>
                    <li>
                      <span className="font-medium">Session Patterns:</span> Mẫu
                      phiên bất thường xuất hiện đồng thời
                    </li>
                    <li>
                      <span className="font-medium">Distributed Bots:</span> Bot
                      phân tán từ nhiều IP khác nhau
                    </li>
                    <li>
                      <span className="font-medium">Temporal Anomalies:</span>
                      Bất thường trong phân phối thời gian của các sự kiện
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biểu đồ phát hiện</h4>
                <div className="relative w-full h-[300px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Cụm 1 - Bất thường cao */}
                      <div
                        className="absolute rounded-full bg-red-500 opacity-70"
                        style={{
                          top: "30%",
                          left: "25%",
                          width: "120px",
                          height: "120px",
                        }}
                      ></div>
                      <div
                        className="absolute text-xs font-bold"
                        style={{ top: "30%", left: "25%" }}
                      >
                        Cụm 1: 38 phiên
                      </div>

                      {/* Cụm 2 - Bất thường trung bình */}
                      <div
                        className="absolute rounded-full bg-amber-500 opacity-70"
                        style={{
                          top: "60%",
                          left: "60%",
                          width: "100px",
                          height: "100px",
                        }}
                      ></div>
                      <div
                        className="absolute text-xs font-bold"
                        style={{ top: "60%", left: "60%" }}
                      >
                        Cụm 2: 24 phiên
                      </div>

                      {/* Các điểm phiên riêng lẻ */}
                      {Array.from({ length: 40 }).map((_, index) => {
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

                      {/* Kết nối giữa các phiên trong cụm 1 */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        style={{ zIndex: -1 }}
                      >
                        {Array.from({ length: 15 }).map((_, index) => {
                          const x1 = 25 + Math.random() * 10;
                          const y1 = 30 + Math.random() * 10;
                          const x2 = 25 + Math.random() * 10;
                          const y2 = 30 + Math.random() * 10;
                          return (
                            <line
                              key={index}
                              x1={`${x1}%`}
                              y1={`${y1}%`}
                              x2={`${x2}%`}
                              y2={`${y2}%`}
                              stroke="rgba(239, 68, 68, 0.5)"
                              strokeWidth="1"
                            />
                          );
                        })}

                        {/* Kết nối giữa các phiên trong cụm 2 */}
                        {Array.from({ length: 10 }).map((_, index) => {
                          const x1 = 60 + Math.random() * 8;
                          const y1 = 60 + Math.random() * 8;
                          const x2 = 60 + Math.random() * 8;
                          const y2 = 60 + Math.random() * 8;
                          return (
                            <line
                              key={`c2-${index}`}
                              x1={`${x1}%`}
                              y1={`${y1}%`}
                              x2={`${x2}%`}
                              y2={`${y2}%`}
                              stroke="rgba(245, 158, 11, 0.5)"
                              strokeWidth="1"
                            />
                          );
                        })}
                      </svg>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                      <span>Cụm bất thường cao</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
                      <span>Cụm bất thường trung bình</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                      <span>Phiên riêng lẻ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân tích cụm bất thường</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm 1: Tấn công phối hợp</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      38 phiên từ các IP khác nhau thực hiện cùng một chuỗi hành
                      động trong khoảng thời gian ngắn. Các phiên có mẫu thời
                      gian tương tự và đồng bộ cao.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Độ tin cậy phát hiện: 98.7%</p>
                      <p>Thời gian phát hiện: 15/06/2023 14:23:45</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm 2: Bot phân tán</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      24 phiên có hành vi tương tự nhưng không hoàn toàn đồng
                      bộ. Các phiên có đặc điểm của bot nhưng được phân tán để
                      tránh phát hiện đơn lẻ.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Độ tin cậy phát hiện: 87.5%</p>
                      <p>Thời gian phát hiện: 15/06/2023 16:45:12</p>
                    </div>
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
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">3.1%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện tấn công</p>
                    <p className="text-lg font-bold">98.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lstm" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Sử dụng LSTM Networks để phân tích chuỗi hành vi
                </h3>
                <p className="text-gray-700 mb-4">
                  Mạng neural LSTM (Long Short-Term Memory) được sử dụng để phân
                  tích chuỗi hành vi người dùng theo thời gian, phát hiện các
                  mẫu bất thường và dự đoán hành vi tiếp theo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Kiến trúc mạng LSTM</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Input Layer:</span> Chuỗi
                      hành vi người dùng theo thời gian
                    </li>
                    <li>
                      <span className="font-medium">LSTM Layers:</span> 2-3 lớp
                      LSTM với 128-256 units mỗi lớp
                    </li>
                    <li>
                      <span className="font-medium">Dropout:</span> 0.2-0.3 để
                      tránh overfitting
                    </li>
                    <li>
                      <span className="font-medium">Dense Layers:</span> Các lớp
                      kết nối đầy đủ để xử lý đặc trưng
                    </li>
                    <li>
                      <span className="font-medium">Output Layer:</span> Dự đoán
                      hành vi tiếp theo hoặc phân loại bất thường
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Ứng dụng của LSTM</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Sequence Prediction:</span>
                      Dự đoán hành vi tiếp theo dựa trên chuỗi trước đó
                    </li>
                    <li>
                      <span className="font-medium">Anomaly Detection:</span>
                      Phát hiện chuỗi hành vi bất thường
                    </li>
                    <li>
                      <span className="font-medium">User Profiling:</span> Xây
                      dựng hồ sơ hành vi người dùng theo thời gian
                    </li>
                    <li>
                      <span className="font-medium">
                        Session Classification:
                      </span>
                      Phân loại phiên người dùng thật/bot
                    </li>
                    <li>
                      <span className="font-medium">Temporal Patterns:</span>
                      Phát hiện mẫu thời gian trong hành vi người dùng
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ mã LSTM</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`# Xây dựng mô hình LSTM cho phân tích chuỗi hành vi
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

# Chuẩn bị dữ liệu chuỗi hành vi
X_train, y_train = prepare_sequence_data(user_sessions, seq_length=20)

# Xây dựng mô hình LSTM
model = Sequential([
    LSTM(128, return_sequences=True, input_shape=(seq_length, n_features)),
    Dropout(0.2),
    LSTM(128, return_sequences=False),
    Dropout(0.2),
    Dense(64, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Biên dịch mô hình
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Huấn luyện mô hình
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.2,
    callbacks=[tf.keras.callbacks.EarlyStopping(patience=5)]
)

# Phát hiện bất thường dựa trên dự đoán
def detect_anomalies(model, sessions, threshold=0.8):
    X_test = prepare_test_sequences(sessions)
    predictions = model.predict(X_test)
    
    anomalies = []
    for i, pred in enumerate(predictions):
        if pred < threshold:  # Ngưỡng xác định bất thường
            anomalies.append({
                'session_id': sessions[i]['id'],
                'confidence': (1 - pred) * 100,
                'sequence': sessions[i]['events']
            })
    
    return anomalies`}</code>
                </pre>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">96.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">1.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Phát hiện chuỗi bất thường
                    </p>
                    <p className="text-lg font-bold">97.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Xuất sắc
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Chuỗi hành vi bất thường</p>
                      <Badge className="bg-red-100 text-red-800">
                        99.2% tin cậy
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện chuỗi hành vi bất thường: Người dùng truy cập
                      nhiều trang trong thời gian cực ngắn, không theo mẫu điều
                      hướng tự nhiên, và thực hiện các hành động theo trình tự
                      cố định không phụ thuộc nội dung.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Dự đoán hành vi tiếp theo</p>
                      <Badge className="bg-green-100 text-green-800">
                        95.7% tin cậy
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Mô hình LSTM dự đoán chính xác hành vi tiếp theo của người
                      dùng thật dựa trên chuỗi hành vi trước đó, trong khi bot
                      thường có hành vi không khớp với dự đoán (độ lệch cao).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Tích hợp AI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Quy trình triển khai</h4>
              <p className="text-sm mb-4">
                Các mô hình AI được triển khai dưới dạng microservices, xử lý dữ
                liệu theo thời gian thực và cung cấp kết quả phân tích thông qua
                API. Hệ thống sử dụng kiến trúc pipeline để xử lý dữ liệu từ thu
                thập đến phân tích và cảnh báo.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Brain className="h-4 w-4 mr-2" />
                  Xem chi tiết triển khai
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
                    <span className="text-sm">Độ chính xác tổng thể:</span>
                    <span className="font-bold">96.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "96.7%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tỷ lệ dương tính giả:</span>
                    <span className="font-bold">1.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "1.5%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Thời gian phản hồi:</span>
                    <span className="font-bold">~250ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="flex items-center">
            <Brain className="h-4 w-4 mr-2" />
            Triển khai AI phát hiện bot
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIFraudDetection;
