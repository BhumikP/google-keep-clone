import NotesIcon from "@mui/icons-material/LightbulbOutlined";
import RemindersIcon from "@mui/icons-material/NotificationsNone";
import ArchiveIcon from "@mui/icons-material/ArchiveOutlined";
import TrashIcon from "@mui/icons-material/DeleteOutlined";

const sideMenuItems = [
  {
    title: "Notes",
    icon: <NotesIcon />,
    link: "/notes",
  },
  {
    title: "Reminders",
    icon: <RemindersIcon />,
    link: "/reminders",
  },
  {
    title: "Archive",
    icon: <ArchiveIcon />,
    link: "/archive",
  },
  {
    title: "Trash",
    icon: <TrashIcon />,
    link: "/trash",
  },
];

export default sideMenuItems;
