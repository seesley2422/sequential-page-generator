
import React from 'react';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import PersonalResumeSection from '@/components/resume-area/PersonalResumeSection';
import CompanyJobSection from '@/components/resume-area/CompanyJobSection';
import { formatCurrentDate } from '@/components/resume-area/utils/date-formatter';

const ResumeArea = () => {
  const formattedDate = formatCurrentDate();

  const holdingCompanyJobs = [
    {
      title: '新建工程建築實務及專案協調管理人員(不動產部)',
      completionPercentage: 100
    },
    {
      title: '數據科學家',
      completionPercentage: 90
    },
    {
      title: 'AI應用導入專案經理(AI Project Manager)',
      completionPercentage: 100
    }
  ];

  const lifeInsuranceJobs = [
    {
      title: '【財務投資】財會人員(投資會計一科)',
      completionPercentage: 80
    },
    {
      title: '【資訊科技】APP 敏捷工程師(行動服務系統三科)',
      completionPercentage: 90
    },
    {
      title: '財管商品協銷人員 FA',
      completionPercentage: 100,
      isInReviewStage: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: '人才招募', href: '/recruitment' },
          { label: '履歷簡歷專區', href: '/resume-area' }
        ]} 
      />
      
      <main className="flex-1 pb-8">
        <div className="container mx-auto py-6 px-4">
          <PersonalResumeSection formattedDate={formattedDate} />

          <CompanyJobSection 
            companyName="富邦金融控股股份有限公司"
            formattedDate={formattedDate}
            jobs={holdingCompanyJobs}
          />
          
          <CompanyJobSection 
            companyName="富邦人壽保險股份有限公司"
            formattedDate={formattedDate}
            jobs={lifeInsuranceJobs}
          />
        </div>
      </main>
    </div>
  );
};

export default ResumeArea;
