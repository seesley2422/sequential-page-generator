
import React, { useState, useEffect } from 'react';
import { useFormContext } from '@/context/FormContextC';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import SignatureModal from '@/components/SignatureModal';
import { Button } from '@/components/ui/button';

const DeclarationC = () => {
  const { state, dispatch } = useFormContext();
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [isSignatureValid, setIsSignatureValid] = useState(!!state.declaration?.signature);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  
  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: 5 });
    setIsSignatureValid(!!state.declaration?.signature);
  }, [dispatch, state.declaration?.signature]);

  const handleSaveSignature = (signatureData: string) => {
    dispatch({
      type: 'UPDATE_DECLARATION',
      payload: {
        signature: signatureData
      }
    });
    setIsSignatureValid(true);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">重要聲明</h2>
      
      <div className="p-4 mb-6 border border-gray-200 rounded-md bg-gray-50">
        <p className="text-sm text-gray-700 leading-relaxed">
          本人茲聲明以上所填各項資料與提供之資料均屬實，若有不實或隱瞞之處，
          願負法律上之責任，且貴公司得依勞動基準法之相關規定終止勞動契約。
          <br /><br />
          本人同意貴公司得依個人資料保護法之相關規定，為人才管理、招募任用或其他人事行政管理等特定目的，
          於上開特定目的範圍內，蒐集、處理及利用本人所提供之個人資料。
        </p>
      </div>
      
      <div className="mb-8 flex items-start space-x-2">
        <Checkbox 
          id="terms" 
          checked={hasReadTerms}
          onCheckedChange={(checked) => setHasReadTerms(checked === true)}
        />
        <Label htmlFor="terms" className="text-sm text-gray-700">
          本人已閱讀並同意上述聲明內容
        </Label>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">請於下方簽名</h3>
        {state.declaration?.signature ? (
          <div className="border rounded-md p-4 bg-white">
            <div className="flex justify-between items-center">
              <div className="w-64 h-24 border border-gray-200 flex items-center justify-center">
                <img 
                  src={state.declaration.signature} 
                  alt="Signature" 
                  className="max-h-full object-contain" 
                />
              </div>
              <Button 
                variant="outline"
                onClick={() => setIsSignatureModalOpen(true)}
                className="text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
              >
                重新簽名
              </Button>
            </div>
          </div>
        ) : (
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="flex justify-center">
              <Button 
                onClick={() => setIsSignatureModalOpen(true)}
                className="bg-fubon-blue hover:bg-fubon-darkBlue text-white"
                disabled={!hasReadTerms}
              >
                按此簽名
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Signature Modal */}
      <SignatureModal 
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onSave={handleSaveSignature}
      />
    </div>
  );
};

export default DeclarationC;
