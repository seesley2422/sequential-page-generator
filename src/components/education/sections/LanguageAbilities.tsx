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
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const LanguageAbilities = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;
  const { languages } = education;

  const handleEnglishChange = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...languages,
          english: {
            ...languages.english,
            [field]: value
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
          ...languages,
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
          ...languages,
          englishTest: {
            ...languages.englishTest,
            [field]: value
          }
        }
      }
    });
  };

  const handleOtherTestChange = (index: number, field: string, value: string) => {
    const updatedTests = [...languages.otherTest];
    updatedTests[index] = { ...updatedTests[index], [field]: value };
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...languages,
          otherTest: updatedTests
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

  const handleOtherLanguageChange = (id: string, field: string, value: string) => {
    const updatedLanguages = languages.otherLanguages.map(lang => 
      lang.id === id ? { ...lang, [field]: value } : lang
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        languages: {
          ...languages,
          otherLanguages: updatedLanguages
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

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2 mb-4">
        語言能力
      </h2>
      
      <div className="space-y-6">
        {/* English Language */}
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="font-medium mb-3">英語能力</h3>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <Label className="mr-2">聽</Label>
                <Select
                  value={languages.english.listening}
                  onValueChange={(value) => handleEnglishChange('listening', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">請選擇</SelectItem>
                    <SelectItem value="精通">精通</SelectItem>
                    <SelectItem value="普通">普通</SelectItem>
                    <SelectItem value="略懂">略懂</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Label className="mr-2">說</Label>
                <Select
                  value={languages.english.speaking}
                  onValueChange={(value) => handleEnglishChange('speaking', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">請選擇</SelectItem>
                    <SelectItem value="精通">精通</SelectItem>
                    <SelectItem value="普通">普通</SelectItem>
                    <SelectItem value="略懂">略懂</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Label className="mr-2">讀</Label>
                <Select
                  value={languages.english.reading}
                  onValueChange={(value) => handleEnglishChange('reading', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">請選擇</SelectItem>
                    <SelectItem value="精通">精通</SelectItem>
                    <SelectItem value="普通">普通</SelectItem>
                    <SelectItem value="略懂">略懂</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Label className="mr-2">寫</Label>
                <Select
                  value={languages.english.writing}
                  onValueChange={(value) => handleEnglishChange('writing', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">請選擇</SelectItem>
                    <SelectItem value="精通">精通</SelectItem>
                    <SelectItem value="普通">普通</SelectItem>
                    <SelectItem value="略懂">略懂</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Taiwanese Language */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="taiwanese" className="block text-sm font-medium">
              閩南語能力 <span className="text-red-500">*</span>
            </label>
            <Select
              value={languages.taiwanese}
              onValueChange={handleTaiwaneseChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="請選擇" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">請選擇</SelectItem>
                <SelectItem value="精通">精通</SelectItem>
                <SelectItem value="普通">普通</SelectItem>
                <SelectItem value="略懂">略懂</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* English Test */}
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="font-medium mb-3">英語檢定</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="englishTest" className="block text-sm font-medium">
                英語檢定 <span className="text-red-500">*</span>
              </label>
              <Select
                value={languages.englishTest.name}
                onValueChange={(value) => handleEnglishTestChange('name', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">請選擇</SelectItem>
                  <SelectItem value="多益測驗TOEIC">多益測驗TOEIC</SelectItem>
                  <SelectItem value="托福考試TOEFL">托福考試TOEFL</SelectItem>
                  <SelectItem value="雅思檢定IELTS">雅思檢定IELTS</SelectItem>
                  <SelectItem value="全民英檢">全民英檢</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {languages.englishTest.name && (
              <>
                <div className="space-y-2">
                  <label htmlFor="englishTestScore" className="block text-sm font-medium">
                    分數／等級 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="englishTestScore"
                    value={languages.englishTest.score}
                    onChange={(e) => handleEnglishTestChange('score', e.target.value)}
                    placeholder="請輸入分數或等級"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="englishTestDate" className="block text-sm font-medium">
                    取得日期 <span className="text-red-500">*</span>
                  </label>
                  <MonthYearPicker
                    value={languages.englishTest.date}
                    onChange={(value) => handleEnglishTestChange('date', value)}
                    placeholder="年月"
                    required
                  />
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Other Language Tests */}
        <div className="border border-gray-200 rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">語文檢定</h3>
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
          
          {languages.otherTest.map((test, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor={`otherTest-${index}`} className="block text-sm font-medium">
                  語文檢定
                </label>
                <div className="flex items-center space-x-2">
                  <Select
                    value={test.name}
                    onValueChange={(value) => handleOtherTestChange(index, 'name', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="請選擇" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">請選擇</SelectItem>
                      <SelectItem value="日語檢定JLPT">日語檢定JLPT</SelectItem>
                      <SelectItem value="韓語檢定TOPIK">韓語檢定TOPIK</SelectItem>
                      <SelectItem value="其他">其他</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {test.name === '其他' && (
                    <Input
                      placeholder="請填寫檢定名稱"
                      value={test.otherName}
                      onChange={(e) => handleOtherTestChange(index, 'otherName', e.target.value)}
                      className="flex-1"
                      required
                    />
                  )}
                </div>
              </div>
              
              {test.name && (
                <>
                  <div className="space-y-2">
                    <label htmlFor={`otherTestScore-${index}`} className="block text-sm font-medium">
                      分數／等級
                    </label>
                    <Input
                      id={`otherTestScore-${index}`}
                      value={test.score}
                      onChange={(e) => handleOtherTestChange(index, 'score', e.target.value)}
                      placeholder="請輸入分數或等級"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor={`otherTestDate-${index}`} className="block text-sm font-medium">
                      取得日期
                    </label>
                    <MonthYearPicker
                      value={test.date}
                      onChange={(value) => handleOtherTestChange(index, 'date', value)}
                      placeholder="年月"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        
        {/* Other Languages */}
        <div className="border border-gray-200 rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">其他語言能力</h3>
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
          
          {languages.otherLanguages.map((language) => (
            <div key={language.id} className="mb-6">
              <div className="space-y-4 mb-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium min-w-[100px]">其他語言能力</label>
                  <Select
                    value={language.name}
                    onValueChange={(value) => handleOtherLanguageChange(language.id, 'name', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="請選擇" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">請選擇</SelectItem>
                      <SelectItem value="日文">日文</SelectItem>
                      <SelectItem value="韓文">韓文</SelectItem>
                      <SelectItem value="中文">中文</SelectItem>
                      <SelectItem value="越南語">越南語</SelectItem>
                      <SelectItem value="其他">其他</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {language.name === '其他' && (
                    <Input
                      placeholder="請填寫語言"
                      value={language.otherName}
                      onChange={(e) => handleOtherLanguageChange(language.id, 'otherName', e.target.value)}
                      className="flex-1"
                      required
                    />
                  )}
                </div>
              </div>
              
              {language.name && (
                <div className="grid grid-cols-4 gap-4 ml-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Label className="mr-2">聽</Label>
                      <Select
                        value={language.listening}
                        onValueChange={(value) => handleOtherLanguageChange(language.id, 'listening', value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="請選擇" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">請選擇</SelectItem>
                          <SelectItem value="精通">精通</SelectItem>
                          <SelectItem value="普通">普通</SelectItem>
                          <SelectItem value="略懂">略懂</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Label className="mr-2">說</Label>
                      <Select
                        value={language.speaking}
                        onValueChange={(value) => handleOtherLanguageChange(language.id, 'speaking', value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="請選擇" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">請選擇</SelectItem>
                          <SelectItem value="精通">精通</SelectItem>
                          <SelectItem value="普通">普通</SelectItem>
                          <SelectItem value="略懂">略懂</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Label className="mr-2">讀</Label>
                      <Select
                        value={language.reading}
                        onValueChange={(value) => handleOtherLanguageChange(language.id, 'reading', value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="請選擇" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">請選擇</SelectItem>
                          <SelectItem value="精通">精通</SelectItem>
                          <SelectItem value="普通">普通</SelectItem>
                          <SelectItem value="略懂">略懂</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Label className="mr-2">寫</Label>
                      <Select
                        value={language.writing}
                        onValueChange={(value) => handleOtherLanguageChange(language.id, 'writing', value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="請選擇" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">請選擇</SelectItem>
                          <SelectItem value="精通">精通</SelectItem>
                          <SelectItem value="普通">普通</SelectItem>
                          <SelectItem value="略懂">略懂</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageAbilities;
