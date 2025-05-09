// src/components/NoteCard.tsx
type Props = { title: string; excerpt: string };

export default function NoteCard({ title, excerpt }: Props) {
  return (
    <div className="p-3 bg-white border rounded hover:shadow cursor-pointer">
      <h2 className="font-medium">{title}</h2>
      <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
        {excerpt}
      </p>
    </div>
  );
}
