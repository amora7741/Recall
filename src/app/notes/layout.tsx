import NoteSidebar from "@/components/NoteSidebar";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex size-full flex-col bg-muted md:flex-row">
      <NoteSidebar />

      <div className="flex-1">{children}</div>
    </div>
  );
}
