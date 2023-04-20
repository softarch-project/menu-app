const apiHost = location.hostname

export const apiBasePath =
  import.meta.env.VITE_API_BASE_PATH ?? `http://${apiHost}:8000/api`
