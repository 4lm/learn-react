export const createAction = (type, payload) => ({ type, payload });

export const throwReducerError = (reducerType, reducerName) => {
  throw new Error(`Unhandled type ${reducerType} in ${reducerName}`);
};
