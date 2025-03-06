
import React from 'react';
import { Download, Eye, Clock, FileText } from 'lucide-react';

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
            <FileText className="text-gray-500 mr-2" size={20} />
            <div>
              <h3 className="font-medium">個人履歷建立</h3>
              <div className="text-sm text-gray-500 mt-1 flex items-center">
                <Clock className="text-gray-400 mr-1" size={16} />
                更新時間：{formattedDate}
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
              <Download size={18} />
            </button>
            <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
              <Eye size={18} />
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
