
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import LanguageLevelOptions from './LanguageLevelOptions';

interface TaiwaneseAbilityProps {
  value: string;
  onChange: (value: string) => void;
}

const TaiwaneseAbility = ({ value, onChange }: TaiwaneseAbilityProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <span className="font-medium">閩南語能力：</span>
      <Select
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="請選擇" />
        </SelectTrigger>
        <SelectContent>
          <LanguageLevelOptions />
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaiwaneseAbility;
