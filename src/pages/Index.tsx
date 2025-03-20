
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: '人才招募', href: '/recruitment' },
          { label: '焦點職務與查詢', href: '/job-search' },
          { label: '財管商品協銷人員 FA', href: '/job-fa' }
        ]} 
      />
      
      <main className="flex-1 animate-fade-in-up">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-md shadow-sm p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-fubon-blue">財管商品協銷人員 FA</h1>
              
              <div className="flex gap-2">
                <Link 
                  to="/apply"
                  className="fubon-btn-primary flex items-center"
                >
                  應徵 A版本
                </Link>
                <Link 
                  to="/apply-b"
                  className="fubon-btn-primary flex items-center"
                >
                  應徵 B版本
                </Link>
                <Link 
                  to="/apply-c"
                  className="fubon-btn-primary flex items-center"
                >
                  應徵 C版本
                </Link>
                <button className="fubon-btn-secondary">
                  加入收藏
                </button>
              </div>
            </div>
            
            <section className="mb-10">
              <h2 className="text-xl text-fubon-blue font-medium mb-4">工作內容</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>配合公司商品策略，提供業務主管財富規劃、保險、基金、債券投資諮詢。</li>
                <li>客戶投資組合配置與檢視，協助業務主管達到顧客導向的投資目標及需求。</li>
                <li>循固區主管與財管諮詢顧問共同訂定各項務執行目標，並定期追蹤執行進度與成效檢討。</li>
                <li>新產品上架的教育訓練及話術演練，配合總公司和分公司的各項業務訊息傳達與執行。</li>
                <li>舉辦客戶會並強化成效。</li>
              </ol>
            </section>
            
            <section className="mb-10">
              <h2 className="text-xl text-fubon-blue font-medium mb-4">工作資格條件</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>學歷：專科以上。</li>
                <li>具財管商品推展相關經驗5年以上，其中財管商品推展至少3年以上。</li>
                <li>擅長人際溝通、樂於與人互動。</li>
                <li>抗壓性高、主動積極、樂於挑戰高目標。</li>
              </ol>
            </section>
            
            <section className="mb-10">
              <h2 className="text-xl text-fubon-blue font-medium mb-4">必備專業證照</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>金融市場常識與職業道德。</li>
                <li>證券商業務員/證券商高業務員(擇一)。</li>
                <li>人身保險業務員。</li>
                <li>投資型保險商品業務員。</li>
                <li>信託業業務人員信託業務專業測驗(信託法規乙科)。</li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-xl text-fubon-blue font-medium mb-4">具下述證照者尤佳</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>期貨商業務員。</li>
                <li>產物保險業務員。</li>
                <li>外商收付之非投資型人身保險資格證照。</li>
                <li>投信投顧業務員。</li>
                <li>衍生性金融商品銷售人員。</li>
              </ol>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
