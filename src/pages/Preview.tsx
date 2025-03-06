
import React from 'react';
import { useFormContext } from '@/context/FormContext';

const Preview = () => {
  const { state } = useFormContext();
  const { basicInfo, contactInfo, biography, declaration } = state;

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">預覽申請資料</h2>
      
      <div className="space-y-8">
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
    </div>
  );
};

export default Preview;
