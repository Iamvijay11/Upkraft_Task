import React from 'react';

const CircularProgress = React.memo(({ 
  value, 
  maxValue = 100, 
  size = 'md', 
  color = 'upkraft-yellow', 
  label, 
  subtitle 
}) => {
  // Size configurations
  const sizeConfig = {
    sm: { width: 60, height: 60, strokeWidth: 4, fontSize: 'text-sm' },
    md: { width: 80, height: 80, strokeWidth: 6, fontSize: 'text-lg' },
    lg: { width: 120, height: 120, strokeWidth: 8, fontSize: 'text-2xl' }
  };

  const config = sizeConfig[size];
  const radius = (config.width - config.strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (value / maxValue) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Color configurations
  const colorConfig = {
    'upkraft-yellow': { stroke: '#f59e0b', bg: '#fef3c7' },
    'upkraft-orange': { stroke: '#fb923c', bg: '#fed7aa' },
    'upkraft-purple': { stroke: '#6366f1', bg: '#e0e7ff' },
    'upkraft-blue': { stroke: '#3b82f6', bg: '#dbeafe' },
    'red': { stroke: '#ef4444', bg: '#fecaca' },
    'green': { stroke: '#10b981', bg: '#d1fae5' }
  };

  const colors = colorConfig[color] || colorConfig['upkraft-yellow'];

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative circular-progress-container" 
        role="progressbar" 
        aria-valuenow={value} 
        aria-valuemin="0" 
        aria-valuemax={maxValue} 
        aria-label={label || `Progress: ${value} out of ${maxValue}`}
        style={{
          '--circumference': circumference,
          '--target-offset': strokeDashoffset
        }}
      >
        <svg
          width={config.width}
          height={config.height}
          className="progress-circle transform -rotate-90"
          aria-hidden="true"
        >
          {/* Background circle */}
          <circle
            cx={config.width / 2}
            cy={config.height / 2}
            r={radius}
            stroke={colors.bg}
            strokeWidth={config.strokeWidth}
            fill="transparent"
            className="progress-bg"
          />
          {/* Progress circle - shows normal state, animates fill on hover */}
          <circle
            cx={config.width / 2}
            cy={config.height / 2}
            r={radius}
            stroke={colors.stroke}
            strokeWidth={config.strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="progress-fill"
            style={{ 
              color: colors.stroke,
              '--circumference': circumference,
              '--target-offset': strokeDashoffset
            }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center progress-text">
          <span className={`font-bold text-gray-900 ${config.fontSize}`}>
            {typeof value === 'number' && maxValue === 10 ? value.toFixed(1) : value}
          </span>
          {maxValue === 10 && (
            <span className="text-xs text-gray-500 font-medium">/10</span>
          )}
          {typeof value === 'number' && maxValue === 100 && (
            <span className="text-xs text-gray-500 font-medium">%</span>
          )}
        </div>
      </div>
      {label && (
        <div className="mt-3 text-center">
          <div className="text-sm font-medium text-gray-900">{label}</div>
          {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
        </div>
      )}
    </div>
  );
});

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;