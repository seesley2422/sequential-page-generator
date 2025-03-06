
import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextB';

const FileUploadB = () => {
  const { dispatch } = useFormContext();
  
  // Ensure current step is set to 4 when this component is mounted
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 4 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">上傳檔案</h2>
      <p className="text-gray-500 italic">此為版本B的檔案上傳頁面，功能與版本A相同</p>
    </div>
  );
};

export default FileUploadB;
