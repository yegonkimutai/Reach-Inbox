type Email = {
  email: string;
  subject: string;
  scheduledTime: string;
  status: string;
};

export default function ScheduledEmailsTable({
  emails,
}: {
  emails: Email[];
}) {
  if (emails.length === 0) {
    return (
      <div className="bg-white p-10 text-center border rounded-lg text-gray-500">
        No scheduled emails
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
          {emails.map((email, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{email.email}</td>
              <td className="p-3">{email.subject}</td>
              <td className="p-3">{email.scheduledTime}</td>
              <td className="p-3">
                <span className="text-yellow-600">
                  {email.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
