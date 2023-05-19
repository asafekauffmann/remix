import { redirect } from '@remix-run/node';

import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import { getStoredNotes, storeNotes } from '~/data/notes';


export default function NotesPage() {
  return (
    <main>
      <NewNote />   
      <NoteList />     
    </main>
  );
}

export async function action({request}) {
  const formData = await request.formData();    // await for a call request for a data
  const noteData = Object.fromEntries(formData); 

  // Add Validation 
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');

}

export function links() { 
  return [...newNoteLinks(), ...noteListLinks()];
}

/* 
  another example for to do noteData 
    const noteData = {
    title: formData.get('title'),
    content: formData.get('content'),
  };
*/ 


