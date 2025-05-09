import { NoteSidebar } from "@/components/NoteSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <NoteSidebar />

      <div>
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
