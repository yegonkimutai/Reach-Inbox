import { EmailRecord } from "@/types/email";

type Props = {
  emails: EmailRecord[];
  loading?: boolean;
};

export default function ScheduledEmailsTable({
  emails,
  loading = false,
}: Props) {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">Loading scheduled emails...</p>
      </div>
    );
  }

  if (!emails.length) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-500">
          No scheduled emails yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-3">Email</th>
            <th className="p-3">Subject</th>
            <th className="p-3">Scheduled Time</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id} className="border-t">
              <td className="p-3">{email.email}</td>
              <td className="p-3">{email.subject}</td>
              <td className="p-3">
              {new Date(email.scheduledAt).toLocaleString()}
              </td>
              <td className="p-3">
                <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-700">
                  Scheduled
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
