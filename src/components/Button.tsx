export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
      {children}
    </button>
  );
}
