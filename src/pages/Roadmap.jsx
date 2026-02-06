import React from 'react';
import Layout from '../components/Layout';
import {
    ArrowLeft,
    Map,
    Clock,
    CheckCircle2,
    Code,
    Database,
    Layout as LayoutIcon,
    Settings,
    Terminal,
    Layers
} from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const Roadmap = () => {
    const { careerId } = useParams();

    const roadmapSteps = [
        {
            id: 1,
            title: 'Learn Programming Basics',
            duration: '2-3 Months',
            description: 'Start with core programming languages like Python and JavaScript. Master fundamentals of logic and data types.',
            skills: ['Python', 'JavaScript', 'Logic Building'],
            icon: Terminal,
            color: 'bg-blue-50 text-blue-600',
            borderColor: 'border-blue-200'
        },
        {
            id: 2,
            title: 'Build Projects',
            duration: '2-4 Months',
            description: 'Create hands-on projects to practice your coding skills. Focus on web applications and simple tools.',
            skills: ['Problem-solving', 'Git', 'Debugging'],
            icon: Code,
            color: 'bg-indigo-50 text-indigo-600',
            borderColor: 'border-indigo-200'
        },
        {
            id: 3,
            title: 'Learn Data Structures & Algorithms',
            duration: '3-4 Months',
            description: 'Study fundamental data structures and algorithm concepts. Essential for technical interviews.',
            skills: ['Algorithms', 'Problem-Solving', 'Complexity'],
            icon: Database,
            color: 'bg-purple-50 text-purple-600',
            borderColor: 'border-purple-200'
        },
        {
            id: 4,
            title: 'Master Web Development',
            duration: '4-6 Months',
            description: 'Learn web technologies like HTML, CSS, and front-end frameworks like React.',
            skills: ['HTML', 'CSS', 'React', 'Tailwind'],
            icon: Layers,
            color: 'bg-pink-50 text-pink-600',
            borderColor: 'border-pink-200'
        }
    ];

    return (
        <Layout title="Career Roadmap">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/recommendations" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ArrowLeft size={24} />
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-primary-500 pl-4 capitalize">
                            {careerId?.replace('-', ' ')} Roadmap
                        </h2>
                        <p className="text-slate-500 pl-4 mt-1">Follow this step-by-step roadmap to become a successful {careerId?.replace('-', ' ')}.</p>
                    </div>
                </div>

                <div className="relative pl-8">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                    <div className="space-y-12">
                        {roadmapSteps.map((step, index) => (
                            <div key={step.id} className="relative group">
                                {/* Step Circle */}
                                <div className={`absolute -left-[30px] w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-sm z-10 transition-all duration-300 ${index === 0 ? 'bg-primary-600 text-white ring-4 ring-primary-100 shadow-primary-200' : 'bg-white text-slate-400 border-2 border-slate-200'
                                    }`}>
                                    {step.id}
                                </div>

                                <div className="card transform group-hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-2xl ${step.color} border-2 ${step.borderColor}`}>
                                                <step.icon size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">Step {step.id}</p>
                                                <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-600 font-bold text-sm h-fit">
                                            <Clock size={16} /> {step.duration}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {step.skills.map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 p-8 bg-primary-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary-200 overflow-hidden relative">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                        <p className="text-primary-100">Access curated courses and resources to begin your journey.</p>
                    </div>
                    <Link to="/courses" className="bg-white text-primary-600 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors z-10 whitespace-nowrap">
                        Get Started Now
                    </Link>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-700 rounded-full blur-2xl opacity-30 -ml-16 -mb-16"></div>
                </div>
            </div>
        </Layout>
    );
};

export default Roadmap;
