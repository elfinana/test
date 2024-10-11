interface FetchOptions extends RequestInit {
  auth?: boolean; // 인증이 필요한 경우 true로 설정
}

export const customFetch = async (url: string, options: FetchOptions = {}) => {
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (options.auth) {
    const token = localStorage.getItem('token');
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }
  }

  const finalOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch API 에러:', error);
    throw error;
  }
};
