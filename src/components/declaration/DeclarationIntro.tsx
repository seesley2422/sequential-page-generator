
import React from 'react';

const DeclarationIntro: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl text-fubon-blue font-medium mb-4">重要聲明</h2>
      
      <p className="text-sm text-gray-700 mb-4">
        下列內容為富邦金融控股股份有限公司(簡稱：富邦金控)為履行告知義務，依個人資料保護法規定，告知台端下列事項，請台端詳閱並簽名確認：
      </p>
      <p className="text-sm text-gray-700 mb-4">
        本公司蒐集台端之個人資料類別為：識別類、特徵類、家庭情形、教育、技術或專業、受僱情形、健康與其他為辦理人事作業所需之個人資料，蒐集之目的為：人事管理(包含甄選、離職及所屬員工基本資訊、現職、學經歷、考試分發、終身學習訓練進修、考績、保險、福利、退休、撫卹、退撫等)，推展金控、保險、證券、期貨、投顧、投信相關業務及風險控管。蒐集方式：(1)直接蒐集：以書面或電子形式蒐集，(2)間接蒐集：向台端之前僱主蒐集。
      </p>
    </div>
  );
};

export default DeclarationIntro;
