import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Therezion — Sites Profissionais de Alta Autoridade",
  description:
    "Desenvolvimento de sites profissionais para pequenas empresas e profissionais que buscam credibilidade. Entrega rápida de 3 a 7 dias úteis com garantia de 7 dias e 15 dias de acompanhamento.",
  areaServed: "Brasil",
  telephone: "+55 44 99143-5266",
  url: "https://therezion.com.br",
  priceRange: "$$",
  openingHours: "Mo-Su 08:00-18:00",
  sameAs: ["https://instagram.com/therezion.sites"],
  serviceType: "Desenvolvimento de sites profissionais, landing pages e portfólios",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Therezion — Sites Profissionais com Máxima Credibilidade | 3 a 7 Dias" },
      {
        name: "description",
        content:
          "Sua empresa merece um site que transmite autoridade. Entrega em 3 a 7 dias úteis, 50% para iniciar e 50% na entrega, garantia de 7 dias e 15 dias de suporte. Solicite seu modelo no WhatsApp.",
      },
      { name: "author", content: "Therezion (@therezion.sites)" },
      { property: "og:title", content: "Therezion — Sites Profissionais com Máxima Credibilidade" },
      {
        property: "og:description",
        content:
          "Mais autoridade, zero burocracia. Entrega em 3 a 7 dias com garantia incondicional e acompanhamento próximo. Fale direto com quem desenvolve via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Therezion" },
      { property: "og:image", content: "/logo-tz.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Therezion — Sites de Alta Autoridade" },
      {
        name: "twitter:description",
        content: "Sites profissionais entregues em 3 a 7 dias úteis. Sem burocracia, 100% focado em conversão.",
      },
      { name: "twitter:image", content: "/logo-tz.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo-tz.png", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
