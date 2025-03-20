
import React, { useRef, useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface PhotoUploaderProps {
  value: string;
  onChange: (photoUrl: string) => void;
  required?: boolean;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ value, onChange, required = false }) => {
  const [photoPreview, setPhotoPreview] = useState<string>(value || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Check file type
    if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
      toast({
        title: "檔案格式錯誤",
        description: "請上傳 JPG 或 JPEG 格式的圖片",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (3MB = 3 * 1024 * 1024 bytes)
    if (file.size > 3 * 1024 * 1024) {
      toast({
        title: "檔案大小超過限制",
        description: "照片大小不得超過 3MB",
        variant: "destructive",
      });
      return;
    }
    
    // Create a URL for the selected file
    const photoUrl = URL.createObjectURL(file);
    setPhotoPreview(photoUrl);
    onChange(photoUrl);
  };

  return (
    <div className="mt-2">
      <div 
        className="relative w-32 h-40 border border-gray-300 rounded-md overflow-hidden cursor-pointer"
        onClick={handlePhotoClick}
      >
        {photoPreview ? (
          <img 
            src={photoPreview} 
            alt="Profile Photo" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-sm text-gray-500">點擊上傳照片</span>
          </div>
        )}
      </div>
      
      <input
        type="file"
        accept=".jpg,.jpeg"
        className="hidden"
        ref={fileInputRef}
        onChange={handlePhotoChange}
        required={required}
      />
      
      <p className="text-xs text-gray-500 mt-1">
        檔案限制JPG或JPEG，檔案大小小於3MB
      </p>
    </div>
  );
};

export default PhotoUploader;
