
import React from 'react';
import AdMetricCard from './AdMetricCard';
import { Tag, DollarSign, ShoppingCart, BarChart, Percent, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdsDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4 sm:mb-0">Ads Performance</h1>
        
        <div className="flex gap-4">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="flex items-center gap-2 bg-gray-100 text-gray-900 hover:bg-gray-200">
            <BarChart size={16} />
            <span>View Campaigns</span>
          </Button>
        </div>
      </div>

      {/* Summary Card */}
      <Card className="mb-8 border-l-4 border-l-green-500">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your ads are performing well!</h2>
              <p className="text-gray-500">ROAS is at 4.3x (↑ 0.5) with AED 233,750 in revenue from AED 54,250 spend.</p>
            </div>
            <Button className="bg-green-500 hover:bg-green-600">
              Optimize Campaigns
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">Campaign Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdMetricCard 
              icon={<Tag size={24} />}
              label="Active Campaigns"
              value="12"
              change="+3"
              iconBackground="bg-blue-500"
            />
            <AdMetricCard 
              icon={<DollarSign size={24} />}
              label="Total Ad Spend"
              value="AED 54,250"
              change="+12%"
              iconBackground="bg-orange-400"
            />
            <AdMetricCard 
              icon={<DollarSign size={24} />}
              label="Total Revenue"
              value="AED 233,750"
              change="+18%"
              iconBackground="bg-green-500"
            />
            <AdMetricCard 
              icon={<ShoppingCart size={24} />}
              label="Orders Generated"
              value="892"
              change="+24"
              iconBackground="bg-purple-500"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">Key Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdMetricCard 
              icon={<BarChart size={24} />}
              label="Return on Ad Spend"
              value="4.3x"
              change="+0.5"
              iconBackground="bg-blue-400"
            />
            <AdMetricCard 
              icon={<Percent size={24} />}
              label="Conversion Rate"
              value="2.7%"
              change="-0.3%"
              iconBackground="bg-red-500"
            />
            <AdMetricCard 
              icon={<Users size={24} />}
              label="New Customers"
              value="304"
              change="+15%"
              iconBackground="bg-gray-600"
            />
            <AdMetricCard 
              icon={<DollarSign size={24} />}
              label="Cost per Customer"
              value="AED 178.45"
              change="-8%"
              iconBackground="bg-green-500"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdsDashboard;
