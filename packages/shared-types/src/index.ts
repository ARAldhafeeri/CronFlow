export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface GetUsersResponse extends ApiResponse<User[]> {}
export interface CreateUserResponse extends ApiResponse<User> {}
