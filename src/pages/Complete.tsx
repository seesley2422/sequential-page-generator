
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import { CheckCircle } from 'lucide-react';

const Complete = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: '人才招募', href: '/recruitment' },
          { label: '焦點職務與查詢', href: '/job-search' },
          { label: '富邦人壽保險股份有限公司', href: '/company' },
          { label: '財管商品協銷人員 FA', href: '/job-fa' },
          { label: '應徵成功' }
        ]} 
      />
      
      <main className="flex-1 flex items-center justify-center animate-fade-in-up">
        <div className="text-center max-w-lg mx-auto p-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">申請已成功送出</h1>
          <p className="text-gray-600 mb-8">
            感謝您的應徵！我們已收到您的申請資料，人資部門會盡快審核您的履歷，如果符合職缺需求，我們將會主動與您聯繫。
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link to="/" className="fubon-btn-primary">
              返回首頁
            </Link>
            <Link to="/applications" className="fubon-btn-secondary">
              查看應徵紀錄
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Complete;
