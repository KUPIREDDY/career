import React from 'react';
import Layout from '../components/Layout';
import {
    FileText,
    Download,
    FileCode,
    BarChart,
    Search,
    Book,
    ArrowLeft,
    ChevronRight,
    ClipboardList
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
    const pdfs = [
        { title: 'Programming Basics.pdf', progress: 40, status: '40% Downloaded', icon: FileCode, color: 'text-blue-500' },
        { title: 'Marketing Fundamentals.pdf', progress: 0, status: 'Ready to download', icon: FileText, color: 'text-purple-500' },
        { title: 'Data Science Overview.pdf', progress: 0, status: 'Ready to download', icon: BarChart, color: 'text-indigo-500' },
    ];

    const notes = [
        { title: 'JavaScript Notes.docx', completion: 50, icon: FileCode },
        { title: 'Marketing Practice Questions', completion: 25, icon: ClipboardList },
        { title: 'Statistics Notes.docx', completion: 0, icon: BarChart },
        { title: 'Interview Preparation Prep', completion: 75, icon: Book },
    ];

    return (
        <Layout title="Study Materials">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Study Materials</h2>

                    <div className="mb-10">
                        <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
                            PDF Downloads
                            <div className="flex-1 h-px bg-slate-100 ml-4"></div>
                        </h3>
                        <div className="space-y-4">
                            {pdfs.map((pdf, idx) => (
                                <div key={idx} className="card p-4 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className={`p-3 rounded-xl bg-slate-50 ${pdf.color}`}>
                                                <pdf.icon size={24} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-slate-800 truncate">{pdf.title}</p>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-xs">
                                                        <div
                                                            className={`h-full rounded-full ${pdf.progress > 0 ? 'bg-primary-500' : 'bg-slate-300'}`}
                                                            style={{ width: `${pdf.progress}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{pdf.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={`btn-primary px-8 py-2.5 flex items-center gap-2 ${pdf.progress > 0 && pdf.progress < 100 ? 'opacity-50' : ''}`}>
                                            Download <Download size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
                                Notes
                                <div className="flex-1 h-px bg-slate-100 ml-4"></div>
                            </h3>
                            <div className="space-y-4">
                                {notes.slice(0, 2).map((note, idx) => (
                                    <div key={idx} className="card p-4 hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600">
                                                    <note.icon size={20} />
                                                </div>
                                                <span className="font-bold text-slate-800 text-sm">{note.title}</span>
                                            </div>
                                            <button className="p-2 text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-primary-500 h-full" style={{ width: `${note.completion}%` }}></div>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase text-right">{note.completion}% Complete</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
                                Additional Resources
                                <div className="flex-1 h-px bg-slate-100 ml-4"></div>
                            </h3>
                            <div className="space-y-4">
                                {notes.slice(2, 4).map((note, idx) => (
                                    <div key={idx} className="card p-4 hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600">
                                                    <note.icon size={20} />
                                                </div>
                                                <span className="font-bold text-slate-800 text-sm">{note.title}</span>
                                            </div>
                                            <button className="p-2 text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-primary-500 h-full" style={{ width: `${note.completion}%` }}></div>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase text-right">{note.completion}% Complete</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-primary-600 transition-colors">
                    <ArrowLeft size={20} /> Back
                </button>
            </div>
        </Layout>
    );
};

export default Resources;
