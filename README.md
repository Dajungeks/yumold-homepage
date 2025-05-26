# YUMOLD - 글로벌 Mold Total Solution 전문 기업

![YUMOLD Logo](./attached_assets/LOGO.png)

## 🌐 프로젝트 개요

YUMOLD는 **Mold Total Solution**을 제공하는 글로벌 기업의 공식 웹사이트입니다. 
현대적이고 전문적인 기업 웹사이트로 MB(Mold Base), FA(Factory Automation), MTC(Mold Temperature Controller), LSR(Liquid Silicone Rubber), HR(Hot Runner) 분야의 종합 솔루션을 소개합니다.

### 🎯 핵심 특징
- **현대적인 기하학적 디자인** - 블루/그레이 색상의 세련된 인터페이스
- **글로벌 네트워크** - 한국, 중국, 베트남, 태국 지사 정보
- **반응형 웹 디자인** - 모든 디바이스에서 최적화된 경험
- **다국어 주소 시스템** - 각 국가별 현지 언어로 정확한 연락처 제공

## 🚀 기술 스택

### Frontend
- **React 18** - 현대적인 사용자 인터페이스
- **TypeScript** - 타입 안전성과 개발 생산성
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **Vite** - 빠른 개발 서버와 빌드 도구
- **Lucide React** - 아이콘 라이브러리

### UI 컴포넌트
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **Radix UI** - 접근성 중심의 무스타일 컴포넌트
- **Framer Motion** - 부드러운 애니메이션

### Backend & Database
- **Express.js** - Node.js 웹 프레임워크
- **PostgreSQL** - 관계형 데이터베이스
- **Drizzle ORM** - 타입 안전한 SQL 쿼리 빌더

## 📁 프로젝트 구조

```
YUMOLD-Website/
├── client/                 # 프론트엔드 소스코드
│   ├── src/
│   │   ├── pages/
│   │   │   └── homepage.tsx # 메인 홈페이지
│   │   ├── components/      # 재사용 가능한 컴포넌트
│   │   └── lib/            # 유틸리티 함수
│   └── index.html          # HTML 엔트리 포인트
├── server/                 # 백엔드 소스코드
├── shared/                 # 공유 타입 정의
├── attached_assets/        # 이미지 및 자산
│   └── network.png        # 글로벌 네트워크 지도
├── package.json           # 프로젝트 의존성
├── vite.config.ts         # Vite 설정
├── tailwind.config.ts     # Tailwind CSS 설정
└── tsconfig.json          # TypeScript 설정
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/yumold-website.git
cd yumold-website
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
```bash
# .env 파일 생성 (필요한 경우)
DATABASE_URL=your_database_url_here
```

### 4. 개발 서버 실행
```bash
npm run dev
```

웹사이트가 `http://localhost:5173`에서 실행됩니다.

## 🏗️ 빌드

### 프로덕션 빌드
```bash
npm run build
```

### 빌드된 파일 실행
```bash
npm start
```

## 🌍 주요 섹션

### 1. Hero Section
- **YOUR GLOBAL BUSINESS PARTNER** 메시지
- 기하학적 디자인 요소
- 부드러운 스크롤 애니메이션

### 2. About Section
- YUMOLD 회사 소개
- 품질 보증, 글로벌 네트워크, 전문 인력, 토탈 솔루션 강조

### 3. Solutions Section
- **MB (Mold Base)** - 몰드 베이스 솔루션
- **FA (Factory Automation)** - 팩토리 자동화
- **MTC (Mold Temperature Controller)** - 금형 온도 조절기
- **LSR (Liquid Silicone Rubber)** - 액상 실리콘 고무
- **HR (Hot Runner)** - 핫러너 시스템

### 4. Contact Section
- 글로벌 네트워크 지도
- 국가별 상세 연락처:
  - **한국** - 본사 및 4개 지사
  - **중국** - 상해, 천진, 소주, 청도
  - **베트남** - 하노이
  - **태국** - 촌부리

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Blue**: #2563eb
- **Secondary Gray**: #6b7280
- **Accent Red**: #dc2626
- **Background**: #ffffff, #f9fafb

### 반응형 브레이크포인트
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📞 연락처 정보

### 한국 본사
- **주소**: 경기도 안산시 단원구 성곡동 677번지
- **전화**: 032-710-3361
- **모바일**: 010-4677-9627

### 글로벌 지사
프로젝트 내 연락처 섹션에서 모든 글로벌 지사 정보를 확인하실 수 있습니다.

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 오픈

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🌟 특별 감사

- **shadcn/ui** - 아름다운 UI 컴포넌트
- **Tailwind CSS** - 유연한 스타일링 시스템
- **Lucide** - 일관된 아이콘 디자인

---

**YUMOLD** - YOUR GLOBAL BUSINESS PARTNER 🌐