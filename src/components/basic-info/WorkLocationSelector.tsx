
import React from 'react';
import { PlusCircle, XCircle } from 'lucide-react';
import { getAllCities, getDistrictsByCity } from '@/utils/locationData';
import { v4 as uuidv4 } from 'uuid';

interface WorkLocation {
  id: string;
  city: string;
  district: string;
}

interface WorkLocationSelectorProps {
  locations: WorkLocation[];
  onAddLocation: (location: WorkLocation) => void;
  onRemoveLocation: (id: string) => void;
  onUpdateLocation: (id: string, field: 'city' | 'district', value: string) => void;
  required?: boolean;
}

const WorkLocationSelector: React.FC<WorkLocationSelectorProps> = ({
  locations,
  onAddLocation,
  onRemoveLocation,
  onUpdateLocation,
  required = false,
}) => {
  const handleCityChange = (id: string, city: string) => {
    onUpdateLocation(id, 'city', city);
    // Reset district when city changes
    onUpdateLocation(id, 'district', '');
  };

  const handleAddLocation = () => {
    const newLocation = {
      id: uuidv4(),
      city: '',
      district: '',
    };
    onAddLocation(newLocation);
  };

  return (
    <div className="mt-2 space-y-2">
      {locations.map((location, index) => (
        <div key={location.id} className="flex items-center space-x-2">
          <div className="flex-1">
            <select
              value={location.city}
              onChange={(e) => handleCityChange(location.id, e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required={required && index === 0}
            >
              <option value="">請選擇縣市</option>
              {getAllCities().map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex-1">
            <select
              value={location.district}
              onChange={(e) => onUpdateLocation(location.id, 'district', e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required={required && index === 0}
              disabled={!location.city}
            >
              <option value="">請選擇區域</option>
              {location.city &&
                getDistrictsByCity(location.city).map((district) => (
                  <option key={district.code} value={district.name}>
                    {district.name}
                  </option>
                ))}
            </select>
          </div>
          
          {index > 0 && (
            <button
              type="button"
              onClick={() => onRemoveLocation(location.id)}
              className="text-red-500 hover:text-red-700"
              aria-label="移除此工作地點"
            >
              <XCircle size={20} />
            </button>
          )}
        </div>
      ))}
      
      <button
        type="button"
        onClick={handleAddLocation}
        className="flex items-center text-fubon-blue hover:text-fubon-darkBlue"
      >
        <PlusCircle size={18} className="mr-1" />
        <span>新增工作地點</span>
      </button>
    </div>
  );
};

export default WorkLocationSelector;
