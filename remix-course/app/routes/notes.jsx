import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import { getStoredNotes, storeNotes } from '~/data/notes';


export default function NotesPage() {
  return (
    <main>
      <NewNote />        
    </main>
  );
}

export async function action({request}) {
  const formData = await request.formData(); // await for a call request for a data
  const noteData = Object.fromEntries(formData); 
  // Add Validation 
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  storeNotes(updatedNotes);




/* 
  another example for to do noteData 
    const noteData = {
    title: formData.get('title'),
    content: formData.get('content'),
};*/ 
}

export function links() { 
  return [...newNoteLinks()];
} 