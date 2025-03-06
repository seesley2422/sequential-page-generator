
import React from 'react';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import { Download, Eye } from 'lucide-react';

const ResumeArea = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')} PM`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: '人才招募', href: '/recruitment' },
          { label: '履歷簡歷專區', href: '/resume-area' }
        ]} 
      />
      
      <main className="flex-1 animate-fade-in-up">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-md shadow-sm p-8 mb-6">
            <h1 className="text-2xl text-fubon-blue font-medium mb-6">個人履歷</h1>
            
            <div className="border border-gray-200 rounded-md p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <span className="material-icons text-gray-500 mr-2">description</span>
                  <div>
                    <h3 className="font-medium">個人履歷建立</h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">schedule</span>
                      更新時間：{formattedDate}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                    <Download size={20} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
                    編輯
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm p-8 mb-6">
            <h2 className="text-2xl text-fubon-blue font-medium mb-6">富邦金融控股股份有限公司</h2>
            <p className="text-gray-500 mb-4">同一公司只可應徵一個職缺，請確認後送出履歷</p>
            
            <div className="flex space-x-2 mb-6">
              <div className="bg-fubon-lightBlue text-fubon-blue rounded-full px-4 py-1 text-sm flex items-center">
                編輯中 <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 text-xs">2</span>
              </div>
              <div className="bg-gray-100 text-gray-500 rounded-full px-4 py-1 text-sm flex items-center">
                已投遞 <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 text-xs">0</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job 1 */}
              <div className="border border-gray-200 rounded-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-fubon-blue">新建工程建築實務及專案協調管理人員(不動產部)</h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">schedule</span>
                      更新時間：{formattedDate}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">check_circle</span>
                      完成度：<span className="text-green-500">100%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
                      編輯
                    </button>
                    <button className="py-1 px-3 bg-fubon-blue text-white rounded hover:bg-fubon-darkBlue transition-colors text-sm">
                      送出
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Job 2 */}
              <div className="border border-gray-200 rounded-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-fubon-blue">數據科學家</h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">schedule</span>
                      更新時間：{formattedDate}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">check_circle</span>
                      完成度：<span className="text-yellow-500">90%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
                      繼續填寫
                    </button>
                    <button className="py-1 px-3 bg-gray-300 text-gray-500 rounded cursor-not-allowed text-sm">
                      送出
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Job 3 */}
              <div className="border border-gray-200 rounded-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-fubon-blue">AI應用導入專案經理(AI Project Manager)</h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">schedule</span>
                      更新時間：{formattedDate}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">check_circle</span>
                      完成度：<span className="text-green-500">100%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
                      編輯
                    </button>
                    <button className="py-1 px-3 bg-fubon-blue text-white rounded hover:bg-fubon-darkBlue transition-colors text-sm">
                      送出
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-md shadow-sm p-8">
            <h2 className="text-2xl text-fubon-blue font-medium mb-6">富邦人壽保險股份有限公司</h2>
            <p className="text-gray-500 mb-4">同一公司只可應徵一個職缺，請確認後送出履歷</p>
            
            <div className="flex space-x-2 mb-6">
              <div className="bg-fubon-lightBlue text-fubon-blue rounded-full px-4 py-1 text-sm flex items-center">
                編輯中 <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 text-xs">2</span>
              </div>
              <div className="bg-gray-100 text-gray-500 rounded-full px-4 py-1 text-sm flex items-center">
                已投遞 <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-2 text-xs">0</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job 4 */}
              <div className="border border-gray-200 rounded-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-fubon-blue">【財務投資】財會人員(投資會計一科)</h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">schedule</span>
                      更新時間：{formattedDate}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">check_circle</span>
                      完成度：<span className="text-yellow-500">80%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
                      繼續填寫
                    </button>
                    <button className="py-1 px-3 bg-gray-300 text-gray-500 rounded cursor-not-allowed text-sm">
                      送出
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Job 5 */}
              <div className="border border-gray-200 rounded-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-fubon-blue">【資訊科技】APP 敏捷工程師(行動服務系統三科)</h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">schedule</span>
                      更新時間：{formattedDate}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">check_circle</span>
                      完成度：<span className="text-yellow-500">90%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="py-1 px-3 border border-fubon-blue text-fubon-blue rounded hover:bg-fubon-lightBlue transition-colors text-sm">
                      繼續填寫
                    </button>
                    <button className="py-1 px-3 bg-gray-300 text-gray-500 rounded cursor-not-allowed text-sm">
                      送出
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Job 6 */}
              <div className="border border-gray-200 rounded-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-fubon-blue">財管商品協銷人員 FA</h3>
                    <div className="mt-1">
                      <span className="text-xs text-white bg-fubon-orange px-2 py-0.5 rounded">徵選階段</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <span className="material-icons text-gray-400 text-sm mr-1">check_circle</span>
                      完成度：<span className="text-green-500">100%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-fubon-blue transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                  <div>
                    <button className="py-1 px-3 bg-fubon-teal text-white rounded text-sm">
                      取消應徵
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeArea;
