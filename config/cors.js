const allowedOrigins = require('./allowed_origins')


const corsOptions = {
  origin: (origin, callback) => {
    if(allowedOrigins.includes(origin) || !origin){
      callback(null, true)
    }else{
      callback(new Error('Not allowed by CORS1111111'))
    }
  },
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH","TRACE"],
  
}

module.exports = corsOptions