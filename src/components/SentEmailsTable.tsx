type Email = {
  email: string;
  subject: string;
  sentTime: string;
  status: "sent" | "failed";
};

export default function SentEmailsTable({
  emails,
}: {
  emails: Email[];
}) {
  if (emails.length === 0) {
    return (
      <div className="bg-white p-10 text-center border rounded-lg text-gray-500">
        No sent emails
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
            <th className="p-3">Sent Time</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{email.email}</td>
              <td className="p-3">{email.subject}</td>
              <td className="p-3">{email.sentTime}</td>
              <td className="p-3">
                <span
                  className={
                    email.status === "sent"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
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
