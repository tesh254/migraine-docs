import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <img
      src="https://github.com/user-attachments/assets/1f1f90d0-3a85-44c8-b84a-b23838bf35c2"
      alt="migraine-logo"
      style={{
        width: "32px",
        height: "32px",
      }}
    />
  ),
  project: {
    link: "https://github.com/tesh254/migraine",
  },
  chat: {
    link: "https://discord.gg/SmGENKen",
  },
  docsRepositoryBase: "https://github.com/tesh254/migraine-docs",
  footer: {
    text: "Made with ❤️ by Erick Wachira",
  },
};

export default config;
