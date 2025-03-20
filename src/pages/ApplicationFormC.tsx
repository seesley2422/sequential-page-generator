
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import StepIndicator from '@/components/StepIndicator';
import { useFormContext } from '@/context/FormContextC';
import BasicInfoC from './BasicInfoC';
import EducationC from './EducationC';
import { Button } from '@/components/ui/button';

const steps = [
  '基本資料',
  '學經歷/證照',
  '自傳',
  '上傳檔案',
  '重要聲明',
  '預覽'
];

const ApplicationFormC = () => {
  const location = useLocation();
  const { state, dispatch } = useFormContext();
  const { currentStep } = state;

  // If on the complete page, keep currentStep as is
  const isCompletePage = location.pathname === '/complete';

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoC />;
      case 2:
        return <EducationC />;
      case 3:
        return <div>自傳 - 待實作</div>;
      case 4:
        return <div>上傳檔案 - 待實作</div>;
      case 5:
        return <div>重要聲明 - 待實作</div>;
      case 6:
        return <div>預覽 - 待實作</div>;
      default:
        return <BasicInfoC />;
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
            
            {/* Navigation buttons */}
            <div className="flex justify-end mt-8 space-x-2">
              {currentStep > 1 && (
                <Button 
                  variant="outline"
                  onClick={handlePrevious}
                  className="border-fubon-blue text-fubon-blue hover:bg-fubon-lightBlue"
                >
                  上一步
                </Button>
              )}
              
              <Button 
                onClick={handleNext}
                className="bg-fubon-blue hover:bg-fubon-darkBlue text-white"
              >
                下一步
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationFormC;
