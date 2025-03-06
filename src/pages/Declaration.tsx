
import React, { useState } from 'react';
import { useFormContext } from '@/context/FormContext';
import SignatureModal from '@/components/SignatureModal';
import DeclarationIntro from '@/components/declaration/DeclarationIntro';
import QuestionList from '@/components/declaration/QuestionList';
import JobSourceSection from '@/components/declaration/JobSourceSection';
import JobSourceDetails from '@/components/declaration/JobSourceDetails';
import AdditionalSourceDetails from '@/components/declaration/AdditionalSourceDetails';
import SignatureSection from '@/components/declaration/SignatureSection';

const Declaration = () => {
  const { state, dispatch } = useFormContext();
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);

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
      
      <SignatureModal 
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onSave={handleSaveSignature}
      />
    </div>
  );
};

export default Declaration;
