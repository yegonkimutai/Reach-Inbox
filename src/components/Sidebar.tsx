"use client";

type Props = {
  activeSection: "scheduled" | "sent";
  onChange: (section: "scheduled" | "sent") => void;
};

export default function Sidebar({ activeSection, onChange }: Props) {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-lg font-semibold mb-6">ReachInbox</h2>

      <nav className="space-y-2">
        <button
          onClick={() => onChange("scheduled")}
          className={`w-full text-left px-3 py-2 rounded text-sm font-medium
            ${
              activeSection === "scheduled"
                ? "bg-green-100 text-green-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          Scheduled Emails
        </button>

        <button
          onClick={() => onChange("sent")}
          className={`w-full text-left px-3 py-2 rounded text-sm font-medium
            ${
              activeSection === "sent"
                ? "bg-green-100 text-green-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          Sent Emails
        </button>
      </nav>
    </aside>
  );
}
