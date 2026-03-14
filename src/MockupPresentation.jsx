import React, { useState } from 'react';
import { Monitor, Smartphone, ChevronRight, Download, Share2, Globe, Users, CreditCard, Shield, Star } from 'lucide-react';
import PortalImg from './assets/Portal.png';
import CheckoutImg from './assets/Checkout.png';
import PaymentImg from './assets/Payment.png';
import LoginImg from './assets/Login.png';
import MobilePortalImg from './assets/mobile_portal1.jpg';
import MobileCheckoutImg from './assets/mobile_chekcout1.jpg';
import MobilePaymentImg from './assets/mobile_payment.jpg';
import MobileLoginImg from './assets/mobile_login.jpg';

const MockupGallery = () => {
  const [activeTab, setActiveTab] = useState('laptop');
  
  const screenshots = {
    portal: { laptop: PortalImg, mobile: MobilePortalImg },
    checkout: { laptop: CheckoutImg, mobile: MobileCheckoutImg },
    payment: { laptop: PaymentImg, mobile: MobilePaymentImg },
    login: { laptop: LoginImg, mobile: MobileLoginImg }
  };

  const LaptopMockup = ({ src, title }) => (
    <div className="relative mx-auto transition-all duration-700 ease-out transform hover:scale-[1.02] w-full max-w-4xl">
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[6px] md:border-[8px] rounded-t-xl aspect-video shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full mt-1 z-10" />
        <div className="rounded-sm overflow-hidden h-full w-full bg-white">
          <img src={src} alt={title} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 rounded-b-xl h-3 md:h-4 w-4/5 md:w-[85%]">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 md:w-20 h-1 bg-gray-800 rounded-b-md" />
      </div>
      <div className="relative mx-auto bg-gray-800 h-0.5 w-3/4 md:w-[80%] blur-sm opacity-50 mt-0.5" />
    </div>
  );

  const PhoneMockup = ({ src, title }) => (
    <div className="relative mx-auto transition-all duration-700 ease-out transform hover:scale-105">
      <div className="relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[500px] w-[250px] shadow-2xl overflow-hidden">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20" />
        <div className="h-full w-full bg-white rounded-[1.5rem] overflow-hidden">
          <img src={src} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -left-[14px] top-24 w-[3px] h-10 bg-gray-800 rounded-r-sm" />
        <div className="absolute -left-[14px] top-40 w-[3px] h-16 bg-gray-800 rounded-r-sm" />
        <div className="absolute -right-[14px] top-32 w-[3px] h-20 bg-gray-800 rounded-l-sm" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 font-sans">
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
                  <Shield size={14} className="text-blue-300" />
                  <span className="text-sm font-medium text-blue-200">Government Project</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
                  <Star size={12} className="text-emerald-300" />
                  <span className="text-sm font-medium text-emerald-200">Production Ready</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                National ID Program
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
                Engineered the entire backend for the National ID Program's card ordering system. 
                Integrated with <span className="text-blue-300 font-semibold">EthioPost</span> and <span className="text-blue-300 font-semibold">Chapa</span> payment gateway to serve <span className="text-emerald-300 font-bold">35M+ users</span> nationwide.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <Globe size={18} className="text-blue-400" />
                  <span className="text-sm">Ethio Telecom</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Users size={18} className="text-emerald-400" />
                  <span className="text-sm">35M+ Citizens</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CreditCard size={18} className="text-purple-400" />
                  <span className="text-sm">Chapa Integration</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex bg-white/10 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
                <button 
                  onClick={() => setActiveTab('laptop')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${activeTab === 'laptop' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'text-slate-300 hover:bg-white/10'}`}
                >
                  <Monitor size={16} /> <span className="hidden sm:inline text-sm">Laptop</span>
                </button>
                <button 
                  onClick={() => setActiveTab('mobile')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${activeTab === 'mobile' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'text-slate-300 hover:bg-white/10'}`}
                >
                  <Smartphone size={16} /> <span className="hidden sm:inline text-sm">Mobile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24 lg:space-y-40">
        
        {/* Section 1: Login */}
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex justify-center">
            {activeTab === 'laptop' ? (
              <LaptopMockup src={screenshots.login.laptop} title="Login Interface" />
            ) : (
              <PhoneMockup src={screenshots.login.mobile} title="Login Interface" />
            )}
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">Interface 01</span>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">Secure Authentication Portal</h2>
            <p className="text-slate-600 leading-relaxed">
              User-friendly login interface with robust security features. Supports multiple authentication methods including Telebirr integration for seamless citizen access.
            </p>
            <ul className="space-y-3">
              {['Secure OTP verification', 'Biometric login support', 'Remember device functionality'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <ChevronRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Demographics Portal */}
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex justify-center">
            {activeTab === 'laptop' ? (
              <LaptopMockup src={screenshots.portal.laptop} title="Demographics Portal" />
            ) : (
              <PhoneMockup src={screenshots.portal.mobile} title="Demographics Portal" />
            )}
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">Interface 02</span>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">Identity Management & Delivery Selection</h2>
            <p className="text-slate-600 leading-relaxed">
              A comprehensive demographic data verification interface integrated with dynamic service selection. 
              Features a clean sidebar layout for citizen profile management and intuitive service tiering.
            </p>
            <ul className="space-y-3">
              {['Real-time data validation', 'Multi-tier service selection', 'Dynamic fee calculation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <ChevronRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Checkout */}
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider">Interface 03</span>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">Modernized Checkout Experience</h2>
            <p className="text-slate-600 leading-relaxed">
              Streamlined payment method selection featuring regional logistics integration. The interface prioritizes clarity and conversion.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                <Download size={16} /> Asset Pack
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <Share2 size={16} /> Share Case
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            {activeTab === 'laptop' ? (
              <LaptopMockup src={screenshots.checkout.laptop} title="Payment Checkout" />
            ) : (
              <PhoneMockup src={screenshots.checkout.mobile} title="Payment Checkout" />
            )}
          </div>
        </section>

        {/* Section 4: Payment Gateway */}
        <section className="bg-white rounded-[3rem] p-10 md:p-16 lg:p-20 border border-slate-200 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">Payment Gateway Integration</h2>
              <p className="text-xl text-slate-600">Secure, time-sensitive transaction processing with instant SMS verification loops.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
                  <div className="text-slate-500 font-medium">Uptime Reliable</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">&lt;2s</div>
                  <div className="text-slate-500 font-medium">Load Velocity</div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              {activeTab === 'laptop' ? (
                <LaptopMockup src={screenshots.payment.laptop} title="Telebirr Gateway" />
              ) : (
                <PhoneMockup src={screenshots.payment.mobile} title="Telebirr Gateway" />
              )}
            </div>
          </div>
        </section>

      </div>

      <footer className="max-w-6xl mx-auto border-t border-slate-200 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-4">
        <p>© 2026 National ID Program. Built for 35M+ citizens.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-600 transition-colors">Case Studies</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Documentation</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Design System</a>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return <MockupGallery />;
}
