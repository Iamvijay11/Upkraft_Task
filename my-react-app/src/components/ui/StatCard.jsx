import React from 'react';

const StatCard = React.memo(({ title, value, subtitle, color = 'purple' }) => {
  const getCardConfig = () => {
    if (title.toLowerCase().includes('student')) {
      return {
        gradient: 'bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        ),
        decorativeElements: (
          <>
            <div className="absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full -translate-y-2 translate-x-2"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full -translate-x-2 translate-y-2"></div>
            <div className="absolute top-1/2 right-0 w-6 h-6 bg-white/10 rounded-full translate-x-1"></div>
          </>
        )
      };
    } else if (title.toLowerCase().includes('csat') || title.toLowerCase().includes('score')) {
      return {
        gradient: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        decorativeElements: (
          <>
            <div className="absolute top-3 right-3 w-12 h-12 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-white/10 rounded-full -translate-x-1"></div>
            <div className="absolute bottom-1/3 right-0 w-3 h-3 bg-white/15 rounded-full translate-x-1"></div>
          </>
        )
      };
    } else if (title.toLowerCase().includes('assignment') || title.toLowerCase().includes('completion')) {
      return {
        gradient: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
        icon: (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        ),
        decorativeElements: (
          <>
            <div className="absolute top-1 right-1 w-14 h-14 bg-white/10 rounded-full translate-x-3 -translate-y-3"></div>
            <div className="absolute bottom-1 left-1 w-10 h-10 bg-white/5 rounded-full -translate-x-2 translate-y-2"></div>
            <div className="absolute top-2/3 right-2 w-5 h-5 bg-white/15 rounded-full"></div>
          </>
        )
      };
    }

    // Default purple theme
    return {
      gradient: 'bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      decorativeElements: null
    };
  };

  const config = getCardConfig();

  return (
    <div className="relative overflow-hidden">
      <div className={`${config.gradient} rounded-xl p-4 transition-all duration-300 relative overflow-hidden`}>
        {/* Decorative background elements */}
        {config.decorativeElements}

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Value Row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                {config.icon}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white leading-none">
                {value}
                {typeof value === 'number' && (title.toLowerCase().includes('score') || title.toLowerCase().includes('rate')) && (
                  <span className="text-lg">%</span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom section - Title and Progress */}
          <div className="flex-grow flex flex-col justify-end">
            <div className="text-white/90 text-sm font-medium leading-tight">
              {title}
            </div>

            {/* Subtitle if provided */}
            {subtitle && (
              <div className="text-white/70 text-xs mt-1">{subtitle}</div>
            )}

            {/* Progress indicator - Always present to maintain consistent height */}
            <div className="mt-2">
              <div className="w-full bg-white/20 rounded-full h-1.5">
                {typeof value === 'number' && (title.toLowerCase().includes('score') || title.toLowerCase().includes('rate')) ? (
                  <div
                    className="bg-white rounded-full h-1.5 transition-all duration-1000 ease-out"
                    style={{ width: `${Math.min(value, 100)}%` }}
                  ></div>
                ) : (
                  <div className="bg-white/30 rounded-full h-1.5 w-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

StatCard.displayName = 'StatCard';

export default StatCard;