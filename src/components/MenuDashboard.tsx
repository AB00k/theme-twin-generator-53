import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Users, Image, FileText, CheckCircle, MapPin, Filter, ArrowUpDown, ArrowDown, ArrowUp, List, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const platformColors = {
  "All Platforms": "bg-orange-400",
  "Talabat": "text-orange-500",
  "Careem": "text-green-500",
  "Noon": "text-yellow-500",
  "Deliveroo": "text-cyan-500"
};

interface MenuPerformanceItem {
  name: string;
  sales: number;
  revenue: string;
  profit: string;
}

interface GeographyItem {
  name: string;
  sold: number;
}

interface LocationData {
  name: string;
  items: GeographyItem[];
}

const MenuDashboard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");
  const [activeTab, setActiveTab] = useState("top");
  const [selectedLocationCount, setSelectedLocationCount] = useState(2);
  
  const menuItems: MenuPerformanceItem[] = [
    { name: "Chicken Biryani", sales: 1320, revenue: "AED 72,600", profit: "AED 43,560" },
    { name: "Beef Burger", sales: 1200, revenue: "AED 54,000", profit: "AED 32,400" },
    { name: "Margherita Pizza", sales: 1120, revenue: "AED 44,800", profit: "AED 28,000" },
    { name: "Pasta Alfredo", sales: 1010, revenue: "AED 50,500", profit: "AED 30,300" },
    { name: "Grilled Salmon", sales: 910, revenue: "AED 68,250", profit: "AED 36,400" },
  ];
  
  const locationData: LocationData[] = [
    {
      name: "Downtown",
      items: [
        { name: "Chicken Biryani", sold: 320 },
        { name: "Beef Burger", sold: 280 },
        { name: "Margherita Pizza", sold: 250 },
      ]
    },
    {
      name: "Marina",
      items: [
        { name: "Grilled Salmon", sold: 210 },
        { name: "Margherita Pizza", sold: 190 },
        { name: "Pasta Alfredo", sold: 180 },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Menu Analytics</h1>
          <p className="text-gray-500">Performance insights across delivery platforms</p>
        </div>
        
        <div className="flex items-center mt-4 sm:mt-0">
          <Button 
            className={cn(
              "px-4 py-2 mr-4 text-white rounded-full", 
              selectedPlatform === "All Platforms" ? "bg-orange-400" : "bg-gray-200 text-gray-700"
            )}
            onClick={() => setSelectedPlatform("All Platforms")}
          >
            All Platforms
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
              <span className="text-sm">Talabat</span>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm">Careem</span>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
              <span className="text-sm">Noon</span>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-cyan-500 mr-2"></span>
              <span className="text-sm">Deliveroo</span>
            </div>
            
            <Button variant="outline" className="ml-4 flex items-center">
              <Users size={16} className="mr-2" />
              <span>Customer Segmentation</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MenuMetricCard 
          icon={<BarChart size={24} />} 
          title="Menu Conversion Rate" 
          value="70%" 
          progress={70} 
          iconBackground="bg-blue-500"
        />
        <MenuMetricCard 
          icon={<Image size={24} />} 
          title="Menu Items with Photos" 
          value="70%" 
          progress={70} 
          iconBackground="bg-red-500"
        />
        <MenuMetricCard 
          icon={<FileText size={24} />} 
          title="Menu Items with Descriptions" 
          value="80%" 
          progress={80} 
          iconBackground="bg-purple-500"
        />
        <MenuMetricCard 
          icon={<CheckCircle size={24} />} 
          title="Menu Completeness" 
          value="75%" 
          progress={75} 
          iconBackground="bg-green-500"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu Performance</h2>
              <Tabs defaultValue="top" className="w-[300px]" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="top" className="flex items-center">
                    <ArrowUp size={14} className="mr-1" />
                    Top Items
                  </TabsTrigger>
                  <TabsTrigger value="bottom" className="flex items-center">
                    <ArrowDown size={14} className="mr-1" />
                    Bottom Items
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Profit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.sales}</TableCell>
                    <TableCell>{item.revenue}</TableCell>
                    <TableCell>{item.profit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <MapPin size={20} className="text-purple-500 mr-2" />
                <h2 className="text-xl font-bold">Menu Geography Trends</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Select 
                  value={selectedLocationCount.toString()} 
                  onValueChange={(value) => setSelectedLocationCount(parseInt(value))}
                >
                  <SelectTrigger className="w-[130px] h-8">
                    <SelectValue placeholder="Location count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Area</SelectItem>
                    <SelectItem value="2">2 Areas</SelectItem>
                    <SelectItem value="3">3 Areas</SelectItem>
                    <SelectItem value="4">4 Areas</SelectItem>
                  </SelectContent>
                </Select>
                
                <ToggleGroup type="single" size="sm" variant="outline">
                  <ToggleGroupItem value="grid" aria-label="Grid view">
                    <ChevronUp size={16} />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" aria-label="List view">
                    <ChevronDown size={16} />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            
            <div className="space-y-6">
              {locationData.slice(0, selectedLocationCount).map((location, locationIndex) => (
                <div key={locationIndex} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    {location.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-gray-700">{item.name}</span>
                        </div>
                        <div className="flex items-center">
                          <Progress value={(item.sold / 320) * 100} className="h-2 w-24 mr-3" />
                          <span className="text-purple-500 font-medium">{item.sold} sold</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 border-t border-gray-200 pt-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <List size={18} className="mr-2" />
            <h2 className="text-xl font-bold">Complete Menu Analysis</h2>
          </div>
          <ArrowDown size={20} />
        </div>
        
        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded">
          View Complete Menu Analysis
        </Button>
      </div>
    </div>
  );
};

interface MenuMetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  progress: number;
  iconBackground?: string;
}

const MenuMetricCard = ({ icon, title, value, progress, iconBackground = "bg-blue-500" }: MenuMetricCardProps) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={cn("rounded-full p-3 text-white mr-3", iconBackground)}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2">{value}</h3>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuDashboard;
