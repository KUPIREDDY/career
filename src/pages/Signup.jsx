import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus } from 'lucide-react';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate signup, redirect to profile setup
        navigate('/profile-setup');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
                {/* Form Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 order-2 md:order-1">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                            <UserPlus size={24} />
                        </div>
                        <span className="text-xl font-bold text-slate-800">AI Career Guidance</span>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Create Account</h1>
                    <p className="text-slate-500 mb-8">Get started with your career journey.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="text"
                                    required
                                    className="input-field pl-10"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    className="input-field pl-10"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700 mb-2 block">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="password"
                                    required
                                    className="input-field pl-10"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full btn-primary h-12 text-lg">
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary-600 font-semibold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>

                {/* Illustration Side */}
                <div className="hidden md:flex md:w-1/2 bg-primary-50 items-center justify-center p-12 order-1 md:order-2">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <div className="w-64 h-64 bg-primary-100 rounded-full flex items-center justify-center">
                                <img src="https://illustrations.popsy.co/blue/creative-process.svg" alt="Signup illustration" className="w-48 h-48" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-primary-900 mb-2">Join Our Platform</h2>
                        <p className="text-primary-600">Discover your potential with AI-driven career recommendations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
