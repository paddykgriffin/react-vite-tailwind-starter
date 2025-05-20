import HeaderNav from "../navigation/HeaderNav";
import { Container } from "@/components/layout/Container/Container";
import { ModeToggle } from "./ModeToggle";
import SidebarNav from "@/components/navigation/SidebarNav";
import SiteLogo from "@/components/common/Logo/Logo";

const Header = () => {
  return (
    <header className="py-4 bg-primary mr-[var(--removed-body-scroll-bar-size)] transition-[top] duration-300">
      <Container className="flex justify-between items-center">
        <div>
          <SiteLogo />
        </div>
        <div className="flex items-center">
          <HeaderNav />
          <ModeToggle />
        </div>
        <div className="">
          <SidebarNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
