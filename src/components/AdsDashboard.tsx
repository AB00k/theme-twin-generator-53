
import React, { useState } from 'react';
import AdMetricCard from './AdMetricCard';
import { Tag, DollarSign, ShoppingCart, BarChart, Percent, Users, TrendingUp, Filter, ArrowRight, Clock, Calendar, ExternalLink, List } from 'lucide-react';
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
  const [campaignDetails, setCampaignDetails] = useState(null);
  const [viewMode, setViewMode] = useState("optimize"); // "optimize" or "view"
  
  const platforms = [
    { 
      id: "noon", 
      name: "Noon Food", 
      color: "bg-yellow-400", 
      activeAds: 3, 
      spend: 120.5, 
      revenue: 110.4,
      roas: 0.92,
      campaigns: [
        { 
          id: 1, 
          name: "Breakfast Bundle", 
          budget: 50, 
          spend: 45.5, 
          status: "Active",
          roas: 0.95,
          revenue: 43.2,
          clicks: 156,
          views: 1890,
          newCustomers: 2,
          returningCustomers: 4,
          conversionRate: "12.5%",
          startDate: "May 1, 2023",
          endDate: "May 31, 2023"
        },
        { 
          id: 2, 
          name: "Weekend Special", 
          budget: 40, 
          spend: 35.2, 
          status: "Active",
          roas: 0.89,
          revenue: 31.3,
          clicks: 124,
          views: 1450,
          newCustomers: 1,
          returningCustomers: 3,
          conversionRate: "12.1%",
          startDate: "May 5, 2023",
          endDate: "May 25, 2023"
        },
        { 
          id: 3, 
          name: "New Menu Launch", 
          budget: 45, 
          spend: 39.8, 
          status: "Active",
          roas: 0.90,
          revenue: 35.9,
          clicks: 142,
          views: 1740,
          newCustomers: 1,
          returningCustomers: 2,
          conversionRate: "13.4%",
          startDate: "May 10, 2023",
          endDate: "June 10, 2023"
        }
      ]
    },
    { 
      id: "talabat", 
      name: "Talabat", 
      color: "bg-orange-500", 
      activeAds: 2, 
      spend: 90.7, 
      revenue: 95.2,
      roas: 1.05,
      campaigns: [
        { 
          id: 4, 
          name: "Family Deals", 
          budget: 55, 
          spend: 48.2, 
          status: "Active",
          roas: 1.1,
          revenue: 53.0,
          clicks: 180,
          views: 2200,
          newCustomers: 2,
          returningCustomers: 5,
          conversionRate: "14.2%",
          startDate: "May 5, 2023",
          endDate: "June 5, 2023"
        },
        { 
          id: 5, 
          name: "Lunch Specials", 
          budget: 42.5, 
          spend: 42.5, 
          status: "Active",
          roas: 0.99,
          revenue: 42.2,
          clicks: 155,
          views: 1850,
          newCustomers: 1,
          returningCustomers: 3,
          conversionRate: "12.9%",
          startDate: "May 12, 2023",
          endDate: "June 12, 2023"
        }
      ]
    },
    { 
      id: "deliveroo", 
      name: "Deliveroo", 
      color: "bg-teal-400", 
      activeAds: 3, 
      spend: 45.5, 
      revenue: 60.1,
      roas: 1.32,
      campaigns: [
        { 
          id: 6, 
          name: "Premium Dishes", 
          budget: 30, 
          spend: 15.5, 
          status: "Active",
          roas: 1.48,
          revenue: 23.0,
          clicks: 85,
          views: 980,
          newCustomers: 1,
          returningCustomers: 2,
          conversionRate: "15.3%",
          startDate: "May 15, 2023",
          endDate: "June 15, 2023"
        },
        { 
          id: 7, 
          name: "Quick Bites", 
          budget: 25, 
          spend: 20, 
          status: "Active",
          roas: 1.25,
          revenue: 25.0,
          clicks: 92,
          views: 1100,
          newCustomers: 1,
          returningCustomers: 2,
          conversionRate: "14.1%",
          startDate: "May 8, 2023",
          endDate: "June 8, 2023"
        },
        { 
          id: 8, 
          name: "Dessert Special", 
          budget: 20, 
          spend: 10, 
          status: "Active",
          roas: 1.21,
          revenue: 12.1,
          clicks: 45,
          views: 680,
          newCustomers: 0,
          returningCustomers: 1,
          conversionRate: "11.1%",
          startDate: "May 20, 2023",
          endDate: "June 20, 2023"
        }
      ]
    },
    { 
      id: "careem", 
      name: "Careem", 
      color: "bg-green-500", 
      activeAds: 1, 
      spend: 44.5, 
      revenue: 28.0,
      roas: 0.63,
      campaigns: [
        { 
          id: 9, 
          name: "First Order Discount", 
          budget: 44.5, 
          spend: 44.5, 
          status: "Active",
          roas: 0.63,
          revenue: 28.0,
          clicks: 160,
          views: 2250,
          newCustomers: 2,
          returningCustomers: 0,
          conversionRate: "10.0%",
          startDate: "May 1, 2023",
          endDate: "May 31, 2023"
        }
      ]
    }
  ];

  const totalBudget = platforms.reduce((sum, platform) => 
    sum + platform.campaigns.reduce((s, c) => s + c.budget, 0), 0);
  
  const totalSpend = platforms.reduce((sum, platform) => sum + platform.spend, 0);
  const remainingBudget = totalBudget - totalSpend;
  const budgetUtilization = totalBudget > 0 ? ((totalSpend / totalBudget) * 100).toFixed(0) : "0";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

      <Card className="mb-8 border-l-4 border-l-green-500 shadow-sm hover:shadow transition-shadow">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Performance Summary</h2>
              <p className="text-gray-500">ROAS is at 0.97x across all platforms with AED 293.40 in revenue from AED 301.2 spend.</p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-green-500 hover:bg-green-600">
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
                    {campaignDetails ? (
                      <div>
                        <Button 
                          variant="ghost" 
                          className="mb-4" 
                          onClick={() => setCampaignDetails(null)}
                        >
                          ← Back to campaign list
                        </Button>
                        
                        <Card className="overflow-hidden border border-gray-200">
                          <CardHeader className={`py-3 ${campaignDetails.platform.color} text-white`}>
                            <CardTitle className="text-base">{campaignDetails.name}</CardTitle>
                            <CardDescription className="text-white text-opacity-90">
                              {campaignDetails.platform.name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                                <div>
                                  <p className="text-gray-500">ROAS</p>
                                  <p className="font-semibold">{campaignDetails.roas}x</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Budget</p>
                                  <p className="font-semibold">AED {campaignDetails.budget}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Spend</p>
                                  <p className="font-semibold">AED {campaignDetails.spend}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Remaining</p>
                                  <p className="font-semibold">AED {(campaignDetails.budget - campaignDetails.spend).toFixed(1)}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Utilization</p>
                                  <p className="font-semibold">{((campaignDetails.spend / campaignDetails.budget) * 100).toFixed(0)}%</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Status</p>
                                  <p className="font-semibold text-green-600">{campaignDetails.status}</p>
                                </div>
                              </div>
                              
                              <div className="pt-4 border-t">
                                <h4 className="text-sm font-medium mb-3">Performance Details</h4>
                                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                                  <div>
                                    <p className="text-gray-500">Menu Views</p>
                                    <p className="font-semibold">{campaignDetails.views}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">Clicks</p>
                                    <p className="font-semibold">{campaignDetails.clicks}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">New Customers</p>
                                    <p className="font-semibold">{campaignDetails.newCustomers}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">Returning Customers</p>
                                    <p className="font-semibold">{campaignDetails.returningCustomers}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">Conversion Rate</p>
                                    <p className="font-semibold">{campaignDetails.conversionRate}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">Revenue</p>
                                    <p className="font-semibold">AED {campaignDetails.revenue}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4 border-t">
                                <h4 className="text-sm font-medium mb-3">Campaign Timeline</h4>
                                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                                  <div>
                                    <p className="text-gray-500">Start Date</p>
                                    <p className="font-semibold">{campaignDetails.startDate}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">End Date</p>
                                    <p className="font-semibold">{campaignDetails.endDate}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex gap-3 pt-4">
                                <Button variant="outline" className="flex-1">
                                  Adjust Budget
                                </Button>
                                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                                  Optimize
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ) : selectedCampaign ? (
                      <div>
                        <Button 
                          variant="ghost" 
                          className="mb-4" 
                          onClick={() => setSelectedCampaign(null)}
                        >
                          ← Back to platforms
                        </Button>
                        
                        <div className={`${platforms.find(p => p.id === selectedCampaign)?.color} py-3 px-4 rounded-t-lg text-white`}>
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">{platforms.find(p => p.id === selectedCampaign)?.name} Campaigns</h3>
                            <div className="text-xs">
                              <span className="opacity-90">ROAS: </span>
                              <span className="font-bold">{platforms.find(p => p.id === selectedCampaign)?.roas}x</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mt-4 max-h-[500px] overflow-y-auto pr-1">
                          {platforms.find(p => p.id === selectedCampaign)?.campaigns.map(campaign => {
                            const platform = platforms.find(p => p.id === selectedCampaign);
                            return (
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
                                      <p className="text-gray-500">ROAS</p>
                                      <p className="font-semibold">{campaign.roas}x</p>
                                    </div>
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
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="flex-1 text-xs"
                                      onClick={() => setCampaignDetails({...campaign, platform})}
                                    >
                                      <ExternalLink size={14} className="mr-1" />
                                      More Details
                                    </Button>
                                    <Button className="flex-1 bg-green-500 hover:bg-green-600 text-xs">
                                      Optimize
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="max-h-[500px] overflow-y-auto pr-1 grid grid-cols-1 gap-4">
                        {platforms.map((platform) => (
                          <Card key={platform.id} className={`border border-gray-200 hover:shadow-md ${platform.color} bg-opacity-10`}>
                            <CardContent className="p-4">
                              <div className="flex flex-col">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <div className={`${platform.color} w-3 h-3 rounded-full`}></div>
                                    <h3 className="font-medium">{platform.name}</h3>
                                  </div>
                                  <span className={`text-xs font-medium px-2 py-1 rounded ${platform.color} text-white`}>
                                    ROAS: {platform.roas}x
                                  </span>
                                </div>
                                
                                <div className="flex items-center justify-between text-sm mb-3">
                                  <div className="flex items-center gap-4 text-gray-700">
                                    <div>Active Ads: <span className="font-semibold">{platform.activeAds}</span></div>
                                    <div>Spend: <span className="font-semibold">AED {platform.spend}</span></div>
                                    <div>Revenue: <span className="font-semibold">AED {platform.revenue}</span></div>
                                  </div>
                                </div>
                                
                                <Button 
                                  size="sm"
                                  variant="outline" 
                                  className="w-full h-8 mt-1 bg-white hover:bg-gray-50"
                                  onClick={() => setSelectedCampaign(platform.id)}
                                >
                                  View {platform.name} Campaigns
                                  <ArrowRight size={14} className="ml-1" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 border-green-300 text-green-700 hover:bg-green-50">
                    <List size={18} />
                    <span>View All Running Campaigns</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>All Running Campaigns</SheetTitle>
                    <SheetDescription>
                      View all your active campaigns across platforms
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    {platforms.map((platform) => (
                      <div key={platform.id} className="space-y-3">
                        <div className={`${platform.color} py-2 px-3 rounded-md text-white flex justify-between items-center`}>
                          <h3 className="font-medium">{platform.name}</h3>
                          <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                            ROAS: {platform.roas}x
                          </span>
                        </div>
                        
                        <div className="space-y-3 ml-2">
                          {platform.campaigns.map((campaign) => (
                            <Card key={campaign.id} className="overflow-hidden border border-gray-200">
                              <CardContent className="p-3">
                                <div className="flex justify-between items-center mb-2">
                                  <h4 className="font-medium text-sm">{campaign.name}</h4>
                                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded">
                                    {campaign.status}
                                  </span>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                                  <div>
                                    <span className="text-gray-500">ROAS: </span>
                                    <span className="font-semibold">{campaign.roas}x</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Budget: </span>
                                    <span className="font-semibold">AED {campaign.budget}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Spend: </span>
                                    <span className="font-semibold">AED {campaign.spend}</span>
                                  </div>
                                </div>
                                
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1 mb-2">
                                  <div 
                                    className={`h-full ${platform.color}`}
                                    style={{ width: `${(campaign.spend / campaign.budget) * 100}%` }}
                                  ></div>
                                </div>
                                
                                <div className="flex text-xs text-gray-500 justify-between items-center">
                                  <div>
                                    <span>Clicks: </span>
                                    <span className="font-medium text-gray-700">{campaign.clicks}</span>
                                  </div>
                                  <div>
                                    <span>Customers: </span>
                                    <span className="font-medium text-gray-700">{campaign.newCustomers + campaign.returningCustomers}</span>
                                  </div>
                                  <div>
                                    <span>Conv: </span>
                                    <span className="font-medium text-gray-700">{campaign.conversionRate}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </CardContent>
      </Card>

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
