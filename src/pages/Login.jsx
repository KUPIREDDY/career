import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
                {/* Illustration Side */}
                <div className="hidden md:flex md:w-1/2 bg-primary-50 items-center justify-center p-12">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <div className="w-64 h-64 bg-primary-100 rounded-full flex items-center justify-center">
                                {/* Mock Illustration */}
                                <img src="https://illustrations.popsy.co/blue/work-from-home.svg" alt="Login illustration" className="w-48 h-48" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-primary-900 mb-2">Welcome Back!</h2>
                        <p className="text-primary-600">Enter your credentials to access your career dashboard.</p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                            <LogIn size={24} />
                        </div>
                        <span className="text-xl font-bold text-slate-800">AI Career Guidance</span>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Login</h1>
                    <p className="text-slate-500 mb-8">Please enter your details to continue.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    className="input-field pl-10"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-medium text-slate-700">Password</label>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-700">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="password"
                                    required
                                    className="input-field pl-10"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full btn-primary h-12 text-lg">
                            Login
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-primary-600 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
