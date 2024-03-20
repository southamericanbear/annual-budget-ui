import Header from "./header";
import HeaderMobile from "./header-mobile";
import MarginWidthWrapper from "./margin-width-wrapper";
import PageWrapper from "./page-wrapper";
import SideNav from "./side-nav";

export function SidebarMenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <MarginWidthWrapper>
          <Header />
          <HeaderMobile />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
