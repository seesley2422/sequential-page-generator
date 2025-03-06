
import React from 'react';

interface JobSourceDetailsProps {
  onTextChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const JobSourceDetails: React.FC<JobSourceDetailsProps> = ({ onTextChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="fubon-label">校園徵才活動</label>
          <input 
            type="text"
            className="fubon-input"
            name="campusEvent"
            onChange={onTextChange}
          />
        </div>
        
        <div>
          <label className="fubon-label">活動名稱</label>
          <input 
            type="text"
            className="fubon-input"
            name="eventName"
            onChange={onTextChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="fubon-label">社群網站</label>
          <div className="flex items-center space-x-4 flex-wrap mt-1">
            <label className="inline-flex items-center mr-4 mb-2">
              <input 
                type="checkbox"
                name="socialMedia"
                value="facebook"
                className="form-checkbox h-4 w-4 text-fubon-blue"
              />
              <span className="ml-2">Facebook</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input 
                type="checkbox"
                name="socialMedia"
                value="linkedin"
                className="form-checkbox h-4 w-4 text-fubon-blue"
              />
              <span className="ml-2">LinkedIn</span>
            </label>
            <label className="inline-flex items-center mb-2">
              <input 
                type="checkbox"
                name="socialMedia"
                value="other"
                className="form-checkbox h-4 w-4 text-fubon-blue"
                defaultChecked
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
            name="otherSocialMedia"
            onChange={onTextChange}
          />
        </div>
      </div>
    </>
  );
};

export default JobSourceDetails;
