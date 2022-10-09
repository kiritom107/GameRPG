import { isNumber as _isNumber } from "lodash";

export const isNumber = (number: any) => _isNumber(number);

export function flexIfDefined(flex: number | boolean | string | undefined) {
  if (flex === undefined) return undefined;
  if (isNumber(flex)) return flex as number;
  if (typeof flex === "string") return flex;
  return 1;
}

export function parseSize(size: string | number) {
  if (typeof size === "string") {
    return size;
  }
  return `${size}px`;
}
