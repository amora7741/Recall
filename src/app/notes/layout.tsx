import NoteSidebar from "@/components/NoteSidebar";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col bg-muted md:flex-row">
      <NoteSidebar />

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
