
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex justify-between items-center w-full my-6 animate-fade-in">
      {steps.map((step, idx) => (
        <div 
          key={idx} 
          className={cn(
            "flex flex-col items-center relative",
            idx < steps.length - 1 && "flex-1"
          )}
        >
          <div 
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full border-2 z-10 transition-all duration-300",
              idx < currentStep 
                ? "bg-white border-fubon-blue" 
                : idx === currentStep 
                  ? "bg-fubon-blue border-fubon-blue text-white" 
                  : "bg-gray-200 border-gray-300 text-gray-500"
            )}
          >
            {idx < currentStep ? (
              <Check size={16} className="text-fubon-blue" />
            ) : (
              <span>{idx + 1}</span>
            )}
          </div>
          
          <span 
            className={cn(
              "text-xs mt-2 text-center",
              idx === currentStep ? "text-fubon-blue font-medium" : "text-gray-500"
            )}
          >
            {step}
          </span>
          
          {idx < steps.length - 1 && (
            <div 
              className={cn(
                "absolute top-4 left-1/2 w-full h-0.5",
                idx < currentStep 
                  ? "bg-fubon-blue" 
                  : "bg-gray-300"
              )}
              style={{ transform: "translateY(-50%)" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
