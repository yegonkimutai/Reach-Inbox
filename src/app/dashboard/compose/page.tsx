"use client";

import ComposeEmailModal from "@/components/ComposeEmailModal";

export default function ComposePage() {
  return (
    <div className="max-w-3xl mx-auto text-black">
      <h1 className="text-xl font-semibold mb-6">
        Compose New Email
      </h1>

      <ComposeEmailModal />
    </div>
  );
}
