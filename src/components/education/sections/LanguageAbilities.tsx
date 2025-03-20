import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import { v4 as uuidv4 } from 'uuid';
import EnglishAbility from './language/EnglishAbility';
import TaiwaneseAbility from './language/TaiwaneseAbility';
import EnglishTest from './language/EnglishTest';
import OtherLanguageTest from './language/OtherLanguageTest';
import OtherLanguages from './language/OtherLanguages';

const LanguageAbilities = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleEnglishLevelChange = (aspect: string, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...education.languages,
          english: {
            ...education.languages.english,
            [aspect]: value
          }
        }
      }
    });
  };

  const handleTaiwaneseChange = (value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...education.languages,
          taiwanese: value
        }
      }
    });
  };

  const handleEnglishTestChange = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...education.languages,
          englishTest: {
            ...education.languages.englishTest,
            [field]: value
          }
        }
      }
    });
  };

  const handleAddOtherTest = () => {
    const newTest = {
      id: uuidv4(),
      name: '',
      otherName: '',
      score: '',
      date: ''
    };
    
    dispatch({
      type: 'ADD_OTHER_LANGUAGE_TEST',
      payload: newTest
    });
  };

  const handleOtherTestChange = (id: string, field: string, value: string) => {
    const updatedTests = education.languages.otherTest.map(test => 
      test.id === id ? { ...test, [field]: value } : test
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...education.languages,
          otherTest: updatedTests
        }
      }
    });
  };

  const handleAddOtherLanguage = () => {
    const newLanguage = {
      id: uuidv4(),
      name: '',
      otherName: '',
      listening: '',
      speaking: '',
      reading: '',
      writing: ''
    };
    
    dispatch({
      type: 'ADD_OTHER_LANGUAGE',
      payload: newLanguage
    });
  };

  const handleOtherLanguageChange = (id: string, field: string, value: string) => {
    const updatedLanguages = education.languages.otherLanguages.map(lang => 
      lang.id === id ? { ...lang, [field]: value } : lang
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...education.languages,
          otherLanguages: updatedLanguages
        }
      }
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2 mb-6">
        語言能力
      </h2>
      
      <div className="space-y-6">
        {/* English Ability */}
        <EnglishAbility 
          english={education.languages.english}
          onEnglishChange={handleEnglishLevelChange}
        />
        
        {/* Taiwanese Ability */}
        <TaiwaneseAbility 
          value={education.languages.taiwanese}
          onChange={handleTaiwaneseChange}
        />
        
        {/* English Test */}
        <EnglishTest 
          englishTest={education.languages.englishTest}
          onTestChange={handleEnglishTestChange}
        />
        
        {/* Other Language Tests */}
        <OtherLanguageTest 
          tests={education.languages.otherTest}
          onTestChange={handleOtherTestChange}
          onAddTest={handleAddOtherTest}
        />
        
        {/* Other Languages */}
        <OtherLanguages 
          languages={education.languages.otherLanguages}
          onLanguageChange={handleOtherLanguageChange}
          onAddLanguage={handleAddOtherLanguage}
        />
      </div>
    </div>
  );
};

export default LanguageAbilities;
