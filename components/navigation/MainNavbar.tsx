import Container from "@/components/layout/Container";
import NavLinks from "./NavLinks";

export default function MainNavbar() {
  return (
    <div className="border-b border-border/60 bg-background/95 backdrop-blur-xl">
      <Container className="flex h-10 items-center">
        <div className="scrollbar-hide w-full overflow-x-auto overscroll-x-contain">
          <NavLinks />
        </div>
      </Container>
    </div>
  );
}