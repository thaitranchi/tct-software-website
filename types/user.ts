// Basic User Interface
export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Role Type for Different User Roles
  export type UserRole = "admin" | "user" | "guest";
  
  // Interface for Authentication State
  export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
  }
  
  // Interface for User Registration
  export interface RegisterUser {
    name: string;
    email: string;
    password: string;
  }
  
  // Interface for User Login
  export interface LoginUser {
    email: string;
    password: string;
  }
  
  // Interface for User Profile Update
  export interface UpdateUserProfile {
    name?: string;
    email?: string;
    avatarUrl?: string;
  }
  
  // Interface for Password Update
  export interface UpdatePassword {
    currentPassword: string;
    newPassword: string;
  }
  