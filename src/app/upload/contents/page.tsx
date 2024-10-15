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
import LinkMenu from '@/shared/components/layout/LinkMenu';
import WriteIcon from '@/shared/components/icons/WriteIcon';

export default function ContentsUploadPage() {
  const { register, handleSubmit, watch, setValue } = useForm({
    mode: 'onChange',
  });


  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data);
    router.push('/join/complete');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header title="콘텐츠 업로드" />
      <Container className="border-t border-borderPrimary pt-24">
        <Flex direction="col" gap={24}>
          <RadioButton
            text={
              <div style={{ textAlign: 'center' }}>
                <span style={{fontSize: "16px"}}>+새 리뷰 등록하기</span>
                <br />
                <span style={{fontSize: "14px" , color: " #5E6267" }}>사진 및 동영상을 첨부해서</span>
                <br />
                <span style={{fontSize: "14px" , color: " #5E6267" }}>다녀오신 장소에 대해서 리뷰해보세요</span>
              </div>
            }
            height="120px"
            style={{backgroundColor: '#F5F7F9'}}
            onClick={() => router.push('/upload/review')}

          />
          <RadioButton
            text={
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <WriteIcon />
                리뷰 추가
              </span>
            }
            height="50px"
            onClick={() => router.push('/upload/review')}
          />

          {/* 보더 */}

          <Flex direction="col" gap={6}>
            <LinkMenu title="동행자" />
            <LinkMenu title="공개설정" />
          </Flex>
        </Flex>
      </Container>
      <BottomFixedButton buttonComponent={<Button type="submit" text="업로드 하기" />} />
    </form>
  );
}
