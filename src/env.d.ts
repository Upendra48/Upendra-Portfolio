// Local ambient declarations to satisfy TypeScript for build-time plugins
declare module "@tailwindcss/vite";

declare module "path" {
  const path: any;
  export = path;
}

declare module "url" {
  export function fileURLToPath(url: string): string;
}

export {};
