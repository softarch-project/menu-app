import dotenv from 'dotenv'
dotenv.config()


interface ConstantValue {
  PORT: number
}

const Constant: ConstantValue = {
  PORT: parseInt(process.env.PORT ?? '80')
}

export default Constant
