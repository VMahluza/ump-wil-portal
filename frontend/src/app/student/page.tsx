import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import React from "react";
import StudentProfileCard from "@/components/Students/cards/StudentProfileCard";
import InternshipDetailsCard from "@/components/Students/cards/InternshipDetailsCard";
import PerformanceStatsCard from "@/components/Students/cards/PerformanceStatsCard";
import TasksAndNotifications from "@/components/Students/cards/TasksAndNotifications";
import OtherDashboardSection from "@/components/Students/cards/OtherDashboardSection";

export const metadata: Metadata = {
  title: "Student Portal Home",
  description: "",
};

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Student Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Profile Card */}
        <StudentProfileCard />
        {/* Internship Details Card */}
        <InternshipDetailsCard />

        {/* Performance Stats Card */}
        <PerformanceStatsCard />

        {/* Tasks and Notifications */}
        <TasksAndNotifications />

        {/* Other Dashboard Section */}
        <OtherDashboardSection />
      </div>
    </div>
  );
}
