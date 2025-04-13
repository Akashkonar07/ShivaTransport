import React from 'react';
import { Truck, Package, Clock, ArrowRight, Sun, Moon } from 'lucide-react';

const IconTest = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Icon Test</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-2 border rounded">
          <Truck className="w-10 h-10 text-blue-500" />
          <span className="mt-2 text-sm">Truck</span>
        </div>
        <div className="flex flex-col items-center p-2 border rounded">
          <Package className="w-10 h-10 text-green-500" />
          <span className="mt-2 text-sm">Package</span>
        </div>
        <div className="flex flex-col items-center p-2 border rounded">
          <Clock className="w-10 h-10 text-red-500" />
          <span className="mt-2 text-sm">Clock</span>
        </div>
        <div className="flex flex-col items-center p-2 border rounded">
          <ArrowRight className="w-10 h-10 text-purple-500" />
          <span className="mt-2 text-sm">Arrow</span>
        </div>
        <div className="flex flex-col items-center p-2 border rounded">
          <Sun className="w-10 h-10 text-yellow-500" />
          <span className="mt-2 text-sm">Sun</span>
        </div>
        <div className="flex flex-col items-center p-2 border rounded">
          <Moon className="w-10 h-10 text-gray-500" />
          <span className="mt-2 text-sm">Moon</span>
        </div>
      </div>
    </div>
  );
};

export default IconTest; 