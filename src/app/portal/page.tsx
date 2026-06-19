import { redirect } from "next/navigation";

// Client portal is disabled for now. To re-enable, restore the implementation
// below and un-comment the "Client login" links in Nav.tsx and Footer.tsx.
export default function PortalPage() {
  redirect("/");
}

/*
import type { Metadata } from "next";
import Portal from "@/components/Portal";

export const metadata: Metadata = {
  title: "Client Portal — AfriConnect",
  description:
    "Log in to track your project, view files and invoices, and message your AfriConnect team.",
};

export default function PortalPage() {
  return (
    <main>
      <Portal />
    </main>
  );
}
*/
