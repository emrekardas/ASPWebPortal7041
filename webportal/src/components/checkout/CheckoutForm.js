"use client";

export default function CheckoutForm({ formData, handleChange }) {
  const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya"];
  
  return (
    <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Teslimat Bilgileri</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ad</span>
          </label>
          <input 
            type="text" 
            name="firstName"
            className="input input-bordered" 
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Soyad</span>
          </label>
          <input 
            type="text" 
            name="lastName"
            className="input input-bordered" 
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">E-posta</span>
          </label>
          <input 
            type="email" 
            name="email"
            className="input input-bordered" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Telefon</span>
          </label>
          <input 
            type="tel" 
            name="phone"
            className="input input-bordered" 
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Adres</span>
        </label>
        <textarea 
          className="textarea textarea-bordered h-24" 
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Şehir</span>
          </label>
          <select 
            className="select select-bordered" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Şehir seçin</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">İlçe</span>
          </label>
          <input 
            type="text" 
            name="district"
            className="input input-bordered" 
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Posta Kodu</span>
          </label>
          <input 
            type="text" 
            name="zipCode"
            className="input input-bordered" 
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="divider my-6">Fatura Bilgileri</div>
      
      <div className="form-control">
        <label className="label cursor-pointer justify-start">
          <input 
            type="checkbox" 
            name="sameAsBilling"
            className="checkbox checkbox-primary" 
            checked={formData.sameAsBilling}
            onChange={handleChange}
          />
          <span className="label-text ml-2">Fatura bilgilerim teslimat bilgilerim ile aynı</span>
        </label>
      </div>
      
      {!formData.sameAsBilling && (
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ad</span>
              </label>
              <input 
                type="text" 
                name="shippingFirstName"
                className="input input-bordered" 
                value={formData.shippingFirstName}
                onChange={handleChange}
                required={!formData.sameAsBilling}
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Soyad</span>
              </label>
              <input 
                type="text" 
                name="shippingLastName"
                className="input input-bordered" 
                value={formData.shippingLastName}
                onChange={handleChange}
                required={!formData.sameAsBilling}
              />
            </div>
          </div>
          
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Adres</span>
            </label>
            <textarea 
              className="textarea textarea-bordered h-24" 
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              required={!formData.sameAsBilling}
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Şehir</span>
              </label>
              <select 
                className="select select-bordered" 
                name="shippingCity"
                value={formData.shippingCity}
                onChange={handleChange}
                required={!formData.sameAsBilling}
              >
                <option value="">Şehir seçin</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">İlçe</span>
              </label>
              <input 
                type="text" 
                name="shippingDistrict"
                className="input input-bordered" 
                value={formData.shippingDistrict}
                onChange={handleChange}
                required={!formData.sameAsBilling}
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Posta Kodu</span>
              </label>
              <input 
                type="text" 
                name="shippingZipCode"
                className="input input-bordered" 
                value={formData.shippingZipCode}
                onChange={handleChange}
                required={!formData.sameAsBilling}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
