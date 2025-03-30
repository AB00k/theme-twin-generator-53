
import React from 'react';
import AdMetricCard from './AdMetricCard';
import { Tag, DollarSign, ShoppingCart, BarChart, Percent, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdsDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-red-500 mb-4 sm:mb-0">Ads Performance</h1>
        <Button className="flex items-center gap-2 bg-gray-100 text-gray-900 hover:bg-gray-200">
          <BarChart size={16} />
          <span>View All Running Campaigns</span>
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">Campaign Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdMetricCard 
              icon={<Tag size={24} />}
              label="Currently Live Ads"
              value="12"
              change="+3"
              iconBackground="bg-blue-500"
            />
            <AdMetricCard 
              icon={<DollarSign size={24} />}
              label="Ads Spend"
              value="AED 54250"
              change="+12%"
              iconBackground="bg-orange-400"
            />
            <AdMetricCard 
              icon={<DollarSign size={24} />}
              label="Marketing Revenue"
              value="AED 233750"
              change="+18%"
              iconBackground="bg-green-500"
            />
            <AdMetricCard 
              icon={<ShoppingCart size={24} />}
              label="Marketing Orders"
              value="892"
              change="+24"
              iconBackground="bg-purple-500"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdMetricCard 
              icon={<BarChart size={24} />}
              label="ROAS"
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
              label="Avg CAC"
              value="AED 178.45"
              change="-8%"
              iconBackground="bg-orange-400"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdsDashboard;
