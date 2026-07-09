import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  MessageCircle,
  Sparkles,
  Layers,
  Rocket,
  ShieldCheck,
  Search,
  Palette,
  Code2,
  Send,
  Minus,
  Plus,
  Globe,
  Smartphone,
  Gauge,
  LifeBuoy,
} from "lucide-react";

import heroGlow from "../assets/hero-glow.jpg";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const WHATSAPP =
  "https://wa.me/5544991435266?text=" +
  encodeURIComponent("Olá! Gostaria de solicitar um modelo de site para minha empresa.");

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={
        "section-y " +
        (dark ? "bg-[var(--ink)] text-white" : "bg-background text-foreground")
      }
    >
      <div className="container-page">
        {(eyebrow || title || intro) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            {eyebrow && (
              <span
                className={
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest " +
                  (dark
                    ? "border-white/15 text-white/70"
                    : "border-border text-muted-foreground")
                }
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={
                  "mt-5 text-base leading-relaxed sm:text-lg " +
                  (dark ? "text-white/65" : "text-muted-foreground")
                }
              >
                {intro}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function CTAButton({
  href = WHATSAPP,
  children,
  variant = "primary",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-200 will-change-transform";
  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_30px_-10px_oklch(0.68_0.19_42/0.55)] hover:-translate-y-0.5",
    secondary:
      "border border-foreground/15 text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]",
    ghost:
      "border border-white/20 text-white hover:border-white/60 hover:bg-white/5",
  }[variant];
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function Home() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />
      <Hero prefersReduced={!!prefersReduced} />
      <Benefits />
      <Portfolio />
      <Process />
      <Comparison />
      <Included />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <span className="font-display text-sm font-bold">T</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Therezion
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#beneficios" className="hover:text-white">Benefícios</a>
          <a href="#portfolio" className="hover:text-white">Portfólio</a>
          <a href="#processo" className="hover:text-white">Processo</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20 md:inline-flex"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero({ prefersReduced }: { prefersReduced: boolean }) {
  return (
    <section
      id="top"
      className="relative isolate min-h-[760px] overflow-hidden bg-[var(--ink)] pt-32 pb-24 text-white sm:min-h-[880px]"
    >
      {/* Background glow image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroGlow}
          alt=""
          aria-hidden
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/70 via-[var(--ink)]/40 to-[var(--ink)]" />
        <div
          className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.68 0.19 42), transparent 70%)" }}
        />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Mais resultado. Menos burocracia.
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Sua empresa merece um site que{" "}
            <span className="text-gradient-orange">transmite autoridade.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Sites profissionais entregues entre 3 e 7 dias para empresas que
            querem crescer com credibilidade.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton>Solicitar um modelo para minha empresa</CTAButton>
            <CTAButton href="#portfolio" variant="ghost">
              Ver Portfólio
            </CTAButton>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-left sm:gap-8">
            {[
              { k: "3–7", v: "dias de entrega" },
              { k: "100%", v: "personalizado" },
              { k: "15", v: "dias de suporte" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-white/55 sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */

function Benefits() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Credibilidade instantânea",
      text: "Um site profissional posiciona sua marca acima da concorrência e transmite confiança já no primeiro contato.",
    },
    {
      icon: Search,
      title: "Encontrado no Google",
      text: "SEO básico configurado desde o primeiro dia para você aparecer quando clientes procurarem seus serviços.",
    },
    {
      icon: Smartphone,
      title: "Perfeito no celular",
      text: "Design responsivo pensado para mobile, onde a maioria dos seus clientes vai te encontrar.",
    },
    {
      icon: Rocket,
      title: "Captação sem esforço",
      text: "Um canal profissional 24/7 que apresenta seu trabalho e leva o cliente direto ao WhatsApp.",
    },
    {
      icon: Gauge,
      title: "Rápido e leve",
      text: "Sites otimizados que carregam em segundos — porque velocidade também é imagem profissional.",
    },
    {
      icon: LifeBuoy,
      title: "Suporte próximo",
      text: "Você fala direto com quem faz. Sem burocracia, sem atendente, sem intermediários.",
    },
  ];
  return (
    <Section
      id="beneficios"
      eyebrow="Por que um site"
      title={
        <>
          Por que sua empresa <span className="text-gradient-orange">precisa de um site?</span>
        </>
      }
      intro="Um site profissional é o ativo digital mais importante do seu negócio. Ele trabalha por você mesmo quando você não está."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-[20px] border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary">
              <it.icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {it.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {it.text}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Portfolio ---------------- */

function Portfolio() {
  const projects = [
    { img: portfolio1, title: "Consultoria empresarial", tag: "Site institucional", w: 1200, h: 900 },
    { img: portfolio2, title: "Restaurante artesanal", tag: "Landing page", w: 1200, h: 900 },
    { img: portfolio3, title: "Estúdio de arquitetura", tag: "Portfólio", w: 1200, h: 900 },
  ];
  return (
    <Section
      id="portfolio"
      eyebrow="Portfólio"
      title={<>Projetos que <span className="text-gradient-orange">falam por si.</span></>}
      intro="Cada site é único, pensado para a identidade e o público do cliente. Zero template genérico."
      dark
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.figure
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={p.w}
                height={p.h}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="flex items-center justify-between p-6">
              <div>
                <div className="font-display text-base font-semibold text-white">
                  {p.title}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  {p.tag}
                </div>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/60 transition-colors group-hover:border-primary group-hover:text-primary">
                <ArrowRight className="h-4 w-4" />
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <CTAButton>Quero um site como esses</CTAButton>
      </div>
    </Section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Conversa inicial",
      text: "Entendemos seu negócio, objetivos e público pelo WhatsApp. Sem formulário longo.",
    },
    {
      icon: Palette,
      title: "Design personalizado",
      text: "Criamos um modelo exclusivo com a identidade da sua marca e enviamos para aprovação.",
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      text: "Codificamos com foco em velocidade, SEO e responsividade em todos os dispositivos.",
    },
    {
      icon: Send,
      title: "Publicação",
      text: "Colocamos seu site no ar entre 3 e 7 dias. Publicação e ajustes finais inclusos.",
    },
  ];
  return (
    <Section
      id="processo"
      eyebrow="Como funciona"
      title={<>Do briefing ao ar em <span className="text-gradient-orange">4 passos.</span></>}
      intro="Processo simples e direto. Você acompanha cada etapa e fala diretamente com quem está desenvolvendo."
    >
      <div className="relative">
        <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-primary/40 via-border to-border md:left-1/2 md:block" />
        <ol className="space-y-4 md:space-y-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid gap-4 rounded-[20px] border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 md:grid-cols-[80px_1fr] md:items-center md:p-7"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="font-display text-3xl font-semibold text-primary md:text-4xl">
                  0{i + 1}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary md:hidden">
                  <s.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
              </div>
              <div className="flex items-start gap-5">
                <span className="hidden h-12 w-12 place-items-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary md:grid">
                  <s.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
      <div className="mt-14 flex justify-center">
        <CTAButton>Começar meu projeto</CTAButton>
      </div>
    </Section>
  );
}

/* ---------------- Comparison ---------------- */

function Comparison() {
  const rows = [
    ["Prazo de entrega", "3 a 7 dias", "30 a 90 dias"],
    ["Contato direto", "Com quem desenvolve", "Vários intermediários"],
    ["Personalização", "Total, sem templates", "Templates repetidos"],
    ["Burocracia", "Zero", "Contratos longos"],
    ["Investimento", "Acessível", "Alto"],
    ["Publicação", "Inclusa", "Custo extra"],
  ];
  return (
    <Section
      eyebrow="Comparativo"
      title={<>Therezion × <span className="text-gradient-orange">Agência tradicional</span></>}
      intro="Mesma qualidade profissional, sem os problemas comuns do mercado."
    >
      <div className="overflow-hidden rounded-[20px] border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-border bg-[var(--surface)] text-sm font-medium">
          <div className="p-5 text-muted-foreground">Critério</div>
          <div className="flex items-center gap-2 border-l border-border p-5 text-foreground">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground">
              <span className="font-display text-[10px] font-bold">T</span>
            </div>
            Therezion
          </div>
          <div className="border-l border-border p-5 text-muted-foreground">
            Agência tradicional
          </div>
        </div>
        {rows.map((row, i) => (
          <div
            key={row[0]}
            className={
              "grid grid-cols-[1.2fr_1fr_1fr] text-sm " +
              (i % 2 === 0 ? "bg-background" : "bg-[var(--surface)]/40")
            }
          >
            <div className="p-5 font-medium text-foreground">{row[0]}</div>
            <div className="flex items-center gap-2 border-l border-border p-5 text-foreground">
              <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.4} />
              <span>{row[1]}</span>
            </div>
            <div className="flex items-center gap-2 border-l border-border p-5 text-muted-foreground">
              <X className="h-4 w-4 shrink-0 text-muted-foreground/60" strokeWidth={2} />
              <span>{row[2]}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Included ---------------- */

function Included() {
  const items = [
    { icon: Palette, title: "Design personalizado", text: "Layout único, alinhado à sua marca." },
    { icon: Smartphone, title: "100% responsivo", text: "Perfeito em celular, tablet e desktop." },
    { icon: Search, title: "SEO básico", text: "Estrutura pronta para o Google encontrar." },
    { icon: Globe, title: "Publicação inclusa", text: "Colocamos seu site no ar. Sem custo extra." },
    { icon: MessageCircle, title: "WhatsApp integrado", text: "Botão flutuante que converte visitas em conversas." },
    { icon: Layers, title: "1 rodada de ajustes", text: "Refinamos até você aprovar o resultado." },
    { icon: ShieldCheck, title: "Entrega garantida", text: "Prazo de até 7 dias ou seu dinheiro de volta." },
    { icon: LifeBuoy, title: "15 dias de acompanhamento", text: "Suporte pós-entrega para qualquer ajuste." },
  ];
  return (
    <Section
      eyebrow="O que está incluso"
      title={<>Tudo que sua empresa precisa <span className="text-gradient-orange">no ar.</span></>}
      intro="Um pacote completo, transparente e sem surpresas."
      dark
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-primary/[0.08] text-primary">
              <it.icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{it.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/60">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const faqs = [
    {
      q: "Quanto tempo leva para meu site ficar pronto?",
      a: "Entre 3 e 7 dias corridos após a aprovação do modelo. Prazo garantido em contrato.",
    },
    {
      q: "Preciso já ter textos e imagens prontos?",
      a: "Não. Orientamos você sobre o conteúdo ideal e podemos ajudar na estruturação dos textos.",
    },
    {
      q: "O site funciona no celular?",
      a: "Sim. Todos os sites são desenvolvidos mobile-first e testados em diversos dispositivos.",
    },
    {
      q: "Vocês publicam o site para mim?",
      a: "Sim. Publicação em domínio próprio está inclusa no serviço, sem custo adicional.",
    },
    {
      q: "Consigo alterar o site depois?",
      a: "Sim. Oferecemos 1 rodada de ajustes na entrega e 15 dias de acompanhamento gratuito.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "Investimento acessível, com condições flexíveis. Falamos os detalhes direto pelo WhatsApp.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Dúvidas <span className="text-gradient-orange">frequentes.</span></>}
      intro="Se não encontrar sua resposta aqui, é só chamar no WhatsApp."
    >
      <div className="mx-auto max-w-3xl">
        <div className="divide-y divide-border rounded-[20px] border border-border bg-card shadow-[var(--shadow-card)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[var(--surface)]/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <CTAButton>Tirar uma dúvida</CTAButton>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-[var(--ink)] text-white">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(600px circle at 30% 40%, oklch(0.68 0.19 42 / 0.35), transparent 60%), radial-gradient(500px circle at 80% 70%, oklch(0.78 0.16 55 / 0.2), transparent 60%)",
        }}
      />
      <div className="container-page relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
            Pronto para colocar sua empresa{" "}
            <span className="text-gradient-orange">no lugar certo?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
            Fale conosco pelo WhatsApp e receba um modelo de site pensado para o
            seu negócio.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton>Solicitar meu site</CTAButton>
            <span className="text-sm text-white/50">Resposta em até 24 horas úteis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] py-14 text-white/60">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-display text-sm font-bold">T</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                Therezion
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Sites profissionais para pequenas empresas e profissionais liberais
              que querem crescer com credibilidade.
            </p>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-white/40">
              Navegação
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#beneficios" className="hover:text-white">Benefícios</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfólio</a></li>
              <li><a href="#processo" className="hover:text-white">Processo</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-white/40">
              Contato
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-white">
                  WhatsApp: +55 44 99143-5266
                </a>
              </li>
              <li>Atendimento online</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Therezion. Todos os direitos reservados.</span>
          <span>Mais resultado. Menos burocracia.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_15px_40px_-10px_oklch(0.68_0.19_42/0.7)] transition-transform duration-200 hover:-translate-y-1 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
    </a>
  );
}
