import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Wifi,
  Map,
  BarChart,
  Facebook,
  Youtube,
  Factory,
  Cpu,
} from "lucide-react";

const TrafficSourceAnalysis = () => {
  const [activeTab, setActiveTab] = React.useState("sources");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Globe className="h-5 w-5 mr-2 text-blue-500" />
          Phân tích nguồn traffic Việt Nam
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="sources"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="sources"
              className="flex items-center justify-center"
            >
              <BarChart className="h-4 w-4 mr-1" />
              Nguồn traffic đặc thù
            </TabsTrigger>
            <TabsTrigger
              value="isp"
              className="flex items-center justify-center"
            >
              <Wifi className="h-4 w-4 mr-1" />
              Phân loại theo ISP
            </TabsTrigger>
            <TabsTrigger
              value="locations"
              className="flex items-center justify-center"
            >
              <Map className="h-4 w-4 mr-1" />
              Khu vực rủi ro cao
            </TabsTrigger>
            <TabsTrigger
              value="devices"
              className="flex items-center justify-center"
            >
              <Smartphone className="h-4 w-4 mr-1" />
              Device Fingerprint
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sources" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Đánh giá chất lượng traffic từ các nguồn đặc thù
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích và đánh giá chất lượng traffic từ các nguồn quảng
                  cáo phổ biến tại Việt Nam, giúp xác định các nguồn có tỷ lệ
                  gian lận cao.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Các nguồn traffic chính</h4>
                  <ul className="list-disc pl-5 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <Youtube className="h-3 w-3 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">YouTube Ads:</span> Quảng
                        cáo video và banner trên YouTube
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <Globe className="h-3 w-3 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Google Ads:</span> Quảng
                        cáo tìm kiếm, display và remarketing
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <Facebook className="h-3 w-3 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Facebook Ads:</span> Quảng
                        cáo trên Facebook và Instagram
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">
                            Z
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Zalo Ads:</span> Quảng cáo
                        trên nền tảng Zalo phổ biến tại Việt Nam
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Globe className="h-3 w-3 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Google Adsense:</span>{" "}
                        Quảng cáo hiển thị trên các website đối tác
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Chỉ số chất lượng traffic
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mr-2">
                            <Youtube className="h-2.5 w-2.5 text-red-600" />
                          </div>
                          <span className="text-sm">YouTube Ads</span>
                        </div>
                        <span className="text-sm font-medium">
                          Tỷ lệ gian lận: 12.4%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: "12.4%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <Globe className="h-2.5 w-2.5 text-blue-600" />
                          </div>
                          <span className="text-sm">Google Ads</span>
                        </div>
                        <span className="text-sm font-medium">
                          Tỷ lệ gian lận: 8.7%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "8.7%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <Facebook className="h-2.5 w-2.5 text-blue-600" />
                          </div>
                          <span className="text-sm">Facebook Ads</span>
                        </div>
                        <span className="text-sm font-medium">
                          Tỷ lệ gian lận: 15.2%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "15.2%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                            <span className="text-xs font-bold text-purple-600">
                              Z
                            </span>
                          </div>
                          <span className="text-sm">Zalo Ads</span>
                        </div>
                        <span className="text-sm font-medium">
                          Tỷ lệ gian lận: 18.6%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "18.6%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                            <Globe className="h-2.5 w-2.5 text-green-600" />
                          </div>
                          <span className="text-sm">Google Adsense</span>
                        </div>
                        <span className="text-sm font-medium">
                          Tỷ lệ gian lận: 21.3%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "21.3%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">
                  Phân tích chi tiết theo nguồn
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <Globe className="h-3.5 w-3.5 text-green-600" />
                        </div>
                        <p className="font-medium">Google Adsense</p>
                      </div>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      Phân tích cho thấy Google Adsense có tỷ lệ gian lận cao
                      nhất (21.3%) trong các nguồn traffic. Đặc biệt, các
                      website thuộc mạng Adsense có nội dung tiếng Việt thường
                      có tỷ lệ click giả cao hơn 30% so với trung bình toàn cầu.
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <div className="text-xs">
                        <span className="text-gray-500">
                          Thời gian xem trang:
                        </span>
                        <span className="font-medium ml-1">12s (thấp)</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-500">Tỷ lệ bounce:</span>
                        <span className="font-medium ml-1">87.2% (cao)</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-500">Tỷ lệ chuyển đổi:</span>
                        <span className="font-medium ml-1">0.8% (thấp)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                          <span className="text-xs font-bold text-purple-600">
                            Z
                          </span>
                        </div>
                        <p className="font-medium">Zalo Ads</p>
                      </div>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      Zalo Ads có tỷ lệ gian lận cao (18.6%), đặc biệt là từ các
                      chiến dịch nhắm mục tiêu vào người dùng di động. Phát hiện
                      nhiều mẫu click đồng thời từ các thiết bị Android giá rẻ
                      phổ biến tại Việt Nam.
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <div className="text-xs">
                        <span className="text-gray-500">
                          Thời gian xem trang:
                        </span>
                        <span className="font-medium ml-1">18s (thấp)</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-500">Tỷ lệ bounce:</span>
                        <span className="font-medium ml-1">82.5% (cao)</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-500">Tỷ lệ chuyển đổi:</span>
                        <span className="font-medium ml-1">1.2% (thấp)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Biện pháp tối ưu hóa</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Lọc IP đáng ngờ</p>
                    <p className="text-sm mt-1">
                      Tự động loại trừ các IP từ data center và proxy đã biết
                      trong chiến dịch quảng cáo
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Hiệu quả cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Điều chỉnh ngân sách
                    </p>
                    <p className="text-sm mt-1">
                      Phân bổ lại ngân sách từ các nguồn có tỷ lệ gian lận cao
                      sang các nguồn chất lượng hơn
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Tiết kiệm 15-20%
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tối ưu nhắm mục tiêu
                    </p>
                    <p className="text-sm mt-1">
                      Điều chỉnh tiêu chí nhắm mục tiêu để giảm thiểu phạm vi
                      tiếp cận các nhóm đối tượng có rủi ro cao
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cải thiện 25%
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
                  Phân loại chất lượng traffic dựa trên nhóm ISP Việt Nam
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích và đánh giá chất lượng traffic từ các nhà cung cấp
                  dịch vụ internet (ISP) tại Việt Nam, xác định các ISP có tỷ lệ
                  gian lận cao.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Các ISP chính tại Việt Nam
                  </h4>
                  <ul className="list-disc pl-5 space-y-3 text-sm">
                    <li>
                      <span className="font-medium">VNPT:</span> Tổng Công ty
                      Bưu chính Viễn thông Việt Nam
                      <div className="text-xs text-gray-500 mt-0.5">
                        Dải IP: 14.160.0.0/11, 14.224.0.0/11, 27.64.0.0/12
                      </div>
                    </li>
                    <li>
                      <span className="font-medium">Viettel:</span> Tập đoàn
                      Công nghiệp - Viễn thông Quân đội
                      <div className="text-xs text-gray-500 mt-0.5">
                        Dải IP: 27.72.0.0/12, 171.224.0.0/11, 125.234.0.0/15
                      </div>
                    </li>
                    <li>
                      <span className="font-medium">FPT Telecom:</span> Công ty
                      Cổ phần Viễn thông FPT
                      <div className="text-xs text-gray-500 mt-0.5">
                        Dải IP: 118.68.0.0/14, 118.72.0.0/13, 125.212.0.0/16
                      </div>
                    </li>
                    <li>
                      <span className="font-medium">CMC Telecom:</span> Công ty
                      Cổ phần Hạ tầng Viễn thông CMC
                      <div className="text-xs text-gray-500 mt-0.5">
                        Dải IP: 103.9.0.0/22, 103.53.160.0/22, 103.90.220.0/22
                      </div>
                    </li>
                    <li>
                      <span className="font-medium">Các ISP nhỏ khác:</span>{" "}
                      NetNam, SPT, SCTV, MobiFone...
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Phân loại chất lượng traffic
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">VNPT</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">
                            Tỷ lệ gian lận: 12.8%
                          </span>
                          <Badge className="bg-amber-100 text-amber-800">
                            Trung bình
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: "12.8%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Viettel</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">
                            Tỷ lệ gian lận: 9.5%
                          </span>
                          <Badge className="bg-green-100 text-green-800">
                            Thấp
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "9.5%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">FPT Telecom</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">
                            Tỷ lệ gian lận: 14.2%
                          </span>
                          <Badge className="bg-amber-100 text-amber-800">
                            Trung bình
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: "14.2%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">CMC Telecom</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">
                            Tỷ lệ gian lận: 8.3%
                          </span>
                          <Badge className="bg-green-100 text-green-800">
                            Thấp
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "8.3%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">
                          ISP nhỏ & không xác định
                        </span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">
                            Tỷ lệ gian lận: 22.7%
                          </span>
                          <Badge className="bg-red-100 text-red-800">Cao</Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "22.7%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">
                  Phân tích chi tiết theo ISP
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">ISP nhỏ & không xác định</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      Các ISP nhỏ và không xác định có tỷ lệ gian lận cao nhất
                      (22.7%). Phần lớn traffic từ các ISP này đến từ các proxy
                      và VPN, thường được sử dụng để ẩn danh trong các hoạt động
                      gian lận click.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>
                        <span className="font-medium">Đặc điểm:</span> Thời gian
                        dừng trên trang ngắn, tỷ lệ bounce cao, mẫu click không
                        tự nhiên
                      </p>
                      <p>
                        <span className="font-medium">Khuyến nghị:</span> Loại
                        trừ hoặc áp dụng bộ lọc nghiêm ngặt đối với traffic từ
                        các ISP này
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">FPT Telecom</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Rủi ro trung bình
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      FPT Telecom có tỷ lệ gian lận ở mức trung bình (14.2%).
                      Phân tích cho thấy có sự tập trung cao của các farm click
                      tại một số khu vực cụ thể sử dụng dịch vụ của FPT, đặc
                      biệt là tại các khu công nghiệp và trung tâm công nghệ.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>
                        <span className="font-medium">Đặc điểm:</span> Nhiều
                        phiên từ các IP liên tiếp trong cùng subnet, mẫu click
                        có tính lặp lại cao
                      </p>
                      <p>
                        <span className="font-medium">Khuyến nghị:</span> Giám
                        sát chặt chẽ các subnet cụ thể đã xác định có rủi ro cao
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">
                  Biện pháp tối ưu hóa theo ISP
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Lọc theo ISP</p>
                    <p className="text-sm mt-1">
                      Áp dụng các bộ lọc khác nhau dựa trên mức độ rủi ro của
                      từng ISP
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Giảm 18.5% gian lận
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Giám sát theo thời gian thực
                    </p>
                    <p className="text-sm mt-1">
                      Theo dõi và phát hiện các mẫu bất thường theo ISP trong
                      thời gian thực
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Phản ứng nhanh
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Điều chỉnh giá thầu</p>
                    <p className="text-sm mt-1">
                      Điều chỉnh giá thầu quảng cáo dựa trên chất lượng traffic
                      từ các ISP khác nhau
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Tối ưu ROI
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="locations" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện traffic từ khu vực có tỷ lệ gian lận cao
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích và xác định các khu vực địa lý tại Việt Nam có tỷ lệ
                  gian lận cao, đặc biệt là các khu công nghiệp và trung tâm
                  công nghệ nơi thường tập trung các farm click.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Khu vực rủi ro cao</h4>
                  <ul className="list-disc pl-5 space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <Factory className="h-3 w-3 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Khu công nghiệp:</span>
                        <ul className="list-disc pl-5 mt-1 space-y-0.5">
                          <li>KCN Quang Minh, Mê Linh, Hà Nội</li>
                          <li>KCN Quế Võ, Bắc Ninh</li>
                          <li>KCN Tân Bình, TP.HCM</li>
                          <li>KCN Sóng Thần, Bình Dương</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start mt-2">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <Cpu className="h-3 w-3 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">
                          Trung tâm công nghệ:
                        </span>
                        <ul className="list-disc pl-5 mt-1 space-y-0.5">
                          <li>Khu CNPM Quang Trung, TP.HCM</li>
                          <li>Khu Công nghệ cao Hòa Lạc, Hà Nội</li>
                          <li>Khu vực Cầu Giấy, Hà Nội</li>
                          <li>Khu vực Quận 7, TP.HCM</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Đặc điểm traffic đáng ngờ
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <span className="font-medium">
                        Mật độ cao bất thường:
                      </span>{" "}
                      Số lượng lớn click từ một khu vực địa lý nhỏ
                    </li>
                    <li>
                      <span className="font-medium">Thời gian hoạt động:</span>{" "}
                      Tập trung vào giờ hành chính (9h-17h) và giảm mạnh vào
                      cuối tuần
                    </li>
                    <li>
                      <span className="font-medium">Mẫu IP:</span> Nhiều IP liên
                      tiếp trong cùng subnet hoạt động đồng thời
                    </li>
                    <li>
                      <span className="font-medium">Đồng bộ hóa:</span> Các
                      phiên từ khu vực này thường có mẫu hành vi tương tự nhau
                    </li>
                    <li>
                      <span className="font-medium">Tỷ lệ chuyển đổi:</span> Cực
                      thấp so với số lượng click và lượt xem trang
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">
                  Bản đồ nhiệt khu vực rủi ro
                </h4>
                <div className="relative w-full h-[300px] border border-gray-200 rounded-md bg-gray-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Bản đồ Việt Nam"
                      className="opacity-20 object-contain h-full"
                    />

                    {/* Điểm nóng Hà Nội - Cầu Giấy */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-12 h-12"
                      style={{ top: "30%", left: "40%" }}
                    ></div>

                    {/* Điểm nóng Hà Nội - Mê Linh */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-10 h-10"
                      style={{ top: "25%", left: "38%" }}
                    ></div>

                    {/* Điểm nóng Bắc Ninh */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-10 h-10"
                      style={{ top: "28%", left: "42%" }}
                    ></div>

                    {/* Điểm nóng TP.HCM - Tân Bình */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-14 h-14"
                      style={{ top: "65%", left: "45%" }}
                    ></div>

                    {/* Điểm nóng TP.HCM - Quận 7 */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-12 h-12"
                      style={{ top: "67%", left: "47%" }}
                    ></div>

                    {/* Điểm nóng Bình Dương */}
                    <div
                      className="absolute rounded-full bg-red-500 opacity-70 w-10 h-10"
                      style={{ top: "63%", left: "48%" }}
                    ></div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm text-xs">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                      <span>Khu vực rủi ro cao</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                      <span>Khu vực rủi ro trung bình</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phân tích chi tiết khu vực</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">KCN Tân Bình, TP.HCM</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro rất cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      Khu công nghiệp Tân Bình có tỷ lệ gian lận cao nhất
                      (32.7%). Phát hiện nhiều farm click chuyên nghiệp hoạt
                      động trong khu vực này, với hàng trăm thiết bị được kết
                      nối qua các mạng khác nhau để tránh phát hiện.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>
                        <span className="font-medium">Đặc điểm:</span> Hoạt động
                        tập trung vào giờ hành chính, sử dụng nhiều ISP khác
                        nhau, mẫu click có tính lặp lại cao
                      </p>
                      <p>
                        <span className="font-medium">Khuyến nghị:</span> Loại
                        trừ hoàn toàn traffic từ khu vực này hoặc áp dụng bộ lọc
                        nghiêm ngặt
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Khu vực Cầu Giấy, Hà Nội</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      Khu vực Cầu Giấy có tỷ lệ gian lận cao (28.5%), đặc biệt
                      là từ các tòa nhà văn phòng và trung tâm CNTT. Phát hiện
                      nhiều mẫu click đồng thời từ các IP khác nhau nhưng có
                      hành vi tương tự.
                    </p>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>
                        <span className="font-medium">Đặc điểm:</span> Sử dụng
                        nhiều thiết bị khác nhau, thời gian dừng trên trang
                        ngắn, tỷ lệ bounce cao
                      </p>
                      <p>
                        <span className="font-medium">Khuyến nghị:</span> Giám
                        sát chặt chẽ và áp dụng bộ lọc hành vi cho traffic từ
                        khu vực này
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">
                  Biện pháp tối ưu hóa theo khu vực
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Loại trừ địa lý</p>
                    <p className="text-sm mt-1">
                      Loại trừ các khu vực có tỷ lệ gian lận cao khỏi chiến dịch
                      quảng cáo
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Giảm 25.3% gian lận
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Điều chỉnh giá thầu</p>
                    <p className="text-sm mt-1">
                      Giảm giá thầu cho các khu vực có rủi ro cao để hạn chế
                      thiệt hại
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Tiết kiệm 18.7%
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Lọc IP theo khu vực</p>
                    <p className="text-sm mt-1">
                      Áp dụng bộ lọc IP động dựa trên phân tích địa lý và hành
                      vi
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Hiệu quả cao
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="devices" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích device fingerprint phổ biến tại Việt Nam
                </h3>
                <p className="text-gray-700 mb-4">
                  Phân tích và xác định các mẫu thiết bị phổ biến được sử dụng
                  trong hoạt động gian lận tại Việt Nam, đặc biệt là các thiết
                  bị Android cấu hình thấp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Thiết bị phổ biến trong gian lận
                  </h4>
                  <ul className="list-disc pl-5 space-y-3 text-sm">
                    <li>
                      <span className="font-medium">
                        Android cấu hình thấp:
                      </span>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5">
                        <li>Xiaomi Redmi 9A, 9C, Note 8</li>
                        <li>Samsung Galaxy A01, A10, J2 Prime</li>
                        <li>Oppo A3s, A5, A12</li>
                        <li>Vivo Y11, Y12, Y15</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Thiết bị giả lập:</span>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5">
                        <li>NoxPlayer</li>
                        <li>BlueStacks</li>
                        <li>LDPlayer</li>
                        <li>MEmu</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Trình duyệt:</span>
                      <ul className="list-disc pl-5 mt-1 space-y-0.5">
                        <li>Chrome Mobile (phiên bản cũ)</li>
                        <li>UC Browser</li>
                        <li>Opera Mini</li>
                        <li>Trình duyệt mặc định của thiết bị</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Đặc điểm fingerprint đáng ngờ
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <span className="font-medium">
                        Phiên bản hệ điều hành:
                      </span>{" "}
                      Android 7-9, thường là phiên bản cũ không được cập nhật
                    </li>
                    <li>
                      <span className="font-medium">
                        Độ phân giải màn hình:
                      </span>{" "}
                      Thấp hoặc không nhất quán (720x1280, 540x960)
                    </li>
                    <li>
                      <span className="font-medium">User-Agent:</span> Thường
                      chứa thông tin không nhất quán hoặc được sửa đổi
                    </li>
                    <li>
                      <span className="font-medium">Canvas Fingerprint:</span>{" "}
                      Giống nhau chính xác giữa nhiều thiết bị khác nhau
                    </li>
                    <li>
                      <span className="font-medium">WebGL Fingerprint:</span>{" "}
                      Thiếu thông tin GPU hoặc thông tin không nhất quán
                    </li>
                    <li>
                      <span className="font-medium">Cảm biến:</span> Thiếu hoặc
                      cung cấp dữ liệu không tự nhiên (accelerometer, gyroscope)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">
                  Phân tích thiết bị Android cấu hình thấp
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Xiaomi Redmi Note 8</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      Xiaomi Redmi Note 8 là một trong những thiết bị phổ biến
                      nhất được sử dụng trong các farm click tại Việt Nam. Giá
                      rẻ và dễ mua, thường được cài đặt với các ứng dụng tự động
                      click.
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Hệ điều hành:</span>
                        <span className="font-medium ml-1">Android 9.0</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Độ phân giải:</span>
                        <span className="font-medium ml-1">1080x2340</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Trình duyệt:</span>
                        <span className="font-medium ml-1">
                          Chrome 85.0.4183
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Tỷ lệ gian lận:</span>
                        <span className="font-medium ml-1 text-red-600">
                          28.7%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Samsung Galaxy A01</p>
                      <Badge className="bg-red-100 text-red-800">
                        Rủi ro cao
                      </Badge>
                    </div>
                    <p className="text-sm mt-2">
                      Samsung Galaxy A01 là thiết bị giá rẻ phổ biến khác được
                      sử dụng trong các farm click. Thường được sử dụng với các
                      script tự động và ứng dụng giả lập tương tác người dùng.
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Hệ điều hành:</span>
                        <span className="font-medium ml-1">Android 10.0</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Độ phân giải:</span>
                        <span className="font-medium ml-1">720x1520</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Trình duyệt:</span>
                        <span className="font-medium ml-1">
                          Samsung Browser 11.0
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Tỷ lệ gian lận:</span>
                        <span className="font-medium ml-1 text-red-600">
                          25.3%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Phát hiện thiết bị giả lập</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">
                        Dấu hiệu nhận biết thiết bị giả lập
                      </p>
                      <Badge className="bg-blue-100 text-blue-800">
                        Độ chính xác cao
                      </Badge>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                      <li>
                        Thiếu thông tin cảm biến hoặc cung cấp dữ liệu không tự
                        nhiên
                      </li>
                      <li>
                        WebGL fingerprint cho thấy GPU ảo hoặc không nhất quán
                      </li>
                      <li>
                        Độ phân giải màn hình và tỷ lệ khung hình không phù hợp
                        với thiết bị thật
                      </li>
                      <li>
                        User-Agent chứa thông tin mâu thuẫn hoặc không đầy đủ
                      </li>
                      <li>
                        Thông tin pin và mạng không thay đổi hoặc thay đổi theo
                        mẫu cố định
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Ví dụ User-Agent giả lập</p>
                      <Badge className="bg-amber-100 text-amber-800">
                        Dấu hiệu đáng ngờ
                      </Badge>
                    </div>
                    <p className="text-xs mt-2 font-mono bg-gray-100 p-2 rounded">
                      Mozilla/5.0 (Linux; Android 7.1.2; SM-G955F Build/N2G48H;
                      wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0
                      Chrome/68.0.3440.91 Mobile Safari/537.36
                    </p>
                    <p className="text-sm mt-2">
                      User-Agent này có dấu hiệu đáng ngờ: phiên bản Android cũ
                      (7.1.2), phiên bản Chrome cũ (68.0), và sự kết hợp không
                      phù hợp giữa model thiết bị (SM-G955F là Galaxy S8+) và
                      phiên bản Android.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">
                  Biện pháp phát hiện và ngăn chặn
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện giả lập</p>
                    <p className="text-sm mt-1">
                      Sử dụng kỹ thuật fingerprinting nâng cao để phát hiện
                      thiết bị giả lập
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Độ chính xác 94.2%
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Lọc thiết bị đáng ngờ
                    </p>
                    <p className="text-sm mt-1">
                      Áp dụng bộ lọc cho các thiết bị có tỷ lệ gian lận cao đã
                      được xác định
                    </p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Giảm 22.5% gian lận
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Xác thực hành vi</p>
                    <p className="text-sm mt-1">
                      Yêu cầu xác thực bổ sung cho các thiết bị đáng ngờ trước
                      khi tính chuyển đổi
                    </p>
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
          <h3 className="text-lg font-semibold mb-4">Tích hợp phân tích</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Cách triển khai</h4>
              <p className="text-sm mb-4">
                Các phương pháp phân tích nguồn traffic Việt Nam được tích hợp
                vào hệ thống phát hiện gian lận, giúp xác định và ngăn chặn các
                nguồn traffic có chất lượng thấp và tỷ lệ gian lận cao.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  Xem báo cáo chi tiết
                </Button>
                <Button variant="outline" size="sm">
                  <Map className="h-4 w-4 mr-2" />
                  Bản đồ nhiệt gian lận
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-gray-50">
              <h4 className="font-medium mb-2">Hiệu suất tổng thể</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Độ chính xác phát hiện:</span>
                    <span className="font-bold">92.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "92.8%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tỷ lệ dương tính giả:</span>
                    <span className="font-bold">3.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "3.2%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Tiết kiệm ngân sách:</span>
                    <span className="font-bold">21.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "21.5%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            Triển khai phân tích nguồn traffic
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficSourceAnalysis;
