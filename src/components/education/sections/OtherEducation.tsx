
import React, { useState } from 'react';
import { useFormContext } from '@/context/FormContextC';
import { PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import MonthYearPicker from '@/components/basic-info/MonthYearPicker';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { v4 as uuidv4 } from 'uuid';

const OtherEducation = () => {
  const { state, dispatch } = useFormContext();
  
  const handleAddOtherEducation = () => {
    // Add a new empty university entry
    dispatch({
      type: 'ADD_UNIVERSITY',
      payload: {
        id: uuidv4(),
        name: '',
        department: '',
        degree: '',
        country: '',
        graduationStatus: '',
        startDate: '',
        endDate: '',
        otherDegree: ''
      }
    });
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
          其他學歷
        </h2>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleAddOtherEducation}
          className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          新增其他學歷
        </Button>
      </div>
      
      {/* Display form only when there are more than 2 universities */}
      {state.education.universities.length > 2 && (
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="otherDegree" className="block text-sm font-medium">
              教育程度
            </label>
            <Select
              value={state.education.universities[2]?.degree || ''}
              onValueChange={(value) => {
                if (state.education.universities[2]) {
                  const updatedUniversities = [...state.education.universities];
                  updatedUniversities[2] = {
                    ...updatedUniversities[2],
                    degree: value
                  };
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    payload: { 
                      ...state.education,
                      universities: updatedUniversities 
                    }
                  });
                }
              }}
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
            
            {state.education.universities[2]?.degree === '其他' && (
              <Input
                type="text"
                placeholder="請輸入教育程度"
                value={state.education.universities[2]?.otherDegree || ''}
                onChange={(e) => {
                  if (state.education.universities[2]) {
                    const updatedUniversities = [...state.education.universities];
                    updatedUniversities[2] = {
                      ...updatedUniversities[2],
                      otherDegree: e.target.value
                    };
                    dispatch({
                      type: 'UPDATE_EDUCATION',
                      payload: { 
                        ...state.education,
                        universities: updatedUniversities 
                      }
                    });
                  }
                }}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="otherCountry" className="block text-sm font-medium">
              學校所在國家
            </label>
            <Select
              value={state.education.universities[2]?.country || ''}
              onValueChange={(value) => {
                if (state.education.universities[2]) {
                  const updatedUniversities = [...state.education.universities];
                  updatedUniversities[2] = {
                    ...updatedUniversities[2],
                    country: value
                  };
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    payload: { 
                      ...state.education,
                      universities: updatedUniversities 
                    }
                  });
                }
              }}
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
              value={state.education.universities[2]?.name || ''}
              onValueChange={(value) => {
                if (state.education.universities[2]) {
                  const updatedUniversities = [...state.education.universities];
                  updatedUniversities[2] = {
                    ...updatedUniversities[2],
                    name: value
                  };
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    payload: { 
                      ...state.education,
                      universities: updatedUniversities 
                    }
                  });
                }
              }}
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
            <label htmlFor="otherDepartment" className="block text-sm font-medium">
              科系
            </label>
            <Select
              value={state.education.universities[2]?.department || ''}
              onValueChange={(value) => {
                if (state.education.universities[2]) {
                  const updatedUniversities = [...state.education.universities];
                  updatedUniversities[2] = {
                    ...updatedUniversities[2],
                    department: value
                  };
                  dispatch({
                    type: 'UPDATE_EDUCATION',
                    payload: { 
                      ...state.education,
                      universities: updatedUniversities 
                    }
                  });
                }
              }}
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
      )}
    </>
  );
};

const OtherEducationDetails = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  // Validation function to check if end date is after start date
  const isEndDateValid = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return true;
    return new Date(endDate) >= new Date(startDate);
  };

  // Only show if we have a third university entry
  if (education.universities.length <= 2) return null;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="otherStatus" className="block text-sm font-medium">
          狀態
        </label>
        <Select
          value={education.universities[2]?.graduationStatus || ''}
          onValueChange={(value) => {
            if (education.universities[2]) {
              const updatedUniversities = [...education.universities];
              updatedUniversities[2] = {
                ...updatedUniversities[2],
                graduationStatus: value
              };
              dispatch({
                type: 'UPDATE_EDUCATION',
                payload: { 
                  ...education,
                  universities: updatedUniversities 
                }
              });
            }
          }}
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
            onChange={(value) => {
              if (education.universities[2]) {
                const updatedUniversities = [...education.universities];
                updatedUniversities[2] = {
                  ...updatedUniversities[2],
                  startDate: value
                };
                dispatch({
                  type: 'UPDATE_EDUCATION',
                  payload: { 
                    ...education,
                    universities: updatedUniversities 
                  }
                });
              }
            }}
            placeholder="起始年月"
          />
          <span>～</span>
          <MonthYearPicker
            value={education.universities[2]?.endDate || ''}
            onChange={(value) => {
              if (education.universities[2]) {
                const updatedUniversities = [...education.universities];
                updatedUniversities[2] = {
                  ...updatedUniversities[2],
                  endDate: value
                };
                dispatch({
                  type: 'UPDATE_EDUCATION',
                  payload: { 
                    ...education,
                    universities: updatedUniversities 
                  }
                });
              }
            }}
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
  );
};

OtherEducation.Details = OtherEducationDetails;

export default OtherEducation;
