import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import ProfileCard from "../ui/ProfileCard";
import StatCard from "../ui/StatCard";
import CircularProgress from "../ui/CircularProgress";
import UpcomingLessons from "./UpcomingLessons";
import ReferralCard from "./ReferralCard";
import FeedbackSection from "./FeedbackSection";
import {
    tutorProfile,
    upcomingLessons,
    performanceMetrics,
} from "../../data/mockData";

import { useState, useEffect } from "react";

const TutorDashboard = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });
    useEffect(() => {
        document.body.classList.toggle("bg-gray-900", theme === "dark");
        document.body.classList.toggle("bg-gray-50", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };
    const handleViewAllLessons = () => {
        console.log("View all lessons clicked");
    };

    const handleReferNow = () => {
        console.log("Refer now clicked");
    };

    const handleGiveFeedback = () => {
        console.log("Give feedback clicked");
    };

    return (
        <DashboardLayout theme={theme}>
            <div
                className={`p-2 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 animate-fade-in min-h-screen ${
                    theme === "dark"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-50 text-gray-900"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Left side - Search bar (hidden on mobile) */}
                    <div className="hidden lg:flex items-center flex-1 max-w-md">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search here"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-upkraft-purple focus:border-upkraft-purple text-sm"
                            />
                        </div>
                    </div>

                    {/* Mobile title */}
                    <div className="lg:hidden">
                        <h1 className="text-xl font-bold text-gray-900">
                            Dashboard
                        </h1>
                    </div>

                    {/* Right side - Notifications, Profile, and Theme Toggle */}
                    <div className="flex items-center space-x-3">
                        {/* Notification icon */}
                        <button
                            onClick={() =>
                                console.log("Notification icon clicked")
                            }
                            className="w-8 h-8 text-gray-400 rounded-full hover:bg-purple-700 hover:text-white transition-colors flex items-center justify-center"
                            title=""
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M12 2C10.34 2 9 3.34 9 5v1.26C6.42 7.34 5 9.9 5 12.65v4.11L3.29 19.3a1 1 0 0 0 .71 1.7h16a1 1 0 0 0 .71-1.7L19 16.76v-4.11c0-2.75-1.42-5.31-4-6.39V5c0-1.66-1.34-3-3-3zM12 23a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
                            </svg>
                        </button>
                        {/* Theme toggle button */}
                        <button
                            onClick={toggleTheme}
                            className={`px-3 py-1 rounded-full border transition-colors duration-100 focus:outline-none ${
                                theme === "dark"
                                    ? "bg-gray-800 text-white border-gray-700"
                                    : "bg-white text-gray-900 border-gray-300"
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {theme === "dark" ? "🌙" : "☀️"}
                        </button>
                        {/* Profile section */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <div className="hidden lg:block">
                                <span
                                    className={`text-sm font-medium ${
                                        theme === "dark"
                                            ? "text-white"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {tutorProfile.name}
                                </span>
                                <div className="text-xs text-gray-500">
                                    Tutor
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content grid - Fully Responsive */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Top section - Profile, Stats, Performance, and Referral */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">
                        {/* Profile Card */}
                        <div className="col-span-1 animate-scale-in min-w-0">
                            <ProfileCard
                                name={tutorProfile.name}
                                role={tutorProfile.role}
                                avatar={tutorProfile.avatar}
                                stats={{
                                    students: tutorProfile.stats.activeStudents,
                                    courses: tutorProfile.stats.totalCourses,
                                    rewards: tutorProfile.stats.rewards,
                                }}
                            />
                        </div>

                        {/* Stats Cards - spanning 3 columns */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-3 grid grid-rows-2 gap-2 min-w-0">
                            {/* Stats Cards Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <StatCard
                                    title="Total Active Students"
                                    value={tutorProfile.stats.activeStudents}
                                    color="purple"
                                />
                                <StatCard
                                    title="Tutor CSAT Score"
                                    value={tutorProfile.stats.csatScore}
                                    color="purple"
                                />
                                <StatCard
                                    title="Assignment Completion Rate"
                                    value={
                                        tutorProfile.stats.assignmentCompletion
                                    }
                                    color="blue"
                                />
                            </div>

                            {/* Performance Overview - Stretched upward */}
                            <div
                                className="bg-white rounded-lg p-4 sm:p-6 shadow-sm flex flex-col justify-center min-w-0"
                                style={{ marginTop: "-1.5rem" }}
                            >
                                <h3 className="text-sm font-semibold text-gray-900 mb-2 text-center">
                                    Performance Overview
                                </h3>
                                <div className="flex justify-center items-center space-x-10">
                                    <div className="text-center">
                                        <CircularProgress
                                            value={
                                                performanceMetrics
                                                    .coursePerformance.score
                                            }
                                            maxValue={
                                                performanceMetrics
                                                    .coursePerformance.maxScore
                                            }
                                            color="upkraft-yellow"
                                            label="Overall Course Performance"
                                            size="md"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <CircularProgress
                                            value={
                                                performanceMetrics
                                                    .studentPerformance.score
                                            }
                                            maxValue={
                                                performanceMetrics
                                                    .studentPerformance.maxScore
                                            }
                                            color="upkraft-orange"
                                            label="Overall Student Performance"
                                            size="md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Referral Card */}
                        <div className="col-span-1 min-w-0">
                            <ReferralCard onReferNow={handleReferNow} />
                        </div>
                    </div>

                    {/* Bottom row - Upcoming Lessons (stretched) and Feedback */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                        {/* Upcoming Lessons - takes 3 columns (stretched more) */}
                        <div className="xl:col-span-3 col-span-1 md:col-span-1 min-w-0">
                            <UpcomingLessons
                                lessons={upcomingLessons}
                                onViewAll={handleViewAllLessons}
                            />
                        </div>

                        {/* Feedback Section - takes 1 column */}
                        <div className="xl:col-span-1 col-span-1 min-w-0">
                            <FeedbackSection
                                feedbackPending={
                                    performanceMetrics.feedbackPending
                                }
                                onGiveFeedback={handleGiveFeedback}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TutorDashboard;
