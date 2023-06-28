import { IMarketplaceListing } from "./actions";
import { CardActionTypes } from "./common";

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
  desc?: string;
  code?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = {
  disabled?: boolean;
  variant?: string;
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
  id?: number;
  month?: number;
  year?: number;
  is_crafted?: boolean;
  is_claimed?: boolean;
  triggers?: string[];
  owner_id?: number;
  category?: string;
  rarity?: number;
  height?: number;
  day?: number;
  celebrity_name?: string;
  image?: string;
  icon?: React.ReactNode;
  iconText?: string;
  isNotHover?: boolean;
  onClick?: () => void;
  onView?: (id: number) => void;
  onCraft?: (id: number) => void;
  onSell?: (id: number) => void;
  onBuy?: (id: number) => void;
} & IMarketplaceListing;

export type FeedItemProps = {
  date: string;
  image: string;
  title: string;
  desc: string;
  tags: string[];
};

export type NotificationItemProps = {
  date: string;
  title: string;
  desc: string;
  isNew: boolean;
};

export type DateCardProps = {
  id?: number;
  category: string;
  owner_id?: number;
  day?: number;
  month?: number;
  rarity: number;
  is_crafted?: boolean;
  image: string;
  isNotHover?: boolean;
  onView?: (id: number) => void;
  onCraft?: (id: number) => void;
  onSell?: (id: number) => void;
};

export type TriggerCardProps = {
  id?: number;
  trigger: string;
  owner_id?: number;
  rarity: number;
  is_crafted?: boolean;
  image: string;
  isNotHover?: boolean;
  onView?: (id: number) => void;
  onCraft?: (id: number) => void;
  onSell?: (id: number) => void;
};

export type DateCardGridProps = {
  data?: Array<any>;
  identityData?: Array<PredictionCardProps>;
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

export type SellModalProps = {
  isMarket?: boolean;
  isOffer?: boolean;
} & ModalProps;

export type WithdrawConfirmModalProps = {
  status: "success" | "failed";
} & ModalProps;

export type ProfileModalProps = { title: string } & ModalProps;

export type UseBalanceBuyModalProps = {
  onBuyClick: () => void;
} & ModalProps;

export type BalanceBuyConfirmModalProps = {
  onConfirm: () => void;
  isOffer?: boolean;
} & ModalProps;

export type SelectBoxProps = {
  placeholder?: string;
  border?: boolean;
  label?: string;
  value?: string | Array<string>;
  isFilter?: boolean;
  options: SelectOptionProps[];
  onChange?: (value: string | Array<string>) => void;
};

export type WithdrawModalProps = {
  onWithdraw: (status?: boolean) => void;
} & ModalProps;

export type SelectOptionProps = {
  label: string;
  value: string;
  image?: string;
  checked?: boolean;
};

export type ProfileProps = {
  username: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  onEdit?: (key: string) => void;
};

export type ProfileItemProps = {
  id: string;
  label: string;
  value: string;
  type?: "text" | "password";
  isRequired?: boolean;
  isEditable?: boolean;
  onEdit?: (key: string) => void;
};

export type ProfileEditProps = {
  onBack: () => void;
  section: string;
} & React.HTMLAttributes<HTMLElement>;

export type NotifyProps = {
  text: string;
  show: boolean;
};

export type BuyPackProps = {
  onCardClick: (id: string | number) => void;
  onBuyClick: (id: string | number) => void;
  cardType: string;
  price: number;
};

export type BuyDetailsProps = {
  id: string | number;
  onClose: () => void;
  isView: boolean;
};

export type NotificationProps = {
  open: boolean;
  onClose: () => void;
};

export type MarketCardProps = {
  image: string;
  name: string;
  type?: string;
  rarity: string;
  status?: string;
  owned?: string | number;
  onCard?: (id: string | number, action: CardActionTypes) => void;
} & IMarketplaceListing;
