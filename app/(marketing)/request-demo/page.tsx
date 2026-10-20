import type { Metadata } from "next";
import { DemoBookingForm } from "@/components/marketing/DemoBookingForm";

export const metadata: Metadata = {
  title: "Start 30-Day Pilot · Iroko-AI",
  description:
    "Request a free 30-day guided pilot of Iroko-AI for your Microfinance Bank, Fintech, or SEC-regulated institution.",
};

export default function RequestDemoPage() {
  return <DemoBookingForm />;
}
