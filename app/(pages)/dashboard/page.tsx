import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import ChartCard from "@/components/dashboard/ChartCard";

export default function Dashboard() {
  
  return (
    <DashboardLayout>
      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <StatCard title="Shipped Orders" value={67} color="bg-blue-500" />

        <StatCard title="Pending Orders" value={9} color="bg-pink-500" />

        <StatCard title="New Orders" value={35} color="bg-purple-500" />
      </div>

      {/* Dashboard Content */}
      <div className="grid md:grid-cols-2 gap-6">
        <ActivityCard />
        <ChartCard />
      </div>
    </DashboardLayout>
  );
}
