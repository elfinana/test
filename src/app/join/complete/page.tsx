import Flex from '@/shared/components/layout/Flex';
import Image from 'next/image';

export default function JoinCompletePage() {
  return (
    <Flex direction="col" justify="center" align="center" className="h-screen w-full" gap={45}>
      <Image src="/images/join/join_complete.png" width={124} height={124} alt="회원가입 완료 아이콘" />
      <p className="text-center text-20 font-bold text-textPrimary">
        나놀러가 되신걸 환영합니다!
        <br />
        어디로 여행을 갈 예정이신가요?
      </p>
    </Flex>
  );
}
