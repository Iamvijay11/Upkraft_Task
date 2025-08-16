// Mock data for development
export const tutorProfile = {
    id: "1",
    name: "Vijay Kumar",
    role: "Web Developer",
    avatar: "https://i.pravatar.cc/150?img=3",
    isOnline: true,
    stats: {
        activeStudents: 30,
        csatScore: 80,
        assignmentCompletion: 15,
        totalCourses: 8,
        rewards: 3,
    },
};

export const upcomingLessons = [
    {
        id: "1",
        date: "21 July",
        startTime: "2:00",
        endTime: "3:00 PM",
        course: "Introduction to Piano",
        studentName: "Eunice Robert & Arnold Hayes",
    },
    {
        id: "2",
        date: "22 July",
        startTime: "4:00",
        endTime: "5:00 PM",
        course: "Finger Warmups",
        studentName: "Eunice Robert & Arnold Hayes",
    },
    {
        id: "3",
        date: "23 July",
        startTime: "3:00",
        endTime: "4:00 PM",
        course: "Simple Chords",
        studentName: "Eunice Robert & Arnold Hayes",
    },
    {
        id: "4",
        date: "24 July",
        startTime: "5:00",
        endTime: "6:00 PM",
        course: "Rhythm Basics",
        studentName: "Eunice Robert & Arnold Hayes",
    },
    {
        id: "5",
        date: "25 July",
        startTime: "2:00",
        endTime: "3:00 PM",
        course: "Simple Melodies",
        studentName: "Eunice Robert & Arnold Hayes",
    },
    {
        id: "6",
        date: "26 July",
        startTime: "7:00",
        endTime: "8:00 PM",
        course: "Treble & Bass Clef",
        studentName: "Eunice Robert & Arnold Hayes",
    },
    {
        id: "7",
        date: "28 July",
        startTime: "3:00",
        endTime: "4:00 PM",
        course: "Rhythm Basics",
        studentName: "Eunice Robert & Arnold Hayes",
    },
    {
        id: "8",
        date: "29 July",
        startTime: "4:00",
        endTime: "5:00 PM",
        course: "Finger Warmups",
        studentName: "Eunice Robert & Arnold Hayes",
    },
];

export const performanceMetrics = {
    coursePerformance: {
        score: 7.6,
        maxScore: 10,
    },
    studentPerformance: {
        score: 6.6,
        maxScore: 10,
    },
    feedbackPending: 12,
};

export const navigationItems = [
    { id: "home", label: "Home", icon: "🏠", active: true },
    { id: "students", label: "My Students", icon: "👥", active: false },
    { id: "courses", label: "My Courses", icon: "📚", active: false },
    { id: "calendar", label: "Calendar", icon: "📅", active: false },
    { id: "assignment", label: "Assignment", icon: "📝", active: false },
    { id: "music-library", label: "Music Library", icon: "🎵", active: false },
    {
        id: "practice-studio",
        label: "Practice Studio",
        icon: "🎹",
        active: false,
    },
    { id: "payment", label: "Payment Summary", icon: "💳", active: false },
    { id: "refer-earn", label: "Refer & Earn", icon: "💰", active: false },
    { id: "settings", label: "Settings", icon: "⚙️", active: false },
];
