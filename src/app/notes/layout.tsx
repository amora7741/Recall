import NoteSidebar from "@/components/NoteSidebar";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex size-full flex-col bg-muted md:flex-row">
      <NoteSidebar />

      <div className="flex-1 md:ml-64 lg:ml-80">{children}</div>
    </div>
  );
}
