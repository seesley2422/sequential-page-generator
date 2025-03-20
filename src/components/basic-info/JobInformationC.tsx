
import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useFormContext } from '@/context/FormContextC';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import WorkLocationSelector from './WorkLocationSelector';

const JobInformationC = () => {
  const { state, dispatch } = useFormContext();
  const { basicInfo } = state;

  const handleAvailableDateChange = (type: string) => {
    dispatch({
      type: 'UPDATE_BASIC_INFO',
      payload: { availableDate: type },
    });
  };

  const handleCustomDateSelect = (date: Date | undefined) => {
    if (date) {
      dispatch({
        type: 'UPDATE_BASIC_INFO',
        payload: { customAvailableDate: format(date, 'yyyy-MM-dd') },
      });
    }
  };

  const handleAddLocation = (location: { id: string; city: string; district: string }) => {
    dispatch({
      type: 'ADD_WORK_LOCATION',
      payload: location,
    });
  };

  const handleRemoveLocation = (id: string) => {
    dispatch({
      type: 'REMOVE_WORK_LOCATION',
      payload: id,
    });
  };

  const handleUpdateLocation = (id: string, field: 'city' | 'district', value: string) => {
    const updatedLocations = basicInfo.workLocations.map(location => {
      if (location.id === id) {
        return { ...location, [field]: value };
      }
      return location;
    });

    dispatch({
      type: 'UPDATE_BASIC_INFO',
      payload: { workLocations: updatedLocations },
    });
  };

  const customDateValue = basicInfo.customAvailableDate 
    ? new Date(basicInfo.customAvailableDate) 
    : undefined;

  return (
    <div className="mb-8">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">基本資料</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* 應徵職務 */}
        <div className="form-group">
          <label htmlFor="jobTitle" className="block text-gray-700 mb-1">
            應徵職務 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="jobTitle"
            value="財管商品協銷人員FA"
            className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            disabled
            required
          />
        </div>
        
        {/* 錄取後可報到日 */}
        <div className="form-group">
          <label className="block text-gray-700 mb-1">
            錄取後可報到日 <span className="text-red-500">*</span>
          </label>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="oneMonth"
                name="availableDate"
                checked={basicInfo.availableDate === 'oneMonth'}
                onChange={() => handleAvailableDateChange('oneMonth')}
                className="mr-2"
                required
              />
              <label htmlFor="oneMonth">錄取後一個月內</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="customDate"
                name="availableDate"
                checked={basicInfo.availableDate === 'customDate'}
                onChange={() => handleAvailableDateChange('customDate')}
                className="mr-2"
                required
              />
              <label htmlFor="customDate" className="mr-3">自選日期</label>
              
              {basicInfo.availableDate === 'customDate' && (
                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !basicInfo.customAvailableDate && "text-muted-foreground",
                          "border border-gray-300 rounded-md"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {basicInfo.customAvailableDate ? (
                          format(new Date(basicInfo.customAvailableDate), 'yyyy/MM/dd')
                        ) : (
                          <span>請選擇日期</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={customDateValue}
                        onSelect={handleCustomDateSelect}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                        disabled={(date) => date < new Date()}
                        required
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* 希望工作地點 */}
        <div className="form-group">
          <label className="block text-gray-700 mb-1">
            希望工作地點 <span className="text-red-500">*</span>
          </label>
          <WorkLocationSelector
            locations={basicInfo.workLocations}
            onAddLocation={handleAddLocation}
            onRemoveLocation={handleRemoveLocation}
            onUpdateLocation={handleUpdateLocation}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default JobInformationC;
