import { AnyAction } from "redux";
import { EnumType } from "typescript";

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

export const throwReducerError = (
  reducerType: EnumType,
  reducerName: string
): void => {
  throw new Error(`Unhandled type ${reducerType} in ${reducerName}`);
};
