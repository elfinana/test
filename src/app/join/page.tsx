import RadioButton from '@/shared/components/buttons/RadioButton';
import Input from '@/shared/components/inputs/Input';
import Container from '@/shared/components/layout/Container';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import Label from '@/shared/components/text/Label';
import ValidationText from '@/shared/components/text/ValidationText';

export default function JoinPage() {
  return (
    <div className="w-full">
      <Header title="회원가입" />
      <Container className="border-t border-borderPrimary pt-24">
        <Flex direction="col" gap={24}>
          <Flex direction="col" gap={12}>
            <Label title="성별" require />
            <Flex justify="between">
              <RadioButton text="남자" width="48.75%" height="54px" active />
              <RadioButton text="여자" width="48.75%" height="54px" />
            </Flex>
          </Flex>
          <Flex direction="col" gap={6}>
            <Flex direction="col" gap={12}>
              <Label htmlFor="birthday" title="생년월일" require />
              <Input id="birthday" placeholder="YYYY.MM.DD" />
            </Flex>
            <Flex direction="col" gap={4} className="pl-10">
              <ValidationText text="숫자만 입력해주세요." />
              <ValidationText text="만 14세 미만은 회원가입이 불가능합니다." />
            </Flex>
          </Flex>
          <Flex direction="col" gap={6}>
            <Flex direction="col" gap={12}>
              <Label htmlFor="phone" title="휴대폰번호" require />
              <Input id="phone" placeholder="YYYY.MM.DD" />
            </Flex>
            <Flex direction="col" gap={4} className="pl-10">
              <ValidationText text="숫자만 입력해주세요." />
              <ValidationText text="휴대폰번호를 모두 입력해주세요." />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
