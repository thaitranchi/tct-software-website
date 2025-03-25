import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">TCT Softwares</h1>
        </Link>
        <div>
          <Link href="/auth" className="mr-4">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
