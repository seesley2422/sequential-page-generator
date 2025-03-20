import React from 'react';
import { useFormContext } from '@/context/FormContextC';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import PhotoUploader from './PhotoUploader';
import MonthYearPicker from './MonthYearPicker';
import { getAllCities, getDistrictsByCity } from '@/utils/locationData';

const PersonalInformationC = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo } = state;

  const isMale = basicInfo.identityNumber && 
    basicInfo.identityType === '身分證' && 
    basicInfo.identityNumber.charAt(1) === '1';
  
  const shouldShowMilitaryService = 
    (basicInfo.nationalityTW && isMale) || 
    (!basicInfo.nationalityTW && basicInfo.identityType === '身分證' && isMale);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      dispatch({
        type: 'UPDATE_BASIC_INFO',
        payload: { [name]: checked },
      });
    } else if (name === 'identityNumber' && value) {
      // Convert to uppercase if it's an identity number
      dispatch({
        type: 'UPDATE_BASIC_INFO',
        payload: { [name]: value.toUpperCase() },
      });
    } else {
      dispatch({
        type: 'UPDATE_BASIC_INFO',
        payload: { [name]: value },
      });
    }
  };

  const handleBirthdateSelect = (date: Date | undefined) => {
    if (date) {
      dispatch({
        type: 'UPDATE_BASIC_INFO',
        payload: { birthdate: format(date, 'yyyy-MM-dd') },
      });
    }
  };

  const handlePhotoChange = (photoUrl: string) => {
    dispatch({
      type: 'UPDATE_BASIC_INFO',
      payload: { photo: photoUrl },
    });
  };

  const handleMonthYearChange = (field: string, value: string) => {
    dispatch({
      type: 'UPDATE_BASIC_INFO',
      payload: { [field]: value },
    });
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* 中文姓名 */}
          <div className="form-group">
            <label htmlFor="chineseName" className="block text-gray-700 mb-1">
              中文姓名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="chineseName"
              name="chineseName"
              value={basicInfo.chineseName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          
          {/* 英文姓名 */}
          <div className="form-group">
            <label htmlFor="englishName" className="block text-gray-700 mb-1">
              英文姓名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="englishName"
              name="englishName"
              value={basicInfo.englishName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
              pattern="[A-Za-z0-9\s]+"
              title="只允許填入英數值"
            />
          </div>
          
          {/* 英文別名 */}
          <div className="form-group">
            <label htmlFor="englishNickname" className="block text-gray-700 mb-1">
              英文別名
            </label>
            <input
              type="text"
              id="englishNickname"
              name="englishNickname"
              value={basicInfo.englishNickname}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              pattern="[A-Za-z0-9\s]+"
              title="只允許填入英數值"
            />
          </div>
          
          {/* 出生日期 */}
          <div className="form-group">
            <label htmlFor="birthdate" className="block text-gray-700 mb-1">
              出生日期 <span className="text-red-500">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="birthdate"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !basicInfo.birthdate && "text-muted-foreground",
                    "border border-gray-300 rounded-md"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {basicInfo.birthdate ? (
                    format(new Date(basicInfo.birthdate), 'yyyy/MM/dd')
                  ) : (
                    <span>請選擇日期</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={basicInfo.birthdate ? new Date(basicInfo.birthdate) : undefined}
                  onSelect={handleBirthdateSelect}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                  disabled={(date) => date > new Date()}
                  required
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* 國籍 */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">
              國籍 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="nationalityTW"
                  name="nationalityTW"
                  checked={basicInfo.nationalityTW}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="nationalityTW">中華民國台灣</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="nationalityOther"
                  name="nationalityOther"
                  checked={basicInfo.nationalityOther}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="nationalityOther">其他</label>
                
                {basicInfo.nationalityOther && (
                  <input
                    type="text"
                    name="nationalityOtherText"
                    value={basicInfo.nationalityOtherText}
                    onChange={handleInputChange}
                    className="ml-3 border border-gray-300 rounded-md p-1 w-40"
                    placeholder="請輸入國籍"
                    required={basicInfo.nationalityOther}
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* 證號類別 */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">
              證號類別 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="identity-card"
                  name="identityType"
                  value="身分證"
                  checked={basicInfo.identityType === '身分證'}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                <label htmlFor="identity-card">身分證</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="residence-permit"
                  name="identityType"
                  value="居留證"
                  checked={basicInfo.identityType === '居留證'}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                <label htmlFor="residence-permit">居留證</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="passport"
                  name="identityType"
                  value="護照"
                  checked={basicInfo.identityType === '護照'}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                <label htmlFor="passport">護照</label>
              </div>
            </div>
            
            <p className="text-sm text-red-500 mt-1">
              ※有中華民國台灣國籍，請優先填寫身分證號
            </p>
          </div>
          
          {/* 證號 */}
          <div className="form-group">
            <label htmlFor="identityNumber" className="block text-gray-700 mb-1">
              證號 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="identityNumber"
              name="identityNumber"
              value={basicInfo.identityNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
              pattern="[A-Za-z0-9]+"
              title="只允許填入英數值"
            />
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-4">
          {/* 最近半年內二吋半身脫帽照片 */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">
              最近半年內二吋半身脫帽照片 <span className="text-red-500">*</span>
            </label>
            <PhotoUploader
              value={basicInfo.photo}
              onChange={handlePhotoChange}
              required
            />
          </div>
          
          {/* 兵役狀態 - 只有男性顯示 */}
          {shouldShowMilitaryService && (
            <div className="form-group">
              <label className="block text-gray-700 mb-1">
                兵役狀態 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="military-exempt"
                    name="militaryStatus"
                    value="免役"
                    checked={basicInfo.militaryStatus === '免役'}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="military-exempt">免役</label>
                  
                  {basicInfo.militaryStatus === '免役' && (
                    <input
                      type="text"
                      name="militaryExemptReason"
                      value={basicInfo.militaryExemptReason}
                      onChange={handleInputChange}
                      className="ml-3 border border-gray-300 rounded-md p-1 w-60"
                      placeholder="請填寫免役原因"
                      required
                    />
                  )}
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="military-pending"
                    name="militaryStatus"
                    value="未役"
                    checked={basicInfo.militaryStatus === '未役'}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="military-pending">未役</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="military-completed"
                    name="militaryStatus"
                    value="役畢"
                    checked={basicInfo.militaryStatus === '役畢'}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="military-completed">役畢</label>
                  
                  {basicInfo.militaryStatus === '役畢' && (
                    <div className="ml-3">
                      <MonthYearPicker
                        value={basicInfo.militaryCompletionDate}
                        onChange={(value) => handleMonthYearChange('militaryCompletionDate', value)}
                        placeholder="請填寫役畢年月"
                        required
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="military-serving"
                    name="militaryStatus"
                    value="服役中"
                    checked={basicInfo.militaryStatus === '服役中'}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="military-serving">服役中</label>
                  
                  {basicInfo.militaryStatus === '服役中' && (
                    <div className="ml-3">
                      <MonthYearPicker
                        value={basicInfo.militaryExpectedCompletionDate}
                        onChange={(value) => handleMonthYearChange('militaryExpectedCompletionDate', value)}
                        placeholder="請填寫預計退伍日期（年／月）"
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* 通訊電話 */}
          <div className="form-group">
            <label htmlFor="homePhone" className="block text-gray-700 mb-1">
              通訊電話
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="homePhone"
                name="homePhone"
                value={basicInfo.homePhone}
                onChange={handleInputChange}
                className="w-16 border border-gray-300 rounded-md p-2 mr-2"
                pattern="[0-9]+"
                title="只允許填入數值"
              />
              <input
                type="text"
                id="homePhoneNumber"
                name="homePhoneNumber"
                value={basicInfo.homePhoneNumber}
                onChange={handleInputChange}
                className="flex-1 border border-gray-300 rounded-md p-2"
                pattern="[0-9]+"
                title="只允許填入數值"
              />
            </div>
          </div>
          
          {/* 手機電話 */}
          <div className="form-group">
            <label htmlFor="mobilePhone" className="block text-gray-700 mb-1">
              手機電話 <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="mobilePhone"
                name="mobilePhone"
                value={basicInfo.mobilePhone}
                onChange={handleInputChange}
                className="w-16 border border-gray-300 rounded-md p-2 mr-2"
                required
                pattern="[0-9]+"
                title="只允許填入數值"
              />
              <input
                type="text"
                id="mobilePhoneNumber"
                name="mobilePhoneNumber"
                value={basicInfo.mobilePhoneNumber}
                onChange={handleInputChange}
                className="flex-1 border border-gray-300 rounded-md p-2"
                required
                pattern="[0-9]+"
                title="只允許填入數值"
              />
            </div>
          </div>
          
          {/* 電子郵件信箱 */}
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              電子郵件信箱 <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={basicInfo.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          
          {/* 通訊地址 */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">
              通訊地址 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select
                name="addressCity"
                value={basicInfo.addressCity}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">請選擇縣市</option>
                {getAllCities().map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              
              <select
                name="addressDistrict"
                value={basicInfo.addressDistrict}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2"
                required
                disabled={!basicInfo.addressCity}
              >
                <option value="">請選擇區域</option>
                {basicInfo.addressCity &&
                  getDistrictsByCity(basicInfo.addressCity).map((district) => (
                    <option key={district.code} value={district.name}>
                      {district.name}
                    </option>
                  ))}
              </select>
              
              <input
                type="text"
                name="addressDetail"
                value={basicInfo.addressDetail}
                onChange={handleInputChange}
                className="col-span-3 border border-gray-300 rounded-md p-2 mt-2"
                placeholder="請輸入詳細地址"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationC;
