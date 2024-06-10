import  { Dispatch, SetStateAction } from "react";
import { Note } from "@/types/Notes";
import Modal from "../common/Modal";
import AddOrEditNote from "./AddOrEditNote";

interface Props extends Note {
  isOpen: boolean;
  onClose: () => void;
  setNotesData: Dispatch<SetStateAction<Note[]>>;
}

const EditNote = (props: Props) => {
  return (
    <Modal isOpen={props.isOpen}>
      <AddOrEditNote {...props} isListType={ props.listItems && props.listItems.length>0?true:false} />
    </Modal>
  );
};

export default EditNote;
