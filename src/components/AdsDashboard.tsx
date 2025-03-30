
import React, { useState } from 'react';
import AdMetricCard from './AdMetricCard';
import { Tag, DollarSign, ShoppingCart, BarChart, Percent, Users, TrendingUp, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AdsDashboard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  
  const platforms = [
    { id: "noon", name: "Noon Food", color: "bg-yellow-400", activeAds: 3, spend: 120.5, revenue: 110.4 },
    { id: "talabat", name: "Talabat", color: "bg-orange-500", activeAds: 2, spend: 90.7, revenue: 95.2 },
    { id: "deliveroo", name: "Deliveroo", color: "bg-teal-400", activeAds: 3, spend: 45.5, revenue: 60.1 },
    { id: "careem", name: "Careem", color: "bg-green-500", activeAds: 1, spend: 44.5, revenue: 28.0 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with better controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4 sm:mb-0">Performance Overview</h1>
        
        <div className="flex gap-4 items-center">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px] border-red-200">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
            <SelectTrigger className="w-[180px] border-red-200">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="noon">Noon Food</SelectItem>
              <SelectItem value="talabat">Talabat</SelectItem>
              <SelectItem value="deliveroo">Deliveroo</SelectItem>
              <SelectItem value="careem">Careem</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="flex items-center gap-2 hover:bg-red-50 border-red-200">
            <Filter size={16} />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      {/* Performance Insight Card */}
      <Card className="mb-8 border-l-4 border-l-green-500 shadow-sm hover:shadow transition-shadow">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Performance Summary</h2>
              <p className="text-gray-500">ROAS is at 0.97x across all platforms with AED 293.40 in revenue from AED 301.2 spend.</p>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-red-500 hover:bg-red-600">
                  Optimize Campaigns
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Campaign Optimization</SheetTitle>
                  <SheetDescription>
                    Optimize your ads across different delivery platforms
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {platforms.map((platform) => (
                    <Card key={platform.id} className="overflow-hidden">
                      <CardHeader className={`${platform.color} py-3 text-white`}>
                        <CardTitle className="text-base">{platform.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="grid grid-cols-3 gap-2 text-sm mb-4">
                          <div>
                            <p className="text-gray-500">Active Ads</p>
                            <p className="font-semibold">{platform.activeAds}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Spend</p>
                            <p className="font-semibold">AED {platform.spend}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Revenue</p>
                            <p className="font-semibold">AED {platform.revenue}</p>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full text-sm h-8">
                          Optimize {platform.name} Campaigns
                          <ArrowRight size={14} className="ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AdMetricCard 
          icon={<Tag size={24} />}
          label="Currently Live Ads"
          value="4"
          iconBackground="bg-blue-500"
        />
        <AdMetricCard 
          icon={<DollarSign size={24} />}
          label="Ads Spend"
          value="AED 301.2"
          iconBackground="bg-orange-400"
        />
        <AdMetricCard 
          icon={<ShoppingCart size={24} />}
          label="Marketing Orders"
          value="4"
          iconBackground="bg-purple-500"
        />
        <AdMetricCard 
          icon={<DollarSign size={24} />}
          label="Marketing Revenue"
          value="AED 293.40"
          iconBackground="bg-green-500"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdMetricCard 
          icon={<TrendingUp size={24} />}
          label="ROAS"
          value="0.97X"
          iconBackground="bg-blue-400"
        />
        <AdMetricCard 
          icon={<Percent size={24} />}
          label="Conversion Rate"
          value="2.90%"
          iconBackground="bg-red-500"
        />
        <AdMetricCard 
          icon={<Users size={24} />}
          label="New Customers"
          value="4"
          iconBackground="bg-gray-600"
        />
        <AdMetricCard 
          icon={<DollarSign size={24} />}
          label="Avg CAC"
          value="AED 75.3"
          iconBackground="bg-yellow-500"
        />
      </div>
    </div>
  );
};

export default AdsDashboard;
