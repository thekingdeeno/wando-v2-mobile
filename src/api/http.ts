import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig | any => {
    try {
      const token = sessionStorage.getItem('accessToken');
  
      if (token != null) {
        if (!config) {
          config = {};
        }
        if (!config.headers) {
          config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      const err: any = error;
      throw new Error(err);
    }
  };

class Http {
    private instance: AxiosInstance | null = null;
  
    private get http(): AxiosInstance {
      return this.instance != null ? this.instance : this.initHttp();
    }
  
    initHttp() {
      const http = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        // headers,
        // timeout: 60000,
        // withCredentials: false,
      });
  
      http.interceptors.request.use(injectToken, (error) => Promise.reject(error));
  
      http.interceptors.response.use(
        (response) => response,
        (error) => {
          const { response } = error;
          if (response.data.message && response.status !== 401) {
            // Alert.error(response.data.message);
          } else {
            response.status !== 401 &&
            console.log('handle error');
            
            //   Alert.error('Something went wrong. Please check your connection and try again or contact support...');
          }
  
          return this.handleError(response);
        },
      );
  
      this.instance = http;
      return http;
    }
  
    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
      return this.http.request(config);
    }
  
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.http.get<T, R>(url, config);
    }
  
    post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
      return this.http.post<T, R>(url, data, config);
    }
  
    put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
      return this.http.put<T, R>(url, data, config);
    }
  
    patch<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
      return this.http.patch<T, R>(url, data, config);
    }
  
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
      return this.http.delete<T, R>(url, config);
    }
  
    // We can handle generic app errors depending on the status code
    private handleError(error: { status: any }) {
      const { status } = error;
  
    //   switch (status) {
    //     case StatusCode.InternalServerError: {
    //       // Handle InternalServerError
    //       break;
    //     }
    //     case StatusCode.Forbidden: {
    //       // Handle Forbidden
    //       break;
    //     }
    //     case StatusCode.Unauthorized: {
    //       Alert.error('Unauthurized access, login and try again');
    //       localStorage.clear();
    //       sessionStorage.clear();
    //       setTimeout(() => {
    //         window.location.href = '/login';
    //       }, 1200);
    //       break;
    //     }
    //     case StatusCode.TooManyRequests: {
    //       // Handle TooManyRequests
    //       break;
    //     }
    //   }
  
      return Promise.reject(error);
    }
  }
  
  export const httpClient = new Http();
  