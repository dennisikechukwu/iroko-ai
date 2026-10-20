import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In · Iroko-AI Workspace",
  description:
    "Sign in to your tenant-isolated Iroko-AI regulatory compliance workspace.",
};

export default function LoginPage() {
  return <LoginForm />;
}
