import HeaderNav from "../../navigation/HeaderNav";
import siteConfig from "../../../site-config";
import { Container } from "@/components/layout/Container/Container";
import { ModeToggle } from "./ModeToggle";
import { Typography } from "../../common/Typography/Typography";
import SidebarNav from "./SidebarNav";

const Header = () => {
  return (
    <header className="py-4 bg-primary mr-[var(--removed-body-scroll-bar-size)] transition-[top] duration-300">
      <Container className="flex justify-between">
        <div>
          <Typography variant="h3" className="text-white">
            {siteConfig.siteName}
          </Typography>
        </div>
        <div className="flex items-center">
          <HeaderNav />
          <ModeToggle />
        </div>
        <div className="block xl:hidden">
          <SidebarNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
