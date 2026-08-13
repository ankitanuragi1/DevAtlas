import Container from "@/components/layout/Container";
import SearchDialog from "@/components/search/SearchDialog";
import Logo from "./Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-14 items-center gap-2 sm:h-16">
        {/* Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Search */}
        <div className="flex min-w-0 flex-1 justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          <SearchDialog />
        </div>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />

          <Button
            variant="ghost"
            className="px-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground sm:px-3"
          >
            Sign in
          </Button>

          <Button
            className="
              group hidden gap-2
              bg-emerald-500 text-white
              shadow-sm shadow-emerald-500/20
              transition hover:bg-emerald-600
              md:inline-flex
            "
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Container>
    </div>
  );
}