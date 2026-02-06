import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Compass,
    BookOpen,
    Briefcase,
    Settings,
    LogOut,
    Bell,
    Search,
    User
} from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: FileText, label: 'Assessments', path: '/assessment' },
        { icon: Compass, label: 'Career Paths', path: '/recommendations' },
        { icon: BookOpen, label: 'Resources', path: '/resources' },
        { icon: Briefcase, label: 'Jobs', path: '/jobs' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                        <Compass size={20} />
                    </div>
                    <span className="text-lg font-bold text-slate-800">AI Career</span>
                </div>

                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                    ? 'bg-primary-50 text-primary-600'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                }`
                            }
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-6">
                <button
                    onClick={() => window.location.href = '/login'}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 w-full"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

const Header = ({ title }) => {
    return (
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
            <h1 className="text-xl font-bold text-slate-800">{title}</h1>

            <div className="flex items-center gap-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-slate-50 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 w-64"
                    />
                </div>

                <button className="relative p-2 text-slate-400 hover:text-primary-600 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                    <div className="text-right">
                        <p className="text-sm font-bold text-slate-800">Emily Johnson</p>
                        <p className="text-xs text-slate-500">Student</p>
                    </div>
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" alt="Avatar" />
                    </div>
                </div>
            </div>
        </header>
    );
};

const Layout = ({ children, title }) => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />
            <div className="pl-64">
                <Header title={title} />
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
