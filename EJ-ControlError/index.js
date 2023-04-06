const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

console.log("errores y tipos de errores");

var se = (val) => {
 if(typeof val === "number"){
   return 2*val}
 throw new Error("El valor debe ser de tipo numero") 
}

console.log(se(6));

try{//codigo que puede fallar
    logger.log(se("dsfd"))
}
catch(e){ //mensaje si hay un error
    logger.error(`El valor de e es: ${e}`)
}
finally{console.log("este se ejecuta siempre")
}