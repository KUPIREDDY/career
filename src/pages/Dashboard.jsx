import React from 'react';
import Layout from '../components/Layout';
import {
    CheckCircle2,
    ArrowRight,
    Trophy,
    Clock,
    Target,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const completedAssessments = [
        { title: 'Interests Assessment', questions: '25 Questions', icon: <CheckCircle2 className="text-blue-500" size={18} /> },
        { title: 'Skills Assessment', questions: '25 Questions', icon: <CheckCircle2 className="text-blue-500" size={18} /> },
        { title: 'Personality Test', questions: '25 Questions', icon: <CheckCircle2 className="text-blue-500" size={18} /> },
        { title: 'Values Assessment', questions: '15 Questions', icon: <CheckCircle2 className="text-blue-500" size={18} /> },
    ];

    const recommendedCareers = [
        {
            title: 'Software Engineer',
            match: 'Strong fit for your skills & interests',
            image: 'https://illustrations.popsy.co/blue/developer.svg',
            color: 'bg-blue-50'
        },
        {
            title: 'Data Analyst',
            match: 'Strong fit for your skills & interests',
            image: 'https://illustrations.popsy.co/blue/data-analysis.svg',
            color: 'bg-indigo-50'
        },
        {
            title: 'Marketing Specialist',
            match: 'Strong fit for your skills & interests',
            image: 'https://illustrations.popsy.co/blue/digital-marketing.svg',
            color: 'bg-purple-50'
        },
        {
            title: 'UX/UI Designer',
            match: 'Strong fit for your skills & interests',
            image: 'https://illustrations.popsy.co/blue/graphic-design.svg',
            color: 'bg-pink-50'
        },
    ];

    return (
        <Layout title="Dashboard">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Welcome back, Emily!</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-2 card flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" alt="Emily" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900">Emily Johnson</h3>
                            <p className="text-slate-500 text-sm mb-4">emily.johnson@email.com • <span className="text-primary-600 font-medium">Student</span></p>

                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-slate-700">Guidance Progress</span>
                                    <span className="text-sm font-bold text-primary-600">65%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-primary-500 h-full rounded-full" style={{ width: '65%' }}></div>
                                </div>
                            </div>

                            <Link to="/profile-setup" className="btn-primary inline-flex items-center gap-2 px-8">
                                My Profile
                            </Link>
                        </div>
                    </div>

                    {/* Assessments Summary */}
                    <div className="card">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-slate-800">Completed Assessments</h3>
                            <Link to="/assessment" className="text-xs font-bold text-primary-600 hover:underline">View All</Link>
                        </div>
                        <div className="space-y-4">
                            {completedAssessments.map((a, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        {a.icon}
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">{a.title}</p>
                                            <p className="text-xs text-slate-500">{a.questions}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommended Careers */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-slate-800">Recommended Careers</h3>
                        <Link to="/recommendations" className="text-sm font-bold text-primary-600 hover:underline flex items-center gap-1">
                            Explore More <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recommendedCareers.map((career, idx) => (
                            <div key={idx} className="card p-0 overflow-hidden group hover:shadow-lg transition-all">
                                <div className={`${career.color} p-6 flex justify-center`}>
                                    <img src={career.image} alt={career.title} className="w-32 h-32 transform group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-slate-900 mb-1">{career.title}</h4>
                                    <p className="text-xs text-slate-500 mb-4">{career.match}</p>
                                    <button className="w-full py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-primary-600 hover:text-white transition-colors text-sm">
                                        Explore Career
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
