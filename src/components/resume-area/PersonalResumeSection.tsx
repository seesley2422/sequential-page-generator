
import React from 'react';
import { Download, Eye } from 'lucide-react';

interface PersonalResumeSectionProps {
  formattedDate: string;
}

const PersonalResumeSection = ({ formattedDate }: PersonalResumeSectionProps) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-8 mb-6">
      <h1 className="text-2xl text-fubon-blue font-medium mb-6">個人履歷</h1>
      
      <div className="border border-gray-200 rounded-md p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <span className="material-icons text-gray-500 mr-2">description</span>
            <div>
              <h3 className="font-medium">個人履歷建立</h3>
              <div className="text-sm text-gray-500 mt-1 flex items-center">
                <span className="material-icons text-gray-400 text-sm mr-1">schedule</span>
                更新時間：{formattedDate}
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
              <Download size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
              <Eye size={20} />
            </button>
            <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
              編輯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalResumeSection;
