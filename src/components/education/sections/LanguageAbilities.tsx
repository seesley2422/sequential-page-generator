import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import { v4 as uuidv4 } from 'uuid';
import MonthYearPicker from '@/components/basic-info/MonthYearPicker';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const LanguageLevelOptions = () => (
  <>
    <SelectItem value="精通">精通</SelectItem>
    <SelectItem value="普通">普通</SelectItem>
    <SelectItem value="略懂">略懂</SelectItem>
  </>
);

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
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-medium">英語能力：</span>
            
            <div className="flex items-center">
              <span className="mr-1">聽</span>
              <Select
                value={education.languages.english.listening}
                onValueChange={(value) => handleEnglishLevelChange('listening', value)}
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <LanguageLevelOptions />
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center">
              <span className="mr-1">說</span>
              <Select
                value={education.languages.english.speaking}
                onValueChange={(value) => handleEnglishLevelChange('speaking', value)}
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <LanguageLevelOptions />
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center">
              <span className="mr-1">讀</span>
              <Select
                value={education.languages.english.reading}
                onValueChange={(value) => handleEnglishLevelChange('reading', value)}
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <LanguageLevelOptions />
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center">
              <span className="mr-1">寫</span>
              <Select
                value={education.languages.english.writing}
                onValueChange={(value) => handleEnglishLevelChange('writing', value)}
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <LanguageLevelOptions />
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Taiwanese Ability */}
        <div className="flex items-center gap-x-4">
          <span className="font-medium">閩南語能力：</span>
          <Select
            value={education.languages.taiwanese}
            onValueChange={handleTaiwaneseChange}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              <LanguageLevelOptions />
            </SelectContent>
          </Select>
        </div>
        
        {/* English Test */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                英語檢定 <span className="text-red-500">*</span>
              </label>
              <Select
                value={education.languages.englishTest.name}
                onValueChange={(value) => handleEnglishTestChange('name', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="多益測驗TOEIC">多益測驗TOEIC</SelectItem>
                  <SelectItem value="托福考試TOEFL">托福考試TOEFL</SelectItem>
                  <SelectItem value="雅思檢定IELTS">雅思檢定IELTS</SelectItem>
                  <SelectItem value="全民英檢">全民英檢</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                分數／等級 <span className="text-red-500">*</span>
              </label>
              <Input
                value={education.languages.englishTest.score}
                onChange={(e) => handleEnglishTestChange('score', e.target.value)}
                placeholder="請輸入分數或等級"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                取得日期 <span className="text-red-500">*</span>
              </label>
              <MonthYearPicker
                value={education.languages.englishTest.date}
                onChange={(value) => handleEnglishTestChange('date', value)}
                placeholder="年月"
                required
              />
            </div>
          </div>
        </div>
        
        {/* Other Language Tests */}
        {education.languages.otherTest.map((test, index) => (
          <div key={test.id} className="border border-gray-200 rounded-md p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  語文檢定
                </label>
                <div className="space-y-2">
                  <Select
                    value={test.name}
                    onValueChange={(value) => handleOtherTestChange(test.id, 'name', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="請選擇" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">請選擇</SelectItem>
                      <SelectItem value="日語檢定JLPT">日語檢定JLPT</SelectItem>
                      <SelectItem value="韓語檢定TOPIK">韓語檢定TOPIK</SelectItem>
                      <SelectItem value="其他">其他</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {test.name === '其他' && (
                    <Input
                      value={test.otherName}
                      onChange={(e) => handleOtherTestChange(test.id, 'otherName', e.target.value)}
                      placeholder="請輸入語文檢定名稱"
                    />
                  )}
                </div>
              </div>
              
              {test.name && test.name !== 'none' && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      分數／等級
                    </label>
                    <Input
                      value={test.score}
                      onChange={(e) => handleOtherTestChange(test.id, 'score', e.target.value)}
                      placeholder="請輸入分數或等級"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      取得日期
                    </label>
                    <MonthYearPicker
                      value={test.date}
                      onChange={(value) => handleOtherTestChange(test.id, 'date', value)}
                      placeholder="年月"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        
        <div className="flex justify-end">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleAddOtherTest} 
            className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
          >
            <PlusCircle className="mr-1 h-4 w-4" />
            新增語文檢定
          </Button>
        </div>
        
        {/* Other Languages */}
        {education.languages.otherLanguages.map((language, index) => (
          <div key={language.id} className="border border-gray-200 rounded-md p-4 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="min-w-[200px]">
                <label className="block text-sm font-medium mb-1">
                  其他語言能力
                </label>
                <div className="space-y-2">
                  <Select
                    value={language.name}
                    onValueChange={(value) => handleOtherLanguageChange(language.id, 'name', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="請選擇" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">請選擇</SelectItem>
                      <SelectItem value="日文">日文</SelectItem>
                      <SelectItem value="韓文">韓文</SelectItem>
                      <SelectItem value="中文">中文</SelectItem>
                      <SelectItem value="越南語">越南語</SelectItem>
                      <SelectItem value="其他">其他</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {language.name === '其他' && (
                    <Input
                      value={language.otherName}
                      onChange={(e) => handleOtherLanguageChange(language.id, 'otherName', e.target.value)}
                      placeholder="請輸入語言名稱"
                    />
                  )}
                </div>
              </div>
              
              {language.name && language.name !== 'none' && (
                <div className="flex-1 grid grid-cols-4 gap-2">
                  <div>
                    <span className="block text-center mb-1">聽</span>
                    <Select
                      value={language.listening}
                      onValueChange={(value) => handleOtherLanguageChange(language.id, 'listening', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <LanguageLevelOptions />
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <span className="block text-center mb-1">說</span>
                    <Select
                      value={language.speaking}
                      onValueChange={(value) => handleOtherLanguageChange(language.id, 'speaking', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <LanguageLevelOptions />
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <span className="block text-center mb-1">讀</span>
                    <Select
                      value={language.reading}
                      onValueChange={(value) => handleOtherLanguageChange(language.id, 'reading', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <LanguageLevelOptions />
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <span className="block text-center mb-1">寫</span>
                    <Select
                      value={language.writing}
                      onValueChange={(value) => handleOtherLanguageChange(language.id, 'writing', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <LanguageLevelOptions />
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="flex justify-end">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleAddOtherLanguage} 
            className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
          >
            <PlusCircle className="mr-1 h-4 w-4" />
            新增其他語言能力
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageAbilities;
