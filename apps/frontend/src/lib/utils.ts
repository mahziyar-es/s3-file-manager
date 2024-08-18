import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
