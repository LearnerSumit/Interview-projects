import ToggleButton from "./ToggleBtn";

function Header() {
  return (
    <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-500 px-4 md:px-12 lg:px-12 xl:px-14">
      <div className="flex items-center gap-2">
        <div className="py-2 px-3 bg-primary text-dark-header rounded-full"><i className="ri-chat-3-fill text-xl"></i></div>
        <h4 className="hidden sm:block text-xl font-semibold">Dashboard</h4>
      </div>
      <div className="flex gap-4 items-center">
        <ToggleButton/>
        <img src="https://media.istockphoto.com/id/1358997053/photo/young-man-stock-phooto.webp?b=1&s=170667a&w=0&k=20&c=3ep7AiiAkSDdVQrLn09iRTb8uPxOynGFYfCKmoMPebI=" className="w-8 h-8 rounded-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default Header;
