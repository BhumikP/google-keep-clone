export interface ListItem {
  id: number;
  text: string;
  checked: boolean;
}

export interface Note {
  description?: string;
  title: string;
  id: string;
  bgColor?: string;
  listItems?: ListItem[];
}

export type AddNotePayload = Omit<Note, "id"> & {
  created_by: string;
  sortOrder: number;
};

export type EditNotePayload = Omit<Note, "id"> & { isPinned: boolean };
