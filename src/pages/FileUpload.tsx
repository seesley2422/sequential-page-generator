
import React from 'react';
import { useFormContext } from '@/context/FormContext';
import { Upload } from 'lucide-react';

const FileUpload = () => {
  const { state, dispatch } = useFormContext();
  
  const handleFileChange = (type: 'photo' | 'resume') => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target) {
          dispatch({
            type: 'UPDATE_UPLOADED_FILES',
            payload: { [type]: event.target.result as string }
          });
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">上傳檔案</h2>
      
      <div className="border border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center bg-gray-50">
        <div className="rounded-full bg-fubon-lightBlue p-3 mb-4">
          <Upload className="h-8 w-8 text-fubon-blue" />
        </div>
        
        <h3 className="text-lg font-medium mb-2">點選上傳檔案</h3>
        <p className="text-sm text-gray-500 mb-4">檔案大小5MB以內，建議為ZIP格式夾帶所有作品與成戰報告</p>
        
        <label className="fubon-btn-primary cursor-pointer">
          <input 
            type="file" 
            className="hidden"
            onChange={handleFileChange('resume')}
            accept=".pdf,.doc,.docx,.zip"
          />
          選擇檔案
        </label>
      </div>
      
      {state.uploadedFiles.resume && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded flex items-center">
          <Check className="h-5 w-5 mr-2" />
          <span>已上傳檔案：{state.uploadedFiles.resume.substring(0, 20)}...</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
