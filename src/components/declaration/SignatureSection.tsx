
import React from 'react';

interface SignatureSectionProps {
  signature: string | null;
  onOpenSignatureModal: () => void;
}

const SignatureSection: React.FC<SignatureSectionProps> = ({ signature, onOpenSignatureModal }) => {
  return (
    <div>
      <div className="mt-8 p-4 bg-gray-50 rounded">
        <p className="text-sm text-gray-700">
          本人茲聲明附：本表內填寫事項均屬事實，如有不實，自願承擔所有法律責任。
        </p>
        <p className="text-sm text-red-500 mt-2">
          若容易因模糊導致資訊不易讀取請重新簽名
        </p>
      </div>
      
      <div className="flex flex-col items-center mt-4">
        <button 
          onClick={onOpenSignatureModal}
          className="border border-gray-300 rounded bg-gray-100 py-2 px-4 text-sm flex items-center space-x-2 hover:bg-gray-200 transition-colors"
        >
          <span>電子簽章確認 {!signature && <span className="text-red-500">*</span>}</span>
        </button>
        
        {!signature && (
          <p className="text-sm text-red-500 mt-2">
            請完成電子簽名，才能進行預覽
          </p>
        )}
      </div>
      
      {signature && (
        <div className="mt-4 border border-gray-300 rounded p-4 flex justify-center">
          <img 
            src={signature} 
            alt="Signature" 
            className="max-h-32"
          />
        </div>
      )}
    </div>
  );
};

export default SignatureSection;
