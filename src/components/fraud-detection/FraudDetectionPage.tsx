import React, { useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertCircle,
  MoreVertical,
  Eye,
  Flag,
  CheckCircle,
  XCircle,
  Filter,
  Search,
  Clock,
  Calendar,
  Download,
  RefreshCw,
  Globe,
  User,
  Smartphone,
  MousePointer,
  AlertTriangle,
  Info,
  ArrowUpDown,
  Settings,
  Brain,
  Fingerprint,
  Network,
  Activity,
  Map,
  BarChart,
  FileText,
  Users,
  Keyboard,
  Hand,
  Laptop,
  Database,
  Gauge,
} from "lucide-react";
import FraudDetectionThresholds from "./FraudDetectionThresholds";
import BehaviorAnalysis from "./BehaviorAnalysis";
import MouseTrajectoryModel from "./MouseTrajectoryModel";
import AdvancedBotDetection from "./AdvancedBotDetection";
import NetworkAnalysis from "./NetworkAnalysis";
import AIFraudDetection from "./AIFraudDetection";
import VietnameseClickFraudDetection from "./VietnameseClickFraudDetection";
import TrafficSourceAnalysis from "./TrafficSourceAnalysis";
import ConversionAnalysis from "./ConversionAnalysis";
import BehavioralBiometrics from "./BehavioralBiometrics";
import OrganizedFraudAnalysis from "./OrganizedFraudAnalysis";
import FraudScoreSystem from "./FraudScoreSystem";

interface UserActivity {
  id: string;
  timestamp: string;
  website: string;
  ipAddress: string;
  userAgent: string;
  location: string;
  suspiciousActivities: string[];
  confidenceScore: number;
  status: "pending" | "confirmed" | "dismissed";
  expiresIn?: number; // days until expiration
}

const FraudDetectionPage = () => {
  const [activeTab, setActiveTab] = useState<string>("users");
  const [selectedWebsite, setSelectedWebsite] = useState<string>("all");
  const [selectedActivityType, setSelectedActivityType] =
    useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("timestamp");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Mock data for websites
  const websites = [
    { id: "1", name: "example.com" },
    { id: "2", name: "shop.example.com" },
    { id: "3", name: "blog.example.com" },
    { id: "4", name: "store.example.com" },
  ];

  // Mock data for suspicious activity types
  const activityTypes = [
    { id: "1", name: "Nhiều lượt chuyển đổi nhanh" },
    { id: "2", name: "Vị trí địa lý bất thường" },
    { id: "3", name: "Mẫu nhấp chuột giống bot" },
    { id: "4", name: "Nguồn giới thiệu đáng ngờ" },
    { id: "5", name: "Nhiều lần tạo tài khoản" },
  ];

  // Mock data for user activities
  const userActivities: UserActivity[] = [
    {
      id: "1",
      timestamp: "2023-06-15 08:23:45",
      website: "example.com",
      ipAddress: "203.113.148.87",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124",
      location: "Hà Nội, Việt Nam",
      suspiciousActivities: [
        "Nhiều lượt chuyển đổi nhanh",
        "Vị trí địa lý bất thường",
      ],
      confidenceScore: 87,
      status: "pending",
      expiresIn: 28,
    },
    {
      id: "2",
      timestamp: "2023-06-15 09:12:33",
      website: "shop.example.com",
      ipAddress: "113.161.72.105",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6) AppleWebKit/605.1.15",
      location: "TP. Hồ Chí Minh, Việt Nam",
      suspiciousActivities: ["Vị trí địa lý bất thường"],
      confidenceScore: 65,
      status: "confirmed",
      expiresIn: 25,
    },
    {
      id: "3",
      timestamp: "2023-06-14 23:45:12",
      website: "blog.example.com",
      ipAddress: "42.112.34.201",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 Chrome/90.0.4430.91",
      location: "Đà Nẵng, Việt Nam",
      suspiciousActivities: [
        "Mẫu nhấp chuột giống bot",
        "Nhiều lượt chuyển đổi nhanh",
      ],
      confidenceScore: 92,
      status: "pending",
      expiresIn: 22,
    },
    {
      id: "4",
      timestamp: "2023-06-14 18:33:27",
      website: "store.example.com",
      ipAddress: "171.244.10.58",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124",
      location: "Cần Thơ, Việt Nam",
      suspiciousActivities: ["Nguồn giới thiệu đáng ngờ"],
      confidenceScore: 45,
      status: "dismissed",
      expiresIn: 18,
    },
    {
      id: "5",
      timestamp: "2023-06-14 14:22:09",
      website: "example.com",
      ipAddress: "14.161.22.155",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6) AppleWebKit/605.1.15",
      location: "Hải Phòng, Việt Nam",
      suspiciousActivities: [
        "Nhiều lần tạo tài khoản",
        "Mẫu nhấp chuột giống bot",
      ],
      confidenceScore: 78,
      status: "pending",
      expiresIn: 15,
    },
    {
      id: "6",
      timestamp: "2023-06-14 10:15:33",
      website: "shop.example.com",
      ipAddress: "27.72.98.140",
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15",
      location: "Hà Nội, Việt Nam",
      suspiciousActivities: [
        "Vị trí địa lý bất thường",
        "Nguồn giới thiệu đáng ngờ",
      ],
      confidenceScore: 82,
      status: "pending",
      expiresIn: 12,
    },
    {
      id: "7",
      timestamp: "2023-06-13 16:42:18",
      website: "blog.example.com",
      ipAddress: "103.37.29.145",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124",
      location: "TP. Hồ Chí Minh, Việt Nam",
      suspiciousActivities: ["Nhiều lượt chuyển đổi nhanh"],
      confidenceScore: 58,
      status: "confirmed",
      expiresIn: 8,
    },
    {
      id: "8",
      timestamp: "2023-06-13 09:05:51",
      website: "store.example.com",
      ipAddress: "125.212.156.78",
      userAgent:
        "Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 Chrome/90.0.4430.91",
      location: "Đà Nẵng, Việt Nam",
      suspiciousActivities: ["Mẫu nhấp chuột giống bot"],
      confidenceScore: 94,
      status: "confirmed",
      expiresIn: 5,
    },
    {
      id: "9",
      timestamp: "2023-06-12 22:17:40",
      website: "example.com",
      ipAddress: "183.80.51.234",
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6) AppleWebKit/605.1.15",
      location: "Cần Thơ, Việt Nam",
      suspiciousActivities: ["Nhiều lần tạo tài khoản"],
      confidenceScore: 72,
      status: "dismissed",
      expiresIn: 2,
    },
    {
      id: "10",
      timestamp: "2023-06-12 13:29:05",
      website: "shop.example.com",
      ipAddress: "113.161.72.105",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124",
      location: "Hải Phòng, Việt Nam",
      suspiciousActivities: [
        "Nguồn giới thiệu đáng ngờ",
        "Vị trí địa lý bất thường",
      ],
      confidenceScore: 68,
      status: "pending",
      expiresIn: 1,
    },
  ];

  // Filter activities based on selected filters
  const filteredActivities = userActivities.filter((activity) => {
    // Filter by website
    if (selectedWebsite !== "all" && activity.website !== selectedWebsite) {
      return false;
    }

    // Filter by activity type
    if (
      selectedActivityType !== "all" &&
      !activity.suspiciousActivities.includes(selectedActivityType)
    ) {
      return false;
    }

    // Filter by status
    if (selectedStatus !== "all" && activity.status !== selectedStatus) {
      return false;
    }

    // Filter by search query (IP, location, or user agent)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        activity.ipAddress.toLowerCase().includes(query) ||
        activity.location.toLowerCase().includes(query) ||
        activity.userAgent.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Sort activities
  const sortedActivities = [...filteredActivities].sort((a, b) => {
    let comparison = 0;

    switch (sortColumn) {
      case "timestamp":
        comparison =
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
        break;
      case "website":
        comparison = a.website.localeCompare(b.website);
        break;
      case "confidenceScore":
        comparison = a.confidenceScore - b.confidenceScore;
        break;
      case "expiresIn":
        comparison = (a.expiresIn || 0) - (b.expiresIn || 0);
        break;
      default:
        comparison = 0;
    }

    return sortDirection === "asc" ? comparison : -comparison;
  });

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(sortedActivities.map((activity) => activity.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, id]);
    } else {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
    }
  };

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on users:`, selectedUsers);
    // In a real app, you would call an API to perform the action
    // Then refresh the data

    // For now, just clear the selection
    setSelectedUsers([]);
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 80) return "bg-red-100 text-red-800";
    if (score >= 50) return "bg-amber-100 text-amber-800";
    return "bg-green-100 text-green-800";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge variant="destructive">Đã xác nhận gian lận</Badge>;
      case "dismissed":
        return <Badge variant="secondary">Đã bỏ qua</Badge>;
      default:
        return <Badge variant="outline">Đang chờ xem xét</Badge>;
    }
  };

  const getExpirationColor = (days: number | undefined) => {
    if (!days) return "text-gray-500";
    if (days <= 3) return "text-red-500";
    if (days <= 7) return "text-amber-500";
    return "text-green-500";
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Phát hiện gian lận</h1>
        <p className="text-gray-500">
          Xem và quản lý các hoạt động đáng ngờ của người dùng trên các trang
          web
        </p>
      </div>

      <Tabs
        defaultValue="users"
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-6"
      >
        <TabsList className="w-full">
          <TabsTrigger value="users" className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            Người dùng đáng ngờ
          </TabsTrigger>
          <TabsTrigger value="thresholds" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Cấu hình ngưỡng phát hiện
          </TabsTrigger>
          <TabsTrigger value="auto" className="flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            Phát hiện tự động
          </TabsTrigger>
          <TabsTrigger value="behavior" className="flex items-center">
            <Brain className="h-4 w-4 mr-2" />
            Phân tích hành vi
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center">
            <Fingerprint className="h-4 w-4 mr-2" />
            Phát hiện Bot nâng cao
          </TabsTrigger>
          <TabsTrigger value="network" className="flex items-center">
            <Network className="h-4 w-4 mr-2" />
            Phân tích mạng
          </TabsTrigger>
          <TabsTrigger value="ai" className="flex items-center">
            <Activity className="h-4 w-4 mr-2" />
            AI Phát hiện bot
          </TabsTrigger>
          <TabsTrigger value="vietnam" className="flex items-center">
            <Map className="h-4 w-4 mr-2" />
            Click Fraud Việt Nam
          </TabsTrigger>
          <TabsTrigger value="traffic" className="flex items-center">
            <BarChart className="h-4 w-4 mr-2" />
            Phân tích nguồn traffic
          </TabsTrigger>
          <TabsTrigger value="conversion" className="flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Phân tích chuyển đổi
          </TabsTrigger>
          <TabsTrigger value="biometrics" className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Behavioral Biometrics
          </TabsTrigger>
          <TabsTrigger value="organized" className="flex items-center">
            <Network className="h-4 w-4 mr-2" />
            Organized Fraud
          </TabsTrigger>
          <TabsTrigger value="scoring" className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" />
            Fraud Score System
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Danh sách người dùng đáng ngờ</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Làm mới
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Download className="h-4 w-4" />
                    Xuất dữ liệu
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="website-filter"
                      className="text-sm font-medium block mb-1"
                    >
                      Trang web
                    </label>
                    <Select
                      value={selectedWebsite}
                      onValueChange={setSelectedWebsite}
                    >
                      <SelectTrigger id="website-filter" className="w-full">
                        <SelectValue placeholder="Chọn trang web" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả trang web</SelectItem>
                        {websites.map((website) => (
                          <SelectItem key={website.id} value={website.name}>
                            {website.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="activity-filter"
                      className="text-sm font-medium block mb-1"
                    >
                      Loại hoạt động
                    </label>
                    <Select
                      value={selectedActivityType}
                      onValueChange={setSelectedActivityType}
                    >
                      <SelectTrigger id="activity-filter" className="w-full">
                        <SelectValue placeholder="Chọn loại hoạt động" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả hoạt động</SelectItem>
                        {activityTypes.map((type) => (
                          <SelectItem key={type.id} value={type.name}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="status-filter"
                      className="text-sm font-medium block mb-1"
                    >
                      Trạng thái
                    </label>
                    <Select
                      value={selectedStatus}
                      onValueChange={setSelectedStatus}
                    >
                      <SelectTrigger id="status-filter" className="w-full">
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả trạng thái</SelectItem>
                        <SelectItem value="pending">
                          Đang chờ xem xét
                        </SelectItem>
                        <SelectItem value="confirmed">
                          Đã xác nhận gian lận
                        </SelectItem>
                        <SelectItem value="dismissed">Đã bỏ qua</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex-1 md:max-w-xs">
                  <label
                    htmlFor="search"
                    className="text-sm font-medium block mb-1"
                  >
                    Tìm kiếm
                  </label>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Tìm theo IP, vị trí..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Bulk actions */}
              {selectedUsers.length > 0 && (
                <div className="bg-muted p-2 rounded-md mb-4 flex items-center justify-between">
                  <div className="text-sm">
                    Đã chọn {selectedUsers.length} người dùng
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBulkAction("confirm")}
                    >
                      <CheckCircle className="h-4 w-4 mr-1 text-red-500" />
                      Xác nhận gian lận
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBulkAction("dismiss")}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Bỏ qua
                    </Button>
                  </div>
                </div>
              )}

              {/* User activity table */}
              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox
                          checked={
                            selectedUsers.length === sortedActivities.length &&
                            sortedActivities.length > 0
                          }
                          onCheckedChange={handleSelectAll}
                          aria-label="Select all"
                        />
                      </TableHead>
                      <TableHead
                        className="cursor-pointer"
                        onClick={() => handleSort("timestamp")}
                      >
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Thời gian
                          {sortColumn === "timestamp" && (
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer"
                        onClick={() => handleSort("website")}
                      >
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-1" />
                          Trang web
                          {sortColumn === "website" && (
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          Thông tin người dùng
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Hoạt động đáng ngờ
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer"
                        onClick={() => handleSort("confidenceScore")}
                      >
                        <div className="flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Độ tin cậy
                          {sortColumn === "confidenceScore" && (
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          <Info className="h-4 w-4 mr-1" />
                          Trạng thái
                        </div>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer"
                        onClick={() => handleSort("expiresIn")}
                      >
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Hết hạn sau
                          {sortColumn === "expiresIn" && (
                            <ArrowUpDown className="h-4 w-4 ml-1" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Hành động</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedActivities.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={9}
                          className="text-center py-8 text-gray-500"
                        >
                          Không tìm thấy hoạt động đáng ngờ nào
                        </TableCell>
                      </TableRow>
                    ) : (
                      sortedActivities.map((activity) => (
                        <TableRow key={activity.id}>
                          <TableCell>
                            <Checkbox
                              checked={selectedUsers.includes(activity.id)}
                              onCheckedChange={(checked) =>
                                handleSelectUser(activity.id, !!checked)
                              }
                              aria-label={`Select user ${activity.id}`}
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {activity.timestamp}
                          </TableCell>
                          <TableCell>{activity.website}</TableCell>
                          <TableCell>
                            <div className="flex flex-col space-y-1">
                              <div className="flex items-center">
                                <span className="text-xs font-medium">IP:</span>
                                <span className="text-xs ml-1">
                                  {activity.ipAddress}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-xs font-medium">
                                  Vị trí:
                                </span>
                                <span className="text-xs ml-1">
                                  {activity.location}
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col space-y-1">
                              {activity.suspiciousActivities.map(
                                (item, index) => (
                                  <span
                                    key={index}
                                    className="inline-flex items-center text-xs"
                                  >
                                    <AlertTriangle className="h-3 w-3 mr-1 text-amber-500" />
                                    {item}
                                  </span>
                                ),
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={getConfidenceColor(
                                activity.confidenceScore,
                              )}
                            >
                              {activity.confidenceScore}%
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(activity.status)}
                          </TableCell>
                          <TableCell>
                            <span
                              className={getExpirationColor(activity.expiresIn)}
                            >
                              {activity.expiresIn} ngày
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Mở menu</span>
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="h-4 w-4 mr-2" />
                                  Xem chi tiết
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
                                  Xác nhận gian lận
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <XCircle className="h-4 w-4 mr-2" />
                                  Bỏ qua
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Flag className="h-4 w-4 mr-2" />
                                  Đánh dấu để xem xét
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="thresholds" className="mt-4">
          <FraudDetectionThresholds />
        </TabsContent>

        <TabsContent value="auto" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Phát hiện tự động</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nội dung phát hiện tự động sẽ được hiển thị ở đây.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="mt-4">
          <BehaviorAnalysis />
        </TabsContent>

        <TabsContent value="advanced" className="mt-4">
          <AdvancedBotDetection />
        </TabsContent>

        <TabsContent value="network" className="mt-4">
          <NetworkAnalysis />
        </TabsContent>

        <TabsContent value="ai" className="mt-4">
          <AIFraudDetection />
        </TabsContent>

        <TabsContent value="vietnam" className="mt-4">
          <VietnameseClickFraudDetection />
        </TabsContent>

        <TabsContent value="traffic" className="mt-4">
          <TrafficSourceAnalysis />
        </TabsContent>

        <TabsContent value="conversion" className="mt-4">
          <ConversionAnalysis />
        </TabsContent>

        <TabsContent value="biometrics" className="mt-4">
          <BehavioralBiometrics />
        </TabsContent>

        <TabsContent value="organized" className="mt-4">
          <OrganizedFraudAnalysis />
        </TabsContent>

        <TabsContent value="scoring" className="mt-4">
          <FraudScoreSystem />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default FraudDetectionPage;
