export type SocialAuthButtonProps = {
  socialType: "Google" | "Facebook" | "Apple";
  onClick: () => void;
} & SocialButtonsGroupProps;

export type SocialButtonsGroupProps = {
  authType: "Signup" | "Login";
};

export type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = {
  disabled?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export type checkEmailFormProps = {
  title: string;
  desc: string;
  onResend?: () => void;
};

export type AppHeaderMenuItemProps = {
  label: string;
  to: string;
  children?: {
    label: string;
    to: string;
  }[];
};

export type PredictionCardProps = {
  date: string;
  year: string | number;
  type: string;
  amount?: string | number;
  image?: string;
  name: string;
  icon?: React.ReactNode;
  iconText?: string;
};

export type FeedItemProps = {
  date: string;
  image: string;
  title: string;
  desc: string;
  tags: string[];
};

export type NotificationProps = {
  date: string;
  title: string;
  desc: string;
  isNew: boolean;
};

export type DateCardProps = {
  type: string;
  image: string;
  name: string;
  isNotHover?: boolean;
  onView?: () => void;
  onCraft?: () => void;
  onSell?: () => void;
};

export type DateCardGridProps = {
  data: Array<DateCardProps>;
  cardType?: string;
  onView?: (id: string | number) => void;
  onCraft?: (id: string | number) => void;
  onSell?: (id: string | number) => void;
};

export type ViewDateCardProps = {
  isView: boolean;

  onClose: () => void;
  cardType?: string;
  id: string | number;
};

export type SellDateCardProps = {
  onSellConfirm: () => void;
} & ViewDateCardProps;

export type ModalProps = {
  width?: number;
  onClose: () => void;
  open: boolean;
} & React.HTMLAttributes<HTMLElement>;

export type SellModalProps = {} & ModalProps;

export type SelectBoxProps = {
  placeholder?: string;
  value?: string;
  isFilter?: boolean;
  options: SelectOptionProps[];
};

export type SelectOptionProps = {
  label: string;
  value: string;
  checked?: boolean;
};
