// Define a generic interface for form field values
export interface FormValues {
    [key: string]: string | number | boolean | undefined;
  }
  
  // Specific interface for a login form
  export interface LoginFormValues {
    email: string;
    password: string;
  }
  
  // Specific interface for a registration form
  export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  // Interface for form submission state
  export interface FormState {
    isSubmitting: boolean;
    isValid: boolean;
    errors: FormErrors;
  }
  
  // Interface for form errors
  export interface FormErrors {
    [key: string]: string | undefined;
  }
  
  // Type for input change events
  export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
  
  // Type for form submission event
  export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
  