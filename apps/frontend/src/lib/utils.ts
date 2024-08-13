import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function httpRequest(url: string, options: RequestInit = {}) {
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
}

export function addQueryParamsToUrl(
  url: string,
  params?: { [name: string]: any },
) {
  let rawQueryParams: string[][] = [];

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        rawQueryParams.push(...value.map((v) => [key, String(v)]));
      } else if (value !== undefined && value !== null) {
        rawQueryParams.push([key, String(value)]);
      }
    });
  }

  const searchParams = new URLSearchParams(rawQueryParams);

  return `${url}${searchParams.toString() ? `?${searchParams}` : ''}`;
}
