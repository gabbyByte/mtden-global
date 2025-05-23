'use client';

import { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Car, 
  Info, 
  Phone, 
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChauffeurFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChauffeurBookingForm({ isOpen, onClose }: ChauffeurFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1",
    vehicleType: "sedan",
    additionalInfo: "",
    returnTrip: false,
    returnDate: "",
    returnTime: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) 
      newErrors.email = "Please enter a valid email address";
    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = "Pickup location is required";
    if (!formData.destination.trim()) newErrors.destination = "Destination is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    
    if (formData.returnTrip) {
      if (!formData.returnDate) newErrors.returnDate = "Return date is required";
      if (!formData.returnTime) newErrors.returnTime = "Return time is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatWhatsAppMessage = () => {
    return `*Chauffeur Service Booking*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Pickup Location:* ${formData.pickupLocation}
*Destination:* ${formData.destination}
*Date:* ${formData.date}
*Time:* ${formData.time}
*Passengers:* ${formData.passengers}
*Vehicle Type:* ${formData.vehicleType}
${formData.returnTrip ? `*Return Trip:* Yes
*Return Date:* ${formData.returnDate}
*Return Time:* ${formData.returnTime}` : "*Return Trip:* No"}
*Additional Information:* ${formData.additionalInfo || "None"}`;
  };

  const sendViaWhatsApp = () => {
    if (validateForm()) {
      const message = encodeURIComponent(formatWhatsAppMessage());
      window.open(`https://wa.me/254799707412?text=${message}`, '_blank');
      onClose();
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        pickupLocation: "",
        destination: "",
        date: "",
        time: "",
        passengers: "1",
        vehicleType: "sedan",
        additionalInfo: "",
        returnTrip: false,
        returnDate: "",
        returnTime: ""
      });
    }
  };

  const sendViaEmail = () => {
    if (validateForm()) {
      const subject = encodeURIComponent("Chauffeur Service Booking");
      const body = encodeURIComponent(formatWhatsAppMessage().replace(/\*/g, '').replace(/\n/g, '%0A'));
      window.location.href = `mailto:mtdenglobal@gmail.com?subject=${subject}&body=${body}`;
      onClose();
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        pickupLocation: "",
        destination: "",
        date: "",
        time: "",
        passengers: "1",
        vehicleType: "sedan",
        additionalInfo: "",
        returnTrip: false,
        returnDate: "",
        returnTime: ""
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
          <h3 className="text-xl font-bold">Book a Chauffeur Service</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                <User className="h-4 w-4" /> Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-md ${errors.name ? "border-red-500" : ""}`}
                placeholder="John Doe"
                required
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium flex items-center gap-1">
                <Phone className="h-4 w-4" /> Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-md ${errors.phone ? "border-red-500" : ""}`}
                placeholder="+254 7XX XXX XXX"
                required
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
              <Mail className="h-4 w-4" /> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.email ? "border-red-500" : ""}`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="pickupLocation" className="text-sm font-medium flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Pickup Location*
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.pickupLocation ? "border-red-500" : ""}`}
              placeholder="e.g., JKIA Airport, Nairobi"
              required
            />
            {errors.pickupLocation && <p className="text-red-500 text-xs">{errors.pickupLocation}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="destination" className="text-sm font-medium flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Destination*
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.destination ? "border-red-500" : ""}`}
              placeholder="e.g., Westlands, Nairobi"
              required
            />
            {errors.destination && <p className="text-red-500 text-xs">{errors.destination}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium flex items-center gap-1">
                <Calendar className="h-4 w-4" /> Date*
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-md ${errors.date ? "border-red-500" : ""}`}
                required
              />
              {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium flex items-center gap-1">
                <Clock className="h-4 w-4" /> Time*
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-md ${errors.time ? "border-red-500" : ""}`}
                required
              />
              {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="returnTrip"
                name="returnTrip"
                checked={formData.returnTrip}
                onChange={(e) => setFormData(prev => ({ ...prev, returnTrip: e.target.checked }))}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="returnTrip" className="text-sm font-medium">
                I need a return trip
              </label>
            </div>
          </div>
          
          {formData.returnTrip && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-l-2 border-primary/20 pl-4">
              <div className="space-y-2">
                <label htmlFor="returnDate" className="text-sm font-medium flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Return Date*
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md ${errors.returnDate ? "border-red-500" : ""}`}
                  required={formData.returnTrip}
                />
                {errors.returnDate && <p className="text-red-500 text-xs">{errors.returnDate}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="returnTime" className="text-sm font-medium flex items-center gap-1">
                  <Clock className="h-4 w-4" /> Return Time*
                </label>
                <input
                  type="time"
                  id="returnTime"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md ${errors.returnTime ? "border-red-500" : ""}`}
                  required={formData.returnTrip}
                />
                {errors.returnTime && <p className="text-red-500 text-xs">{errors.returnTime}</p>}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="passengers" className="text-sm font-medium flex items-center gap-1">
                <Users className="h-4 w-4" /> Number of Passengers*
              </label>
              <select
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="vehicleType" className="text-sm font-medium flex items-center gap-1">
                <Car className="h-4 w-4" /> Vehicle Type*
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                required
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="van">Van</option>
                <option value="luxury">Luxury Car</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="additionalInfo" className="text-sm font-medium flex items-center gap-1">
              <Info className="h-4 w-4" /> Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md h-24"
              placeholder="Any special requirements or instructions..."
            />
          </div>
          
          <div className="pt-4 space-y-3">
            <Button 
              onClick={sendViaWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0zm0 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
              </svg>
              Send via WhatsApp
            </Button>
            
            <Button 
              onClick={sendViaEmail}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send via Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

