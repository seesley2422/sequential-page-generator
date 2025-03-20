
import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import MonthYearPicker from '@/components/basic-info/MonthYearPicker';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const SecondHighestEducation = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleUniversityChange = (id: string, field: string, value: string) => {
    const updatedUniversities = education.universities.map(uni => 
      uni.id === id ? { ...uni, [field]: value } : uni
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        universities: updatedUniversities 
      }
    });
  };

  return (
    <>
      <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
        次高學歷
      </h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="country2" className="block text-sm font-medium">
            學校所在國家 <span className="text-red-500">*</span>
          </label>
          <Select
            value={education.universities[1]?.country || ''}
            onValueChange={(value) => 
              education.universities[1] && 
              handleUniversityChange(education.universities[1].id, 'country', value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">請選擇</SelectItem>
              <SelectItem value="台灣">台灣</SelectItem>
              <SelectItem value="美國">美國</SelectItem>
              <SelectItem value="日本">日本</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="school2" className="block text-sm font-medium">
            學校名稱 <span className="text-red-500">*</span>
          </label>
          <Select
            value={education.universities[1]?.name || ''}
            onValueChange={(value) => 
              education.universities[1] && 
              handleUniversityChange(education.universities[1].id, 'name', value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">請選擇</SelectItem>
              <SelectItem value="台灣大學">台灣大學</SelectItem>
              <SelectItem value="國立清華大學">國立清華大學</SelectItem>
              <SelectItem value="國立交通大學">國立交通大學</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="department2" className="block text-sm font-medium">
            科系 <span className="text-red-500">*</span>
          </label>
          <Select
            value={education.universities[1]?.department || ''}
            onValueChange={(value) => 
              education.universities[1] && 
              handleUniversityChange(education.universities[1].id, 'department', value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">請選擇</SelectItem>
              <SelectItem value="資訊工程學系">資訊工程學系</SelectItem>
              <SelectItem value="企業管理學系">企業管理學系</SelectItem>
              <SelectItem value="外語學系">外語學系</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

const SecondHighestEducationDetails = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleUniversityChange = (id: string, field: string, value: string) => {
    const updatedUniversities = education.universities.map(uni => 
      uni.id === id ? { ...uni, [field]: value } : uni
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        universities: updatedUniversities 
      }
    });
  };

  // Validation function to check if end date is after start date
  const isEndDateValid = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return true;
    return new Date(endDate) >= new Date(startDate);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="status2" className="block text-sm font-medium">
          狀態 <span className="text-red-500">*</span>
        </label>
        <Select
          value={education.universities[1]?.graduationStatus || ''}
          onValueChange={(value) => 
            education.universities[1] && 
            handleUniversityChange(education.universities[1].id, 'graduationStatus', value)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="請選擇" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">請選擇</SelectItem>
            <SelectItem value="畢業">畢業</SelectItem>
            <SelectItem value="肆業">肆業</SelectItem>
            <SelectItem value="在學">在學</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="eduPeriod2" className="block text-sm font-medium">
          修業期間 <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          <MonthYearPicker
            value={education.universities[1]?.startDate || ''}
            onChange={(value) => 
              education.universities[1] && 
              handleUniversityChange(education.universities[1].id, 'startDate', value)
            }
            placeholder="起始年月"
            required
          />
          <span>～</span>
          <MonthYearPicker
            value={education.universities[1]?.endDate || ''}
            onChange={(value) => 
              education.universities[1] && 
              handleUniversityChange(education.universities[1].id, 'endDate', value)
            }
            placeholder="結束年月"
            required
          />
        </div>
        {education.universities[1]?.startDate && 
         education.universities[1]?.endDate && 
         !isEndDateValid(education.universities[1].startDate, education.universities[1].endDate) && (
          <p className="text-red-500 text-sm mt-1">結束日期必須晚於開始日期</p>
        )}
      </div>
    </div>
  );
};

SecondHighestEducation.Details = SecondHighestEducationDetails;

export default SecondHighestEducation;
