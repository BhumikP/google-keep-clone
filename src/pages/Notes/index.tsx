import { useEffect, useMemo, useState } from "react";
import { getItemFromStorage } from "@/utils/localStorageUtils";
import { Note } from "@/types/Notes";
import AddNote from "@/components/notes/AddNote";
import NoteSection from "@/components/notes/NoteSection";
import EmptyNotesCard from "@/components/notes/EmptyNotesCard";

const Notes = () => {
  const [notesData, setNotesData] = useState<Note[]>([]);

  const notes: Note[] = getItemFromStorage("notes", []);

  useEffect(() => {
    setNotesData(notes);
  }, []);

  const memoizedNotes = useMemo(() => notesData, [notesData]);

  const onDragNote = async (dragIndex: number, hoverIndex: number) => {
    const updatedItems = Array.from(memoizedNotes);
    const [movedItem] = updatedItems.splice(dragIndex, 1);

    updatedItems.splice(hoverIndex, 0, movedItem);
    setNotesData(updatedItems);
  };

  return (
    <div className="pt-8">
      <AddNote totalNotes={notesData} setNotesData={setNotesData} />
      <div className="max-w-[1040px] w-full mx-auto my-0">
        <NoteSection
          setNotesData={setNotesData}
          notes={memoizedNotes}
          onDragNote={onDragNote}
        />
      </div>
      {notesData.length === 0 && <EmptyNotesCard />}
    </div>
  );
};

export default Notes;
