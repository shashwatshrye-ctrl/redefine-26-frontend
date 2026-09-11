import type { Metadata } from "next";
import SectionPage from "@/components/Layout/SectionPage";
import AuthPortal from "@/components/Auth/AuthPortal";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <SectionPage hideRegisterButton>
      <AuthPortal />
    </SectionPage>
  );
}
