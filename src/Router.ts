/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserHistory } from "history";
import { stringify, parse } from "qs";

interface RouteParams {
  [key: string]: any;
}

export interface NavigationOptions {
  replace?: boolean;
  state?: any;
  props?: { [key: string]: any };
}

// navigation history
export const history = createBrowserHistory();

export const replaceMatchParams = (
  page: string,
  params: Record<string, any>
) => {
  Object.keys(params).forEach((key) => {
    if (page.includes(`:${key}`)) {
      page = page.replace(`:${key}`, params[key]) as string;
      delete params[key];
    }
  });
  return page;
};

export function reloadApp() {
  window.location.reload();
}

export function navigate(
  _path: string,
  routeParams?: RouteParams,
  options?: NavigationOptions
): boolean {
  // add query params to path
    
  const route = routeParams
    ? replaceMatchParams(_path as string, routeParams)
    : _path;
  const stringParams = routeParams
    ? stringify(routeParams, { arrayFormat: "repeat" })
    : "";
    
  const path = `${route}${stringParams ? `?${stringParams}` : ""}`;
  const props = options ? options.props : undefined;

  if (options?.replace) history.replace(path, props);
  else {
    history.push(path, options?.state);
  }

  return true;
}

export function refresh() {
  history.go(0);
}

export function getMatchParams(props: any) {
  return props.match.params;
}

export function getLocationState(props: any) {
  return props?.location?.state;
}

export function getQueryParams(): Record<string, any> {
  const { search } = history.location;
  const queryParams =
    search && search.charAt(0) === "?" ? search.substring(1) : search;
  return parse(queryParams);
}

export function addQueryParams(
  newParams: Record<string, unknown>,
  reset = false
): void {
  const { search } = history.location;
  const queryParams = reset
    ? {}
    : parse(search && search.charAt(0) === "?" ? search.substring(1) : search);
  const params = {
    ...queryParams,
    ...newParams,
  };
  let paramsString = "";
  Object.keys(params).map((key) => (paramsString += `${key}=${params[key]}&`));
  if (paramsString.length > 0)
    paramsString = paramsString.substring(0, paramsString.length - 1);
  const encoded = paramsString ? `?${encodeURI(paramsString)}` : "";
  if (search !== encoded) history.push(encoded);
}

export function setQueryParams(newParams: Record<string, any>) {
  addQueryParams(newParams, true);
}
