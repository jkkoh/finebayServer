const allowedOrigins = require('./allowed_origins')


const corsOptions = {
  origin: (origin, callback) => {
    if(allowedOrigins.includes(origin) || !origin){
      callback(null, true)
    }else{
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","HEAD"]
}

module.exports = corsOptions