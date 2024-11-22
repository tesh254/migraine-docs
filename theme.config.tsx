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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Migraine" />
      <meta
        property="og:description"
        content="migraine is a robust CLI tool used to organize and automate complex workflows with templated commands. Users can define, store, and run sequences of shell commands efficiently, featuring variable substitution, pre-flight checks, and discrete actions"
      />
    </>
  ),
};

export default config;
