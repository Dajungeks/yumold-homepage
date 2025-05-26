import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ArrowRight, Award, Globe, Users, Briefcase, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import networkImage from "@assets/network.png";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex">
                <div className="w-6 h-6 bg-red-600 mr-1"></div>
                <div className="w-6 h-6 bg-blue-600"></div>
              </div>
              <h1 className="text-2xl font-bold ml-3 tracking-wider">YUMOLD</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">회사소개</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">솔루션</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">연락처</a>
              <Button 
                disabled
                className="bg-gray-600 cursor-not-allowed"
              >
                시스템 로그인 (준비중)
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#about" className="block text-gray-700 hover:text-blue-600">회사소개</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600">솔루션</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">연락처</a>
              <Button 
                disabled
                className="w-full bg-gray-600 cursor-not-allowed"
              >
                시스템 로그인 (준비중)
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          {/* Large blue geometric shape */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-600 to-blue-800 transform skew-x-12 origin-top-right"></div>
            </div>
          </div>
          
          {/* Secondary gray geometric shapes */}
          <div className="absolute top-20 left-1/4 w-96 h-64 bg-gray-400 transform -skew-x-12 opacity-80"></div>
          <div className="absolute bottom-32 right-1/4 w-80 h-48 bg-gray-500 transform skew-y-6 opacity-60"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Logo Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    <div className="w-8 h-8 bg-red-600 mr-1"></div>
                    <div className="w-8 h-8 bg-blue-600"></div>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold ml-4 tracking-wider">
                    YUMOLD
                  </h1>
                </div>
                <p className="text-gray-300 text-lg font-medium">
                  Mold Total Solution (MB/FA/MTC/LSR/HR)
                </p>
              </div>

              {/* Main Message */}
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  YOUR GLOBAL<br />
                  <span className="text-blue-400">BUSINESS PARTNER</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  혁신적인 몰드 솔루션과 글로벌 비즈니스 파트너십으로<br />
                  최고의 품질과 서비스를 제공합니다
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  솔루션 알아보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  문의
                </Button>
              </div>
            </div>

            {/* Right Content - Additional Visual Elements */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="w-64 h-64 border-2 border-blue-400 opacity-30 transform rotate-45"></div>
                <div className="absolute top-8 left-8 w-48 h-48 border-2 border-white opacity-20 transform -rotate-12"></div>
                <div className="absolute top-16 left-16 w-32 h-32 bg-blue-600 opacity-40 transform rotate-12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-px h-8 bg-white opacity-40"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">YUMOLD</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  YUMOLD는 <strong>Mold Total Solution</strong>을 제공하는 글로벌 기업으로, 
                  MB(Mold Base), FA(Factory Automation), MTC(Mold Temperature Controller), 
                  LSR(Liquid Silicone Rubber), HR(Hot Runner) 분야에서 
                  종합적인 솔루션을 제공합니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  혁신적인 기술력과 풍부한 경험을 바탕으로 고객의 성공을 위한 
                  최적의 파트너가 되어드리며, 지속 가능한 미래를 함께 만들어갑니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">품질 보증</h3>
                    <p className="text-gray-600">ISO 인증을 통한 최고 품질의 제품과 서비스</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">글로벌 네트워크</h3>
                    <p className="text-gray-600">한국, 중국, 베트남, 태국을 포함한 전 세계 서비스</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">전문 인력</h3>
                    <p className="text-gray-600">숙련된 엔지니어와 전문가 팀</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">토탈 솔루션</h3>
                    <p className="text-gray-600">설계부터 생산까지 원스톱 서비스</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mold Total Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              YUMOLD는 MB/FA/MTC/LSR/HR 분야의 전문 솔루션을 통해<br />
              고객의 성공을 위한 완벽한 파트너십을 제공합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* MB - Mold Base */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-2xl font-bold text-blue-600">MB</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mold Base</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  고정밀 몰드 베이스 설계 및 제조로 최적의 생산성을 보장합니다.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    표준 몰드 베이스
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    맞춤형 몰드 설계
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    정밀 가공 서비스
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* FA - Factory Automation */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-2xl font-bold text-green-600">FA</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Factory Automation</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  스마트 팩토리 솔루션으로 생산 효율성을 극대화합니다.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    자동화 시스템 구축
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    로봇 통합 솔루션
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    품질 관리 시스템
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* MTC - Mold Temperature Controller */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-xl font-bold text-purple-600">MTC</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mold Temperature Controller</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  정밀한 금형 온도 제어 시스템으로 최적의 생산 환경을 제공합니다.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    정밀 온도 제어
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    에너지 효율성
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    자동화 시스템 연동
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* LSR - Liquid Silicone Rubber */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-2xl font-bold text-orange-600">LSR</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Liquid Silicone Rubber</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  액상 실리콘 고무 전문 가공 및 응용 솔루션을 제공합니다.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    LSR 사출 성형
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    의료용 LSR 제품
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    자동차 부품 솔루션
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* HR - Hot Runner */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-2xl font-bold text-indigo-600">HR</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Hot Runner</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  고효율 핫러너 시스템으로 정밀한 사출 성형 솔루션을 제공합니다.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    정밀 온도 제어
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    소재 낭비 최소화
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    다점 사출 시스템
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Business Management System */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business System</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  통합 비즈니스 관리 시스템으로 효율적인 업무 환경을 구축합니다.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    ERP 통합 관리
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    고객 관계 관리
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    다국적 운영 지원
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">연락처</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              언제든지 문의해 주시기 바랍니다.<br />
              최고의 몰드 솔루션 서비스를 제공하겠습니다.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Global Network Map */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">글로벌 네트워크</h3>
                  <p className="text-gray-600">한국, 중국, 베트남, 태국을 포함한 전 세계 서비스</p>
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={networkImage} 
                    alt="YUMOLD Global Network - Korea, China, Vietnam, Thailand Locations" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback: Hide image and show text if it fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.network-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Fallback content if image fails to load */}
                  <div className="network-fallback hidden bg-gradient-to-br from-blue-100 to-gray-100 p-8 text-center rounded-xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">YUMOLD 글로벌 네트워크</h4>
                    <p className="text-gray-600">한국, 중국, 베트남, 태국을 포함한 전 세계 서비스</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-blue-500 text-white p-2 rounded">🇰🇷 Korea</div>
                      <div className="bg-red-500 text-white p-2 rounded">🇨🇳 China</div>
                      <div className="bg-green-500 text-white p-2 rounded">🇻🇳 Vietnam</div>
                      <div className="bg-orange-500 text-white p-2 rounded">🇹🇭 Thailand</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">연락처 정보</h3>
                  <p className="text-gray-600">언제든지 문의해 주시기 바랍니다</p>
                </div>

                <div className="space-y-6">
                  {/* Korea Section */}
                  <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/50 rounded-r-lg hover:bg-blue-50 transition-colors duration-300">
                    <h4 className="text-lg font-bold text-blue-600 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                      Korea
                    </h4>
                    
                    <div className="space-y-4 text-sm">
                      <div className="hover:text-blue-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-blue-700 mb-1">본사 (경인 영업소)</p>
                        <p className="text-gray-600 mb-1">📍 경기도 안산시 단원구 성곡동 677번지</p>
                        <p className="text-gray-600">📞 032-710-3361 📱 010-4677-9627</p>
                      </div>
                      
                      <div className="hover:text-blue-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-blue-700 mb-1">충북 센터 (수원 영업소)</p>
                        <p className="text-gray-600 mb-1">📍 경기도 화성시 정남면 마석로 625 1층</p>
                        <p className="text-gray-600">📞 031-352-9840 📱 010-5568-3331</p>
                      </div>
                      
                      <div className="hover:text-blue-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-blue-700 mb-1">영남 본부 (대구 영업소)</p>
                        <p className="text-gray-600 mb-1">📍 경북 칠곡군 왜관읍 금따로 206 (C동 203호)</p>
                        <p className="text-gray-600">📞 054-975-9810 📱 010-7918-5551</p>
                      </div>
                      
                      <div className="hover:text-blue-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-blue-700 mb-1">호남 본부 (광주 영업소)</p>
                        <p className="text-gray-600 mb-1">📍 광주광역시 광산구 진곡산단 중앙로 52</p>
                        <p className="text-gray-600">📞 062-446-9810 📱 010-3916-3331</p>
                      </div>
                    </div>
                  </div>

                  {/* China Section */}
                  <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50/50 rounded-r-lg hover:bg-red-50 transition-colors duration-300">
                    <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      China
                    </h4>
                    
                    <div className="space-y-4 text-sm">
                      <div className="hover:text-red-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-red-700 mb-1">上海 (Shanghai)</p>
                        <p className="text-gray-600 mb-1">📍 中国上海市闵行区经信镇海清路波渡工业园区B栋102</p>
                        <p className="text-gray-600">📞 13813900274</p>
                      </div>
                      
                      <div className="hover:text-red-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-red-700 mb-1">天津 (Tianjin)</p>
                        <p className="text-gray-600 mb-1">📍 天津市北辰区正兴轴一物流经济石工业园</p>
                        <p className="text-gray-600">📞 18322118074</p>
                      </div>
                      
                      <div className="hover:text-red-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-red-700 mb-1">苏州 (Suzhou)</p>
                        <p className="text-gray-600 mb-1">📍 苏州市相城区黄埭大道北路11029号</p>
                        <p className="text-gray-600">📞 13451883157</p>
                      </div>
                      
                      <div className="hover:text-red-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-red-700 mb-1">青岛 (Qingdao)</p>
                        <p className="text-gray-600 mb-1">📍 山东省青岛市平度区商德街路318号</p>
                        <p className="text-gray-600">📞 18663967409</p>
                      </div>
                    </div>
                  </div>

                  {/* Vietnam Section */}
                  <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50/50 rounded-r-lg hover:bg-green-50 transition-colors duration-300">
                    <h4 className="text-lg font-bold text-green-600 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Vietnam
                    </h4>
                    
                    <div className="hover:text-green-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-green-700 mb-1">Hà Nội (Hanoi)</p>
                      <p className="text-gray-600 text-sm mb-1">📍 Tầng 12, tòa Keangnam Hanoi Landmark 72, khu đô thị mới Cầu Giấy, Nam Từ Liêm, Hà Nội, Việt Nam</p>
                    </div>
                  </div>

                  {/* Thailand Section */}
                  <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50/50 rounded-r-lg hover:bg-orange-50 transition-colors duration-300">
                    <h4 className="text-lg font-bold text-orange-600 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                      Thailand
                    </h4>
                    
                    <div className="hover:text-orange-600 transition-colors duration-200 p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-orange-700 mb-1">ชลบุรี (Chonburi)</p>
                      <p className="text-gray-600 text-sm mb-1">📍 700/199 หมู่ 1 ต.หนองรี อ.เมืองชลบุรี จ.ชลบุรี 20000</p>
                      <p className="text-gray-600">📞 097-995-4625</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4"><span className="text-blue-400">YUMOLD</span></h3>
              <p className="text-gray-400 mb-6 max-w-md">
                혁신적인 몰드 솔루션과 비즈니스 관리 시스템으로 
                고객의 성공과 지속 가능한 미래를 만들어갑니다.
              </p>
              <div className="flex space-x-4">
                <Button 
                  disabled
                  className="bg-gray-600 cursor-not-allowed"
                >
                  시스템 로그인 (준비중)
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mold Base (MB)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Factory Automation (FA)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mold Technology (MTC)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LSR Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">회사 소개</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">솔루션</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">연락처</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용 정보</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">
                © 2025 YUMOLD. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">사이트맵</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}