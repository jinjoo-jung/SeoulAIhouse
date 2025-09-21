# 서울 AI 집 (Save-Homez)

> 청년 1인 가구를 위한 **개인 맞춤형 AI 거주지 추천** 서비스  
> 월세·교통·통근시간을 종합해 “어디에 살면 좋을지”를 데이터로 제안합니다.

<img width="697" height="389" alt="스크린샷 2024-09-18 오후 9 32 07" src="https://github.com/user-attachments/assets/35e5ab94-b693-4d2b-a143-1fbccce99255" />

## 🔗 Link
- **GitHub (Org repos)**: https://github.com/orgs/Save-Homez/repositories
- **배포 링크**: https://seoul-ai-house.vercel.app/

## 📌 프로젝트 개요
서울로 상경하는 청년 1인가구가 증가함에 따라, **월세**, **교통**, **통근/통학 시간** 등 거주 고려요건을 반영해  
사용자 선호 기반의 **개인 맞춤형 추천**과 **AI 리포트**를 제공하는 웹 서비스입니다.

## ⚜️ 주요 기능
- ✅ **맞춤 추천**: 근무지/학교 기준 통근시간·월세·선호 조건을 반영한 지역 추천
- ✅ **AI 리포트**: 온보딩 정보(근무/통학 위치, 선호 요소 등) 기반 요약 리포트 제공
- ✅ **지도 탐색**: Kakao Map API + 커스텀 오버레이/줌으로 매물/지역 자유 탐색
- ✅ **매물 확인 & 연결**: AI 추천 매물 제안 및 공인중개사 연결 플로우
- ✅ **사용자 경험**: 조건 저장, 랭킹/리스트/마커 조회 등 한 화면에서 빠른 의사결정

## 🛠️ Tech Stack
- **Frontend**: React, TypeScript, Emotion (CSS-in-JS)
- **State**: Recoil
- **Data**: Axios, React Query
- **Quality**: ESLint, Prettier
- **Infra**: GitHub, Vercel
- **Map**: Kakao Map API (커스텀 오버레이/마커)

## 📱 담당한 기능 (Front-End)
- 프로젝트 초기화: **ESLint/Prettier 설정**, 폴더 구조 설계
- **온보딩 → 메인** 전 페이지 **퍼블리싱**
- 세션 스토리지 기반 **온보딩 데이터 저장**
- **Axios/React Query** 환경 구성 및 API 연동
- **Kakao 지도** 생성 및 **커스텀 마커/오버레이** 구현
- **온보딩/동네 매물/중개사/AI 리포트/지도/랭킹** 등 전반 API 연결
- **Vercel** 배포 파이프라인 구성

## 🖼️ 스크린샷
<details>
  <summary>열어서 보기</summary>

  <div align="center">
    <!-- 1행 -->
    <img src="https://github.com/user-attachments/assets/812fdfbd-495a-47ea-91b7-dba48445068c" alt="캡처3" width="49%" />
    <img src="https://github.com/user-attachments/assets/8462575e-2af6-4ae9-aae7-b1777c4e20b5" alt="캡처5" width="49%" />
    <br/>
    <!-- 2행 -->
    <img src="https://github.com/user-attachments/assets/709e8bf8-9aea-4722-88f7-bf9961a0003d" alt="캡처7" width="49%" />
    <img src="https://github.com/user-attachments/assets/9be282e5-dfd7-4b5c-9e58-dccefd7340eb" alt="캡처8" width="49%" />
    <br/>
    <!-- 3행 -->
    <img src="https://github.com/user-attachments/assets/326feba4-21cc-40fc-b0c6-b899d92c46cd" alt="캡처10" width="49%" />
    <img src="https://github.com/user-attachments/assets/108e857c-9b8c-4085-b00c-6572796a23af" alt="캡처13" width="49%" />
  </div>

</details>

---

<!-- 필요 시 사용 방법/로컬 실행 섹션 추가
## 🚀 실행 방법
```bash
pnpm i # 또는 yarn / npm
pnpm dev
