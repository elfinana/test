'use client';

import GoBackButton from '@/shared/components/buttons/GoBackButton';
import Flex from '@/shared/components/layout/Flex';

interface HeaderProps {
  title: string;
}

const isWebView = () => {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent || navigator.vendor;

  // Android WebView와 iOS WebView 감지
  const isAndroidWebView = /\bwv\b/.test(userAgent) || /Android.*Version\/[0-9.]+/.test(userAgent);
  const isIOSWebView = /\b(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/.test(userAgent);

  return isAndroidWebView || isIOSWebView;
};

export default function Header({ title }: HeaderProps) {
  if (isWebView()) {
    return null; // WebView일 경우 헤더를 숨김
  }

  return (
    <header className="w-full bg-white px-20 py-16">
      <Flex justify="between" align="center">
        <div>
          <GoBackButton />
        </div>
        <div>
          <h2 className="text-16 font-semibold text-textPrimary">{title}</h2>
        </div>
        <div></div>
      </Flex>
    </header>
  );
}
