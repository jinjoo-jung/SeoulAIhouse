import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // 100ms 지연 후 스크롤 이동
  }, [location]);

  return null;
};

export default ScrollToTop;
