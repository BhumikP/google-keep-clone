const EmptyNotesCard = () => {
  return (
    <div className="flex flex-col gap-3 text-center max-w-[300px] w-full mt-16 mx-auto my-0 rounded-md border border-gray-200 shadow-md p-5">
      <div className="text-dark-gray-100 font-medium text-lg">
        No Notes Added
      </div>
      <div className="text-dark-gray-100">
        Add some Notes for quick reminder
      </div>
    </div>
  );
};

export default EmptyNotesCard;
