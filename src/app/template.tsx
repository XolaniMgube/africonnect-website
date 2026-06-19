// A template re-mounts on every navigation (unlike layout), so this wrapper's
// entrance animation replays each time you land on a new page — giving a clear
// transition between pages. Nav/Footer live in layout.tsx and stay put.
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-enter">{children}</div>;
}
