import React, { useState } from 'react';
import { useFormContext } from '@/context/FormContext';
import SignatureModal from '@/components/SignatureModal';
import { Check } from 'lucide-react';

const Declaration = () => {
  const { state, dispatch } = useFormContext();
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);

  const handleYesNoChange = (questionIndex: number, value: boolean) => {
    // In a real application, you would track these answers in the form state
    console.log(`Question ${questionIndex} answered: ${value ? 'Yes' : 'No'}`);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // In a real application, you would update the form state
    console.log(`${e.target.name} changed to: ${e.target.value}`);
  };

  const handleSaveSignature = (signatureData: string) => {
    dispatch({
      type: 'UPDATE_DECLARATION',
      payload: {
        signature: signatureData
      }
    });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl text-fubon-blue font-medium mb-4">重要聲明</h2>
      
      <div className="mb-6">
        <p className="text-sm text-gray-700 mb-4">
          下列內容為富邦金融控股股份有限公司(簡稱：富邦金控)為履行告知義務，依個人資料保護法規定，告知台端下列事項，請台端詳閱並簽名確認：
        </p>
        <p className="text-sm text-gray-700 mb-4">
          本公司蒐集台端之個人資料類別為：識別類、特徵類、家庭情形、教育、技術或專業、受僱情形、健康與其他為辦理人事作業所需之個人資料，蒐集之目的為：人事管理(包含甄選、離職及所屬員工基本資訊、現職、學經歷、考試分發、終身學習訓練進修、考績、保險、福利、退休、撫卹、退撫等)，推展金控、保險、證券、期貨、投顧、投信相關業務及風險控管。蒐集方式：(1)直接蒐集：以書面或電子形式蒐集，(2)間接蒐集：向台端之前僱主蒐集。
        </p>
        
        <div className="space-y-6 mt-8">
          <div>
            <p className="mb-2">是否曾受主管機關警告、糾正、停業、撤銷或廢止營業許可之處分，及其他類似處分，或有事實足認有嚴重損及銀行、票券或信託業之信用之行為？</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question1"
                  value="yes"
                  onChange={() => handleYesNoChange(1, true)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">是</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question1"
                  value="no"
                  onChange={() => handleYesNoChange(1, false)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">否</span>
              </label>
            </div>
            <input 
              type="text"
              className="fubon-input mt-2"
              name="question1Details"
              onChange={handleTextChange}
            />
          </div>
          
          <div>
            <p className="mb-2">是否有資金來源或涉嫌洗錢行為遭檢舉或警告等情事?</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question2"
                  value="yes"
                  onChange={() => handleYesNoChange(2, true)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">是</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question2"
                  value="no"
                  onChange={() => handleYesNoChange(2, false)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">否</span>
              </label>
            </div>
            <input 
              type="text"
              className="fubon-input mt-2"
              name="question2Details"
              onChange={handleTextChange}
            />
          </div>
          
          <div>
            <p className="mb-2">是否有積欠貸款或使用信用卡有異常之情?</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question3"
                  value="yes"
                  onChange={() => handleYesNoChange(3, true)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">是</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question3"
                  value="no"
                  onChange={() => handleYesNoChange(3, false)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">否</span>
              </label>
            </div>
            <input 
              type="text"
              className="fubon-input mt-2"
              name="question3Details"
              onChange={handleTextChange}
            />
          </div>
          
          <div>
            <p className="mb-2">曾經被公司(學、事業單位等)停職、解僱、免職、資遣、監護、輔導、管訓等?或曾任公私立學校、公司、金融立案之機構因案被停職之員工?</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question4"
                  value="yes"
                  onChange={() => handleYesNoChange(4, true)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">是</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question4"
                  value="no"
                  onChange={() => handleYesNoChange(4, false)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">否</span>
              </label>
            </div>
            <input 
              type="text"
              className="fubon-input mt-2"
              name="question4Details"
              onChange={handleTextChange}
            />
          </div>
          
          <div>
            <p className="mb-2">是否罹患法定傳染病?</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question5"
                  value="yes"
                  onChange={() => handleYesNoChange(5, true)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">是</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question5"
                  value="no"
                  onChange={() => handleYesNoChange(5, false)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">否</span>
              </label>
            </div>
            <input 
              type="text"
              className="fubon-input mt-2"
              name="question5Details"
              onChange={handleTextChange}
            />
          </div>
          
          <div>
            <p className="mb-2">是否擔任其他銀行及其他金融機構(含各項合作推廣單位)之內勤或外勤人員?</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question6"
                  value="yes"
                  onChange={() => handleYesNoChange(6, true)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">是</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question6"
                  value="no"
                  onChange={() => handleYesNoChange(6, false)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">否</span>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <input 
                type="text"
                className="fubon-input"
                placeholder="姓名"
                name="relatedPersonName"
                onChange={handleTextChange}
              />
              <input 
                type="text"
                className="fubon-input"
                placeholder="公司"
                name="relatedPersonCompany"
                onChange={handleTextChange}
              />
              <input 
                type="text"
                className="fubon-input"
                placeholder="部門"
                name="relatedPersonDepartment"
                onChange={handleTextChange}
              />
              <input 
                type="text"
                className="fubon-input"
                placeholder="職稱"
                name="relatedPersonTitle"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div>
            <p className="mb-2">是否參與金管會禁止?</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question7"
                  value="yes"
                  onChange={() => handleYesNoChange(7, true)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">是</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="radio"
                  name="question7"
                  value="no"
                  onChange={() => handleYesNoChange(7, false)}
                  className="form-radio h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">否</span>
              </label>
            </div>
            <input 
              type="text"
              className="fubon-input mt-2"
              name="question7Details"
              onChange={handleTextChange}
            />
          </div>
          
          <div>
            <p className="mb-2">如何得知此職缺資訊?</p>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="checkbox"
                  name="jobSource"
                  value="fubon"
                  className="form-checkbox h-4 w-4 text-fubon-blue"
                  defaultChecked
                />
                <span className="ml-2">富邦金控網站</span>
              </label>
              <label className="inline-flex items-center">
                <input 
                  type="checkbox"
                  name="jobSource"
                  value="internal"
                  className="form-checkbox h-4 w-4 text-fubon-blue"
                />
                <span className="ml-2">內部推薦介紹</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="fubon-label">求職網站</label>
              <div className="flex items-center space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox"
                    name="jobSite"
                    value="104"
                    className="form-checkbox h-4 w-4 text-fubon-blue"
                  />
                  <span className="ml-2">104</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox"
                    name="jobSite"
                    value="1111"
                    className="form-checkbox h-4 w-4 text-fubon-blue"
                  />
                  <span className="ml-2">1111</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox"
                    name="jobSite"
                    value="other"
                    className="form-checkbox h-4 w-4 text-fubon-blue"
                  />
                  <span className="ml-2">其他</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="fubon-label">其他</label>
              <input 
                type="text"
                className="fubon-input"
                name="otherJobSite"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="fubon-label">校園徵才活動</label>
              <input 
                type="text"
                className="fubon-input"
                name="campusEvent"
                onChange={handleTextChange}
              />
            </div>
            
            <div>
              <label className="fubon-label">活動名稱</label>
              <input 
                type="text"
                className="fubon-input"
                name="eventName"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="fubon-label">社群網站</label>
              <div className="flex items-center space-x-4 flex-wrap mt-1">
                <label className="inline-flex items-center mr-4 mb-2">
                  <input 
                    type="checkbox"
                    name="socialMedia"
                    value="facebook"
                    className="form-checkbox h-4 w-4 text-fubon-blue"
                  />
                  <span className="ml-2">Facebook</span>
                </label>
                <label className="inline-flex items-center mr-4 mb-2">
                  <input 
                    type="checkbox"
                    name="socialMedia"
                    value="linkedin"
                    className="form-checkbox h-4 w-4 text-fubon-blue"
                  />
                  <span className="ml-2">LinkedIn</span>
                </label>
                <label className="inline-flex items-center mb-2">
                  <input 
                    type="checkbox"
                    name="socialMedia"
                    value="other"
                    className="form-checkbox h-4 w-4 text-fubon-blue"
                    defaultChecked
                  />
                  <span className="ml-2">其他</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="fubon-label">其他</label>
              <input 
                type="text"
                className="fubon-input"
                name="otherSocialMedia"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="fubon-label">其他</label>
              <input 
                type="text"
                className="fubon-input"
                name="otherSource"
                onChange={handleTextChange}
              />
            </div>
            
            <div>
              <label className="fubon-label">其他</label>
              <input 
                type="text"
                className="fubon-input"
                name="otherDetails"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="fubon-label">集團公司</label>
              <input 
                type="text"
                className="fubon-input"
                name="groupCompany"
                onChange={handleTextChange}
              />
            </div>
            
            <div>
              <label className="fubon-label">集團公司</label>
              <input 
                type="text"
                className="fubon-input"
                name="groupCompanyDetails"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="fubon-label">富邦員工推薦</label>
              <input 
                type="text"
                className="fubon-input"
                name="employeeReferral"
                onChange={handleTextChange}
              />
            </div>
            
            <div>
              <label className="fubon-label">推薦者</label>
              <input 
                type="text"
                className="fubon-input"
                name="referrerName"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="fubon-label">任職公司</label>
              <input 
                type="text"
                className="fubon-input"
                name="referrerCompany"
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-700">
              本人茲聲明附：本表內填寫事項均屬事實，如有不實，自願承擔所有法律責任。
            </p>
            <p className="text-sm text-red-500 mt-2">
              若容易因模糊導致資訊不易讀取請重新簽名
            </p>
          </div>
          
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => setIsSignatureModalOpen(true)}
              className="border border-gray-300 rounded bg-gray-100 py-2 px-4 text-sm flex items-center space-x-2"
            >
              <span>電子簽章確認</span>
            </button>
          </div>
          
          {state.declaration.signature && (
            <div className="mt-4 border border-gray-300 rounded p-4 flex justify-center">
              <img 
                src={state.declaration.signature} 
                alt="Signature" 
                className="max-h-32"
              />
            </div>
          )}
        </div>
      </div>
      
      <SignatureModal 
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onSave={handleSaveSignature}
      />
    </div>
  );
};

export default Declaration;
