'use client';

import IconButton from '@/shared/components/buttons/IconButton';
import AppleIcon from '@/shared/components/icons/AppleIcon';
import GoogleIcon from '@/shared/components/icons/GoogleIcon';
import KakaoIcon from '@/shared/components/icons/KakaoIcon';
import NaverIcon from '@/shared/components/icons/NaverIcon';
import Backdrop from '@/shared/components/layout/Backdrop';
import Container from '@/shared/components/layout/Container';
import Flex from '@/shared/components/layout/Flex';

const handleClickLogin = () => {
  console.log('SNS Login');
};

export default function Home() {
  return (
    <div className="h-full w-full bg-[url('/images/onBoarding/onboarding-bg.png')] bg-cover bg-fixed bg-center">
      <div className="h-full w-full bg-black-25 pb-32 pt-85">
        <Container className="flex h-full w-full flex-col justify-between">
          <div>
            <h1 className="mb-22 text-32 font-normal leading-12 text-[#f3f3f3]">
              <span className="font-bold">K-정보</span>는 <br />
              여기 <span className="font-bold">다 있다</span>
            </h1>
            <p className="text-18 font-normal text-[#eee]">로컬 백과사전</p>
          </div>
          <Flex direction="col" align="center" gap={28}>
            <p className="text-center text-18 font-normal text-[#f3f3f3]">
              로컬여행의 모든 것,
              <br /> 쉽고 빠르게 나만의 여행코스를 결정하세요!
            </p>
            <Flex align="center" justify="center" gap={8} className="w-full">
              <div className="h-[1px] w-[36%] bg-borderPrimary"></div>
              <p className="text-12 font-normal text-[#f3f3f3]">SNS 로그인</p>
              <div className="h-[1px] w-[36%] bg-borderPrimary"></div>
            </Flex>
            <Flex align="center" justify="center" gap={16}>
              <IconButton icon={<AppleIcon />} onClick={handleClickLogin} />
              <IconButton icon={<GoogleIcon />} onClick={handleClickLogin} />
              <IconButton icon={<KakaoIcon />} onClick={handleClickLogin} />
              <IconButton icon={<NaverIcon />} onClick={handleClickLogin} />
            </Flex>
          </Flex>
        </Container>
      </div>
    </div>
  );
}
