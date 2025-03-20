
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
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import TextareaCustom from '@/components/ui/textarea-custom';

const WorkExperience = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleAddWorkExperience = () => {
    const newExperience = {
      id: uuidv4(),
      companyName: '',
      jobTitle: '',
      jobTitleDetail: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
      isPresent: false,
      salaryType: '',
      salaryAmount: '',
      reasonForLeaving: ''
    };
    
    dispatch({
      type: 'ADD_WORK_EXPERIENCE',
      payload: newExperience
    });
  };

  const handleWorkExperienceChange = (id: string, field: string, value: any) => {
    const updatedExperiences = education.workExperiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        workExperiences: updatedExperiences 
      }
    });
  };

  // Validation function to check if end date is after start date
  const isEndDateValid = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return true;
    return new Date(endDate) >= new Date(startDate);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
          工作經歷
        </h2>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleAddWorkExperience} 
          className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          新增工作經歷
        </Button>
      </div>
      
      {education.workExperiences.map((experience, index) => (
        <div key={experience.id} className="mt-4 border border-gray-200 rounded-md p-4">
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
                    handleWorkExperienceChange(experience.id, 'companyName', e.target.value)
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
                      handleWorkExperienceChange(experience.id, 'jobTitle', value)
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
                      handleWorkExperienceChange(experience.id, 'jobTitleDetail', e.target.value)
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
                    handleWorkExperienceChange(experience.id, 'responsibilities', e.target.value)
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
                      handleWorkExperienceChange(experience.id, 'startDate', value)
                    }
                    placeholder="起始年月"
                  />
                  <span>～</span>
                  <div className="relative flex-1">
                    <MonthYearPicker
                      value={experience.endDate}
                      onChange={(value) => 
                        handleWorkExperienceChange(experience.id, 'endDate', value)
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
                        handleWorkExperienceChange(experience.id, 'isPresent', Boolean(checked))
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
                      handleWorkExperienceChange(experience.id, 'salaryType', value)
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
                      handleWorkExperienceChange(experience.id, 'salaryAmount', e.target.value)
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
                    handleWorkExperienceChange(experience.id, 'reasonForLeaving', e.target.value)
                  }
                  placeholder="請輸入離職原因"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
