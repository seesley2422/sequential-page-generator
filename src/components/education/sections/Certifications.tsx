
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
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const Certifications = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleAddCertificate = () => {
    const newCertificate = {
      id: uuidv4(),
      name: '',
      date: ''
    };
    
    dispatch({
      type: 'ADD_CERTIFICATE',
      payload: newCertificate
    });
  };

  const handleCertificateChange = (id: string, field: string, value: string) => {
    const updatedCertificates = education.certificates.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        certificates: updatedCertificates 
      }
    });
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
          證照
        </h2>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleAddCertificate} 
          className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          新增證照
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {education.certificates.map((certificate, index) => (
          <div key={certificate.id} className="border border-gray-200 rounded-md p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor={`otherCertName-${index}`} className="block text-sm font-medium">
                  證照名稱
                </label>
                <Select
                  value={certificate.name}
                  onValueChange={(value) => 
                    handleCertificateChange(certificate.id, 'name', value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="無">無</SelectItem>
                    <SelectItem value="會計乙級證照">會計乙級證照</SelectItem>
                    <SelectItem value="會計丙級證照">會計丙級證照</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {certificate.name !== '無' && (
                <div className="space-y-2">
                  <label htmlFor={`otherCertDate-${index}`} className="block text-sm font-medium">
                    取得日期 <span className="text-red-500">*</span>
                  </label>
                  <MonthYearPicker
                    value={certificate.date}
                    onChange={(value) => 
                      handleCertificateChange(certificate.id, 'date', value)
                    }
                    placeholder="年月"
                    required
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
