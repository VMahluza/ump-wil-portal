import StudentPortal from "@/components/Layouts/StudentPortal";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default async function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  );
}
