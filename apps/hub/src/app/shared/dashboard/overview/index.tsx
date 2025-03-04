import StudiesReport from "@/app/shared/dashboard/overview/studies-report";
import StudyStats from "@/app/shared/dashboard/overview/study-stats";
// import StorageSummary from "@/app/shared/file/dashboard/storage-summary";
// import RecentFiles from "@/app/shared/file/dashboard/recent-files";
// import QuickAccess from "@/app/shared/file/dashboard/quick-access";
import ActivityReport from "@/app/shared/dashboard/overview/activity-report";
import Members from "@/app/shared/dashboard/overview/members";
// import FileListTable from "@/app/shared/file/dashboard/file-list/table";
// import UpgradeStorage from "@/app/shared/file/dashboard/upgrade-storage";
import RecentActivities from "@/app/shared/dashboard/overview/recent-activities";

export default function OverviewDashboard() {
  return (
    <div className="@container">
      <StudyStats className="mb-5 2xl:mb-8" />

      <div className="grid grid-cols-1 gap-6 @container lg:grid-cols-12 2xl:gap-8 ">
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-8 2xl:gap-8 3xl:col-span-9">
          {/* <QuickAccess /> */}
          {/* <RecentFiles /> */}
          {/* <ActivityReport /> */}
          {/* <FileListTable /> */}
          <StudiesReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" />
        </div>

        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />
          {/* <Members /> */}
          {/* <UpgradeStorage /> */}
        </div>

      </div>
        <div className="mb-6 grid grid-cols-1 gap-6 @4xl:grid-cols-12 2xl:mb-8 2xl:gap-8">
          {/* <StudiesReport className="@container @4xl:col-span-8 @[96.937rem]:col-span-9" /> */}
          {/* <StorageSummary className="@4xl:col-span-4 @[96.937rem]:col-span-3" /> */}
          {/* <RecentActivities /> */}
        </div>
    </div>
  );
}
