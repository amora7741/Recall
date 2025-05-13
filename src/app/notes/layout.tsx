import NoteSidebar from "@/components/NoteSidebar";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex size-full">
      <NoteSidebar />

      <div className="flex-1">{children}</div>
    </div>
  );
}
