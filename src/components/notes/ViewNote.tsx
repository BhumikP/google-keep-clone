import { Dispatch, SetStateAction, useState } from "react";
import EditNote from "./EditNote";
import { Note } from "@/types/Notes";
import { ListData } from "../ListItems";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

interface Props {
  setNotesData: Dispatch<SetStateAction<Note[]>>;
}

const ViewNote = (props: Note & Props) => {
  const [openModal, setIsOpenModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    props?.bgColor || "FFFFFF"
  );

  const handleColorPicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
    props.setNotesData((prev) => {
      return prev.map((note) => {
        if (note.id === props.id) {
          return { ...note, bgColor: e.target.value };
        }
        return note;
      });
    });
  };

  return (
    <div
      className="relative rounded-md items-start min-h-[105px] cursor-pointer h-full gap-4 flex p-3 flex-col max-w-[240px] w-full hover:shadow-lg border border-solid border-gray-50"
      style={{ backgroundColor: selectedColor }}
      onClick={() => setIsOpenModal(true)}
    >
      <div className="absolute right-2 top-2 hover:bg-[#5f636827] opacity-70 p-1 rounded-full w-8 h-8">
        <div className="absolute right-1 top-[3px]">
          <ColorLensOutlinedIcon />
        </div>
        <input
          type="color"
          className="opacity-0 cursor-pointer z-10"
          value={selectedColor}
          onChange={(e) => handleColorPicker(e)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </div>
      <div className="flex justify-between w-full items-center">
        <div>{props.title || props.description}</div>
      </div>
      {!!props.title && <div>{props.description}</div>}
      {!!props.listItems && (
        <div>
          {" "}
          <ListData list={props.listItems} />
        </div>
      )}
      {openModal && (
        <EditNote
          {...props}
          isOpen={openModal}
          id={props.id}
          setNotesData={props.setNotesData}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </div>
  );
};

export default ViewNote;
