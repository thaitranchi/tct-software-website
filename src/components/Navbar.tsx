export default function Navbar() {
    return (
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TCT Softwares</h1>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Services</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    );
  }
  