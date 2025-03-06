
import React from 'react';
import DeclarationQuestion from './DeclarationQuestion';
import RelatedPersonQuestion from './RelatedPersonQuestion';

interface QuestionListProps {
  handleYesNoChange: (questionIndex: number, value: boolean) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ handleYesNoChange, handleTextChange }) => {
  const questions = [
    "是否曾受主管機關警告、糾正、停業、撤銷或廢止營業許可之處分，及其他類似處分，或有事實足認有嚴重損及銀行、票券或信託業之信用之行為？",
    "是否有資金來源或涉嫌洗錢行為遭檢舉或警告等情事?",
    "是否有積欠貸款或使用信用卡有異常之情?",
    "曾經被公司(學、事業單位等)停職、解僱、免職、資遣、監護、輔導、管訓等?或曾任公私立學校、公司、金融立案之機構因案被停職之員工?",
    "是否罹患法定傳染病?",
    null, // This will be handled by RelatedPersonQuestion component
    "是否參與金管會禁止?"
  ];

  return (
    <div className="space-y-6 mt-8">
      {questions.map((question, index) => {
        const questionIndex = index + 1;
        
        if (questionIndex === 6) {
          return (
            <RelatedPersonQuestion 
              key={questionIndex}
              questionIndex={questionIndex}
              onChange={handleYesNoChange}
              onTextChange={handleTextChange}
            />
          );
        }
        
        if (question) {
          return (
            <DeclarationQuestion 
              key={questionIndex}
              questionText={question}
              questionIndex={questionIndex}
              onChange={handleYesNoChange}
              onDetailsChange={handleTextChange}
              detailsName={`question${questionIndex}Details`}
            />
          );
        }
        
        return null;
      })}
    </div>
  );
};

export default QuestionList;
