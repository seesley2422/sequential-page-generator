import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import { Input } from '@/components/ui/input';
import MonthYearPicker from '@/components/basic-info/MonthYearPicker';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const HighestEducation = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleEducationChange = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        [field]: value 
      }
    });
  };

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
        最高學歷
      </h2>
      
      <div className="space-y-4 mt-4">
        <div className="space-y-2">
          <label htmlFor="highestDegree" className="block text-sm font-medium">
            教育程度 <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Select
              value={education.highestDegree}
              onValueChange={(value) => handleEducationChange('highestDegree', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="請選擇" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="placeholder">請選擇</SelectItem>
                <SelectItem value="博士">博士</SelectItem>
                <SelectItem value="碩士">碩士</SelectItem>
                <SelectItem value="大學">大學</SelectItem>
                <SelectItem value="專科">專科</SelectItem>
                <SelectItem value="高中職">高中職</SelectItem>
                <SelectItem value="其他">其他</SelectItem>
              </SelectContent>
            </Select>
            
            {education.highestDegree === '其他' && (
              <Input
                type="text"
                placeholder="請輸入教育程度"
                value={education.universities[0]?.otherDegree || ''}
                onChange={(e) => 
                  education.universities[0] && 
                  handleUniversityChange(education.universities[0].id, 'otherDegree', e.target.value)
                }
                required
                className="w-full sm:w-1/2"
              />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="country" className="block text-sm font-medium">
            學校所在國家 <span className="text-red-500">*</span>
          </label>
          <Select
            value={education.universities[0]?.country || ''}
            onValueChange={(value) => 
              education.universities[0] && 
              handleUniversityChange(education.universities[0].id, 'country', value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="placeholder">請選擇</SelectItem>
              <SelectItem value="台灣">台灣</SelectItem>
              <SelectItem value="美國">美國</SelectItem>
              <SelectItem value="日本">日本</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="school" className="block text-sm font-medium">
            學校名稱 <span className="text-red-500">*</span>
          </label>
          <Select
            value={education.universities[0]?.name || ''}
            onValueChange={(value) => 
              education.universities[0] && 
              handleUniversityChange(education.universities[0].id, 'name', value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="placeholder">請選擇</SelectItem>
              <SelectItem value="台灣大學">台灣大學</SelectItem>
              <SelectItem value="國立清華大學">國立清華大學</SelectItem>
              <SelectItem value="國立交通大學">國立交通大學</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="department" className="block text-sm font-medium">
            科系 <span className="text-red-500">*</span>
          </label>
          <Select
            value={education.universities[0]?.department || ''}
            onValueChange={(value) => 
              education.universities[0] && 
              handleUniversityChange(education.universities[0].id, 'department', value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="請選擇" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="placeholder">請選擇</SelectItem>
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

const HighestEducationDetails = () => {
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
        <label htmlFor="status" className="block text-sm font-medium">
          狀態 <span className="text-red-500">*</span>
        </label>
        <Select
          value={education.universities[0]?.graduationStatus || ''}
          onValueChange={(value) => 
            education.universities[0] && 
            handleUniversityChange(education.universities[0].id, 'graduationStatus', value)
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
        <label htmlFor="eduPeriod" className="block text-sm font-medium">
          修業期間 <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          <MonthYearPicker
            value={education.universities[0]?.startDate || ''}
            onChange={(value) => 
              education.universities[0] && 
              handleUniversityChange(education.universities[0].id, 'startDate', value)
            }
            placeholder="起始年月"
            required
          />
          <span>～</span>
          <MonthYearPicker
            value={education.universities[0]?.endDate || ''}
            onChange={(value) => 
              education.universities[0] && 
              handleUniversityChange(education.universities[0].id, 'endDate', value)
            }
            placeholder="結束年月"
            required
          />
        </div>
        {education.universities[0]?.startDate && 
         education.universities[0]?.endDate && 
         !isEndDateValid(education.universities[0].startDate, education.universities[0].endDate) && (
          <p className="text-red-500 text-sm mt-1">結束日期必須晚於開始日期</p>
        )}
      </div>
    </div>
  );
};

HighestEducation.Details = HighestEducationDetails;

export default HighestEducation;
