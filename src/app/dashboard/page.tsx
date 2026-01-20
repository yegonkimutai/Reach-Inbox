import EmptyState from "@/components/EmptyState";
import Button from "@/components/Button";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Scheduled Emails
        </h1>

        <Button>+ Compose New Email</Button>
      </div>

      {/* Table or Empty */}
      <EmptyState
        title="No scheduled emails"
        description="Create a new email campaign to get started."
      />
    </div>
  );
}
