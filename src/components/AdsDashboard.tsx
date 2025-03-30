
import React, { useState } from 'react';
import AdMetricCard from './AdMetricCard';
import { Tag, DollarSign, ShoppingCart, BarChart, Percent, Users, TrendingUp, Filter, ArrowRight, Clock, Calendar } from 'lucide-react';
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
  SheetClose,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AdsDashboard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  
  const platforms = [
    { 
      id: "noon", 
      name: "Noon Food", 
      color: "bg-yellow-400", 
      activeAds: 3, 
      spend: 120.5, 
      revenue: 110.4,
      campaigns: [
        { id: 1, name: "Breakfast Bundle", budget: 50, spend: 45.5, status: "Active" },
        { id: 2, name: "Weekend Special", budget: 40, spend: 35.2, status: "Active" },
        { id: 3, name: "New Menu Launch", budget: 45, spend: 39.8, status: "Active" }
      ]
    },
    { 
      id: "talabat", 
      name: "Talabat", 
      color: "bg-orange-500", 
      activeAds: 2, 
      spend: 90.7, 
      revenue: 95.2,
      campaigns: [
        { id: 4, name: "Family Deals", budget: 55, spend: 48.2, status: "Active" },
        { id: 5, name: "Lunch Specials", budget: 42.5, spend: 42.5, status: "Active" }
      ]
    },
    { 
      id: "deliveroo", 
      name: "Deliveroo", 
      color: "bg-teal-400", 
      activeAds: 3, 
      spend: 45.5, 
      revenue: 60.1,
      campaigns: [
        { id: 6, name: "Premium Dishes", budget: 30, spend: 15.5, status: "Active" },
        { id: 7, name: "Quick Bites", budget: 25, spend: 20, status: "Active" },
        { id: 8, name: "Dessert Special", budget: 20, spend: 10, status: "Active" }
      ]
    },
    { 
      id: "careem", 
      name: "Careem", 
      color: "bg-green-500", 
      activeAds: 1, 
      spend: 44.5, 
      revenue: 28.0,
      campaigns: [
        { id: 9, name: "First Order Discount", budget: 44.5, spend: 44.5, status: "Active" }
      ]
    }
  ];

  // Calculate total budget, spend and remaining
  const totalBudget = platforms.reduce((sum, platform) => 
    sum + platform.campaigns.reduce((s, c) => s + c.budget, 0), 0);
  
  const totalSpend = platforms.reduce((sum, platform) => sum + platform.spend, 0);
  const remainingBudget = totalBudget - totalSpend;
  const budgetUtilization = totalBudget > 0 ? ((totalSpend / totalBudget) * 100).toFixed(0) : "0";

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
              <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Campaign Optimization</SheetTitle>
                  <SheetDescription>
                    Optimize your ads across different delivery platforms
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {selectedCampaign ? (
                    <div>
                      <Button 
                        variant="ghost" 
                        className="mb-4" 
                        onClick={() => setSelectedCampaign(null)}
                      >
                        ← Back to platforms
                      </Button>
                      
                      <div className={`${platforms.find(p => p.id === selectedCampaign)?.color} py-3 px-4 rounded-t-lg text-white`}>
                        <h3 className="font-semibold text-lg">{platforms.find(p => p.id === selectedCampaign)?.name} Campaigns</h3>
                      </div>
                      
                      <div className="space-y-4 mt-4">
                        {platforms.find(p => p.id === selectedCampaign)?.campaigns.map(campaign => (
                          <Card key={campaign.id} className="overflow-hidden border border-gray-200">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-medium">{campaign.name}</h4>
                                <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                                  {campaign.status}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                                <div>
                                  <p className="text-gray-500">Budget</p>
                                  <p className="font-semibold">AED {campaign.budget}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Spend</p>
                                  <p className="font-semibold">AED {campaign.spend}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Remaining</p>
                                  <p className="font-semibold">AED {(campaign.budget - campaign.spend).toFixed(1)}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Utilization</p>
                                  <p className="font-semibold">{((campaign.spend / campaign.budget) * 100).toFixed(0)}%</p>
                                </div>
                              </div>
                              
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                  Adjust Budget
                                </Button>
                                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                                  Optimize
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ) : (
                    platforms.map((platform) => (
                      <Card key={platform.id} className="overflow-hidden border border-gray-200">
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
                          <Button 
                            variant="outline" 
                            className="w-full text-sm h-8"
                            onClick={() => setSelectedCampaign(platform.id)}
                          >
                            View {platform.name} Campaigns
                            <ArrowRight size={14} className="ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AdMetricCard 
          icon={<TrendingUp size={24} />}
          label="ROAS"
          value="0.97X"
          iconBackground="bg-blue-500"
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

      {/* Budget and Spend Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Ad Spend Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Ad Spend</CardTitle>
            <CardDescription>Total spent this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">AED {totalSpend.toFixed(1)}</h2>
              <div className="text-sm text-right">
                <div className="text-gray-500">Budget: AED {totalBudget.toFixed(1)}</div>
                <div className="flex items-center gap-1">
                  <span>Budget utilization</span>
                  <span className="text-green-500">{budgetUtilization}%</span>
                </div>
              </div>
            </div>
            
            {/* Simplified sample chart */}
            <div className="bg-gray-100 rounded-lg h-36 w-full flex items-end p-4 gap-2">
              {[10, 15, 20, 12, 8, 25, 18, 22, 30, 20, 15, 35].map((h, i) => (
                <div 
                  key={i} 
                  className="bg-red-200 hover:bg-red-300 rounded-t w-full" 
                  style={{ height: `${h * 2}px` }}
                ></div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ads Budget Card */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl">
              <span>Ads Budget</span>
              <div className="bg-purple-100 p-1 rounded-full">
                <DollarSign size={16} className="text-purple-500" />
              </div>
            </CardTitle>
            <CardDescription>Budget Utilization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-500">Budget Used</span>
                <span className="text-sm font-medium">{budgetUtilization}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 rounded-full" 
                  style={{ width: `${budgetUtilization}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm text-gray-500">Total Budget</h3>
                <p className="text-xl font-bold">AED {totalBudget.toFixed(1)}</p>
              </div>
              <div className="text-right">
                <h3 className="text-sm text-gray-500">Spent</h3>
                <p className="text-xl font-bold">AED {totalSpend.toFixed(1)}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <div>
                  <h3 className="text-sm text-gray-500">Remaining Budget</h3>
                  <p className="font-semibold">AED {remainingBudget.toFixed(1)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-400" />
                <div>
                  <h3 className="text-sm text-gray-500">Days Left This Month</h3>
                  <p className="font-semibold">3</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Recommended Daily Budget</p>
              <p className="text-purple-600 font-bold text-xl">AED {(remainingBudget / 3).toFixed(1)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Metrics - Live Ads & Others */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdMetricCard 
          icon={<Tag size={24} />}
          label="Currently Live Ads"
          value="9"
          iconBackground="bg-blue-500"
        />
        <AdMetricCard 
          icon={<DollarSign size={24} />}
          label="Ads Spend"
          value={`AED ${totalSpend.toFixed(1)}`}
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
    </div>
  );
};

export default AdsDashboard;

