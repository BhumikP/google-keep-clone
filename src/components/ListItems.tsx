import { FC } from "react";
import { ListItem } from "@/types/Notes";

interface ListProps {
  list: ListItem[];
  onChangeBox?: (id: number) => void;
  className?: string;
}

export const ListData: FC<ListProps> = ({ list, className, onChangeBox }) => (
  <ul className={className}>
    {list.map((item) => (
      <li
        key={item.id}
        className={`flex justify-start gap-3 items-center ${
          item.checked ? "line-through" : ""
        }`}
      >
        <input
          type="checkbox"
          name={item.text}
          checked={item.checked}
          onChange={() => onChangeBox && onChangeBox(item.id)}
        />
        <p className="text-base relative bottom-[2px]"> {item.text}</p>
      </li>
    ))}
  </ul>
);
