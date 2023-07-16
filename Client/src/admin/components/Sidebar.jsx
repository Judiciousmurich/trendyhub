export const Sidebar = () => {
  return (
    <div className="w-[15%] bg-black min-h-[90vh] py-4">
      <div className="h-full text-white pl-4  flex flex-col gap-4 cursor-pointer">
        <div className="flex items-center gap-2">
          Dashboard
        </div>
        <div className="flex items-center gap-2">
          Products
        </div>
        <div className="flex items-center gap-2">
        </div>
        <div className="flex items-center gap-2">
          Users
        </div>

      </div>
    </div>
  );
};
