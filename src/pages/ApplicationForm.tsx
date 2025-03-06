
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import StepIndicator from '@/components/StepIndicator';
import { FormProvider, useFormContext } from '@/context/FormContext';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Biography from './Biography';
import FileUpload from './FileUpload';
import Declaration from './Declaration';
import Preview from './Preview';

const steps = [
  '基本資料',
  '學經歷/證照',
  '自傳',
  '上傳檔案',
  '重要聲明',
  '預覽'
];

const ApplicationForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();
  const { currentStep } = state;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfo />;
      case 2:
        return <Education />;
      case 3:
        return <Biography />;
      case 4:
        return <FileUpload />;
      case 5:
        return <Declaration />;
      case 6:
        return <Preview />;
      default:
        return <BasicInfo />;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      dispatch({ type: 'SET_CURRENT_STEP', payload: currentStep + 1 });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      dispatch({ type: 'SET_CURRENT_STEP', payload: currentStep - 1 });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: '人才招募', href: '/recruitment' },
          { label: '焦點職務與查詢', href: '/job-search' },
          { label: '富邦人壽保險股份有限公司', href: '/company' },
          { label: '財管商品協銷人員 FA', href: '/job-fa' }
        ]} 
      />
      
      <main className="flex-1 animate-fade-in-up">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-md shadow-sm p-8">
            <StepIndicator steps={steps} currentStep={currentStep} />
            
            <div className="my-8">
              {renderStepContent()}
            </div>
            
            <div className="flex justify-end mt-8 space-x-2">
              {currentStep > 1 && (
                <button 
                  onClick={handlePrevious}
                  className="fubon-btn-secondary"
                >
                  上一步
                </button>
              )}
              
              {currentStep < steps.length && (
                <button 
                  onClick={handleNext}
                  className="fubon-btn-primary"
                >
                  {currentStep === 5 ? '預覽' : '下一步'}
                </button>
              )}
              
              {currentStep === steps.length && (
                <button 
                  onClick={() => navigate('/complete')}
                  className="fubon-btn-primary"
                >
                  送出
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationForm;
