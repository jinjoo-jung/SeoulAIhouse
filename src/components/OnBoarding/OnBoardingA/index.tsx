import React, { useEffect } from 'react';

interface Window {
  kakao: any; // `any` 대신 더 구체적인 타입을 사용할 수도 있습니다.
}
const OnBoardingA = () => {
  useEffect(() => {
    const { kakao }: any = window; // 이제 TypeScript 오류가 발생하지 않습니다.

    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return <div id="map" style={{ width: '500px', height: '400px' }}></div>; // 높이 속성 오타 수정 ('400p' -> '400px')
};

export default OnBoardingA;
