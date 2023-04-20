import Constant from './constant'

const startupTasks = [logStartedServer()]
var isReady = false

Promise.all(startupTasks).then(() => {
  isReady = true
})

async function logStartedServer() {
  const port = Constant.PORT
  console.log(`[server]: Server is running at http://localhost:${port}`)
}

export { isReady }
