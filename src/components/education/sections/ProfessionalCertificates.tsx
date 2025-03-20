
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

const ProfessionalCertificates = () => {
  const { state, dispatch } = useFormContext();
  const { education } = state;

  const handleAddProfessionalCertificate = () => {
    const newCertificate = {
      id: uuidv4(),
      name: '',
      date: ''
    };
    
    dispatch({
      type: 'ADD_PROFESSIONAL_CERTIFICATE',
      payload: newCertificate
    });
  };

  const handleProfessionalCertificateChange = (id: string, field: string, value: string) => {
    const updatedCertificates = education.professionalCertificates.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { 
        ...education,
        professionalCertificates: updatedCertificates 
      }
    });
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
          專業資格證照
        </h2>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleAddProfessionalCertificate} 
          className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          新增專業資格證照
        </Button>
      </div>
      
      <p className="mt-2 text-gray-600 italic">
        若您具備以下專業資格證照，請務必提供資訊。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {education.professionalCertificates.map((certificate, index) => (
          <div key={certificate.id} className="border border-gray-200 rounded-md p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor={`certName-${index}`} className="block text-sm font-medium">
                  證照名稱 <span className="text-red-500">*</span>
                </label>
                <Select
                  value={certificate.name}
                  onValueChange={(value) => 
                    handleProfessionalCertificateChange(certificate.id, 'name', value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="請選擇" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="無">無</SelectItem>
                    <SelectItem value="特許財務分析師CFA I">特許財務分析師CFA I</SelectItem>
                    <SelectItem value="特許財務分析師CFA II">特許財務分析師CFA II</SelectItem>
                    <SelectItem value="特許財務分析師CFA III">特許財務分析師CFA III</SelectItem>
                    <SelectItem value="國際認證高級理財規劃顧問CFP">國際認證高級理財規劃顧問CFP</SelectItem>
                    <SelectItem value="國際金融風險管理師FRM">國際金融風險管理師FRM</SelectItem>
                    <SelectItem value="證券分析師CSIA">證券分析師CSIA</SelectItem>
                    <SelectItem value="期貨分析師CFTA">期貨分析師CFTA</SelectItem>
                    <SelectItem value="律師(台灣)">律師(台灣)</SelectItem>
                    <SelectItem value="律師(美國)">律師(美國)</SelectItem>
                    <SelectItem value="會計師(台灣)">會計師(台灣)</SelectItem>
                    <SelectItem value="會計師(美國)">會計師(美國)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {certificate.name !== '無' && (
                <div className="space-y-2">
                  <label htmlFor={`certDate-${index}`} className="block text-sm font-medium">
                    取得日期 <span className="text-red-500">*</span>
                  </label>
                  <MonthYearPicker
                    value={certificate.date}
                    onChange={(value) => 
                      handleProfessionalCertificateChange(certificate.id, 'date', value)
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

export default ProfessionalCertificates;
