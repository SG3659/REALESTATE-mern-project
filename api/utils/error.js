// it's a manual function error genater and pass to auth.controll
export const errorhandler=(statusCode,message)=>{
   const error=new Error();
   error.statusCode=statusCode;
   error.message=message;
   return error;
}