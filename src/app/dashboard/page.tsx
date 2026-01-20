"use client"

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ScheduledEmailsTable from "@/components/ScheduledEmailsTable"
import SentEmailsTable from "@/components/SentEmailsTable";
import Button from "@/components/Button";
import ComposeEmailModal from "@/components/ComposeEmailModal";
import { useRouter } from "next/navigation";

type Section = "scheduled" | "sent";

export default function DashboardPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<Section>("scheduled")
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onChange={setActiveSection}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Emails</h1>
          <Button onClick={() => router.push("/dashboard/compose")}>
            + Compose New Email
          </Button>
        </div>

        {activeSection === "scheduled" && (
          <ScheduledEmailsTable emails={[]} />
        )}

        {activeSection === "sent" && (
          <SentEmailsTable emails={[]} />
        )}

        {open && <ComposeEmailModal/>}
      </div>
    </div>
  );
}
