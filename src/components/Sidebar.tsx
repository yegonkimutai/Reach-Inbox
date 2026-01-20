import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="p-4 font-bold text-lg border-b">
        ReachInbox
      </div>

      <nav className="flex-1 p-4 space-y-2 text-sm">
        <Link
          href="/dashboard"
          className="block px-3 py-2 rounded bg-green-50 text-green-700"
        >
          📬 Scheduled Emails
        </Link>

        <Link
          href="/dashboard/sent"
          className="block px-3 py-2 rounded hover:bg-gray-100"
        >
          ✅ Sent Emails
        </Link>
      </nav>
    </aside>
  );
}
