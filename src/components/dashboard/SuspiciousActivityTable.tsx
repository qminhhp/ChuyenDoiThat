import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

interface SuspiciousActivity {
  id: string;
  timestamp: string;
  source: string;
  ipAddress: string;
  behavior: string;
  confidenceScore: number;
  status: "pending" | "confirmed" | "dismissed";
}

interface SuspiciousActivityTableProps {
  activities?: SuspiciousActivity[];
  onViewDetails?: (id: string) => void;
  onFlagActivity?: (id: string) => void;
  onConfirmFraud?: (id: string) => void;
  onDismissFraud?: (id: string) => void;
}

const SuspiciousActivityTable = ({
  activities = defaultActivities,
  onViewDetails = () => {},
  onFlagActivity = () => {},
  onConfirmFraud = () => {},
  onDismissFraud = () => {},
}: SuspiciousActivityTableProps) => {
  const [filter, setFilter] = useState<string>("all");

  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((activity) => activity.status === filter);

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

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Hoạt động đáng ngờ
        </h2>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Filter className="h-4 w-4" />
                Lọc:{" "}
                {filter === "all"
                  ? "Tất cả"
                  : filter === "pending"
                    ? "Đang chờ"
                    : filter === "confirmed"
                      ? "Đã xác nhận"
                      : "Đã bỏ qua"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilter("all")}>
                Tất cả
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("pending")}>
                Đang chờ
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("confirmed")}>
                Đã xác nhận
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("dismissed")}>
                Đã bỏ qua
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Table>
        <TableCaption>
          Danh sách các hoạt động đáng ngờ được phát hiện gần đây trong hệ
          thống.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thời gian</TableHead>
            <TableHead>Nguồn</TableHead>
            <TableHead>Địa chỉ IP</TableHead>
            <TableHead>Hành vi đáng ngờ</TableHead>
            <TableHead>Độ tin cậy</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead className="text-right">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredActivities.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                Không tìm thấy hoạt động đáng ngờ nào
              </TableCell>
            </TableRow>
          ) : (
            filteredActivities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">
                  {activity.timestamp}
                </TableCell>
                <TableCell>{activity.source}</TableCell>
                <TableCell>{activity.ipAddress}</TableCell>
                <TableCell className="max-w-xs truncate">
                  <div className="flex items-center gap-1">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    {activity.behavior}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={getConfidenceColor(activity.confidenceScore)}
                  >
                    {activity.confidenceScore}%
                  </Badge>
                </TableCell>
                <TableCell>{getStatusBadge(activity.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => onViewDetails(activity.id)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Xem chi tiết
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => onFlagActivity(activity.id)}
                      >
                        <Flag className="mr-2 h-4 w-4" />
                        Đánh dấu để xem xét
                      </DropdownMenuItem>
                      {activity.status === "pending" && (
                        <>
                          <DropdownMenuItem
                            onClick={() => onConfirmFraud(activity.id)}
                          >
                            <CheckCircle className="mr-2 h-4 w-4 text-red-500" />
                            Xác nhận gian lận
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => onDismissFraud(activity.id)}
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Bỏ qua
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

// Default mock data
const defaultActivities: SuspiciousActivity[] = [
  {
    id: "1",
    timestamp: "2023-06-15 08:23:45",
    source: "Ứng dụng di động",
    ipAddress: "203.113.148.87",
    behavior: "Nhiều lượt chuyển đổi nhanh từ cùng một thiết bị",
    confidenceScore: 87,
    status: "pending",
  },
  {
    id: "2",
    timestamp: "2023-06-15 09:12:33",
    source: "Website",
    ipAddress: "113.161.72.105",
    behavior: "Mẫu vị trí địa lý bất thường",
    confidenceScore: 65,
    status: "confirmed",
  },
  {
    id: "3",
    timestamp: "2023-06-14 23:45:12",
    source: "API",
    ipAddress: "42.112.34.201",
    behavior: "Phát hiện mẫu nhấp chuột giống bot",
    confidenceScore: 92,
    status: "pending",
  },
  {
    id: "4",
    timestamp: "2023-06-14 18:33:27",
    source: "Website",
    ipAddress: "171.244.10.58",
    behavior: "Nguồn giới thiệu đáng ngờ",
    confidenceScore: 45,
    status: "dismissed",
  },
  {
    id: "5",
    timestamp: "2023-06-14 14:22:09",
    source: "Ứng dụng di động",
    ipAddress: "14.161.22.155",
    behavior: "Nhiều lần cố gắng tạo tài khoản",
    confidenceScore: 78,
    status: "pending",
  },
];

export default SuspiciousActivityTable;
