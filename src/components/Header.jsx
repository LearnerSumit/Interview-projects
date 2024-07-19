
function Header({onChange}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-500 px-4 md:px-12 lg:px-12 xl:px-14">
      {/* logo container */}
      <div className="flex items-center gap-2">
        <div className="py-2 px-3 bg-primary text-dark-header rounded-full"><i className="ri-chat-3-fill text-xl"></i></div>
        <h4 className="hidden sm:block text-xl font-semibold">Dashboard</h4>
      </div>
      {/* right container */}
      <div className="flex gap-4 items-center">
        <img src="https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=z2tuWSfqvWQvucbL9nyjgHXIFvWqwE1CxwI7OoSk3sk=" className="w-8 h-8 rounded-full object-cover" alt="dp" />
      </div>
    </div>
  );
}

export default Header;
