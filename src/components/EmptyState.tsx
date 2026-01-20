export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg border p-12 text-center">
      <p className="font-medium mb-2">{title}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
