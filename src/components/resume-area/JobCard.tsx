
import React from 'react';
import { Download, Eye, Clock, CheckCircle, FileText } from 'lucide-react';

interface JobCardProps {
  title: string;
  completionPercentage: number;
  formattedDate: string;
  isInReviewStage?: boolean;
}

const JobCard = ({ title, completionPercentage, formattedDate, isInReviewStage }: JobCardProps) => {
  const isComplete = completionPercentage === 100;
  
  return (
    <div className="border border-gray-200 rounded-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-medium text-fubon-blue">{title}</h3>
          {isInReviewStage && (
            <div className="mt-1">
              <span className="text-xs text-white bg-fubon-orange px-2 py-0.5 rounded">徵選階段</span>
            </div>
          )}
          <div className="text-sm text-gray-500 mt-1 flex items-center">
            <Clock className="text-gray-400 mr-1" size={16} />
            更新時間：{formattedDate}
          </div>
          <div className="text-sm text-gray-500 mt-1 flex items-center">
            <CheckCircle className="text-gray-400 mr-1" size={16} />
            完成度：
            <span className={`${isComplete ? 'text-green-500' : 'text-yellow-500'} ml-1`}>
              {completionPercentage}%
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
            <Download size={18} />
          </button>
          <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
            <Eye size={18} />
          </button>
        </div>
        <div className="flex space-x-2">
          {isInReviewStage ? (
            <button className="py-1 px-3 bg-fubon-teal text-white rounded text-sm">
              取消應徵
            </button>
          ) : (
            <>
              <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
                {isComplete ? '編輯' : '繼續填寫'}
              </button>
              <button className={`py-1 px-3 ${isComplete ? 'bg-fubon-blue text-white hover:bg-fubon-darkBlue' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} rounded text-sm`}>
                送出
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
