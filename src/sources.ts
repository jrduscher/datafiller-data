export type cdtnKey =
  | "CCN"
  | "CDT"
  | "CONTRIBUTIONS"
  | "EXTERNALS"
  | "IDCC"
  | "LABOUR_LAW"
  | "LETTERS"
  | "SHEET_MT"
  | "SHEET_SP"
  | "THEMES"
  | "TOOLS"
  | "THEMATIC_FILES";

export type cdtnSources =
  | "conventions_collectives"
  | "code_du_travail"
  | "contributions"
  | "external"
  | "idcc"
  | "droit_du_travail"
  | "modeles_de_courriers"
  | "fiches_ministere_travail"
  | "fiches_service_public"
  | "themes"
  | "outils"
  | "dossiers";

export type cdtnRoutes =
  | "convention-collective"
  | "code-du-travail"
  | "contribution"
  | "external"
  | "idcc"
  | "droit-du-travail"
  | "modeles-de-courriers"
  | "fiche-ministere-travail"
  | "fiche-service-public"
  | "themes"
  | "outils"
  | "dossiers";

export const SOURCES: { [key in cdtnKey]: cdtnSources } = {
  CCN: "conventions_collectives",
  CDT: "code_du_travail",
  CONTRIBUTIONS: "contributions",
  EXTERNALS: "external",
  IDCC: "idcc",
  LABOUR_LAW: "droit_du_travail",
  LETTERS: "modeles_de_courriers",
  SHEET_MT: "fiches_ministere_travail",
  SHEET_SP: "fiches_service_public",
  THEMES: "themes",
  TOOLS: "outils",
  THEMATIC_FILES: "dossiers"
};

// mapping elasticsearch source type -> route name
/* eslint-disable @typescript-eslint/camelcase */
export const routeBySource: { [key in cdtnSources]: cdtnRoutes } = {
  conventions_collectives: "convention-collective",
  code_du_travail: "code-du-travail",
  contributions: "contribution",
  external: "external",
  idcc: "idcc",
  droit_du_travail: "droit-du-travail",
  modeles_de_courriers: "modeles-de-courriers",
  fiches_ministere_travail: "fiche-ministere-travail",
  fiches_service_public: "fiche-service-public",
  themes: "themes",
  outils: "outils",
  dossiers: "dossiers"
};

export const sourceByRoute: { [key in cdtnRoutes]: cdtnSources } = {
  "convention-collective": "conventions_collectives",
  "code-du-travail": "code_du_travail",
  contribution: "contributions",
  external: "external",
  idcc: "idcc",
  "droit-du-travail": "droit_du_travail",
  "modeles-de-courriers": "modeles_de_courriers",
  "fiche-ministere-travail": "fiches_ministere_travail",
  "fiche-service-public": "fiches_service_public",
  themes: "themes",
  outils: "outils",
  dossiers: "dossiers"
};

export const getRouteBySource = (src: cdtnSources): cdtnRoutes =>
  routeBySource[src];

export const getSourceByRoute = (slug: cdtnRoutes): cdtnSources =>
  sourceByRoute[slug];
