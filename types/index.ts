export * from "./insights";
export * from "./account";
export * from "./invoices";
export * from "./basic-data";

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};
