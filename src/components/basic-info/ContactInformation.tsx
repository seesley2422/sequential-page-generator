
import React from 'react';
import { useFormContext } from '@/context/FormContextB';

const ContactInformation = () => {
  const { state, dispatch } = useFormContext();
  const { contactInfo } = state;

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_CONTACT_INFO',
      payload: { [name]: value }
    });
  };

  return (
    <div>
      <h2 className="text-xl text-fubon-blue font-medium mb-4">聯絡資訊</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="homePhone" className="fubon-label">連絡電話</label>
          <input
            type="text"
            id="homePhone"
            name="homePhone"
            className="fubon-input"
            placeholder="Placeholder text"
            value={contactInfo.homePhone}
            onChange={handleContactInfoChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="fubon-label">電子郵件信箱 *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="fubon-input"
            value={contactInfo.email}
            onChange={handleContactInfoChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label htmlFor="mobilePhone" className="fubon-label">手機電話 *</label>
          <input
            type="text"
            id="mobilePhone"
            name="mobilePhone"
            className="fubon-input"
            value={contactInfo.mobilePhone}
            onChange={handleContactInfoChange}
          />
        </div>

        <div>
          <label htmlFor="address" className="fubon-label">通訊地址 *</label>
          <input
            type="text"
            id="address"
            name="address"
            className="fubon-input"
            value={contactInfo.address}
            onChange={handleContactInfoChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
