import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
    ChevronRight,
    ChevronLeft,
    GraduationCap,
    Briefcase,
    Heart,
    Brain,
    Search,
    Check
} from 'lucide-react';

const ProfileWizard = () => {
    const [step, setStep] = useState(2);
    const steps = [
        { id: 1, title: 'Basic Info' },
        { id: 2, title: 'Academic Scores' },
        { id: 3, title: 'Skills & Interests' },
        { id: 4, title: 'Personality Test' },
    ];

    const [skills, setSkills] = useState(['Programming', 'Data Analysis', 'Communication', 'Research', 'Leadership', 'Teamwork']);
    const [selectedSkills, setSelectedSkills] = useState(['Programming', 'Data Analysis']);

    const [interests, setInterests] = useState([
        { name: 'Technology', checked: true },
        { name: 'Science', checked: true },
        { name: 'Marketing', checked: true },
        { name: 'Business', checked: false },
        { name: 'Design', checked: true },
        { name: 'Finance', checked: false },
        { name: 'Education', checked: true },
        { name: 'Healthcare', checked: false },
    ]);

    return (
        <Layout title="User Profile">
            <div className="max-w-5xl mx-auto">
                {/* Stepper */}
                <div className="flex items-center justify-between mb-12 max-w-2xl mx-auto">
                    {steps.map((s, idx) => (
                        <React.Fragment key={s.id}>
                            <div className="flex flex-col items-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${s.id < step ? 'bg-primary-500 text-white' :
                                    s.id === step ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' :
                                        'bg-slate-200 text-slate-500'
                                    }`}>
                                    {s.id < step ? <Check size={20} /> : s.id}
                                </div>
                                <span className={`text-xs font-bold ${s.id === step ? 'text-primary-600' : 'text-slate-500'}`}>{s.title}</span>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className={`flex-1 h-0.5 mx-4 ${s.id < step ? 'bg-primary-500' : 'bg-slate-200'}`}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="card">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Complete Your Profile</h3>
                            <p className="text-slate-500 text-sm mb-8">Step 2 of 4: Enter your academic scores, choose your skills and interests, and take a personality test.</p>

                            {/* Academic Scores Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                                        <GraduationCap size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-800">Academic Scores</h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">GPA (0.0 - 4.0)</label>
                                        <input type="number" step="0.1" defaultValue="3.5" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Math Score (0 - 100)</label>
                                        <input type="number" defaultValue="85" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Science Score (0 - 100)</label>
                                        <input type="number" defaultValue="90" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">English Score (0 - 100)</label>
                                        <input type="number" defaultValue="92" className="input-field" />
                                    </div>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                        <Check size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-800">Skills</h4>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">Select your top skills</p>
                                <div className="relative mb-4">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input type="text" placeholder="Search skills..." className="input-field pl-10 h-10 text-sm" />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <button
                                            key={skill}
                                            onClick={() => {
                                                if (selectedSkills.includes(skill)) {
                                                    setSelectedSkills(selectedSkills.filter(s => s !== skill));
                                                } else {
                                                    setSelectedSkills([...selectedSkills, skill]);
                                                }
                                            }}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${selectedSkills.includes(skill)
                                                ? 'bg-primary-500 border-primary-500 text-white'
                                                : 'bg-white border-slate-200 text-slate-700 hover:border-primary-400'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                {selectedSkills.includes(skill) && <Check size={14} />}
                                                {skill}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Interests Section */}
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="p-2 bg-pink-100 text-pink-600 rounded-lg">
                                        <Heart size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-800">Interests</h4>
                                </div>
                                <p className="text-sm text-slate-500 mb-4">Choose your career interests</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {interests.map(interest => (
                                        <div key={interest.name} className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                                            <input
                                                type="checkbox"
                                                defaultChecked={interest.checked}
                                                className="w-5 h-5 rounded text-primary-600 border-slate-300 focus:ring-primary-500"
                                            />
                                            <span className="text-sm font-medium text-slate-700">{interest.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <button onClick={() => setStep(Math.max(1, step - 1))} className="flex items-center gap-2 px-6 py-2 border border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                                <ChevronLeft size={20} /> Back
                            </button>
                            <button
                                onClick={() => setStep(Math.min(4, step + 1))}
                                className="btn-primary flex items-center gap-2 px-8 py-2.5"
                            >
                                Next <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side Card: Personality Test */}
                    <div className="space-y-6">
                        <div className="card text-center p-8 bg-blue-50 border-blue-100">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto mb-6 flex items-center justify-center text-primary-600">
                                <Brain size={32} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Personality Test</h4>
                            <p className="text-sm text-slate-600 mb-6 px-4">Discover your strengths and preferences by taking a simple personality test.</p>
                            <button className="w-full btn-primary bg-primary-500 hover:bg-primary-600">
                                Start Test
                            </button>
                        </div>

                        <div className="card p-6 border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-4">Why this matters?</h4>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="mt-1 w-1.5 h-1.5 bg-primary-400 rounded-full shrink-0"></div>
                                    <span>Academic scores help us understand your core competencies.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="mt-1 w-1.5 h-1.5 bg-primary-400 rounded-full shrink-0"></div>
                                    <span>Skills show what you can already do.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="mt-1 w-1.5 h-1.5 bg-primary-400 rounded-full shrink-0"></div>
                                    <span>Interests align your career with your passion.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfileWizard;
