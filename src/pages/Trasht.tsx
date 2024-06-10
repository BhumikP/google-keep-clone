import { clearStorage } from "@/utils/localStorageUtils";
import { toast } from "react-toastify";

function Trash() {
  const handleDelete = () => {
    clearStorage();
    toast.success("Notes deleted successfully");
  };
  return (
    <div className="text-2xl m-10">
      <button
        className="p-1 text-sm font-medium rounded-md bg-red-200 px-8 py-2"
        onClick={handleDelete}
      >
        Delete all Notes
      </button>
    </div>
  );
}

export default Trash;
