import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Network,
  Database,
  Clock,
  Fingerprint,
  Users,
  BarChart,
  Search,
  AlertTriangle,
} from "lucide-react";

const OrganizedFraudAnalysis = () => {
  const [activeTab, setActiveTab] = React.useState("graph");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Network className="h-5 w-5 mr-2 text-orange-500" />
          Phân tích hành vi có tổ chức (Organized Fraud)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="graph"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="graph"
              className="flex items-center justify-center"
            >
              <Database className="h-4 w-4 mr-1" />
              Graph Database
            </TabsTrigger>
            <TabsTrigger
              value="cluster"
              className="flex items-center justify-center"
            >
              <Users className="h-4 w-4 mr-1" />
              Cluster Detection
            </TabsTrigger>
            <TabsTrigger
              value="temporal"
              className="flex items-center justify-center"
            >
              <Clock className="h-4 w-4 mr-1" />
              Temporal Patterns
            </TabsTrigger>
            <TabsTrigger
              value="fingerprint"
              className="flex items-center justify-center"
            >
              <Fingerprint className="h-4 w-4 mr-1" />
              Browser Fingerprint
            </TabsTrigger>
          </TabsList>

          <TabsContent value="graph" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Xây dựng graph database các phiên liên quan
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng cơ sở dữ liệu đồ thị để lưu trữ và phân tích mối quan hệ giữa các phiên truy cập, giúp phát hiện các mạng lưới gian lận có tổ chức.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Cấu trúc đồ thị</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Nodes:</span> Phiên truy cập, IP, thiết bị, tài khoản người dùng
                    </li>
                    <li>
                      <span className="font-medium">Edges:</span> Mối quan hệ giữa các entities (sử dụng chung IP, thiết bị tương tự, hành vi giống nhau)
                    </li>
                    <li>
                      <span className="font-medium">Properties:</span> Thời gian, địa điểm, hành vi, fingerprint, điểm đáng ngờ
                    </li>
                    <li>
                      <span className="font-medium">Relationships:</span> SHARES_IP, SIMILAR_BEHAVIOR, SAME_DEVICE, TEMPORAL_CORRELATION
                    </li>
                    <li>
                      <span className="font-medium">Weights:</span> Độ mạnh của mối quan hệ dựa trên mức độ tương đồng
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Công nghệ sử dụng</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Database:</span> Neo4j hoặc Amazon Neptune
                    </li>
                    <li>
                      <span className="font-medium">Query Language:</span> Cypher (Neo4j) hoặc Gremlin (Neptune)
                    </li>
                    <li>
                      <span className="font-medium">Visualization:</span> D3.js, Sigma.js hoặc Neo4j Bloom
                    </li>
                    <li>
                      <span className="font-medium">Algorithms:</span> PageRank, Community Detection, Centrality Measures
                    </li>
                    <li>
                      <span className="font-medium">Integration:</span> GraphQL API cho truy vấn và cập nhật dữ liệu
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ truy vấn Cypher</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`// Tìm các phiên có mối liên hệ với nhau thông qua IP hoặc fingerprint
MATCH (s1:Session)-[:SHARES_IP]->(ip:IPAddress)<-[:SHARES_IP]-(s2:Session)
WHERE s1.id <> s2.id
WITH s1, s2, COUNT(ip) AS ipOverlap

MATCH (s1)-[:HAS_FINGERPRINT]->(f:Fingerprint)<-[:HAS_FINGERPRINT]-(s2)
WITH s1, s2, ipOverlap, COUNT(f) AS fingerprintOverlap

WHERE ipOverlap > 0 OR fingerprintOverlap > 0
RETURN s1, s2, ipOverlap, fingerprintOverlap
ORDER BY ipOverlap + fingerprintOverlap DESC
LIMIT 100;

// Tìm các cụm phiên đáng ngờ (community detection)
CALL gds.graph.create(
  'suspiciousGraph',
  ['Session', 'IPAddress', 'Fingerprint'],
  {
    SHARES_IP: { orientation: 'UNDIRECTED' },
    HAS_FINGERPRINT: { orientation: 'UNDIRECTED' },
    SIMILAR_BEHAVIOR: { orientation: 'UNDIRECTED', properties: ['similarity'] }
  }
)

// Áp dụng thuật toán Louvain để phát hiện cộng đồng
CALL gds.louvain.stream('suspiciousGraph')
YIELD nodeId, communityId
WITH gds.util.asNode(nodeId) AS node, communityId
WHERE node:Session
RETURN communityId, COLLECT(node.id) AS sessions, COUNT(*) AS sessionCount
ORDER BY sessionCount DESC
LIMIT 10;`}</code>
                </pre>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biểu đồ mạng lưới gian lận</h4>
                <div className="relative w-full h-[300px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Cụm 1 - Fraud network lớn */}
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
                        className="absolute text-xs font-bold text-white"
                        style={{ top: "30%", left: "25%" }}
                      >
                        Cụm 1: 42 phiên
                      </div>

                      {/* Cụm 2 - Fraud network nhỏ hơn */}
                      <div
                        className="absolute rounded-full bg-orange-500 opacity-70"
                        style={{
                          top: "60%",
                          left: "60%",
                          width: "90px",
                          height: "90px",
                        }}
                      ></div>
                      <div
                        className="absolute text-xs font-bold text-white"
                        style={{ top: "60%", left: "60%" }}
                      >
                        Cụm 2: 28 phiên
                      </div>

                      {/* Cụm 3 - Fraud network nhỏ */}
                      <div
                        className="absolute rounded-full bg-yellow-500 opacity-70"
                        style={{
                          top: "40%",
                          left: "70%",
                          width: "70px",
                          height: "70px",
                        }}
                      ></div>
                      <div
                        className="absolute text-xs font-bold text-white"
                        style={{ top: "40%", left: "70%" }}
                      >
                        Cụm 3: 15 phiên
                      </div>

                      {/* Các điểm phiên riêng lẻ */}
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

                      {/* Kết nối giữa các phiên trong cụm 1 */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        style={{ zIndex: -1 }}
                      >
                        {Array.from({ length: 20 }).map((_, index) => {
                          const x1 = 25 + Math.random() * 10 - 5;
                          const y1 = 30 + Math.random() * 10 - 5;
                          const x2 = 25 + Math.random() * 10 - 5;
                          const y2 = 30 + Math.random() * 10 - 5;
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
                        {Array.from({ length: 15 }).map((_, index) => {
                          const x1 = 60 + Math.random() * 8 - 4;
                          const y1 = 60 + Math.random() * 8 - 4;
                          const x2 = 60 + Math.random() * 8 - 4;
                          const y2 = 60 + Math.random() * 8 - 4;
                          return (
                            <line
                              key={`c2-${index}`}
                              x1={`${x1}%`}
                              y1={`${y1}%`}
                              x2={`${x2}%`}
                              y2={`${y2}%`}
                              stroke="rgba(249, 115, 22, 0.5)"
                              strokeWidth="1"
                            />
                          );
                        })}

                        {/* Kết nối giữa các phiên trong cụm 3 */}
                        {Array.from({ length: 10 }).map((_, index) => {
                          const x1 = 70 + Math.random() * 6 - 3;
                          const y1 = 40 + Math.random() * 6 - 3;
                          const x2 = 70 + Math.random() * 6 - 3;
                          const y2 = 40 + Math.random() * 6 - 3;
                          return (
                            <line
                              key={`c3-${index}`}
                              x1={`${x1}%`}
                              y1={`${y1}%`}
                              x2={`${x2}%`}
                              y2={`${y2}%`}
                              stroke="rgba(234, 179, 8, 0.5)"
                              strokeWidth="1"
                            />
                          );
                        })}

                        {/* Kết nối giữa cụm 2 và cụm 3 */}
                        <line
                          x1="65%"
                          y1="55%"
                          x2="68%"
                          y2="45%"
                          stroke="rgba(234, 179, 8, 0.5)"
                          strokeWidth="1"
                          strokeDasharray="4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                      <span>Mạng lưới lớn</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
                      <span>Mạng lưới trung bình</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                      <span>Mạng lưới nhỏ</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                      <span>Phiên riêng lẻ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">96.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">1.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện mạng lưới</p>
                    <p className="text-lg font-bold">98.3%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Xuất sắc
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cluster" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện cluster hoạt động đồng thời từ nhiều IP
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng các thuật toán phân cụm (clustering) và phát hiện bất thường để xác định các nhóm IP hoạt động đồng thời với mẫu hành vi tương tự, dấu hiệu của mạng lưới gian lận có tổ chức.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Thuật toán phân cụm</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">DBSCAN:</span> Phát hiện cụm dựa trên mật độ, phù hợp với dữ liệu có hình dạng bất kỳ
                    </li>
                    <li>
                      <span className="font-medium">Hierarchical Clustering:</span> Xây dựng cây phân cấp các cụm, phát hiện cấu trúc lồng nhau
                    </li>
                    <li>
                      <span className="font-medium">Spectral Clustering:</span> Phân cụm dựa trên đồ thị tương tự, hiệu quả với dữ liệu phức tạp
                    </li>
                    <li>
                      <span className="font-medium">K-means:</span> Phân cụm dựa trên khoảng cách, nhanh và hiệu quả với dữ liệu lớn
                    </li>
                    <li>
                      <span className="font-medium">HDBSCAN:</span> Phiên bản cải tiến của DBSCAN, tự động xác định số lượng cụm
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Đặc trưng phân cụm</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Thời gian hoạt động:</span> Mẫu thời gian truy cập, khoảng cách giữa các hành động
                    </li>
                    <li>
                      <span className="font-medium">Địa lý:</span> Vị trí IP, subnet, nhà cung cấp dịch vụ internet (ISP)
                    </li>
                    <li>
                      <span className="font-medium">Hành vi:</span> Chuỗi hành động, tốc độ tương tác, mẫu điều hướng
                    </li>
                    <li>
                      <span className="font-medium">Thiết bị:</span> Thông tin trình duyệt, hệ điều hành, độ phân giải màn hình
                    </li>
                    <li>
                      <span className="font-medium">Fingerprint:</span> Canvas, WebGL, audio fingerprint, font fingerprint
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ mã phát hiện cluster</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`# Sử dụng DBSCAN để phát hiện cụm hoạt động đồng thời
import numpy as np
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler

# Chuẩn bị dữ liệu
def prepare_features(sessions):
    features = []
    for session in sessions:
        # Trích xuất đặc trưng thời gian, hành vi và thiết bị
        time_features = extract_time_features(session)
        behavior_features = extract_behavior_features(session)
        device_features = extract_device_features(session)
        
        # Kết hợp các đặc trưng
        session_features = np.concatenate([time_features, behavior_features, device_features])
        features.append(session_features)
    
    return np.array(features)

# Chuẩn hóa dữ liệu
X = prepare_features(sessions)
X_scaled = StandardScaler().fit_transform(X)

# Áp dụng DBSCAN để phát hiện cụm
dbscan = DBSCAN(eps=0.5, min_samples=5, metric='euclidean')
cluster_labels = dbscan.fit_predict(X_scaled)

# Phân tích kết quả
num_clusters = len(set(cluster_labels)) - (1 if -1 in cluster_labels else 0)
print(f"Số lượng cụm phát hiện được: {num_clusters}")

# Xác định các cụm đáng ngờ
suspicious_clusters = []
for cluster_id in range(num_clusters):
    if cluster_id == -1:  # Bỏ qua noise points
        continue
        
    cluster_sessions = [sessions[i] for i in range(len(sessions)) if cluster_labels[i] == cluster_id]
    
    # Kiểm tra các điều kiện đáng ngờ
    if is_suspicious_cluster(cluster_sessions):
        suspicious_clusters.append({
            'cluster_id': cluster_id,
            'sessions': cluster_sessions,
            'size': len(cluster_sessions),
            'ips': get_unique_ips(cluster_sessions),
            'similarity_score': calculate_similarity(cluster_sessions),
            'temporal_pattern': analyze_temporal_pattern(cluster_sessions)
        })

# Sắp xếp theo mức độ đáng ngờ
suspicious_clusters.sort(key=lambda x: x['similarity_score'], reverse=True)`}</code>
                </pre>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân tích cụm đáng ngờ</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm #1: Farm click chuyên nghiệp</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro rất cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      42 phiên từ 18 IP khác nhau nhưng có mẫu hành vi gần như giống hệt nhau. Các phiên hoạt động đồng thời với khoảng cách thời gian rất đều đặn giữa các hành động. Tất cả các IP đều thuộc cùng một subnet /24 của nhà mạng VNPT.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Độ tương đồng nội bộ cụm: 98.7%</p>
                      <p>Thời gian phát hiện: 15/06/2023 14:23:45</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Cụm #2: Mạng lưới phân tán</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      28 phiên từ 28 IP khác nhau, phân bố trên nhiều nhà mạng khác nhau nhưng có cùng browser fingerprint. Các phiên có mẫu hành vi tương tự nhưng được thực hiện với thời gian lệch nhau để tránh phát hiện.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Độ tương đồng nội bộ cụm: 92.3%</p>
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
                    <p className="text-lg font-bold">94.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
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
                    <p className="text-lg font-bold">97.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="temporal" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích temporal patterns trong các phiên đáng ngờ
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích các mẫu thời gian (temporal patterns) trong các phiên đáng ngờ để phát hiện các hoạt động có tổ chức, dựa trên sự đồng bộ và tính lặp lại của các sự kiện theo thời gian.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Các mẫu thời gian phân tích</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Đồng bộ hóa:</span> Nhiều phiên thực hiện cùng một hành động trong khoảng thời gian ngắn
                    </li>
                    <li>
                      <span className="font-medium">Tuần tự có trễ:</span> Chuỗi hành động giống nhau được thực hiện với độ trễ cố định
                    </li>
                    <li>
                      <span className="font-medium">Chu kỳ:</span> Các hoạt động lặp lại theo chu kỳ thời gian nhất định
                    </li>
                    <li>
                      <span className="font-medium">Burst patterns:</span> Đột biến hoạt động trong khoảng thời gian ngắn, sau đó im lặng
                    </li>
                    <li>
                      <span className="font-medium">Khoảng cách đều đặn:</span> Thời gian giữa các hành động quá đều đặn, không tự nhiên
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phân tích</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Time Series Analysis:</span> Phân tích chuỗi thời gian của các sự kiện
                    </li>
                    <li>
                      <span className="font-medium">Fourier Transform:</span> Phát hiện chu kỳ và tần suất trong dữ liệu thời gian
                    </li>
                    <li>
                      <span className="font-medium">Correlation Analysis:</span> Đo lường tương quan thời gian giữa các phiên
                    </li>
                    <li>
                      <span className="font-medium">Change Point Detection:</span> Phát hiện điểm thay đổi đột ngột trong mẫu thời gian
                    </li>
                    <li>
                      <span className="font-medium">Entropy Analysis:</span> Đo lường tính ngẫu nhiên của các sự kiện theo thời gian
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biểu đồ phân tích thời gian</h4>
                <div className="relative w-full h-[250px] border border-gray-200 rounded-md bg-white overflow-hidden p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Trục thời gian */}
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300"></div>
                      <div className="absolute bottom-0 left-0 h-2 w-[1px] bg-gray-300"></div>
                      <div className="absolute bottom-0 right-0 h-2 w-[1px] bg-gray-300"></div>
                      
                      {/* Nhãn thời gian */}
                      <div className="absolute bottom-4 left-0 text-xs text-gray-500">00:00</div>
                      <div className="absolute bottom-4 left-1/4 text-xs text-gray-500">06:00</div>
                      <div className="absolute bottom-4 left-2/4 text-xs text-gray-500">12:00</div>
                      <div className="absolute bottom-4 left-3/4 text-xs text-gray-500">18:00</div>
                      <div className="absolute bottom-4 right-0 text-xs text-gray-500">24:00</div>
                      
                      {/* Mẫu thời gian của phiên bình thường */}
                      <div className="absolute left-0 right-0 bottom-10 h-20">
                        {Array.from({ length: 50 }).map((_, index) => {
                          const left = Math.random() * 100;
                          const height = Math.random() * 15 + 5;
                          return (
                            <div
                              key={`normal-${index}`}
                              className="absolute bottom-0 w-[2px] bg-blue-400"
                              style={{
                                left: `${left}%`,
                                height: `${height}px`,
                              }}
                            ></div>
                          );
                        })}
                      </div>
                      
                      {/* Mẫu thời gian của phiên đáng ngờ - Cụm 1 */}
                      <div className="absolute left-[10%] right-[70%] bottom-40 h-20">
                        {Array.from({ length: 20 }).map((_, index) => {
                          // Tạo mẫu đều đặn cho cụm 1
                          const left = 10 + (index * 1);
                          const height = 15 + (Math.random() * 2);
                          return (
                            <div
                              key={`sus1-${index}`}
                              className="absolute bottom-0 w-[2px] bg-red-500"
                              style={{
                                left: `${left}%`,
                                height: `${height}px`,
                              }}
                            ></div>
                          );
                        })}
                      </div>
                      
                      {/* Mẫu thời gian của phiên đáng ngờ - Cụm 2 */}
                      <div className="absolute left-[50%] right-[30%] bottom-40 h-20">
                        {Array.from({ length: 15 }).map((_, index) => {
                          // Tạo mẫu burst cho cụm 2
                          const left = 50 + (index * 1.3);
                          const height = 12 + (Math.random() * 2);
                          return (
                            <div
                              key={`sus2-${index}`}
                              className="absolute bottom-0 w-[2px] bg-orange-500"
                              style={{
                                left: `${left}%`,
                                height: `${height}px`,
                              }}
                            ></div>
                          );
                        })}
                      </div>
                      
                      {/* Chú thích */}
                      <div className="absolute top-2 left-[10%] text-xs font-medium text-red-500">
                        Cụm 1: Mẫu đều đặn
                      </div>
                      <div className="absolute top-2 left-[50%] text-xs font-medium text-orange-500">
                        Cụm 2: Mẫu burst
                      </div>
                      <div className="absolute top-[60%] left-[40%] text-xs font-medium text-blue-500">
                        Phiên bình thường: Mẫu ngẫu nhiên
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ phát hiện thực tế</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Mẫu đồng bộ hóa</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 42 phiên thực hiện cùng một chuỗi hành động (truy cập trang chủ → xem sản phẩm → thêm vào giỏ hàng → thanh toán) trong khoảng thời gian 5 phút. Khoảng cách thời gian giữa các bước trong mỗi phiên gần như giống hệt nhau.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Độ tương đồng thời gian: 96.8%</p>
                      <p>Entropy thấp bất thường: 0.12 (bình thường > 0.8)</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Mẫu tuần tự có trễ</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 28 phiên thực hiện cùng một chuỗi hành động nhưng với độ trễ cố định 30 giây giữa các phiên. Mẫu này cho thấy có sự điều phối để tránh phát hiện đồng thời nhưng vẫn duy trì tính tự động.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Độ trễ trung bình: 30.2 giây</p>
                      <p>Độ lệch chuẩn của độ trễ: 0.8 giây (quá nhỏ)</p>
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
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">1.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện đồng bộ</p>
                    <p className="text-lg font-bold">98.7%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fingerprint" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện browser fingerprint tương tự trên nhiều IP
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích và so sánh browser fingerprint giữa các phiên từ các IP khác nhau để phát hiện các trường hợp một thiết bị hoặc script được sử dụng để tạo nhiều phiên giả mạo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Các loại fingerprint thu thập</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Canvas Fingerprint:</span> Dựa trên cách trình duyệt render đồ họa 2D
                    </li>
                    <li>
                      <span className="font-medium">WebGL Fingerprint:</span> Dựa trên thông tin GPU và cách render đồ họa 3D
                    </li>
                    <li>
                      <span className="font-medium">Audio Fingerprint:</span> Dựa trên cách xử lý âm thanh của trình duyệt
                    </li>
                    <li>
                      <span className="font-medium">Font Fingerprint:</span> Dựa trên các font được cài đặt và cách hiển thị
                    </li>
                    <li>
                      <span className="font-medium">Navigator Properties:</span> Thông tin về trình duyệt, hệ điều hành, plugins
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Phương pháp phát hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Locality-Sensitive Hashing:</span> Tìm kiếm nhanh các fingerprint tương tự
                    </li>
                    <li>
                      <span className="font-medium">Similarity Metrics:</span> Jaccard, Cosine, Hamming distance để đo lường độ tương đồng
                    </li>
                    <li>
                      <span className="font-medium">Clustering:</span> Nhóm các fingerprint tương tự thành các cụm
                    </li>
                    <li>
                      <span className="font-medium">Anomaly Detection:</span> Phát hiện các mẫu bất thường trong phân phối fingerprint
                    </li>
                    <li>
                      <span className="font-medium">Cross-IP Analysis:</span> Phân tích sự xuất hiện của cùng một fingerprint trên nhiều IP
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ mã phát hiện</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`// Phát hiện fingerprint tương tự trên nhiều IP
const detectSimilarFingerprints = async () => {
  // Lấy dữ liệu phiên trong khoảng thời gian
  const sessions = await db.sessions.find({
    timestamp: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
  }).toArray();
  
  // Nhóm theo fingerprint
  const fingerprintGroups = {};
  sessions.forEach(session => {
    const { canvasHash, webglHash, audioHash, fontList, navigatorProps } = session.fingerprint;
    
    // Tạo composite fingerprint
    const compositeFingerprint = createCompositeFingerprint(session.fingerprint);
    
    // Thêm vào nhóm
    if (!fingerprintGroups[compositeFingerprint]) {
      fingerprintGroups[compositeFingerprint] = [];
    }
    fingerprintGroups[compositeFingerprint].push(session);
  });
  
  // Phát hiện các nhóm đáng ngờ
  const suspiciousGroups = [];
  for (const [fingerprint, sessions] of Object.entries(fingerprintGroups)) {
    // Kiểm tra số lượng IP khác nhau
    const uniqueIPs = new Set(sessions.map(s => s.ipAddress));
    
    if (uniqueIPs.size >= 3 && sessions.length >= 10) {
      // Tính toán các chỉ số đáng ngờ khác
      const timeSpan = getTimeSpan(sessions);
      const behaviorSimilarity = calculateBehaviorSimilarity(sessions);
      const geographicDiversity = calculateGeographicDiversity(sessions);
      
      // Tính điểm đáng ngờ tổng hợp
      const suspiciousScore = calculateSuspiciousScore(
        uniqueIPs.size, sessions.length, timeSpan, behaviorSimilarity, geographicDiversity
      );
      
      if (suspiciousScore > THRESHOLD) {
        suspiciousGroups.push({
          fingerprint,
          sessions,
          uniqueIPs: Array.from(uniqueIPs),
          ipCount: uniqueIPs.size,
          sessionCount: sessions.length,
          timeSpan,
          behaviorSimilarity,
          geographicDiversity,
          suspiciousScore
        });
      }
    }
  }
  
  return suspiciousGroups.sort((a, b) => b.suspiciousScore - a.suspiciousScore);
};

// Tạo composite fingerprint từ các thành phần
function createCompositeFingerprint(fingerprint) {
  const { canvasHash, webglHash, audioHash, fontList, navigatorProps } = fingerprint;
  
  // Kết hợp các thành phần với trọng số khác nhau
  return hashFunction([
    canvasHash, 
    webglHash, 
    audioHash, 
    JSON.stringify(navigatorProps.sortedProps)
  ].join('|'));
}`}</code>
                </pre>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân tích fingerprint đáng ngờ</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Fingerprint #1: Script tự động</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro rất cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện cùng một fingerprint xuất hiện trên 42 IP khác nhau trong vòng 3 giờ. Fingerprint này có đặc điểm của trình duyệt headless Chrome được điều khiển bởi Puppeteer, với WebGL fingerprint giống hệt nhau và thiếu các biến thể tự nhiên.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Số lượng IP: 42</p>
                      <p>Độ tương đồng fingerprint: 99.8%</p>
                      <p>Thời gian phát hiện: 15/06/2023 14:23:45</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Fingerprint #2: Farm thiết bị thật</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">
                      Phát hiện 28 fingerprint rất tương tự nhau (nhưng không hoàn toàn giống hệt) xuất hiện trên 28 IP khác nhau. Các fingerprint này có đặc điểm của thiết bị Android giống nhau (cùng model Samsung Galaxy A10) nhưng có sự khác biệt nhỏ, cho thấy đây là farm thiết bị thật.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>Số lượng IP: 28</p>
                      <p>Độ tương đồng fingerprint: 92.5%</p>
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
                    <p className="text-lg font-bold">97.2%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Tỷ lệ dương tính giả</p>
                    <p className="text-lg font-bold">0.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện script</p>
                    <p className="text-lg font-bold">99.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Xuất sắc
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
                Hệ thống phân tích hành vi có tổ chức được triển khai dưới dạng microservice riêng biệt, xử lý dữ liệu từ các nguồn khác nhau và cung cấp API để truy vấn kết quả phân tích. Dữ liệu được lưu trữ trong cơ sở dữ liệu đồ thị để tối ưu hóa việc phân tích mối quan hệ.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  Xem cấu trúc dữ liệu
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Truy vấn mạng lưới
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Hiệu suất tổng thể</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Độ chính xác phát hiện:</span>
                    <span className="font-bold">96.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "96.5%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tỷ lệ dương tính giả:</span>
                    <span className="font-bold">1.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "1.2%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Thời gian phân tích:</span>
                    <span className="font-bold">~5 phút</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "50%" }}
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
            Triển khai phân tích hành vi có tổ chức
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizedFraudAnalysis;
