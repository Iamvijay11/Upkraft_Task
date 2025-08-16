# UPKRAFT Tutor Dashboard

A fully responsive React dashboard application built with Tailwind CSS, featuring a modern design and comprehensive functionality for tutors.

## 🚀 Features

### ✅ Complete Dashboard Implementation
- **Profile Card** - Tutor information with avatar, stats, and online indicator
- **Statistics Cards** - Active students, CSAT score, assignment completion rate
- **Upcoming Lessons Table** - Responsive table that converts to cards on mobile
- **Performance Metrics** - Circular progress indicators for course and student performance
- **Referral Section** - Call-to-action card for referral program
- **Feedback Management** - Pending feedback display with action button

### ✅ Responsive Design
- **Desktop** (>1024px) - Full multi-column layout with fixed sidebar
- **Tablet** (768px-1024px) - Adaptive grid layout with collapsible sidebar
- **Mobile** (<768px) - Single column layout with hamburger menu

### ✅ Navigation & Layout
- **Sidebar Navigation** - Complete menu with all sections from original design
- **Mobile Menu** - Slide-out navigation for mobile devices
- **Responsive Layout** - Automatic adaptation across all screen sizes

### ✅ UI Components
- **CircularProgress** - Animated SVG progress indicators with customizable colors and sizes
- **StatCard** - Reusable statistics display cards with hover effects
- **ProfileCard** - User profile with avatar, role, and quick stats
- **Interactive Elements** - Buttons, tables, and navigation with proper states

### ✅ Accessibility Features
- **ARIA Labels** - Proper labeling for screen readers
- **Keyboard Navigation** - Full keyboard support throughout the interface
- **Focus Management** - Visible focus indicators and logical tab order
- **Semantic HTML** - Proper use of headings, tables, and navigation elements

### ✅ Performance & Polish
- **Animations** - Smooth transitions and micro-interactions
- **Error Boundaries** - Graceful error handling with fallback UI
- **Loading States** - Skeleton components for better UX
- **Optimized Rendering** - React.memo for performance optimization

## 🛠️ Technical Stack

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework with custom UPKRAFT colors
- **Vite** - Fast build tool and development server
- **Custom Hooks** - useDashboardData for state management
- **CSS Animations** - Custom animation library for smooth interactions

## 📱 Responsive Breakpoints

```css
/* Mobile */
< 768px - Single column, hamburger menu, card layouts

/* Tablet */
768px - 1024px - Two-column grid, collapsible sidebar

/* Desktop */
> 1024px - Full multi-column layout, fixed sidebar
```

## 🎨 Design System

### Colors
- **Primary Purple**: #6366f1 (upkraft-purple)
- **Accent Yellow**: #f59e0b (upkraft-yellow)
- **Secondary Blue**: #3b82f6 (upkraft-blue)
- **Accent Orange**: #fb923c (upkraft-orange)

### Components
- **Cards**: Rounded corners (8px), subtle shadows, hover effects
- **Buttons**: Smooth transitions, focus states, accessibility compliant
- **Progress Indicators**: Animated SVG with branded colors
- **Typography**: Inter font family with proper hierarchy

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/          # Main dashboard components
│   │   ├── TutorDashboard.jsx
│   │   ├── UpcomingLessons.jsx
│   │   ├── ReferralCard.jsx
│   │   └── FeedbackSection.jsx
│   ├── layout/             # Layout components
│   │   ├── DashboardLayout.jsx
│   │   └── Sidebar.jsx
│   ├── ui/                 # Reusable UI components
│   │   ├── CircularProgress.jsx
│   │   ├── StatCard.jsx
│   │   ├── ProfileCard.jsx
│   │   └── MobileMenu.jsx
│   └── ErrorBoundary.jsx   # Error handling
├── data/
│   └── mockData.js         # Sample data for development
├── hooks/
│   └── useDashboardData.js # Custom hooks for data management
├── styles/
│   └── animations.css      # Custom animations
└── __tests__/              # Test files
```

## 🧪 Testing

The project includes test structure for:
- Component rendering tests
- User interaction tests
- Responsive behavior tests
- Accessibility compliance tests

## 🔧 Customization

### Adding New Components
1. Create component in appropriate directory
2. Add to `components/index.js` for easy imports
3. Include proper TypeScript props (if using TS)
4. Add accessibility attributes
5. Include responsive design considerations

### Modifying Colors
Update `tailwind.config.js` to add or modify brand colors:

```javascript
theme: {
  extend: {
    colors: {
      'upkraft-purple': '#6366f1',
      'upkraft-yellow': '#f59e0b',
      // Add new colors here
    }
  }
}
```

### Adding Animations
Add new animations to `src/styles/animations.css` and use utility classes throughout components.

## 📊 Performance Considerations

- **React.memo** - Used on frequently re-rendering components
- **Error Boundaries** - Prevent entire app crashes
- **Lazy Loading** - Ready for code splitting implementation
- **Optimized Images** - Placeholder system for avatar images
- **Efficient Re-renders** - Proper key props and state management

## 🌐 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Chrome Mobile, Samsung Internet
- **Accessibility** - WCAG 2.1 AA compliance

## 📝 Notes

- All mock data is located in `src/data/mockData.js`
- Custom animations are defined in `src/styles/animations.css`
- The dashboard is fully functional and ready for backend integration
- All components are documented with proper prop interfaces
- Error handling is implemented throughout the application

## 🎯 Future Enhancements

- Real API integration
- User authentication
- Data persistence
- Advanced filtering and search
- Export functionality
- Dark mode support
- Internationalization (i18n)

---

Built with ❤️ for UPKRAFT - Empowering tutors with modern dashboard technology.