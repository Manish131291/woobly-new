interface Message {
  bucketCode: string;
  bucketMessage: string;
  displayMessage: string;
  serverMessage?: string;
  errCode?: string;
}
export interface ClientError {
  status: number;
}
export interface ServerError {
  error: {
    errorCode?: string;
    error_code?: string;
  };
}

export const handleError = (error: any): Message => {
  let errorObj;
  console.log(error);
  const errorCode = error.error?.errorCode as string;
  const status = error?.status;
  if (errorCode) {
    errorObj = error.error.errorCode;
    errorObj.serverMessage = error.error?.message as string;
    errorObj.consumedAmount = error.error?.consumedAmount;
  } else if (status) {
    errorObj = status.toString();
  }
  if (error.error?.requestId) {
    errorObj.requestId = error.error?.requestId;
  }
  if (error.error?.availableLimit) {
    errorObj.availableLimit = error.error?.availableLimit;
  }
  if (error.error?.errorDetails) {
    errorObj.errorDetails = error.error?.errorDetails;
  }

  return errorObj;
};
