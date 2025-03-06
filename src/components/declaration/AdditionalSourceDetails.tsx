
import React from 'react';

interface AdditionalSourceDetailsProps {
  onTextChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const AdditionalSourceDetails: React.FC<AdditionalSourceDetailsProps> = ({ onTextChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="fubon-label">其他</label>
          <input 
            type="text"
            className="fubon-input"
            name="otherSource"
            onChange={onTextChange}
          />
        </div>
        
        <div>
          <label className="fubon-label">其他</label>
          <input 
            type="text"
            className="fubon-input"
            name="otherDetails"
            onChange={onTextChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="fubon-label">集團公司</label>
          <input 
            type="text"
            className="fubon-input"
            name="groupCompany"
            onChange={onTextChange}
          />
        </div>
        
        <div>
          <label className="fubon-label">集團公司</label>
          <input 
            type="text"
            className="fubon-input"
            name="groupCompanyDetails"
            onChange={onTextChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="fubon-label">富邦員工推薦</label>
          <input 
            type="text"
            className="fubon-input"
            name="employeeReferral"
            onChange={onTextChange}
          />
        </div>
        
        <div>
          <label className="fubon-label">推薦者</label>
          <input 
            type="text"
            className="fubon-input"
            name="referrerName"
            onChange={onTextChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="fubon-label">任職公司</label>
          <input 
            type="text"
            className="fubon-input"
            name="referrerCompany"
            onChange={onTextChange}
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalSourceDetails;
