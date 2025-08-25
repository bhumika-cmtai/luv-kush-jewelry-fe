import { Sidebar } from "@/components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (

        <div className="min-h-screen bg-gray-100">
          <Sidebar />

          <main className="ml-64 flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      );
}