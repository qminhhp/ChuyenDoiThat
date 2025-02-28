import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

interface Website {
  id: string;
  name: string;
  url: string;
  status: "active" | "warning" | "inactive";
  fraudRate: number;
  totalTraffic: number;
}

interface WebsiteSelectorProps {
  websites?: Website[];
  onSelectWebsite?: (websiteId: string) => void;
  selectedWebsiteId?: string;
}

const WebsiteSelector = ({
  websites = defaultWebsites,
  onSelectWebsite = () => {},
  selectedWebsiteId,
}: WebsiteSelectorProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "warning":
        return "bg-amber-500";
      case "inactive":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getFraudRateColor = (rate: number) => {
    if (rate > 10) return "text-red-500";
    if (rate > 5) return "text-amber-500";
    return "text-green-500";
  };

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Chọn trang web</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {websites.map((website) => (
            <div
              key={website.id}
              className={`flex items-center justify-between p-3 rounded-md border ${selectedWebsiteId === website.id ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50 cursor-pointer"}`}
              onClick={() => onSelectWebsite(website.id)}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${getStatusColor(website.status)}`}
                ></div>
                <div>
                  <div className="font-medium">{website.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {website.url}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div
                    className={`text-sm font-medium ${getFraudRateColor(website.fraudRate)}`}
                  >
                    {website.fraudRate}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Tỷ lệ gian lận
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full mt-2">
            <Globe className="mr-2 h-4 w-4" />
            Quản lý trang web
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const defaultWebsites: Website[] = [
  {
    id: "1",
    name: "example.com",
    url: "https://example.com",
    status: "active",
    fraudRate: 2.5,
    totalTraffic: 25000,
  },
  {
    id: "2",
    name: "shop.example.com",
    url: "https://shop.example.com",
    status: "active",
    fraudRate: 3.8,
    totalTraffic: 18000,
  },
  {
    id: "3",
    name: "blog.example.com",
    url: "https://blog.example.com",
    status: "warning",
    fraudRate: 7.2,
    totalTraffic: 12000,
  },
  {
    id: "4",
    name: "store.example.com",
    url: "https://store.example.com",
    status: "inactive",
    fraudRate: 12.5,
    totalTraffic: 8000,
  },
];

export default WebsiteSelector;
