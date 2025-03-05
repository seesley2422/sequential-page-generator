
import React from 'react';

const Education = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">學歷</h2>
      <p className="text-red-500 text-sm mb-4">* 請將必填欄位補齊後送出履歷</p>
      
      <div className="space-y-6">
        <div className="border border-gray-200 rounded p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="fubon-label">學校名稱</label>
              <input type="text" className="fubon-input" value="國立台灣大學" />
            </div>
            
            <div>
              <label className="fubon-label">學位</label>
              <select className="fubon-input">
                <option value="bachelor">學士</option>
                <option value="master">碩士</option>
                <option value="phd">博士</option>
              </select>
            </div>
            
            <div>
              <label className="fubon-label">科系</label>
              <input type="text" className="fubon-input" value="財務金融學系" />
            </div>
            
            <div>
              <label className="fubon-label">畢業年份</label>
              <input type="text" className="fubon-input" value="2010" />
            </div>
            
            <div className="col-span-2">
              <label className="fubon-label">備註</label>
              <input type="text" className="fubon-input" />
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="fubon-label">學校名稱</label>
              <input type="text" className="fubon-input" value="國立政治大學" />
            </div>
            
            <div>
              <label className="fubon-label">學位</label>
              <select className="fubon-input">
                <option value="bachelor">學士</option>
                <option value="master" selected>碩士</option>
                <option value="phd">博士</option>
              </select>
            </div>
            
            <div>
              <label className="fubon-label">科系</label>
              <input type="text" className="fubon-input" value="金融科技研究所" />
            </div>
            
            <div>
              <label className="fubon-label">畢業年份</label>
              <input type="text" className="fubon-input" value="2013" />
            </div>
            
            <div className="col-span-2">
              <label className="fubon-label">備註</label>
              <input type="text" className="fubon-input" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-right mt-4">
        <button className="fubon-btn-primary">新增學歷</button>
      </div>
      
      <h2 className="text-xl text-fubon-blue font-medium mt-10 mb-4">專業資格證照</h2>
      <div className="space-y-6">
        <div className="border border-gray-200 rounded p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="fubon-label">證照名稱</label>
              <input type="text" className="fubon-input" value="金融市場常識與職業道德" />
            </div>
            
            <div>
              <label className="fubon-label">發照單位</label>
              <input type="text" className="fubon-input" value="金融研訓院" />
            </div>
            
            <div>
              <label className="fubon-label">證書號碼</label>
              <input type="text" className="fubon-input" value="A123456789" />
            </div>
            
            <div>
              <label className="fubon-label">發照日期</label>
              <input type="text" className="fubon-input" value="2015/06/15" />
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="fubon-label">證照名稱</label>
              <input type="text" className="fubon-input" value="人身保險業務員資格測驗" />
            </div>
            
            <div>
              <label className="fubon-label">發照單位</label>
              <input type="text" className="fubon-input" value="保發中心" />
            </div>
            
            <div>
              <label className="fubon-label">證書號碼</label>
              <input type="text" className="fubon-input" value="B987654321" />
            </div>
            
            <div>
              <label className="fubon-label">發照日期</label>
              <input type="text" className="fubon-input" value="2016/03/22" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-right mt-4">
        <button className="fubon-btn-primary">新增證照</button>
      </div>
      
      <h2 className="text-xl text-fubon-blue font-medium mt-10 mb-4">工作經歷</h2>
      <div className="border border-gray-200 rounded p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="fubon-label">任職公司</label>
            <input type="text" className="fubon-input" value="ABC金融公司" />
          </div>
          
          <div>
            <label className="fubon-label">職稱</label>
            <input type="text" className="fubon-input" value="理財規劃顧問" />
          </div>
          
          <div>
            <label className="fubon-label">工作內容</label>
            <textarea className="fubon-input h-24">負責客戶財務規劃與投資組合配置，提供多元化投資產品的專業建議。每月達成業績目標，並進行客戶關係維護。</textarea>
          </div>
          
          <div>
            <label className="fubon-label">工作期間</label>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" className="fubon-input" value="2018/03" />
              <input type="text" className="fubon-input" value="2022/05" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-right mt-4">
        <button className="fubon-btn-primary">新增工作經歷</button>
      </div>
      
      <h2 className="text-xl text-fubon-blue font-medium mt-10 mb-4">語言/專業技能</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="fubon-label">語言</label>
            <input type="text" className="fubon-input" value="英文" />
          </div>
          
          <div>
            <label className="fubon-label">程度</label>
            <select className="fubon-input">
              <option value="basic">基礎</option>
              <option value="intermediate" selected>中等</option>
              <option value="advanced">高級</option>
              <option value="native">母語</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="fubon-label">語言</label>
            <input type="text" className="fubon-input" value="日文" />
          </div>
          
          <div>
            <label className="fubon-label">程度</label>
            <select className="fubon-input">
              <option value="basic" selected>基礎</option>
              <option value="intermediate">中等</option>
              <option value="advanced">高級</option>
              <option value="native">母語</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="text-right mt-4">
        <button className="fubon-btn-primary">新增語言</button>
      </div>
      
      <h2 className="text-xl text-fubon-blue font-medium mt-10 mb-4">專業技能</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="fubon-label">專業技能</label>
            <input type="text" className="fubon-input" value="財務分析" />
          </div>
          
          <div>
            <label className="fubon-label">程度</label>
            <select className="fubon-input">
              <option value="basic">基礎</option>
              <option value="intermediate">中等</option>
              <option value="advanced" selected>高級</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="text-right mt-4">
        <button className="fubon-btn-primary">新增專業技能</button>
      </div>
    </div>
  );
};

export default Education;
