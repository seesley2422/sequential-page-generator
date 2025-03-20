
import React from 'react';
import { FormState } from '@/context/form-c/types';
import MonthYearPicker from '@/components/basic-info/MonthYearPicker';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface EnglishTestProps {
  englishTest: FormState['education']['languages']['englishTest'];
  onTestChange: (field: string, value: string) => void;
}

const EnglishTest = ({ englishTest, onTestChange }: EnglishTestProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            英語檢定 <span className="text-red-500">*</span>
          </label>
          <Select
            value={englishTest.name}
            onValueChange={(value) => onTestChange('name', value)}
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
            value={englishTest.score}
            onChange={(e) => onTestChange('score', e.target.value)}
            placeholder="請輸入分數或等級"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            取得日期 <span className="text-red-500">*</span>
          </label>
          <MonthYearPicker
            value={englishTest.date}
            onChange={(value) => onTestChange('date', value)}
            placeholder="年月"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default EnglishTest;
