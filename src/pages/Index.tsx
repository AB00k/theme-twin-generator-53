
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AdsDashboard from '@/components/AdsDashboard';
import MenuDashboard from '@/components/MenuDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Tabs defaultValue="ads" className="w-full">
        <div className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TabsList className="bg-transparent h-14 justify-start">
              <TabsTrigger value="ads" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-red-500 rounded-none h-14 px-6">
                Ads Performance
              </TabsTrigger>
              <TabsTrigger value="menu" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-red-500 rounded-none h-14 px-6">
                Menu Analytics
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="ads">
          <AdsDashboard />
        </TabsContent>
        <TabsContent value="menu">
          <MenuDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
