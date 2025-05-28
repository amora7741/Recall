import NoteSidebar from "@/components/NoteSidebar";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <NoteSidebar />

      <div className="flex-1 overflow-y-auto bg-muted">{children}</div>
    </div>
  );
}
