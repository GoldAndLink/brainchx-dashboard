import OverviewDashboard from "@/app/shared/dashboard/overview";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject(),
};

export default function OverviewDashboardPage() {
  return <OverviewDashboard />;
}
