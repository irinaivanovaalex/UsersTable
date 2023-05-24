
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

export interface CreateHttpClientProps {
  onRequest?: (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>

  /**
   * Throw error or just proxy incoming, for pass error validation to next handler
   *
   * @default throwHttpError
   */
  onResponseError?: (error: AxiosError) => Promise<unknown>

  /**
   * Throw error or just proxy incoming, for pass error validation to next handler
   *
   * @default throwHttpError
   */
  onRequestError?: (error: AxiosError) => Promise<unknown>
}

export function createHttpClient(
  url: string,
  props: CreateHttpClientProps = {
  },
): AxiosInstance {

  const client = axios.create({
    baseURL: url,
    timeout: 1 * 60 * 1000, // 1 min,
    headers: {
      Accept: 'application/json',
    },
  })

  if (props.onRequest) {
    client.interceptors.request.use(async config => {
      // We are always has onRequest here, but it's ok to have crash otherwise
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return props.onRequest!(config)
    }, props.onRequestError)
  }
  client.interceptors.response.use(config => config, props.onResponseError)

  return client
}