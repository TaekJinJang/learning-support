import { Navbar } from "@/components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main
        className="pt-4 px-4 sm:px-6 lg:px-8"
        role="main"
        aria-label="대시보드 콘텐츠"
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
