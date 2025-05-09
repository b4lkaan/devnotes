// src/pages/Home.tsx
import NoteCard from '../components/NoteCard';
import NoteEditor from '../components/NoteEditor';

export default function Home() {
  // For now, static placeholders; later these become dynamic from Supabase
  const dummyNotes = [
    { id: '1', title: 'First Note', excerpt: 'Lorem ipsum dolor sit…' },
    { id: '2', title: 'Shopping List', excerpt: '- Milk\n- Eggs\n- Bread' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Notes list */}
      <div className="col-span-1 space-y-2 overflow-auto">
        {dummyNotes.map((note) => (
          <NoteCard key={note.id} title={note.title} excerpt={note.excerpt} />
        ))}
      </div>

      {/* Editor */}
      <div className="col-span-2">
        <NoteEditor />
      </div>
    </div>
  );
}
