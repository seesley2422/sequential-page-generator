import React, { useState } from 'react';
import { useFormContext } from '@/context/FormContextC';
import MonthYearPicker from '../basic-info/MonthYearPicker';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const EducationFormC = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleEducationChange = (key: string, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        [key]: value 
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

  const handleAddUniversity = () => {
    const newUniversity = {
      id: uuidv4(),
      name: '',
      department: '',
      degree: '',
      country: '',
      graduationStatus: '',
      startDate: '',
      endDate: '',
      otherDegree: ''
    };
    
    dispatch({
      type: 'ADD_UNIVERSITY',
      payload: newUniversity
    });
  };

  // Validation function to check if end date is after start date
  const isEndDateValid = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return true;
    return new Date(endDate) >= new Date(startDate);
  };

  return (
    <div className="mt-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Highest Degree Section */}
          <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
            最高學歷
          </h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="highestDegree" className="block text-sm font-medium">
                教育程度 <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-2">
                <Select
                  value={education.highestDegree}
                  onValueChange={(value) => handleEducationChange('highestDegree', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">請選擇</SelectItem>
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
                    placeholder="請填寫教育程度"
                    value={education.universities[0]?.otherDegree || ''}
                    onChange={(e) => 
                      education.universities[0] && 
                      handleUniversityChange(education.universities[0].id, 'otherDegree', e.target.value)
                    }
                    className="flex-1"
                    required
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
                  <SelectItem value="">請選擇</SelectItem>
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
                  <SelectItem value="">請選擇</SelectItem>
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
                  <SelectItem value="">請選擇</SelectItem>
                  <SelectItem value="資訊工程學系">資訊工程學系</SelectItem>
                  <SelectItem value="企業管理學系">企業管理學系</SelectItem>
                  <SelectItem value="外語學系">外語學系</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Second Highest Degree Section */}
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
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Highest Degree (cont'd) */}
          <h2 className="text-lg font-semibold text-transparent md:invisible">
            最高學歷
          </h2>
          
          <div className="space-y-4 md:pt-10">
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

          <Separator className="my-6" />

          {/* Second Highest Degree (cont'd) */}
          <div className="space-y-4 md:pt-10">
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
        </div>
      </div>

      {/* Other Education Section (Full Width) */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
            其他學歷
          </h2>
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleAddUniversity} 
            className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
          >
            <PlusCircle className="mr-1 h-4 w-4" />
            新增其他學歷
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="otherDegree" className="block text-sm font-medium">
                教育程度
              </label>
              <div className="flex items-center space-x-2">
                <Select
                  value={education.universities[2]?.degree || ''}
                  onValueChange={(value) => 
                    education.universities[2] && 
                    handleUniversityChange(education.universities[2].id, 'degree', value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">請選擇</SelectItem>
                    <SelectItem value="博士">博士</SelectItem>
                    <SelectItem value="碩士">碩士</SelectItem>
                    <SelectItem value="大學">大學</SelectItem>
                    <SelectItem value="專科">專科</SelectItem>
                    <SelectItem value="高中職">高中職</SelectItem>
                    <SelectItem value="其他">其他</SelectItem>
                  </SelectContent>
                </Select>
                
                {education.universities[2]?.degree === '其他' && (
                  <Input
                    placeholder="請填寫教育程度"
                    value={education.universities[2]?.otherDegree || ''}
                    onChange={(e) => 
                      education.universities[2] && 
                      handleUniversityChange(education.universities[2].id, 'otherDegree', e.target.value)
                    }
                    className="flex-1"
                  />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="otherCountry" className="block text-sm font-medium">
                學校所在國家
              </label>
              <Select
                value={education.universities[2]?.country || ''}
                onValueChange={(value) => 
                  education.universities[2] && 
                  handleUniversityChange(education.universities[2].id, 'country', value)
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
              <label htmlFor="otherSchool" className="block text-sm font-medium">
                學校名稱
              </label>
              <Select
                value={education.universities[2]?.name || ''}
                onValueChange={(value) => 
                  education.universities[2] && 
                  handleUniversityChange(education.universities[2].id, 'name', value)
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
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="otherDepartment" className="block text-sm font-medium">
                科系
              </label>
              <Select
                value={education.universities[2]?.department || ''}
                onValueChange={(value) => 
                  education.universities[2] && 
                  handleUniversityChange(education.universities[2].id, 'department', value)
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

            <div className="space-y-2">
              <label htmlFor="otherStatus" className="block text-sm font-medium">
                狀態
              </label>
              <Select
                value={education.universities[2]?.graduationStatus || ''}
                onValueChange={(value) => 
                  education.universities[2] && 
                  handleUniversityChange(education.universities[2].id, 'graduationStatus', value)
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
              <label htmlFor="otherEduPeriod" className="block text-sm font-medium">
                修業期間
              </label>
              <div className="flex items-center space-x-2">
                <MonthYearPicker
                  value={education.universities[2]?.startDate || ''}
                  onChange={(value) => 
                    education.universities[2] && 
                    handleUniversityChange(education.universities[2].id, 'startDate', value)
                  }
                  placeholder="起始年月"
                />
                <span>～</span>
                <MonthYearPicker
                  value={education.universities[2]?.endDate || ''}
                  onChange={(value) => 
                    education.universities[2] && 
                    handleUniversityChange(education.universities[2].id, 'endDate', value)
                  }
                  placeholder="結束年月"
                />
              </div>
              {education.universities[2]?.startDate && 
               education.universities[2]?.endDate && 
               !isEndDateValid(education.universities[2].startDate, education.universities[2].endDate) && (
                <p className="text-red-500 text-sm mt-1">結束日期必須晚於開始日期</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFormC;
