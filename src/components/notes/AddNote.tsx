import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { Note } from "@/types/Notes";
import AddOrEditNote from "./AddOrEditNote";
import { Checklist } from "@mui/icons-material";
import { Tooltip } from "../common/Tooltip";

interface Props {
  setNotesData: Dispatch<SetStateAction<Note[]>>;
  totalNotes: Note[];
}

const AddNote = ({ setNotesData, totalNotes }: Props) => {
  const [isExpandedView, setIsExpandedView] = useState(false);
  const [isList, setIsList] = useState(false);
  const onClose = () => {
    setIsExpandedView(false);
  };

  const handleOpenNotesBox = (
    e: MouseEvent<HTMLDivElement | SVGSVGElement>,
    type: boolean
  ) => {
    e.stopPropagation();
    setIsExpandedView(true);
    if (type) {
      setIsList(true);
    } else {
      setIsList(false);
    }
  };

  return (
    <div
      className={`${
        isExpandedView ? "ease-out" : "ease-in"
      } transition-all duration-300`}
    >
      {isExpandedView ? (
        <div
          className={`rounded-lg border border-solid border-gray-100 overflow-hidden shadow-dark-shadow max-w-[600px] w-full mx-auto my-0 `}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpandedView(true);
          }}
        >
          <AddOrEditNote
            isOpen={isExpandedView}
            totalNotes={totalNotes.length}
            listItems={[]}
            setNotesData={setNotesData}
            onClose={onClose}
            isListType={isList}
          />
        </div>
      ) : (
        <div
          className={`rounded-lg bg-transparent flex justify-between border text-dark-gray-100 p-3 font-medium border-solid border-gray-100 overflow-hidden shadow-dark-shadow max-w-[600px] w-full mx-auto my-0 `}
          onClick={(e) => handleOpenNotesBox(e, false)}
        >
          <p>Take a note...</p>
          <Tooltip direction="left" message="Create your checklist">
            <Checklist
              className="cursor-pointer"
              onClick={(e) => handleOpenNotesBox(e, true)}
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default AddNote;
