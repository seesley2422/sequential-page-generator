import React, { useEffect } from 'react';
import { useFormContext } from '@/context/FormContextC';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const FileUploadC = () => {
  const { dispatch } = useFormContext();
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 4 });
  }, [dispatch]);
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">上傳檔案</h2>
      
      <div className="space-y-6">
        {/* Resume Upload */}
        <div className="p-6 border border-dashed border-gray-300 rounded-md bg-gray-50">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">個人履歷</h3>
            <p className="mt-1 text-xs text-gray-500">請上傳PDF或WORD檔案，檔案大小不超過5MB</p>
            <div className="mt-4">
              <Button variant="outline" className="text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue">
                選擇檔案
              </Button>
            </div>
          </div>
        </div>
        
        {/* Certificate Upload */}
        <div className="p-6 border border-dashed border-gray-300 rounded-md bg-gray-50">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">證書/證照</h3>
            <p className="mt-1 text-xs text-gray-500">請上傳PDF或圖片檔案，檔案大小不超過5MB</p>
            <div className="mt-4">
              <Button variant="outline" className="text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue">
                選擇檔案
              </Button>
            </div>
          </div>
        </div>
        
        {/* Other Documents Upload */}
        <div className="p-6 border border-dashed border-gray-300 rounded-md bg-gray-50">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">其他文件</h3>
            <p className="mt-1 text-xs text-gray-500">請上傳PDF或WORD檔案，檔案大小不超過5MB</p>
            <div className="mt-4">
              <Button variant="outline" className="text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue">
                選擇檔案
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadC;
