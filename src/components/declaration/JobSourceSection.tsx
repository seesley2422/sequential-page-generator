
import React from 'react';

interface JobSourceSectionProps {
  onTextChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const JobSourceSection: React.FC<JobSourceSectionProps> = ({ onTextChange }) => {
  return (
    <div className="mt-8">
      <div>
        <p className="mb-2">如何得知此職缺資訊?</p>
        <div className="flex items-center space-x-4 mt-1">
          <label className="inline-flex items-center">
            <input 
              type="checkbox"
              name="jobSource"
              value="fubon"
              className="form-checkbox h-4 w-4 text-fubon-blue"
              defaultChecked
            />
            <span className="ml-2">富邦金控網站</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="checkbox"
              name="jobSource"
              value="internal"
              className="form-checkbox h-4 w-4 text-fubon-blue"
            />
            <span className="ml-2">內部推薦介紹</span>
          </label>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-4">
        <div>
          <label className="fubon-label">求職網站</label>
          <div className="flex items-center space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input 
                type="checkbox"
                name="jobSite"
                value="104"
                className="form-checkbox h-4 w-4 text-fubon-blue"
              />
              <span className="ml-2">104</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="checkbox"
                name="jobSite"
                value="1111"
                className="form-checkbox h-4 w-4 text-fubon-blue"
              />
              <span className="ml-2">1111</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="checkbox"
                name="jobSite"
                value="other"
                className="form-checkbox h-4 w-4 text-fubon-blue"
              />
              <span className="ml-2">其他</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="fubon-label">其他</label>
          <input 
            type="text"
            className="fubon-input"
            name="otherJobSite"
            onChange={onTextChange}
          />
        </div>
      </div>
    </div>
  );
};

export default JobSourceSection;
