
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
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface OtherLanguageTestProps {
  tests: FormState['education']['languages']['otherTest'];
  onTestChange: (id: string, field: string, value: string) => void;
  onAddTest: () => void;
}

const OtherLanguageTest = ({ tests, onTestChange, onAddTest }: OtherLanguageTestProps) => {
  return (
    <>
      {tests.map((test) => (
        <div key={test.id} className="border border-gray-200 rounded-md p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                語文檢定
              </label>
              <div className="space-y-2">
                <Select
                  value={test.name}
                  onValueChange={(value) => onTestChange(test.id, 'name', value)}
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
                    onChange={(e) => onTestChange(test.id, 'otherName', e.target.value)}
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
                    onChange={(e) => onTestChange(test.id, 'score', e.target.value)}
                    placeholder="請輸入分數或等級"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    取得日期
                  </label>
                  <MonthYearPicker
                    value={test.date}
                    onChange={(value) => onTestChange(test.id, 'date', value)}
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
          onClick={onAddTest} 
          className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          新增語文檢定
        </Button>
      </div>
    </>
  );
};

export default OtherLanguageTest;
