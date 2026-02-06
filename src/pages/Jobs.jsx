import React from 'react';
import Layout from '../components/Layout';
import {
    Building2,
    MapPin,
    DollarSign,
    Briefcase,
    CheckCircle,
    ChevronRight,
    TrendingUp,
    Search,
    Filter
} from 'lucide-react';

const Jobs = () => {
    const jobs = [
        {
            id: 1,
            title: 'Junior Software Developer',
            company: 'Tech Innovations Inc',
            location: 'San Francisco, CA (Remote)',
            salary: '$65,000 - $80,000',
            match: 92,
            type: 'Full-time',
            icon: Briefcase,
            color: 'bg-blue-50 text-blue-600'
        },
        {
            id: 2,
            title: 'Digital Marketing Associate',
            company: 'MarketSync Solutions',
            location: 'New York, NY',
            salary: '$50,000 - $65,000',
            match: 85,
            type: 'Full-time',
            icon: TrendingUp,
            color: 'bg-purple-50 text-purple-600'
        },
        {
            id: 3,
            title: 'Data Analyst',
            company: 'Insight Analytics Group',
            location: 'Austin, TX (Hybrid)',
            salary: '$55,000 - $70,000',
            match: 88,
            type: 'Full-time',
            icon: Building2,
            color: 'bg-indigo-50 text-indigo-600'
        }
    ];

    return (
        <Layout title="Recommended Jobs">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Recommended Jobs</h2>
                    <p className="text-slate-500">Here are some job openings that match your skills and qualifications.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="text" placeholder="Search roles, companies..." className="input-field pl-10" />
                    </div>
                    <button className="px-6 py-2 border border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-50 flex items-center justify-center gap-2">
                        <Filter size={18} /> Filter
                    </button>
                </div>

                <div className="space-y-6 mb-12">
                    {jobs.map((job) => (
                        <div key={job.id} className="card group hover:shadow-md transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-2xl ${job.color} shrink-0`}>
                                        <job.icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary-600 transition-colors">{job.title}</h3>
                                        <p className="font-bold text-slate-500 text-sm mb-3">{job.company}</p>

                                        <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={14} /> {job.location}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <DollarSign size={14} /> {job.salary} per year
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:items-end gap-4 min-w-[200px]">
                                    <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-xl text-primary-600 border border-primary-100">
                                        <CheckCircle size={18} />
                                        <span className="text-sm font-bold">Skill Match {job.match}%</span>
                                    </div>
                                    <button className="btn-primary w-full md:w-auto px-10 py-2.5">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-primary-600 transition-colors">
                    <ChevronRight size={20} className="rotate-180" /> Back
                </button>
            </div>
        </Layout>
    );
};

export default Jobs;
