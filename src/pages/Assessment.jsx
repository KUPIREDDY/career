import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
    Brain,
    Lightbulb,
    TrendingUp,
    ChevronRight,
    ChevronLeft,
    Info
} from 'lucide-react';

const Assessment = () => {
    const [activeTab, setActiveTab] = useState('aptitude');
    const [currentQuestion, setCurrentQuestion] = useState(5);
    const totalQuestions = 10;
    const progress = (currentQuestion / totalQuestions) * 100;

    const tabs = [
        { id: 'aptitude', label: 'Aptitude Test', icon: Brain },
        { id: 'personality', label: 'Personality Test', icon: Lightbulb },
        { id: 'interest', label: 'Interest Test', icon: TrendingUp },
    ];

    const options = [
        { id: 'A', text: '24' },
        { id: 'B', text: '26' },
        { id: 'C', text: '28' },
        { id: 'D', text: '30' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Layout title="Assessment">
            <div className="max-w-6xl mx-auto">
                {/* Tabs */}
                <div className="flex bg-white p-1.5 rounded-2xl shadow-sm mb-8 border border-slate-100 max-w-fit mx-auto overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-200'
                                    : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Question Area */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="card h-full flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold text-slate-500">
                                    Question <span className="text-primary-600">{currentQuestion}</span> of {totalQuestions}
                                </span>
                                <span className="text-sm font-semibold text-slate-400">{progress}% Completed</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-12">
                                <div
                                    className="bg-primary-500 h-full rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-800 mb-8 leading-relaxed">
                                    Which number should come next in the following sequence?
                                    <div className="mt-4 text-3xl font-extrabold text-primary-600 tracking-wider">
                                        2, 6, 12, 20, ?
                                    </div>
                                </h3>

                                <div className="space-y-4">
                                    {options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => setSelectedOption(option.id)}
                                            className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 group ${selectedOption === option.id
                                                    ? 'bg-primary-50 border-primary-500 shadow-sm'
                                                    : 'bg-white border-slate-100 hover:border-primary-200 hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${selectedOption === option.id
                                                    ? 'bg-primary-500 text-white'
                                                    : 'bg-slate-100 text-slate-500 group-hover:bg-primary-100 group-hover:text-primary-600'
                                                }`}>
                                                {option.id}
                                            </div>
                                            <span className={`text-lg font-bold ${selectedOption === option.id ? 'text-primary-900' : 'text-slate-700'
                                                }`}>
                                                {option.text}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
                                <button
                                    onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
                                    className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                                >
                                    <ChevronLeft size={20} /> Previous
                                </button>
                                <button
                                    onClick={() => setCurrentQuestion(Math.min(totalQuestions, currentQuestion + 1))}
                                    className="btn-primary flex items-center gap-2 px-10 py-3 text-lg"
                                >
                                    Next <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Info Side Card */}
                    <div className="space-y-6">
                        <div className="card text-center p-8 bg-indigo-50 border-indigo-100">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto mb-6 flex items-center justify-center text-indigo-600">
                                <Brain size={32} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Aptitude Test</h4>
                            <div className="flex justify-center mb-6">
                                <img src="https://illustrations.popsy.co/blue/abstract-art-4.svg" alt="Test illustration" className="w-40 h-40" />
                            </div>
                            <p className="text-sm text-slate-600 mb-6">
                                Discover your strengths and preferences by taking a simple aptitude test. This helps in mapping your logic and reasoning skills.
                            </p>
                            <div className="bg-white/60 p-4 rounded-xl flex items-start gap-3 text-left">
                                <Info size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                                <p className="text-xs text-indigo-800 font-medium leading-relaxed">
                                    Make sure you are in a quiet environment and have approximately 15 minutes to complete this section.
                                </p>
                            </div>
                        </div>

                        <div className="card border-slate-200 p-6">
                            <h4 className="font-bold text-slate-800 mb-4">Instructions</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="bg-slate-100 text-slate-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</div>
                                    <span>Answer all questions to get accurate results.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="bg-slate-100 text-slate-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
                                    <span>Don't spend too much time on a single question.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <div className="bg-slate-100 text-slate-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</div>
                                    <span>You can go back to previous questions if needed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Assessment;
