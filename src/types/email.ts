export type EmailStatus = "scheduled" | "sent" | "failed"

export interface EmailRecord {
    id: string;
    email: string;
    subject: string;
    scheduledAt: string;
    status: EmailStatus;
}
