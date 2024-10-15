'use client';

import BottomFixedButton from '@/shared/components/buttons/BottomFixedButton';
import Button from '@/shared/components/buttons/Button';
import RadioButton from '@/shared/components/buttons/RadioButton';
import Input from '@/shared/components/inputs/Input';
import Container from '@/shared/components/layout/Container';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import Label from '@/shared/components/text/Label';
import ValidationText from '@/shared/components/text/ValidationText';
import { isAllNumValidation, isPhoneNumberValidation, isUnder14Validation, isValidDate } from '@/shared/utils/validate';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function JoinPage() {
  const [gender, setGender] = useState<'male' | 'feMale'>('male');
  const [isErrors, setIsErrors] = useState({
    under14: false,
    isBirthDay: false,
    isPhoneNumber: false,
  });

  const router = useRouter();

  const { register, handleSubmit, watch, setValue } = useForm({
    mode: 'onChange',
  });

  const handleChangeGender = (gender: 'male' | 'feMale') => {
    setGender(gender);
    setValue('gender', gender);
    console.log(gender);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    router.push('/join/complete');
  };

  const birthdayValue = watch('birthday');
  const phoneValue = watch('phone');

  useEffect(() => {
    if (!birthdayValue) return;

    let formattedValue = birthdayValue.replace(/\D/g, '');

    if (formattedValue.length > 6) {
      formattedValue = formattedValue.slice(0, 4) + '.' + formattedValue.slice(4, 6) + '.' + formattedValue.slice(6, 8);
    } else if (formattedValue.length > 4) {
      formattedValue = formattedValue.slice(0, 4) + '.' + formattedValue.slice(4, 6);
    }

    if (birthdayValue !== formattedValue) {
      setValue('birthday', formattedValue, { shouldValidate: true });
    }

    setIsErrors((prevErrors) => ({
      ...prevErrors,
      under14: !!isUnder14Validation(formattedValue), // 만 14세 미만 여부 검증
      birthDatAllNum: !isAllNumValidation(formattedValue), // 생년월일이 숫자 형식인지 확인
      isBirthDay: !isValidDate(formattedValue), // 생년월일 유효성 검사 (올바른 날짜인지)
    }));
  }, [birthdayValue, setValue]);

  useEffect(() => {
    if (!phoneValue) return;

    const sanitizedPhoneValue = phoneValue.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');

    if (sanitizedPhoneValue !== phoneValue) {
      setValue('phone', sanitizedPhoneValue);
    }

    setIsErrors((prevErrors) => ({
      ...prevErrors,
      isPhoneNumber: !isPhoneNumberValidation(sanitizedPhoneValue), // 11자리인지 확인
      phoneAllNum: !isAllNumValidation(sanitizedPhoneValue), // 숫자만으로 이루어졌는지 확인
    }));
  }, [phoneValue, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header title="회원가입" />
      <Container className="border-t border-borderPrimary pt-24">
        <Flex direction="col" gap={24}>
          <Flex direction="col" gap={12}>
            <Label title="성별" require />
            <Flex justify="between">
              <RadioButton
                text="남자"
                width="48.75%"
                height="54px"
                active={gender === 'male'}
                onClick={() => handleChangeGender('male')}
              />
              <RadioButton
                text="여자"
                width="48.75%"
                height="54px"
                active={gender === 'feMale'}
                onClick={() => handleChangeGender('feMale')}
              />
            </Flex>
          </Flex>

          <Flex direction="col" gap={6}>
            <Label htmlFor="birthday" title="생년월일" require />
            <Input id="birthday" placeholder="YYYY.MM.DD" {...register('birthday')} />
            <ValidationText text="만 14세 미만은 회원가입이 불가능합니다." error={isErrors.under14} />
            <ValidationText text="생년월일을 올바르게 입력해주세요." error={isErrors.isBirthDay} />
          </Flex>

          <Flex direction="col" gap={6}>
            <Label htmlFor="phone" title="휴대폰번호" require />
            <Input id="phone" placeholder="01012345678" {...register('phone')} maxLength={11} />
            <ValidationText text="휴대폰번호를 모두 입력해주세요." error={isErrors.isPhoneNumber} />
          </Flex>
        </Flex>
      </Container>
      <BottomFixedButton
        buttonComponent={
          <Button
            type="submit"
            text="회원가입 완료"
            disabled={
              !isValidDate(birthdayValue) ||
              phoneValue?.length !== 11 ||
              isErrors.isBirthDay ||
              isErrors.isPhoneNumber ||
              isErrors.under14
            }
          />
        }
      />
    </form>
  );
}
