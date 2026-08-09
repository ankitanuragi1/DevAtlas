import Container from "@/components/layout/Container";
import SearchDialog from "@/components/search/SearchDialog";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <NavLinks />
        <SearchDialog />
        <Button>Login</Button>
      </Container>
    </header>
  );
}