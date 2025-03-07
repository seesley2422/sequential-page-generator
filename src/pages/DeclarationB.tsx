
import React, { useState, useEffect } from 'react';
import { useFormContext } from '@/context/FormContextB';
import SignatureModal from '@/components/SignatureModal';
import DeclarationIntro from '@/components/declaration/DeclarationIntro';
import QuestionList from '@/components/declaration/QuestionList';
import JobSourceSection from '@/components/declaration/JobSourceSection';
import JobSourceDetails from '@/components/declaration/JobSourceDetails';
import AdditionalSourceDetails from '@/components/declaration/AdditionalSourceDetails';
import SignatureSection from '@/components/declaration/SignatureSection';
import { useNavigate } from 'react-router-dom';
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

const DeclarationB = () => {
  const { state, dispatch } = useFormContext();
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [isSignatureValid, setIsSignatureValid] = useState(!!state.declaration.signature);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [resumeName, setResumeName] = useState(state.resumeName || '');
  const navigate = useNavigate();

  useEffect(() => {
    // Set current step when component mounts
    dispatch({ type: 'SET_CURRENT_STEP', payload: 5 });
    
    // Check if signature exists
    setIsSignatureValid(!!state.declaration.signature);
    
    // Initialize resume name if it exists in state
    if (state.resumeName) {
      setResumeName(state.resumeName);
    } else if (state.basicInfo.chineseName) {
      // Default resume name: job title + name
      setResumeName(`財管商品人員FA_${state.basicInfo.chineseName}`);
    }
  }, [dispatch, state.declaration.signature, state.resumeName, state.basicInfo.chineseName]);

  const handleYesNoChange = (questionIndex: number, value: boolean) => {
    // In a real application, you would track these answers in the form state
    console.log(`Question ${questionIndex} answered: ${value ? 'Yes' : 'No'}`);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // In a real application, you would update the form state
    console.log(`${e.target.name} changed to: ${e.target.value}`);
  };

  const handleSaveSignature = (signatureData: string) => {
    dispatch({
      type: 'UPDATE_DECLARATION',
      payload: {
        signature: signatureData
      }
    });
    setIsSignatureValid(true);
  };

  const handleNextStep = () => {
    if (isSignatureValid) {
      setIsConfirmDialogOpen(true);
    }
  };

  const handleResumeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeName(e.target.value);
  };

  const handleConfirmResumeName = () => {
    dispatch({
      type: 'UPDATE_RESUME_NAME',
      payload: resumeName
    });
    setIsConfirmDialogOpen(false);
    dispatch({ type: 'SET_CURRENT_STEP', payload: 6 });
  };

  return (
    <div className="animate-fade-in">
      <DeclarationIntro />
      
      <div className="mb-6">
        <QuestionList 
          handleYesNoChange={handleYesNoChange}
          handleTextChange={handleTextChange}
        />
        
        <JobSourceSection onTextChange={handleTextChange} />
        
        <JobSourceDetails onTextChange={handleTextChange} />
        
        <AdditionalSourceDetails onTextChange={handleTextChange} />
        
        <SignatureSection 
          signature={state.declaration.signature}
          onOpenSignatureModal={() => setIsSignatureModalOpen(true)}
        />
      </div>
      
      {!isSignatureValid && (
        <div className="text-red-500 text-sm mb-4 text-right">
          請先完成電子簽名才能繼續
        </div>
      )}
      
      <div className="flex justify-end mt-8 space-x-2">
        <button 
          onClick={() => dispatch({ type: 'SET_CURRENT_STEP', payload: 4 })}
          className="fubon-btn-secondary"
        >
          上一步
        </button>
        
        <button 
          onClick={handleNextStep}
          className="fubon-btn-primary"
          disabled={!isSignatureValid}
        >
          下一步
        </button>
      </div>
      
      <SignatureModal 
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onSave={handleSaveSignature}
      />

      {/* Resume Name Confirmation Dialog */}
      <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-fubon-blue text-xl">確認職缺履歷名稱</AlertDialogTitle>
          </AlertDialogHeader>
          
          <div className="py-4">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">履歷名稱</label>
              <input
                type="text"
                value={resumeName}
                onChange={handleResumeNameChange}
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-fubon-blue"
              />
            </div>
          </div>
          
          <AlertDialogFooter>
            <AlertDialogCancel className="fubon-btn-secondary">取消</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmResumeName} 
              className="bg-fubon-blue text-white hover:bg-fubon-blue-dark w-full h-12 rounded-md"
            >
              確認
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeclarationB;
