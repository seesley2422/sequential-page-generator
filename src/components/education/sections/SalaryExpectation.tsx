
import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SalaryExpectation = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleExpectedSalaryChange = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        expectedSalary: {
          ...education.expectedSalary,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2 mb-4">
        期望待遇（NT$）
      </h2>
      
      <RadioGroup
        value={education.expectedSalary.type}
        onValueChange={(value) => handleExpectedSalaryChange('type', value)}
        className="flex flex-col space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="依公司規定" id="company-policy" />
          <Label htmlFor="company-policy">依公司規定</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="月薪" id="monthly" />
          <Label htmlFor="monthly">月薪</Label>
          
          {education.expectedSalary.type === '月薪' && (
            <Input
              value={education.expectedSalary.amount}
              onChange={(e) => handleExpectedSalaryChange('amount', e.target.value)}
              placeholder="請輸入期望月薪"
              className="ml-2 w-64"
              required
            />
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="年薪" id="annual" />
          <Label htmlFor="annual">年薪</Label>
          
          {education.expectedSalary.type === '年薪' && (
            <Input
              value={education.expectedSalary.amount}
              onChange={(e) => handleExpectedSalaryChange('amount', e.target.value)}
              placeholder="請輸入期望年薪"
              className="ml-2 w-64"
              required
            />
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="面議" id="negotiable" />
          <Label htmlFor="negotiable">面議</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SalaryExpectation;
