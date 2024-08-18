'use server';

export const httpRequest = async (url: string, options: RequestInit = {}) => {
  options['headers'] = {
    'Content-Type': 'application/json',
    ...options['headers'],
  };

  const response = await fetch(`${process.env.API_BASE_URL}/${url}`, options);

  let data;

  try {
    data = await response.json();
  } catch (error: unknown) {}

  if (!response.ok && data) {
    console.log(JSON.stringify(data));
    throw new Error(data?.message ?? 'something went wrong');
  }

  return data;
};
