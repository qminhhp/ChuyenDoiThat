import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  Fingerprint,
  Code,
  Layers,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const AdvancedBotDetection = () => {
  const [activeTab, setActiveTab] = React.useState("canvas");

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Fingerprint className="h-5 w-5 mr-2 text-blue-500" />
          Phát hiện Bot nâng cao
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="canvas"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="canvas"
              className="flex items-center justify-center"
            >
              <Fingerprint className="h-4 w-4 mr-1" />
              Canvas Fingerprinting
            </TabsTrigger>
            <TabsTrigger
              value="webgl"
              className="flex items-center justify-center"
            >
              <Layers className="h-4 w-4 mr-1" />
              WebGL Fingerprint
            </TabsTrigger>
            <TabsTrigger
              value="javascript"
              className="flex items-center justify-center"
            >
              <Code className="h-4 w-4 mr-1" />
              JavaScript Inconsistencies
            </TabsTrigger>
            <TabsTrigger
              value="browser"
              className="flex items-center justify-center"
            >
              <AlertTriangle className="h-4 w-4 mr-1" />
              Browser Anomalies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="canvas" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Canvas Fingerprinting
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng HTML5 Canvas để tạo ra một hình ảnh duy nhất cho mỗi
                  trình duyệt, giúp phát hiện các công cụ tự động hóa trình
                  duyệt (browser automation).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Cách thức hoạt động</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Tạo một phần tử canvas ẩn và vẽ văn bản, hình dạng và
                      gradient
                    </li>
                    <li>
                      Chuyển đổi canvas thành chuỗi dữ liệu (dataURL hoặc
                      imageData)
                    </li>
                    <li>
                      Tạo mã băm (hash) từ dữ liệu để tạo ra một "vân tay" duy
                      nhất
                    </li>
                    <li>
                      So sánh vân tay với cơ sở dữ liệu các công cụ tự động hóa
                      đã biết
                    </li>
                    <li>
                      Phát hiện sự khác biệt trong kết xuất (rendering) giữa
                      trình duyệt thật và giả lập
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Dấu hiệu phát hiện bot</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Vân tay canvas giống nhau chính xác giữa các phiên khác
                      nhau
                    </li>
                    <li>
                      Thiếu sự khác biệt nhỏ trong kết xuất do phần cứng và
                      driver
                    </li>
                    <li>
                      Kết xuất quá hoàn hảo hoặc thiếu các đặc điểm của trình
                      duyệt thật
                    </li>
                    <li>
                      Vân tay trùng khớp với các công cụ tự động hóa phổ biến
                      như Selenium, Puppeteer
                    </li>
                    <li>
                      Sự không nhất quán giữa vân tay canvas và thông tin trình
                      duyệt được báo cáo
                    </li>
                  </ul>
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
                    <p className="text-lg font-bold">~120ms</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Nhanh
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="webgl" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phân tích WebGL Fingerprint
                </h3>
                <p className="text-gray-700 mb-4">
                  Sử dụng WebGL để thu thập thông tin chi tiết về GPU và driver
                  đồ họa, tạo ra một vân tay duy nhất khó giả mạo hơn so với
                  Canvas thông thường.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Thông tin thu thập</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Thông tin về GPU: nhà sản xuất, model, driver version
                    </li>
                    <li>
                      Các thuộc tính WebGL: extensions, parameters, shading
                      language version
                    </li>
                    <li>Khả năng xử lý shader và hiệu suất kết xuất 3D</li>
                    <li>
                      Sự khác biệt trong cách xử lý antialiasing và texture
                    </li>
                    <li>Giới hạn và khả năng của WebGL implementation</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Dấu hiệu phát hiện bot</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Thiếu thông tin GPU hoặc thông tin không nhất quán</li>
                    <li>Sử dụng GPU ảo hoặc phần mềm mô phỏng GPU</li>
                    <li>
                      Hiệu suất WebGL bất thường (quá nhanh hoặc quá chậm)
                    </li>
                    <li>
                      Sự không nhất quán giữa thông tin GPU và thông tin trình
                      duyệt
                    </li>
                    <li>
                      Vân tay WebGL trùng khớp với các công cụ tự động hóa đã
                      biết
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ mã phát hiện</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`// Lấy thông tin WebGL
function getWebGLFingerprint() {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return null;
  
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
  const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  
  // Thu thập thêm thông tin
  const extensions = gl.getSupportedExtensions();
  const parameters = {
    antialias: gl.getContextAttributes().antialias,
    alpha: gl.getContextAttributes().alpha,
    depth: gl.getContextAttributes().depth,
    // Các thông số khác...
  };
  
  // Tạo vân tay từ thông tin thu thập được
  return hashFunction(JSON.stringify({ vendor, renderer, extensions, parameters }));
}`}</code>
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
                    <p className="text-lg font-bold">0.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Rất thấp
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Khó bị vượt qua</p>
                    <p className="text-lg font-bold">Cao</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Hiệu quả
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="javascript" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phát hiện JavaScript Runtime Inconsistencies
                </h3>
                <p className="text-gray-700 mb-4">
                  Phát hiện sự không nhất quán trong môi trường JavaScript, giúp
                  xác định các trình duyệt giả lập và công cụ tự động hóa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Các kiểm tra thực hiện</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Kiểm tra sự hiện diện của các biến và hàm automation
                    </li>
                    <li>
                      Phát hiện các thuộc tính không chuẩn trong đối tượng
                      navigator
                    </li>
                    <li>
                      Kiểm tra sự không nhất quán trong các API trình duyệt
                    </li>
                    <li>Phát hiện các hàm được ghi đè (monkey patched)</li>
                    <li>
                      Kiểm tra thời gian thực thi của các hoạt động JavaScript
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Dấu hiệu phát hiện bot</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Sự hiện diện của biến như __selenium_unwrapped, _phantom,
                      callPhantom
                    </li>
                    <li>
                      Các thuộc tính không chuẩn trong navigator như webdriver
                    </li>
                    <li>
                      Sự không nhất quán trong các API như performance.timing
                    </li>
                    <li>
                      Thời gian thực thi bất thường cho các hoạt động JavaScript
                    </li>
                    <li>
                      Các hàm được ghi đè như document.createElement,
                      HTMLElement.prototype.appendChild
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ mã phát hiện</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`// Kiểm tra JavaScript inconsistencies
function detectAutomation() {
  const checks = {
    // Kiểm tra biến automation
    hasAutomationVariables: !!(
      window.callPhantom || window._phantom || window.__nightmare || 
      window.navigator.webdriver || window.__selenium_unwrapped
    ),
    
    // Kiểm tra thuộc tính navigator bất thường
    hasWebdriverProperty: (() => {
      try {
        return navigator.webdriver || 
               'webdriver' in navigator || 
               'selenium' in navigator || 
               'driver' in navigator;
      } catch (e) {
        return false;
      }
    })(),
    
    // Kiểm tra các hàm bị ghi đè
    isCreateElementMonkeyPatched: (() => {
      try {
        const native = document.createElement.toString();
        return native.indexOf('native code') === -1;
      } catch (e) {
        return false;
      }
    })(),
    
    // Các kiểm tra khác...
  };
  
  // Tính điểm đáng ngờ
  let suspiciousScore = 0;
  for (const key in checks) {
    if (checks[key]) suspiciousScore++;
  }
  
  return {
    isAutomated: suspiciousScore >= 2,
    score: suspiciousScore,
    checks
  };
}`}</code>
                </pre>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">93.8%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">1.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Thấp
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

          <TabsContent value="browser" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Nhận diện điểm dị thường trong browser features
                </h3>
                <p className="text-gray-700 mb-4">
                  Phát hiện các điểm bất thường trong các tính năng và hành vi
                  của trình duyệt, giúp xác định các trình duyệt headless và
                  công cụ tự động.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Các tính năng kiểm tra</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      Plugins và extensions trình duyệt (thường thiếu trong
                      headless)
                    </li>
                    <li>Hỗ trợ media như WebRTC, audio, video</li>
                    <li>Hỗ trợ các API như Bluetooth, USB, cảm biến</li>
                    <li>Khả năng xử lý font chữ và emoji</li>
                    <li>Hỗ trợ các tính năng như touch events, gamepad API</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">Dấu hiệu phát hiện bot</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Thiếu hoàn toàn plugins và extensions</li>
                    <li>Không hỗ trợ hoặc hỗ trợ bất thường các API media</li>
                    <li>Kích thước cửa sổ và màn hình không phù hợp</li>
                    <li>
                      Thiếu hỗ trợ các tính năng phổ biến của trình duyệt hiện
                      đại
                    </li>
                    <li>Sự không nhất quán giữa các tính năng được hỗ trợ</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Ví dụ mã phát hiện</h4>
                <pre className="bg-gray-900 text-gray-100 rounded-md p-3 overflow-x-auto text-xs">
                  <code>{`// Kiểm tra các điểm dị thường trong browser features
function detectBrowserAnomalies() {
  const anomalies = {
    // Kiểm tra plugins (thường thiếu trong headless browsers)
    hasNoPlugins: navigator.plugins.length === 0,
    
    // Kiểm tra kích thước cửa sổ bất thường
    hasAbnormalDimensions: (() => {
      return window.outerWidth === 0 || window.outerHeight === 0 || 
             window.innerWidth === 0 || window.innerHeight === 0;
    })(),
    
    // Kiểm tra WebRTC
    lacksWebRTC: (() => {
      return !(window.RTCPeerConnection || window.webkitRTCPeerConnection);
    })(),
    
    // Kiểm tra hỗ trợ media
    lacksMediaSupport: (() => {
      return !('MediaRecorder' in window) || !('AudioContext' in window);
    })(),
    
    // Kiểm tra hỗ trợ hardware
    lacksHardwareAPIs: (() => {
      return !('bluetooth' in navigator) && 
             !('usb' in navigator) && 
             !('geolocation' in navigator);
    })(),
    
    // Các kiểm tra khác...
  };
  
  // Tính điểm dị thường
  let anomalyScore = 0;
  for (const key in anomalies) {
    if (anomalies[key]) anomalyScore++;
  }
  
  return {
    isAnomalous: anomalyScore >= 3,
    score: anomalyScore,
    anomalies
  };
}`}</code>
                </pre>
              </div>

              <div className="border rounded-md p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Hiệu quả phát hiện</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Độ chính xác</p>
                    <p className="text-lg font-bold">91.5%</p>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Cao
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">
                      Tỷ lệ dương tính giả
                    </p>
                    <p className="text-lg font-bold">2.3%</p>
                    <Badge className="mt-2 bg-amber-100 text-amber-800">
                      Trung bình
                    </Badge>
                  </div>
                  <div className="bg-white p-3 rounded-md border">
                    <p className="text-xs text-gray-500">Phát hiện headless</p>
                    <p className="text-lg font-bold">97.2%</p>
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
                Các phương pháp phát hiện bot nâng cao được tích hợp vào mã theo
                dõi JavaScript được nhúng vào trang web của khách hàng. Kết quả
                phát hiện được gửi về máy chủ để phân tích và xử lý.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Code className="h-4 w-4 mr-2" />
                  Xem mã triển khai
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
                    <span className="font-bold">95.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "95.8%" }}
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
                    <span className="text-sm">Thời gian phát hiện:</span>
                    <span className="font-bold">~200ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "20%" }}
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
            Triển khai phát hiện bot nâng cao
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvancedBotDetection;
