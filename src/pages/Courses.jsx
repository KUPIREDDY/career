import React from 'react';
import Layout from '../components/Layout';
import {
    Star,
    Clock,
    Search,
    Filter,
    ChevronRight,
    ExternalLink,
    BookOpen
} from 'lucide-react';

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: 'Python for Everyone Specialization',
            platform: 'Coursera',
            rating: 4.8,
            reviews: '1.2K',
            duration: '8 Months',
            skills: ['Programming', 'Problem-solving'],
            color: 'bg-blue-50 text-blue-600',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.png'
        },
        {
            id: 2,
            title: 'Digital Marketing Fundamentals',
            platform: 'Udemy',
            rating: 4.6,
            reviews: '900',
            duration: '10 Hours',
            skills: ['Marketing', 'Social Media'],
            color: 'bg-red-50 text-red-600',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg'
        },
        {
            id: 3,
            title: 'Data Science for Beginners',
            platform: 'NPTEL',
            rating: 4.7,
            reviews: '1.1K',
            duration: '12 Weeks',
            skills: ['Data Analysis', 'Statistics', 'Python'],
            color: 'bg-green-50 text-green-600',
            logo: 'https://nptel.ac.in/assets/img/nptel_logo_2.png'
        },
        {
            id: 4,
            title: 'UX Design Essentials',
            platform: 'Coursera',
            rating: 4.9,
            reviews: '2.5K',
            duration: '6 Months',
            skills: ['UX/UI', 'Figma', 'Prototyping'],
            color: 'bg-indigo-50 text-indigo-600',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.png'
        }
    ];

    return (
        <Layout title="Course Recommendations">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Recommended Courses</h2>
                        <p className="text-slate-500">Curated online courses to help you master the required skills.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input type="text" placeholder="Search courses..." className="input-field pl-10 h-10 w-64 bg-white" />
                        </div>
                        <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {courses.map((course) => (
                        <div key={course.id} className="card group hover:shadow-md transition-all duration-300">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Image Placeholder with Icon */}
                                <div className="w-full md:w-56 h-40 bg-slate-50 rounded-2xl flex items-center justify-center relative overflow-hidden shrink-0 group-hover:bg-slate-100 transition-colors">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600">
                                        <BookOpen size={32} />
                                    </div>
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500"></div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${course.platform === 'Coursera' ? 'bg-blue-100 text-blue-700' :
                                                        course.platform === 'Udemy' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {course.platform}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary-600 transition-colors">{course.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                                            <Star size={18} fill="currentColor" />
                                            <span>{course.rating}</span>
                                            <span className="text-slate-400 text-xs font-normal ml-1">({course.reviews})</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-6 mt-4 mb-8">
                                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                            <Clock size={16} /> {course.duration}
                                        </div>
                                        <div className="flex gap-2">
                                            {course.skills.map((skill) => (
                                                <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <button className="btn-primary px-8 py-2 text-sm flex items-center gap-2">
                                            Explore Course <ExternalLink size={14} />
                                        </button>
                                        <button className="text-slate-400 hover:text-slate-600 p-2">
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Courses;
