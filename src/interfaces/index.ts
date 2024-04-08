export interface IInput {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  value: string | number;
  onChange: (value: string) => void;
}

export interface IButton {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

export interface IUser {
  email: string;
  username: string;
}

export interface IPrivateRouteProps {
  component: React.ComponentType;
}
