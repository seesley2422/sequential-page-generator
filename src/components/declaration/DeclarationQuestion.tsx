
import React from 'react';

interface DeclarationQuestionProps {
  questionText: string;
  questionIndex: number;
  onChange: (questionIndex: number, value: boolean) => void;
  onDetailsChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  detailsName: string;
}

const DeclarationQuestion: React.FC<DeclarationQuestionProps> = ({
  questionText,
  questionIndex,
  onChange,
  onDetailsChange,
  detailsName
}) => {
  return (
    <div>
      <p className="mb-2">{questionText}</p>
      <div className="flex items-center space-x-4 mt-1">
        <label className="inline-flex items-center">
          <input 
            type="radio"
            name={`question${questionIndex}`}
            value="yes"
            onChange={() => onChange(questionIndex, true)}
            className="form-radio h-4 w-4 text-fubon-blue"
          />
          <span className="ml-2">是</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="radio"
            name={`question${questionIndex}`}
            value="no"
            onChange={() => onChange(questionIndex, false)}
            className="form-radio h-4 w-4 text-fubon-blue"
            defaultChecked
          />
          <span className="ml-2">否</span>
        </label>
      </div>
      <input 
        type="text"
        className="fubon-input mt-2"
        name={detailsName}
        onChange={onDetailsChange}
      />
    </div>
  );
};

export default DeclarationQuestion;
