"use client";

export default function ComposeEmailModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-150 p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Compose New Email</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <input
          placeholder="Subject"
          className="w-full border rounded px-3 py-2 text-sm"
        />

        <textarea
          placeholder="Email body"
          rows={6}
          className="w-full border rounded px-3 py-2 text-sm"
        />

        <input type="file" className="text-sm" />

        <div className="grid grid-cols-3 gap-3">
          <input type="datetime-local" className="border p-2 text-sm rounded" />
          <input placeholder="Delay (sec)" className="border p-2 text-sm rounded" />
          <input placeholder="Hourly limit" className="border p-2 text-sm rounded" />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm bg-green-600 text-white rounded">
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
