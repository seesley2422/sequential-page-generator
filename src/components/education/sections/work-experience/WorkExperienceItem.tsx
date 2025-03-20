
import React from 'react';
import MonthYearPicker from '@/components/basic-info/MonthYearPicker';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import TextareaCustom from '@/components/ui/textarea-custom';

interface WorkExperienceItemProps {
  experience: {
    id: string;
    companyName: string;
    jobTitle: string;
    jobTitleDetail: string;
    responsibilities: string;
    startDate: string;
    endDate: string;
    isPresent: boolean;
    salaryType: string;
    salaryAmount: string;
    reasonForLeaving: string;
  };
  index: number;
  onExperienceChange: (id: string, field: string, value: any) => void;
  isEndDateValid: (startDate: string, endDate: string) => boolean;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ 
  experience, 
  index, 
  onExperienceChange,
  isEndDateValid
}) => {
  return (
    <div className="mt-4 border border-gray-200 rounded-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor={`companyName-${index}`} className="block text-sm font-medium">
              服務機構名稱
            </label>
            <Input
              id={`companyName-${index}`}
              value={experience.companyName}
              onChange={(e) => 
                onExperienceChange(experience.id, 'companyName', e.target.value)
              }
              placeholder="請輸入服務機構名稱"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor={`jobTitle-${index}`} className="block text-sm font-medium">
              職稱
            </label>
            <div className="space-y-2">
              <Select
                value={experience.jobTitle}
                onValueChange={(value) => 
                  onExperienceChange(experience.id, 'jobTitle', value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="無">無</SelectItem>
                  <SelectItem value="全職">全職</SelectItem>
                  <SelectItem value="部分工時">部分工時</SelectItem>
                  <SelectItem value="實習">實習</SelectItem>
                </SelectContent>
              </Select>
              
              <Input
                placeholder="補充說明"
                value={experience.jobTitleDetail}
                onChange={(e) => 
                  onExperienceChange(experience.id, 'jobTitleDetail', e.target.value)
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor={`responsibilities-${index}`} className="block text-sm font-medium">
              主要職責
            </label>
            <Input
              id={`responsibilities-${index}`}
              value={experience.responsibilities}
              onChange={(e) => 
                onExperienceChange(experience.id, 'responsibilities', e.target.value)
              }
              placeholder="請輸入主要職責"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor={`workPeriod-${index}`} className="block text-sm font-medium">
              服務期間
            </label>
            <div className="flex items-center space-x-2">
              <MonthYearPicker
                value={experience.startDate}
                onChange={(value) => 
                  onExperienceChange(experience.id, 'startDate', value)
                }
                placeholder="起始年月"
              />
              <span>～</span>
              <div className="relative flex-1">
                <MonthYearPicker
                  value={experience.endDate}
                  onChange={(value) => 
                    onExperienceChange(experience.id, 'endDate', value)
                  }
                  placeholder="結束年月"
                  disabled={experience.isPresent}
                />
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  id={`isPresent-${index}`}
                  checked={experience.isPresent}
                  onCheckedChange={(checked) => 
                    onExperienceChange(experience.id, 'isPresent', Boolean(checked))
                  }
                />
                <label htmlFor={`isPresent-${index}`} className="text-sm">
                  迄今
                </label>
              </div>
            </div>
            {experience.startDate && 
             experience.endDate && 
             !isEndDateValid(experience.startDate, experience.endDate) && (
              <p className="text-red-500 text-sm mt-1">結束日期必須晚於開始日期</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor={`salary-${index}`} className="block text-sm font-medium">
              薪資
            </label>
            <div className="flex items-center space-x-2">
              <Select
                value={experience.salaryType}
                onValueChange={(value) => 
                  onExperienceChange(experience.id, 'salaryType', value)
                }
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="無">無</SelectItem>
                  <SelectItem value="月薪">月薪</SelectItem>
                  <SelectItem value="日薪">日薪</SelectItem>
                  <SelectItem value="時薪">時薪</SelectItem>
                  <SelectItem value="年薪">年薪</SelectItem>
                </SelectContent>
              </Select>
              
              <Input
                placeholder="薪資金額"
                value={experience.salaryAmount}
                onChange={(e) => 
                  onExperienceChange(experience.id, 'salaryAmount', e.target.value)
                }
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor={`leavingReason-${index}`} className="block text-sm font-medium">
              離職原因
            </label>
            <TextareaCustom
              id={`leavingReason-${index}`}
              value={experience.reasonForLeaving}
              onChange={(e) => 
                onExperienceChange(experience.id, 'reasonForLeaving', e.target.value)
              }
              placeholder="請輸入離職原因"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
