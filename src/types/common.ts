export type SVGAttributes = React.SVGProps<SVGSVGElement>;

export type CardActionTypes = "" | "view" | "sell" | "buy" | "offer";

export type CardSidebarProps = {
  onClose: () => void;
  open: boolean;
};
