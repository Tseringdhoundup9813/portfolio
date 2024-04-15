

function GlobalErrorHandler(error,req,res,next){
        error.statusCode = error.statusCode || 500;
        error.status = error.status || 'error';
        error.message = error.message ||'Internal Server Error! try again later'

        



        res.status(error.statusCode).json({
            status:error.status,
            message:error.message
        })
}

export default GlobalErrorHandler