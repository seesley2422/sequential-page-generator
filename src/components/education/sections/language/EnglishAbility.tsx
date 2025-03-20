
import React from 'react';
import { FormState } from '@/context/form-c/types';
import { 
  Select, 
  SelectContent, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import LanguageLevelOptions from './LanguageLevelOptions';

interface EnglishAbilityProps {
  english: FormState['education']['languages']['english'];
  onEnglishChange: (aspect: string, value: string) => void;
}

const EnglishAbility = ({ english, onEnglishChange }: EnglishAbilityProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-medium">英語能力：</span>
        
        <div className="flex items-center">
          <span className="mr-1">聽</span>
          <Select
            value={english.listening}
            onValueChange={(value) => onEnglishChange('listening', value)}
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
            value={english.speaking}
            onValueChange={(value) => onEnglishChange('speaking', value)}
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
            value={english.reading}
            onValueChange={(value) => onEnglishChange('reading', value)}
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
            value={english.writing}
            onValueChange={(value) => onEnglishChange('writing', value)}
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
  );
};

export default EnglishAbility;
