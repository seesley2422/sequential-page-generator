
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextC';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const PreviewC = () => {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 6 });
  }, [dispatch]);
  
  const handleSubmitApplication = () => {
    // In a real application, you would submit the form data to a backend here
    console.log('Form data submitted:', state);
    
    toast({
      title: "申請已送出",
      description: "您的申請已成功送出，我們將盡快與您聯繫。",
    });
    
    // Redirect to complete page
    navigate('/complete');
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">預覽申請資料</h2>
      
      {/* Personal Information Preview */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-fubon-blue border-l-4 border-fubon-blue pl-2">基本資料</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-md">
          <div>
            <p className="text-sm text-gray-500">姓名</p>
            <p>{state.basicInfo.chineseName || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">英文姓名</p>
            <p>{state.basicInfo.englishName || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">性別</p>
            <p>{state.basicInfo.gender || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">身分證字號</p>
            <p>{state.basicInfo.idNumber || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">出生日期</p>
            <p>{state.basicInfo.birthDate || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">手機號碼</p>
            <p>{state.basicInfo.mobilePhone || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p>{state.basicInfo.email || '-'}</p>
          </div>
        </div>
      </div>
      
      {/* Education Preview */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-fubon-blue border-l-4 border-fubon-blue pl-2">學經歷／證照</h3>
        <div className="p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium mb-2">最高學歷</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">教育程度</p>
              <p>{state.education.highestEducation.level || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">學校名稱</p>
              <p>{state.education.highestEducation.schoolName || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">科系</p>
              <p>{state.education.highestEducation.department || '-'}</p>
            </div>
          </div>
          
          {/* Add other education sections as needed */}
          
          <h4 className="font-medium mb-2 mt-4">工作經歷</h4>
          {state.education.workExperiences.length > 0 ? (
            state.education.workExperiences.map((exp, index) => (
              <div key={exp.id} className="mb-4 p-3 border border-gray-200 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">服務機構名稱</p>
                    <p>{exp.companyName || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">職稱</p>
                    <p>{exp.jobTitle || '-'}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">無工作經歷</p>
          )}
        </div>
      </div>
      
      {/* Autobiography Preview */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-fubon-blue border-l-4 border-fubon-blue pl-2">自傳</h3>
        <div className="p-4 bg-gray-50 rounded-md">
          <p className="whitespace-pre-line">{state.biography || '無自傳內容'}</p>
        </div>
      </div>
      
      {/* Form Submission */}
      <div className="flex justify-end mt-8">
        <Button 
          variant="outline" 
          className="mr-4 border-fubon-blue text-fubon-blue hover:bg-fubon-lightBlue"
          onClick={() => dispatch({ type: 'SET_CURRENT_STEP', payload: 5 })}
        >
          上一步
        </Button>
        <Button 
          className="bg-fubon-blue hover:bg-fubon-darkBlue text-white"
          onClick={handleSubmitApplication}
        >
          送出申請
        </Button>
      </div>
    </div>
  );
};

export default PreviewC;
