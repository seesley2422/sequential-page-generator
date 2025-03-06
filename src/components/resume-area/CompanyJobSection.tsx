
import React from 'react';
import JobCard from './JobCard';

interface CompanyJobSectionProps {
  companyName: string;
  formattedDate: string;
  jobs: {
    title: string;
    completionPercentage: number;
    isInReviewStage?: boolean;
  }[];
}

const CompanyJobSection = ({ companyName, formattedDate, jobs }: CompanyJobSectionProps) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-8 mb-6">
      <h2 className="text-2xl text-fubon-blue font-medium mb-6">{companyName}</h2>
      <p className="text-gray-500 mb-4">同一公司只可應徵一個職缺，請確認後送出履歷</p>
      
      <div className="flex space-x-2 mb-6">
        <div className="bg-fubon-lightBlue text-fubon-blue rounded-full px-4 py-1 text-sm flex items-center">
          編輯中 <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 text-xs">2</span>
        </div>
        <div className="bg-gray-100 text-gray-500 rounded-full px-4 py-1 text-sm flex items-center">
          已投遞 <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 text-xs">0</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <JobCard 
            key={index}
            title={job.title}
            completionPercentage={job.completionPercentage}
            formattedDate={formattedDate}
            isInReviewStage={job.isInReviewStage}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyJobSection;
