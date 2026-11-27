import { Link, Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 px-6 py-5 text-white">
        <h1 className="text-2xl font-bold">
          BusGo Admin Panel
        </h1>
        <p className="mt-1 text-sm text-slate-300">
          Manage BusGo
        </p>
      </header>
      <nav className="flex flex-wrap gap-3 border-b bg-white px-6 py-4">
        <Link
          to="/admin/admindashboard"
          className="rounded-lg px-4 py-2 font-medium text-slate-700 hover:bg-blue-100 hover:text-blue-700"
        >
          Admin Dashboard
        </Link>
        <Link
          to="/admin/userdetails"
          className="rounded-lg px-4 py-2 font-medium text-slate-700 hover:bg-blue-100 hover:text-blue-700"
        >
          User Details
        </Link>
        <Link
          to="/admin/settings"
          className="rounded-lg px-4 py-2 font-medium text-slate-700 hover:bg-blue-100 hover:text-blue-700"
        >
          Settings
        </Link>
      </nav>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
    </div>
  )
}
export default AdminLayout