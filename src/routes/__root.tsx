import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Heading } from "@carbon/react";

const RootLayout = () => {
  return (
    <>
      <Heading>POC</Heading>
      <nav aria-label="Main">
        <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        <Link to="/cards/$cardId" params={{ cardId: "42" }}>
          Card 42
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

const NotFound = () => {
  return <p>Page not found</p>;
};

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});
