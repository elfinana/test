import BackIcon from '@/shared/components/icons/BackIcon';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GoBackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const handlePopState = () => {
      console.log('User navigated back');
    };

    // popstate 이벤트 추가 (뒤로가기 버튼 클릭 시)
    window.addEventListener('popstate', handlePopState);

    // 컴포넌트가 unmount될 때 이벤트 제거
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <button onClick={handleBack}>
      <BackIcon />
    </button>
  );
}
