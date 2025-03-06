
import React, { useEffect, useState } from 'react';
import { useFormContext } from '@/context/FormContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Preview = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo, contactInfo, biography, declaration } = state;
  const navigate = useNavigate();
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  useEffect(() => {
    // Ensure current step is set to 6 when this component is mounted
    dispatch({ type: 'SET_CURRENT_STEP', payload: 6 });
  }, [dispatch]);

  const handleEdit = () => {
    // Return to Step 1 (Basic Info)
    dispatch({ type: 'SET_CURRENT_STEP', payload: 1 });
  };

  const handleSubmit = () => {
    // Open confirmation dialog
    setIsConfirmDialogOpen(true);
  };

  const handleConfirmSubmit = () => {
    // Show success toast
    toast({
      title: "申請成功！",
      description: "您的履歷已成功送出",
    });
    
    // Navigate to the resume area page
    navigate('/resume-area');
  };

  return (
    <div className="animate-fade-in relative">
      <div className="flex justify-end mb-4 space-x-2">
        <button 
          onClick={handleEdit}
          className="fubon-btn-secondary"
        >
          編輯
        </button>
        <button 
          onClick={handleSubmit}
          className="fubon-btn-primary"
        >
          送出
        </button>
      </div>
      
      <h2 className="text-xl text-fubon-blue font-medium mb-4">預覽申請資料</h2>
      
      <div className="space-y-8">
        <div className="border-b pb-4">
          <h3 className="font-medium mb-2">職缺資訊</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">應徵職缺</p>
              <p>財管商品協銷人員</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">期望月薪</p>
              <p>{basicInfo.salaryExpectation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">錄取後可報到日</p>
              <p>2023-10-01</p>
            </div>
          </div>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-medium mb-2">個人基本資料</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">中文姓名</p>
              <p>{basicInfo.chineseName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">英文姓名</p>
              <p>{basicInfo.englishName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">出生日期</p>
              <p>{basicInfo.birthdate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">英文別名</p>
              <p>{basicInfo.englishNickname}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">國籍</p>
              <p>{basicInfo.nationalityTW ? '中華民國' : basicInfo.nationalityOther}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">證件號碼</p>
              <p>{basicInfo.identityNumber}</p>
            </div>
          </div>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-medium mb-2">聯絡資訊</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">行動電話</p>
              <p>{contactInfo.mobilePhone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">電子郵件</p>
              <p>{contactInfo.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">通訊地址</p>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>
        
        <div className="border-b pb-4">
          <h3 className="font-medium mb-2">自傳</h3>
          <p className="whitespace-pre-line">{biography}</p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">電子簽名</h3>
          {declaration.signature ? (
            <div className="border p-4 inline-block">
              <img src={declaration.signature} alt="簽名" className="max-h-20" />
            </div>
          ) : (
            <p className="text-red-500">尚未簽名</p>
          )}
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded">
        <p className="text-sm">請確認上述資料無誤後，點擊「送出」按鈕完成申請。</p>
      </div>

      <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確認送出申請</AlertDialogTitle>
            <AlertDialogDescription>
              您確定要送出此份履歷申請嗎？送出後將無法修改。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmSubmit} className="bg-fubon-blue hover:bg-fubon-darkBlue">
              確認送出
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Preview;
