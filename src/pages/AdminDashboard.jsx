import React from 'react';
import Layout from '../components/Layout';
import {
    Users,
    FileText,
    Target,
    Briefcase,
    TrendingUp,
    TrendingDown,
    ArrowUpRight,
    ChevronRight,
    MoreVertical,
    Search
} from 'lucide-react';

// Simplified Chart Mock because setting up full Chart.js requires more boilerplate
const ChartBox = ({ title, children, subtitle }) => (
    <div className="card h-full">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h4 className="font-bold text-slate-800">{title}</h4>
                {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
            </div>
            <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical size={18} />
            </button>
        </div>
        <div className="relative h-64 flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
            {children}
        </div>
    </div>
);

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Users', value: '12,450', change: '+350 this week', icon: Users, color: 'bg-blue-500', trend: 'up' },
        { label: 'Assessments Taken', value: '8,230', change: '+120 this week', icon: FileText, color: 'bg-white', trend: 'up' },
        { label: 'Career Matches Made', value: '4,580', change: '+90 this week', icon: Target, color: 'bg-white', trend: 'up' },
        { label: 'Active Job Listings', value: '320', change: '+15 this week', icon: Briefcase, color: 'bg-white', trend: 'up' },
    ];

    return (
        <Layout title="Admin Dashboard">
            <div className="max-w-7xl mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`card ${stat.color === 'bg-blue-500' ? 'bg-primary-500 text-white border-none' : ''}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 rounded-lg ${stat.color === 'bg-blue-500' ? 'bg-white/20' : 'bg-slate-50 text-slate-600'}`}>
                                    <stat.icon size={20} />
                                </div>
                                {stat.trend === 'up' && <ArrowUpRight size={16} className={stat.color === 'bg-blue-500' ? 'text-white' : 'text-green-500'} />}
                            </div>
                            <h3 className={`text-2xl font-bold mb-1 ${stat.color === 'bg-blue-500' ? 'text-white' : 'text-slate-900'}`}>{stat.value}</h3>
                            <p className={`text-sm font-medium mb-1 ${stat.color === 'bg-blue-500' ? 'text-primary-100' : 'text-slate-500'}`}>{stat.label}</p>
                            <p className={`text-[10px] font-bold ${stat.color === 'bg-blue-500' ? 'text-white/80' : 'text-primary-600'}`}>{stat.change}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Main Chart area */}
                    <div className="lg:col-span-2">
                        <ChartBox title="Career Trend Analytics" subtitle="Monthly Interest Trends (6 Months)">
                            <div className="text-slate-400 text-sm italic">
                                {/* Mock Line Chart Visualization */}
                                <svg viewBox="0 0 400 150" className="w-full h-full p-4">
                                    <path d="M0,120 Q50,110 100,80 T200,60 T300,90 T400,40" fill="none" stroke="#3b82f6" strokeWidth="3" />
                                    <path d="M0,130 Q50,120 100,100 T200,90 T300,110 T400,70" fill="none" stroke="#a78bfa" strokeWidth="3" />
                                    <circle cx="100" cy="80" r="4" fill="#3b82f6" />
                                    <circle cx="300" cy="90" r="4" fill="#3b82f6" />
                                </svg>
                                <div className="absolute bottom-4 left-4 flex gap-4">
                                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div> <span className="text-[10px] font-bold">Software Engineering</span></div>
                                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-500"></div> <span className="text-[10px] font-bold">Data Science</span></div>
                                </div>
                            </div>
                        </ChartBox>
                    </div>

                    <div className="lg:col-span-1">
                        <ChartBox title="Job Demand Overview" subtitle="Top Job Fields in Demand">
                            <div className="w-40 h-40 rounded-full border-[15px] border-slate-100 relative flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-[15px] border-blue-500 border-t-transparent border-l-transparent transform -rotate-45"></div>
                                <div className="absolute inset-0 rounded-full border-[15px] border-purple-500 border-b-transparent border-r-transparent border-l-transparent transform rotate-45"></div>
                                <span className="text-2xl font-bold text-slate-800">75%</span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div> <span className="text-[10px] font-bold">Tech</span></div>
                                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-500"></div> <span className="text-[10px] font-bold">Data</span></div>
                            </div>
                        </ChartBox>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* User Overview Table */}
                    <div className="card">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="font-bold text-slate-800">Users Overview</h4>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                <input type="text" placeholder="Search..." className="bg-slate-50 border-none rounded-lg pl-8 pr-3 py-1.5 text-xs focus:ring-1 focus:ring-primary-500 w-40" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: 'Total Users', value: '12,450', color: 'text-primary-600' },
                                { label: 'New Users (30 days)', value: '+1,250', color: 'text-green-600' },
                                { label: 'Active Users', value: '8,950', color: 'text-primary-600' },
                                { label: 'Pro Users', value: '4,520', color: 'text-amber-600' },
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary-100 group-hover:text-primary-600">
                                            <Users size={16} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-600">{row.label}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-sm font-bold ${row.color}`}>{row.value}</span>
                                        <ChevronRight size={14} className="text-slate-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* More analytics or Recent Activity */}
                    <ChartBox title="Platform Growth" subtitle="Job Openings vs Monthly Applications">
                        <div className="flex items-end gap-2 h-32 px-4">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                    <div className="w-full bg-primary-100 rounded-t-md relative group" style={{ height: `${h}%` }}>
                                        <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-md"></div>
                                    </div>
                                    <span className="text-[8px] font-bold text-slate-400">Month</span>
                                </div>
                            ))}
                        </div>
                    </ChartBox>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
