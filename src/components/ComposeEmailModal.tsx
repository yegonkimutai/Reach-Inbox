"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { X, Upload } from "lucide-react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function ComposeEmailPage() {
  const router = useRouter();

  /* ---------------- STATE ---------------- */
  const [recipients, setRecipients] = useState<string[]>([]);
  const [recipientInput, setRecipientInput] = useState("");
  const [subject, setSubject] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleAt, setScheduleAt] = useState("");

  /* ---------------- RICH TEXT EDITOR ---------------- */
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false,
  });

  /* ---------------- RECIPIENT HANDLING ---------------- */
const addRecipientFromInput = () => {
  if (
    recipientInput &&
    /\S+@\S+\.\S+/.test(recipientInput) &&
    !recipients.includes(recipientInput)
  ) {
    setRecipients([...recipients, recipientInput]);
    setRecipientInput("");
  }
};

  const removeRecipient = (email: string) => {
    setRecipients(recipients.filter((r) => r !== email));
  };

  const handleRecipientKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addRecipientFromInput();
    }
  };

  /* ---------------- ATTACHMENTS (DRAG & DROP) ---------------- */
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files: any) => setAttachments((prev) => [...prev, ...files]),
  });

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = () => {
    const payload = {
      recipients,
      subject,
      body: editor?.getHTML(),
      attachments,
      scheduleAt,
    };

    console.log("EMAIL PAYLOAD:", payload);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black">
      {/* ACTIONS */}
      <div className="flex justify-between gap-3 pt-4 border-t mb-4">
          <button
            className="px-4 py-2 border rounded-full text-2xl"
            onClick={() => router.back()}
          >
          🠔
          </button>
          <div className="flex gap-4">
                      <button
            className="px-4 py-2 bg-green-400 text-white rounded text-sm disabled:opacity-50"
            disabled={!recipients.length || !subject}
            onClick={handleSubmit}
          >
            Send Email
          </button>
                    <button
            className="px-4 py-2 bg-green-400 text-white rounded text-sm disabled:opacity-50"
            disabled={!recipients.length || !subject}
            onClick={() => setShowScheduleModal(true)}
          >
            Schedule Email
          </button>
          </div>
        </div>

      <div className="mx-auto max-w-6xl bg-white border rounded-lg shadow-sm p-6 space-y-4">

        {/* HEADER */}
        <h1 className="text-xl font-semibold">Compose New Email</h1>

        {/* TO FIELD */}
        <div className="border rounded px-3 py-2 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-500">To:</span>

          {recipients.map((email) => (
            <span
              key={email}
              className="bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1 text-sm"
            >
              {email}
              <button onClick={() => removeRecipient(email)}>
                <X size={14} />
              </button>
            </span>
          ))}

          <input
            className="flex-1 outline-none text-sm"
            placeholder="Type email and press Enter (to add more recipients)"
            value={recipientInput}
            onChange={(e) => setRecipientInput(e.target.value)}
            onKeyDown={handleRecipientKey}
          />

          <button
          type="button"
          onClick={addRecipientFromInput}
          className="text-xs text-green-600 hover:underline"
          >
            + Add Recipient
          </button>
        </div>

        {/* SUBJECT */}
        <input
          className="border px-3 py-2 rounded w-full"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        {/* BODY (RICH TEXT) */}
        <div className="border rounded p-3 min-h-62.5">
          <EditorContent editor={editor} />
        </div>

        {/* ATTACHMENTS */}
        <div
          {...getRootProps()}
          className="border-dashed border-2 rounded p-6 text-center cursor-pointer hover:bg-gray-50"
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            Drag & drop files here or click to upload
          </p>
        </div>

        {attachments.length > 0 && (
          <ul className="text-sm text-gray-600 list-disc ml-5">
            {attachments.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        )}

        {/* SCHEDULE */}
        {showScheduleModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6 space-y-4">

              {/* Header */}
              <h2 className="text-lg font-semibold">
                Schedule Email
              </h2>

              {/* Date Time Picker */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">
                  Select date & time
                </label>
                <input
                  type="datetime-local"
                  className="border rounded px-3 py-2 text-sm"
                  value={scheduleAt}
                  onChange={(e) => setScheduleAt(e.target.value)}
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  className="px-4 py-2 border rounded text-sm"
                  onClick={() => setShowScheduleModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="px-4 py-2 bg-green-600 text-white rounded text-sm disabled:opacity-50"
                  disabled={!scheduleAt}
                  onClick={() => {
                    handleSubmit();
                    setShowScheduleModal(false);
                  }}
                >
                  Confirm Schedule
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
