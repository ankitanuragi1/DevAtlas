import Container from "@/components/layout/Container";
import SearchDialog from "@/components/search/SearchDialog";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <NavLinks />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <SearchDialog />

            <Button
              variant="ghost"
              className="hidden sm:inline-flex"
            >
              Login
            </Button>

            <Button
              className="
                hidden
                items-center
                gap-2
                bg-emerald-500
                text-white
                hover:bg-emerald-600
                sm:inline-flex
              "
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}