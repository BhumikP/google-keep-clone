import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import useOutsideClick from "@/hooks/useOutsideClick";
import {
  getItemFromStorage,
  setItemInStorage,
} from "@/utils/localStorageUtils";
import { ListItem, Note } from "@/types/Notes";
import Input from "../common/Input";
import { ListData } from "../ListItems";
import { Add } from "@mui/icons-material";
import { Tooltip } from "../common/Tooltip";
import { COLOR_WHITE } from "@/utils/constant";

interface Props {
  onClose: () => void;
  id?: string;
  setNotesData: Dispatch<SetStateAction<Note[]>>;
  isOpen: boolean;
  totalNotes?: number;
  title?: string;
  bgColor?: string;
  description?: string;
  isListType: boolean;
  listItems?: ListItem[] | undefined;
}

const AddOrEditNote = ({
  onClose,
  id,
  setNotesData,
  isOpen,
  title = "",
  description = "",
  listItems = [],
  bgColor = COLOR_WHITE,
  isListType = false,
}: Props) => {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [list, setList] = useState<ListItem[]>([]);
  const [newItemText, setNewItemText] = useState("");

  const notes: Note[] = getItemFromStorage("notes", []);

  useOutsideClick(containerRef, () => {
    if (isOpen) {
      onClose();
      setFormData({
        title: "",
        description: "",
      });
    }
  });

  useEffect(() => {
    if (id) {
      setFormData({ title, description });
      setList(listItems);
    }
  }, [id]);

  useEffect(() => {
    if (listItems.length > 0) {
      setList(listItems);
    }
  }, []);

  const handleCheckboxChange = (id: number) => {
    setList((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );

      const checkedItem = updatedItems.find((item) => item.id === id);
      if (checkedItem) {
        if (checkedItem.checked) {
          updatedItems.push(
            ...updatedItems.splice(updatedItems.indexOf(checkedItem), 1)
          );
        }
      }

      return updatedItems;
    });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSave = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!!formData.title || !!formData.description || list.length > 0) {
      if (id) {
        const editIndex = notes.findIndex((note) => note.id === id);
        const newNotes = notes;
        newNotes[editIndex] = { ...formData, id: id };
        console.log("updated notes", newNotes);

        setItemInStorage("notes", newNotes);
        setNotesData([...newNotes]);
        toast.success("Note edited successfully!");
      } else {
        let payload: Note = {
          ...formData,
          id: crypto.randomUUID(),
        };
        if (isListType && list.length > 0) {
          payload = {
            ...payload,
            listItems: list,
          };
        }
        notes.push(payload);
        localStorage.setItem("notes", JSON.stringify(notes));
        if (notes) {
          setNotesData([...notes]);
        }
        onClose();
      }
    }

    onClose();
  };

  const addItemToList = (
    e:
      | MouseEvent<HTMLInputElement | HTMLButtonElement | SVGSVGElement>
      | KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (newItemText) {
      const listData = list;
      listData.push({
        id: Number(list.length + 1),
        text: newItemText,
        checked: false,
      });
      setList(listData);
      setNewItemText("");
    } else {
      toast.error("Please add an item to list");
    }
  };

  return (
    <div
      className="flex flex-col items-start p-1 rounded-md"
      ref={containerRef}
      style={{ background: bgColor }}
    >
      <div className="flex justify-between w-full items-center bg-transparent">
        <Input
          name="title"
          placeholder="Title"
          value={formData.title}
          className="!border-none w-full shadow-none"
          onChange={(e) => onInputChange(e)}
        />
        <div
          className="cursor-pointer"
          onClick={() =>
            setFormData((pre) => ({
              ...pre,
            }))
          }
        ></div>
      </div>
      {isListType ? (
        <div className="pt-2 w-full outline-none pl-2 bg-transparent">
          <div className="flex items-center gap-4">
            <Tooltip direction="right" message="click to add">
              <Add className="cursor-pointer" onClick={addItemToList} />
            </Tooltip>
            <Input
              name="item"
              placeholder="List item"
              value={newItemText}
              className="!border-none w-full shadow-none"
              onChange={(e) => setNewItemText(e.target.value)}
              autoFocus
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  addItemToList(e);
                }
              }}
            />
          </div>
          <ListData
            className="my-3 bg-transparent"
            list={list}
            onChangeBox={handleCheckboxChange}
          />
        </div>
      ) : (
        <textarea
          name="description"
          placeholder="Take a note..."
          autoFocus
          onInput={(event: FormEvent<HTMLTextAreaElement>) => {
            const target = event.currentTarget;
            target.style.height = target.scrollHeight + "px";
          }}
          value={formData.description}
          className="!border-none shadow-none pt-2 w-full outline-none pl-2 bg-transparent"
          onChange={(e) =>
            setFormData((pre) => ({ ...pre, description: e.target.value }))
          }
        />
      )}
      <div className="w-full flex justify-end gap-2 items-center mt-2 p-2">
        <button
          className="p-1 text-sm font-medium rounded-md border border-gray-200 px-6 py-2 border-solid"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Cancel
        </button>
        <button
          className="p-1 text-sm font-medium rounded-md bg-light-yellow-300 px-8 py-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddOrEditNote;
