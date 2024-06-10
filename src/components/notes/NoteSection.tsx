import { Dispatch, SetStateAction, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ViewNote from "./ViewNote.tsx";
import DraggableItem from "../common/DragItem.tsx";
import { Note } from "@/types/Notes.ts";
import { setItemInStorage } from "@/utils/localStorageUtils.tsx";

interface Props {
  notes: Note[];
  setNotesData: Dispatch<SetStateAction<Note[]>>;
  showTitle?: boolean;
  onDragNote: (dragIndex: number, hoverIndex: number) => void;
}

const NoteSection = ({ setNotesData, notes, onDragNote }: Props) => {
  useEffect(() => {
    if(notes){
      setItemInStorage("notes", notes);
    }
  },[notes])

  if (notes.length === 0) return null;

  return (
    <div className="flex flex-col items-start pt-[60px]">
      <div className="flex flex-wrap gap-2 mt-2 w-full justify-start items-start">
        <DndProvider backend={HTML5Backend}>
          {notes.map((note, index) => (
            <DraggableItem
              key={note.id}
              id={note.id}
              index={index}
              moveItem={onDragNote}
            >
              <ViewNote key={note.id} {...note} setNotesData={setNotesData} />
            </DraggableItem>
          ))}
        </DndProvider>
      </div>
    </div>
  );
};

export default NoteSection;
