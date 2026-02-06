import React from 'react';
import Layout from '../components/Layout';
import {
    Briefcase,
    BarChart,
    Search,
    ChevronRight,
    Award,
    Users,
    TrendingUp,
    Map
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    const recommendations = [
        {
            id: 'software-engineer',
            title: 'Software Engineer',
            suitability: 92,
            description: 'Aligns well with your skills in programming and problem-solving. Strong focus on logical reasoning and technical aptitude.',
            icon: Briefcase,
            color: 'bg-blue-100 text-blue-600',
            illustration: 'https://illustrations.popsy.co/blue/developer.svg'
        },
        {
            id: 'marketing-specialist',
            title: 'Marketing Specialist',
            suitability: 87,
            description: 'Strong fit for your interests in marketing and creative thinking. Excellent match for your communication skills.',
            icon: TrendingUp,
            color: 'bg-purple-100 text-purple-600',
            illustration: 'https://illustrations.popsy.co/blue/digital-marketing.svg'
        },
        {
            id: 'data-analyst',
            title: 'Data Analyst',
            suitability: 84,
            description: 'Ideal for your skills in data analysis and attention to detail. Matches your aptitude for mathematical reasoning.',
            icon: BarChart,
            color: 'bg-indigo-100 text-indigo-600',
            illustration: 'https://illustrations.popsy.co/blue/data-analysis.svg'
        }
    ];

    return (
        <Layout title="Recommendations">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Recommended Careers</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Based on your assessments, here are the top career matches tailored to your personality, skills, and interests.
                    </p>
                </div>

                <div className="space-y-6">
                    {recommendations.map((career) => (
                        <div key={career.id} className="card group hover:shadow-md transition-all duration-300 border-none ring-1 ring-slate-200">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Illustration/Icon */}
                                <div className="w-40 h-40 bg-slate-50 rounded-2xl flex items-center justify-center p-6 shrink-0 group-hover:bg-white transition-colors">
                                    <img src={career.illustration} alt={career.title} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-1">{career.title}</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold text-slate-500">Suitability</span>
                                                <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">{career.suitability}%</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Top Match</span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <div key={s} className={`w-1.5 h-1.5 rounded-full ${s <= 4 ? 'bg-primary-500' : 'bg-slate-200'}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 mb-8 max-w-2xl leading-relaxed">
                                        {career.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <Link to={`/roadmap/${career.id}`} className="btn-primary flex items-center gap-2 px-8">
                                            <Map size={18} /> View Roadmap
                                        </Link>
                                        <button className="flex items-center gap-2 px-6 py-2 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">More Options?</p>
                            <p className="text-sm text-slate-500">Complete more assessments to unlock better matches.</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all">
                        Unlock More Careers <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Recommendations;
