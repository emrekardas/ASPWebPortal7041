"use client";

export default function PaymentOptions({ formData, handleChange }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  
  return (
    <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Ödeme Bilgileri</h2>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="credit-card"
              className="radio radio-primary" 
              checked={formData.paymentMethod === 'credit-card'}
              onChange={handleChange}
            />
            <span className="label-text ml-2">Kredi Kartı</span>
          </label>
        </div>
        
        <div className="form-control">
          <label className="label cursor-pointer">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="bank-transfer"
              className="radio radio-primary" 
              checked={formData.paymentMethod === 'bank-transfer'}
              onChange={handleChange}
            />
            <span className="label-text ml-2">Havale/EFT</span>
          </label>
        </div>
      </div>
      
      {formData.paymentMethod === 'credit-card' ? (
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Kart Üzerindeki İsim</span>
            </label>
            <input 
              type="text" 
              name="cardName"
              className="input input-bordered" 
              placeholder="Kart üzerindeki isim"
              value={formData.cardName}
              onChange={handleChange}
              required={formData.paymentMethod === 'credit-card'}
            />
          </div>
          
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Kart Numarası</span>
            </label>
            <input 
              type="text" 
              name="cardNumber"
              className="input input-bordered" 
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => {
                // Only allow digits and format with spaces
                const value = e.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
                handleChange({
                  target: {
                    name: 'cardNumber',
                    value: value.substring(0, 19) // Limit length to 19 chars (16 digits + 3 spaces)
                  }
                });
              }}
              maxLength={19}
              required={formData.paymentMethod === 'credit-card'}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Son Kullanma Tarihi</span>
              </label>
              <div className="flex gap-2">
                <select 
                  name="expiryMonth"
                  className="select select-bordered flex-1" 
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  required={formData.paymentMethod === 'credit-card'}
                >
                  <option value="">Ay</option>
                  {months.map(month => (
                    <option key={month} value={month}>
                      {month.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select 
                  name="expiryYear"
                  className="select select-bordered flex-1" 
                  value={formData.expiryYear}
                  onChange={handleChange}
                  required={formData.paymentMethod === 'credit-card'}
                >
                  <option value="">Yıl</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">CVV</span>
              </label>
              <input 
                type="text" 
                name="cvv"
                className="input input-bordered" 
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  handleChange({
                    target: {
                      name: 'cvv',
                      value: value.substring(0, 3)
                    }
                  });
                }}
                maxLength={3}
                required={formData.paymentMethod === 'credit-card'}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold">Havale/EFT Bilgileri</h3>
              <div className="text-sm mt-2">
                <p>Aşağıdaki banka hesaplarımıza ödeme yapabilirsiniz:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>ASP Bank - TR12 3456 7890 1234 5678 90</li>
                  <li>Digital Bank - TR98 7654 3210 9876 5432 10</li>
                </ul>
                <p className="mt-2">Ödemenizi yaptıktan sonra siparişiniz onay sürecine alınacaktır.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
