export interface SealedAuthFormComponent {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  confirmPassword?: string;
  role?: string;
  sex?: string;
  age? : number;
}

export interface AuthFormComponent extends SealedAuthFormComponent {
  success?: boolean;
  error?: string;
}
