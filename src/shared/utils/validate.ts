// 만 14세 이상인지 검증
export const isUnder14Validation = (value: string) => {
  if (!value) return;

  const birthYear = parseInt(value.substring(0, 4), 10);
  const currentYear = new Date().getFullYear();
  console.log(Number(currentYear) - Number(birthYear) < 14);
  return Number(currentYear) - Number(birthYear) < 14;
};

// 값이 숫자만으로 이루어졌는지 검증 (생년월일)
export const isAllNumValidation = (value: string) => {
  if (!value) return;

  return isNaN(Number(value));
};

// 전화번호가 정확히 11자리인지 검증
export const isPhoneNumberValidation = (value: string) => {
  if (!value) return;

  console.log(value.length);

  return value.length === 11;
};

export const isValidDate = (dateString: string) => {
  if (!dateString) return;
  const [year, month, day] = dateString.split('.').map(Number);

  if (month < 1 || month > 12) return false; // 월이 1~12 범위를 벗어나면 false

  const daysInMonth = new Date(year, month, 0).getDate(); // 해당 월의 최대 일 수 계산
  if (day < 1 || day > daysInMonth) return false; // 일자가 해당 월의 최대 일 수를 벗어나면 false

  return true; // 모두 통과하면 유효한 날짜
};
