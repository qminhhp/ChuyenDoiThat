import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Copy,
  Code,
  ExternalLink,
  Check,
  Download,
  Clipboard,
  Server,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const IntegrationPage = () => {
  const [activeTab, setActiveTab] = React.useState("javascript");
  const [copied, setCopied] = React.useState(false);
  const [domain, setDomain] = React.useState("example.com");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const jsCode = `<!-- Thêm mã này vào phần <head> của trang web của bạn -->
<script>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm_id': i,
      'domain': '${domain}',
      'track_bots': false
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://cdn.fraudguard.vn/track.js';
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'fgLayer', 'FG-${Math.random().toString(36).substring(2, 10)}');
</script>`;

  const phpCode = `<?php
// Thêm mã này vào trang PHP của bạn
$apiKey = "YOUR_API_KEY";
$domain = "${domain}";
$endpoint = "https://api.fraudguard.vn/v1/track";

$data = [
  "apiKey" => $apiKey,
  "domain" => $domain,
  "userAgent" => $_SERVER['HTTP_USER_AGENT'],
  "ipAddress" => $_SERVER['REMOTE_ADDR'],
  "referrer" => isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '',
  "timestamp" => time()
];

$options = [
  'http' => [
    'header'  => "Content-type: application/json\r\n",
    'method'  => 'POST',
    'content' => json_encode($data)
  ]
];

$context  = stream_context_create($options);
$result = file_get_contents($endpoint, false, $context);

// Xử lý kết quả nếu cần
$response = json_decode($result, true);
?>`;

  const apiCode = `curl -X POST https://api.fraudguard.vn/v1/track \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "domain": "${domain}",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "ipAddress": "113.161.72.105",
    "referrer": "https://google.com",
    "timestamp": 1623749282
  }'`;

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Tích hợp khách hàng</h1>
        <p className="text-gray-500">
          Tích hợp mã theo dõi FraudGuard vào trang web của khách hàng
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Mã tích hợp</CardTitle>
              <CardDescription>
                Chọn phương thức tích hợp phù hợp với trang web của bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="domain" className="text-sm font-medium">
                      Tên miền
                    </label>
                    <Input
                      type="text"
                      id="domain"
                      placeholder="example.com"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor="api-key" className="text-sm font-medium">
                      API Key
                    </label>
                    <Input
                      type="text"
                      id="api-key"
                      placeholder="YOUR_API_KEY"
                      value="FG-API-XXXX-XXXX-XXXX"
                      disabled
                    />
                  </div>
                </div>

                <Tabs
                  defaultValue="javascript"
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="javascript">
                      <Code className="mr-2 h-4 w-4" />
                      JavaScript
                    </TabsTrigger>
                    <TabsTrigger value="php">
                      <Server className="mr-2 h-4 w-4" />
                      PHP
                    </TabsTrigger>
                    <TabsTrigger value="api">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      API
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="javascript" className="mt-4">
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm">
                        <code>{jsCode}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700"
                        onClick={() => handleCopy(jsCode)}
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Thêm mã này vào phần &lt;head&gt; của trang web của bạn để
                      bắt đầu theo dõi.
                    </p>
                  </TabsContent>

                  <TabsContent value="php" className="mt-4">
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm">
                        <code>{phpCode}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700"
                        onClick={() => handleCopy(phpCode)}
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Sử dụng mã PHP này để tích hợp với ứng dụng backend của
                      bạn.
                    </p>
                  </TabsContent>

                  <TabsContent value="api" className="mt-4">
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto text-sm">
                        <code>{apiCode}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700"
                        onClick={() => handleCopy(apiCode)}
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Gọi API trực tiếp từ bất kỳ ngôn ngữ hoặc nền tảng nào.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Tải tài liệu hướng dẫn
              </Button>
              <Button>
                <Clipboard className="mr-2 h-4 w-4" />
                Sao chép mã
              </Button>
            </CardFooter>
          </Card>

          <Alert className="mt-6">
            <AlertTitle className="flex items-center">
              <Server className="h-4 w-4 mr-2" />
              Cần hỗ trợ tích hợp?
            </AlertTitle>
            <AlertDescription>
              Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ bạn tích hợp mã
              theo dõi vào trang web của bạn.
              <Button variant="link" className="p-0 h-auto font-normal">
                Liên hệ hỗ trợ kỹ thuật
              </Button>
            </AlertDescription>
          </Alert>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Trạng thái tích hợp</CardTitle>
              <CardDescription>
                Các trang web đã tích hợp mã theo dõi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>example.com</span>
                  </div>
                  <Badge variant="outline" className="text-green-500">
                    Hoạt động
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>shop.example.com</span>
                  </div>
                  <Badge variant="outline" className="text-green-500">
                    Hoạt động
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span>blog.example.com</span>
                  </div>
                  <Badge variant="outline" className="text-amber-500">
                    Cần cập nhật
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span>store.example.com</span>
                  </div>
                  <Badge variant="outline" className="text-red-500">
                    Không hoạt động
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Quản lý trang web
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Tài liệu hướng dẫn</CardTitle>
              <CardDescription>Tài liệu và hướng dẫn tích hợp</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4 text-blue-500" />
                  <a href="#" className="text-blue-500 hover:underline">
                    Hướng dẫn tích hợp JavaScript
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4 text-blue-500" />
                  <a href="#" className="text-blue-500 hover:underline">
                    Tích hợp với WordPress
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4 text-blue-500" />
                  <a href="#" className="text-blue-500 hover:underline">
                    Tích hợp với Shopify
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4 text-blue-500" />
                  <a href="#" className="text-blue-500 hover:underline">
                    Tài liệu API
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IntegrationPage;
