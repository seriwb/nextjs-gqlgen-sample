declare module 'app/api' {
  export type ResponseErrorType = {
    message: string;
    formName?: string;
  };
  export type ApiResponseType<T> = {
    data?: T;
    errors?: ResponseErrorType[];
  };
}
