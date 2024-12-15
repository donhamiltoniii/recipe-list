import { unescape } from 'he';

export function decodeHtml(str: string) {
  return unescape(str);
}
