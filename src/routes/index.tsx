import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/hero.png";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../App.css";
import { Heading, Section } from "@carbon/react";
import { ParaglideMessage } from "@inlang/paraglide-js-react";
import { m } from "../paraglide/messages";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Section>
        <Section id="center">
          <div className="hero">
            <img
              src={heroImg}
              className="base"
              width="170"
              height="179"
              alt=""
            />
            <img src={reactLogo} className="framework" alt={m.home_react_logo_alt()} />
            <img src={viteLogo} className="vite" alt={m.home_vite_logo_alt()} />
          </div>
          <div>
            <Heading>{m.get_started()}</Heading>
            <p>
              <ParaglideMessage
                message={m.home_edit_hint}
                markup={{ code: ({ children }) => <code>{children}</code> }}
              />
            </p>
          </div>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            {m.home_counter({ count })}
          </button>
        </Section>

        <div className="ticks"></div>

        <Section id="next-steps">
          <div id="docs">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <Heading>{m.home_docs_title()}</Heading>
            <p>{m.home_docs_body()}</p>
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img className="logo" src={viteLogo} alt="" />
                  {m.home_docs_vite()}
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank">
                  <img className="button-icon" src={reactLogo} alt="" />
                  {m.home_docs_react()}
                </a>
              </li>
            </ul>
          </div>
          <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <Heading>{m.home_social_title()}</Heading>
            <p>{m.home_social_body()}</p>
            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  {m.home_social_github()}
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  {m.home_social_discord()}
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  {m.home_social_x()}
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  {m.home_social_bluesky()}
                </a>
              </li>
            </ul>
          </div>
        </Section>

        <div className="ticks"></div>
        <Section id="spacer"></Section>
      </Section>
    </>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
