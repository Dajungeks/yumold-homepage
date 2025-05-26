import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Homepage from "@/pages/homepage";
import Dashboard from "@/pages/dashboard";
import Staff from "@/pages/staff";
import StaffFormNew from "@/pages/staff-form-new";
import StaffDetail from "@/pages/staff-detail";
import Customers from "@/pages/customers";
import Sales from "@/pages/sales";
import Modules from "@/pages/modules";
import AppLayout from "@/components/layouts/app-layout";
import { I18nProvider } from "@/lib/i18n";
import React from "react";

function Router() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/login" component={Landing} />
        <Route path="*" component={Homepage} />
      </Switch>
    );
  }

  return (
    <AppLayout>
      <Switch>
        {/* YUMOLD 메인 - YMV로 리다이렉트 */}
        <Route path="/" component={() => React.createElement(Dashboard, { region: "YMV" })} />
        <Route path="/yumold" component={() => React.createElement(Dashboard, { region: "YMV" })} />
        
        {/* YMV 베트남 지사 - YMV 클릭시 바로 대시보드 */}
        <Route path="/ymv" component={() => React.createElement(Dashboard, { region: "YMV" })} />
        <Route path="/ymv-staff" component={() => React.createElement(Staff, { region: "YMV" })} />
        <Route path="/ymv-staff/new" component={StaffFormNew} />
        <Route path="/ymv-staff/edit/:staffId" component={({ params }: any) => React.createElement(StaffFormNew, { staffId: params.staffId })} />
        <Route path="/ymv-staff/detail/:staffId" component={StaffDetail} />
        <Route path="/ymv-customers" component={() => React.createElement(Customers, { region: "YMV" })} />
        <Route path="/ymv-sales" component={() => React.createElement(Sales, { region: "YMV" })} />
        <Route path="/ymv-schedule" component={() => <div className="p-6"><h1 className="text-2xl font-bold">YMV 일정관리</h1><p className="text-gray-600 mt-2">일정관리 기능 개발 예정</p></div>} />
        
        {/* 기존 라우트들 (호환성 유지) */}
        <Route path="/staff" component={() => React.createElement(Staff, { region: "YMV" })} />
        <Route path="/customers" component={() => React.createElement(Customers, { region: "YMV" })} />
        <Route path="/customers/:id" component={React.lazy(() => import('./pages/customer-detail'))} />
        <Route path="/sales" component={() => React.createElement(Sales, { region: "YMV" })} />
        <Route path="/modules" component={Modules} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
