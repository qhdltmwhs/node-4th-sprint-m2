1. Reference
스프린트 미션2 : https://codeit.notion.site/2-22f6fd228e8d80a190e9e7f8fd409b2f
Swagger : https://panda-market-api-crud.vercel.app/docs/


2. 프로젝트 예상 구조 및 관계
/M2 
├── node_modules/
├── src/
│   ├── api/                 # API 호출 관련 모듈 (기존 services 대체)
│   │   ├── articleApi.js
│   │   ├── productApi.js
│   │   └── index.js         # API 모듈 통합 및 기본 export
│   │
│   ├── models/              # 데이터 모델 정의 (기존 classes 대체)
│   │   ├── BaseItem.js      # 추상화된 기본 아이템 (선택 사항)
│   │   ├── Product.js
│   │   ├── ElectronicProduct.js
│   │   ├── Article.js
│   │   └── index.js         # 모델 통합 및 기본 export
│   │
│   ├── utils/               # 유틸리티 함수 (공통적으로 사용되는 작은 함수들)
│   │   ├── dataFormatter.js # 데이터 형식 변환, 가공 등
│   │   ├── validator.js     # 유효성 검사
│   │   └── index.js
│   │
│   ├── components/          # (선택 사항: UI 관련) 특정 기능을 가진 UI 구성 요소
│   │   ├── ProductCard.js   # 예: 상품 정보를 보여주는 카드
│   │   ├── ArticleList.js   # 예: 게시글 목록
│   │   └── common/          # 재사용 가능한 작은 UI 요소
│   │
│   ├── app/                 # 애플리케이션의 핵심 로직 (main.js 대체)
│   │   ├── App.js           # 애플리케이션의 최상위 로직 (데이터 흐름, 상태 관리)
│   │   ├── productController.js # Product 관련 비즈니스 로직 및 조정
│   │   ├── articleController.js # Article 관련 비즈니스 로직 및 조정
│   │   └── index.js         # app 모듈의 진입점
│   │
│   └── index.js             # 애플리케이션의 실제 진입점 (최상위 부트스트랩)
│                            # 이 파일이 실제 main 역할을 하게 됩니다.
│
├── public/                  # 정적 파일 (HTML, CSS, 이미지 등 - 웹 프로젝트의 경우)
│   └── index.html
│   └── assets/
│
├── package.json
├── package-lock.json
└── README.md