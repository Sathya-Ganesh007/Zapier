"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Plus, 
  MoreVertical, 
  X, 
  Maximize2, 
  Undo2, 
  Redo2, 
  Search, 
  Play, 
  Send,
  MessageCircle,
  FolderOpen,
  ChevronDown
} from "lucide-react";

export default function Dashboard() {
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <div className="flex flex-col h-screen bg-[#f7f7f7] text-[#1a1c20] antialiased overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center px-4 h-14 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 border-r pr-4 border-gray-200">
            <Search className="w-4 h-4" />
            <span>Search</span>
            <span className="text-[10px] bg-gray-100 px-1 rounded border border-gray-200">Ctrl F</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
              <Undo2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
              <Redo2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 gap-2 text-gray-600 font-medium">
            <Play className="w-4 h-4" />
            Test run
          </Button>
          <Button size="sm" className="h-8 bg-[#1a1c20] hover:bg-black text-white px-4 font-medium rounded-md">
            Publish
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Main Canvas Area */}
        <div className="flex-1 relative overflow-auto bg-white" 
             style={{ 
               backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', 
               backgroundSize: '24px 24px' 
             }}>
          
          <div className="flex flex-col items-center pt-24 pb-32 min-w-[800px]">
            {/* Step 1: Trigger Node */}
            <div className={`w-[360px] bg-white border-2 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer ${selectedStep === 1 ? 'border-[#4f46e5]' : 'border-gray-200'}`}
                 onClick={() => setSelectedStep(1)}>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded">
                    <span className="text-xl">📁</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Google Drive</h3>
                    <p className="text-xs text-gray-500">1. Select the event</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </Button>
              </div>
            </div>

            {/* Connector */}
            <div className="h-12 w-[2px] bg-gray-200 relative">
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#4f46e5] hover:border-[#4f46e5] hover:bg-gray-50 transition-all shadow-sm">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Step 2: Action Node */}
            <div className={`w-[360px] bg-white border-2 border-dashed rounded-xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer ${selectedStep === 2 ? 'border-[#4f46e5]' : 'border-gray-200'}`}
                 onClick={() => setSelectedStep(2)}>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                    <Plus className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-1 rounded border border-gray-100">Action</span>
                    <p className="text-xs text-gray-500 mt-0.5">2. Select the event for your Zap to run</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </Button>
              </div>
            </div>

             {/* Connector Bottom */}
             <div className="h-12 w-[2px] bg-gray-200 relative">
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#4f46e5] hover:border-[#4f46e5] hover:bg-gray-50 transition-all shadow-sm">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Left Controls */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <Button variant="secondary" size="sm" className="bg-white border border-gray-200 shadow-sm gap-2 text-xs font-semibold px-4 h-9">
              <FolderOpen className="w-4 h-4" />
              Library
            </Button>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-[420px] bg-white border-l border-gray-200 flex flex-col z-20 shadow-xl overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center bg-gray-50 rounded text-sm">📁</div>
              <h2 className="font-bold text-sm">1. Select the event</h2>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                <Maximize2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex border-b border-gray-100">
            <button className="flex-1 py-3 text-xs font-bold border-b-2 border-[#4f46e5] text-[#1a1c20]">Setup</button>
            <button className="flex-1 py-3 text-xs font-bold text-gray-400 hover:text-gray-600">Test</button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* App Selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-wider flex items-center gap-1">
                App <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white group hover:border-gray-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded">📁</div>
                  <span className="text-sm font-medium">Google Drive</span>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-xs font-bold text-[#4f46e5] border-[#4f46e5]/20 hover:bg-[#4f46e5]/5">
                  Change
                </Button>
              </div>
            </div>

            {/* Trigger Event Selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">
                Trigger event <span className="text-red-500">*</span>
              </label>
              <Button variant="outline" className="w-full justify-between h-12 text-sm font-normal border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                Choose an event
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </Button>
            </div>

            {/* Account Connection */}
            <div className="space-y-2 pt-2">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">
                Account <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white group hover:border-gray-300 transition-colors">
                <span className="text-sm text-gray-400">Connect Google Drive</span>
                <Button variant="default" size="sm" className="h-8 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-bold rounded">
                  Sign in
                </Button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Google Drive is a secure partner with Zapier. <a href="#" className="text-[#4f46e5] hover:underline">Your credentials are encrypted and can be removed at any time.</a> You can <a href="#" className="text-[#4f46e5] hover:underline">manage all of your connected accounts here.</a>
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-gray-100">
            <Button className="w-full h-12 bg-gray-100 hover:bg-gray-200 text-gray-400 font-bold border-none cursor-not-allowed">
              To continue, choose an event
            </Button>
          </div>
        </aside>
      </div>

      {/* Float Chat Button */}
      <button className="fixed bottom-6 right-[440px] w-12 h-12 bg-[#1a1c20] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-30">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
