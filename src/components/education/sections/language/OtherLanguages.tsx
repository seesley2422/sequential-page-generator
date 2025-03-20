
import React from 'react';
import { FormState } from '@/context/form-c/types';
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
import LanguageLevelOptions from './LanguageLevelOptions';

interface OtherLanguagesProps {
  languages: FormState['education']['languages']['otherLanguages'];
  onLanguageChange: (id: string, field: string, value: string) => void;
  onAddLanguage: () => void;
}

const OtherLanguages = ({ languages, onLanguageChange, onAddLanguage }: OtherLanguagesProps) => {
  return (
    <>
      {languages.map((language) => (
        <div key={language.id} className="border border-gray-200 rounded-md p-4 space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="min-w-[200px]">
              <label className="block text-sm font-medium mb-1">
                其他語言能力
              </label>
              <div className="space-y-2">
                <Select
                  value={language.name}
                  onValueChange={(value) => onLanguageChange(language.id, 'name', value)}
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
                    onChange={(e) => onLanguageChange(language.id, 'otherName', e.target.value)}
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
                    onValueChange={(value) => onLanguageChange(language.id, 'listening', value)}
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
                    onValueChange={(value) => onLanguageChange(language.id, 'speaking', value)}
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
                    onValueChange={(value) => onLanguageChange(language.id, 'reading', value)}
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
                    onValueChange={(value) => onLanguageChange(language.id, 'writing', value)}
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
          onClick={onAddLanguage} 
          className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          新增其他語言能力
        </Button>
      </div>
    </>
  );
};

export default OtherLanguages;
