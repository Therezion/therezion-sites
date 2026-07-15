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
  Clock,
  CreditCard,
  Award,
  Instagram,
  FileText,
  CheckCircle2,
  Zap,
} from "lucide-react";

import heroGlow from "../assets/hero-glow.jpg";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import logoTz from "../assets/logo-tz.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const WHATSAPP =
  "https://wa.me/5544991435266?text=" +
  encodeURIComponent(
    "Olá! Gostaria de agendar uma conversa e solicitar um modelo de site para minha empresa com a Therezion."
  );

const INSTAGRAM = "https://instagram.com/therezion.sites";

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
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest " +
                  (dark
                    ? "border-white/15 bg-white/5 text-white/80"
                    : "border-border bg-card text-muted-foreground")
                }
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={
                  "mt-5 text-base leading-relaxed sm:text-lg " +
                  (dark ? "text-white/70" : "text-muted-foreground")
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
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 will-change-transform";
  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_30px_-10px_oklch(0.68_0.19_42/0.65)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "border border-foreground/15 bg-card text-foreground hover:border-primary/40 hover:bg-primary/[0.04] shadow-sm hover:-translate-y-0.5",
    ghost:
      "border border-white/20 bg-white/[0.05] text-white hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5",
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
    <main className="relative overflow-x-hidden bg-background selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero prefersReduced={!!prefersReduced} />
      <Benefits />
      <Portfolio />
      <Process />
      <Comparison />
      <GuaranteeSection />
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
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-[var(--ink)]/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3.5 transition-opacity hover:opacity-90">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#0c0b11] shadow-md">
            <img
              src={logoTz}
              alt="Therezion Logo"
              className="h-full w-full object-cover object-center scale-100 transition-transform duration-300 hover:scale-[1.06]"
            />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Therezion
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white/75 lg:flex">
          <a href="#beneficios" className="transition-colors hover:text-primary">
            Benefícios
          </a>
          <a href="#portfolio" className="transition-colors hover:text-primary">
            Portfólio
          </a>
          <a href="#processo" className="transition-colors hover:text-primary">
            Processo
          </a>
          <a href="#comparativo" className="transition-colors hover:text-primary">
            Comparativo
          </a>
          <a href="#garantia" className="transition-colors hover:text-primary">
            Garantia
          </a>
          <a href="#faq" className="transition-colors hover:text-primary">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden flex-col items-end text-right sm:flex">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Atendimento Online
            </span>
            <span className="text-[11px] text-white/50">Seg a Seg • 08h às 18h</span>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-primary sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Agendar Reunião</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero({ prefersReduced }: { prefersReduced: boolean }) {
  return (
    <section
      id="top"
      className="relative isolate min-h-[780px] overflow-hidden bg-[var(--ink)] pt-32 pb-24 text-white sm:min-h-[900px] lg:pt-36"
    >
      {/* Background glow image & textures */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroGlow}
          alt=""
          aria-hidden
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/80 via-[var(--ink)]/50 to-[var(--ink)]" />
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md">
            <span>Autoridade • Confiança • Resultados</span>
          </div>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Sua empresa merece um site que{" "}
            <span className="text-gradient-orange">transmite máxima credibilidade.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
            Desenvolvemos sites profissionais e estratégicos. Sem burocracia, sem agências tradicionais e com entrega rápida entre{" "}
            <strong className="font-semibold text-white">3 e 7 dias úteis</strong>.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton>
              <MessageCircle className="h-5 w-5" />
              Agendar Reunião no WhatsApp
            </CTAButton>
            <CTAButton href="#portfolio" variant="ghost">
              Ver Projetos Prontos
            </CTAButton>
          </div>

          {/* Grid de Diferenciais / Garantias da oferta */}
          <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:grid-cols-4 sm:gap-6 sm:p-8">
            {[
              {
                icon: Clock,
                title: "3 a 7 Dias Úteis",
                desc: "Entrega super rápida garantida em contrato",
              },
              {
                icon: CreditCard,
                title: "50% / 50%",
                desc: "Metade para iniciar, metade na entrega e aprovação",
              },
              {
                icon: Layers,
                title: "1 Rodada Grátis",
                desc: "Ajustes de layout até sua aprovação completa",
              },
              {
                icon: Award,
                title: "Garantia Total",
                desc: "7 dias de garantia + 15 dias de acompanhamento",
              },
            ].map((box) => (
              <div key={box.title} className="flex flex-col items-center text-center">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <box.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display text-base font-bold text-white sm:text-lg">
                  {box.title}
                </div>
                <div className="mt-1 text-xs leading-snug text-white/60 sm:text-sm">
                  {box.desc}
                </div>
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
      title: "Autoridade que gera confiança",
      text: "Um site com acabamento premium posiciona seu negócio acima da concorrência e elimina a desconfiança do cliente logo no primeiro olhar.",
    },
    {
      icon: Search,
      title: "Encontrado no Google",
      text: "Estrutura semântica e SEO básico configurados perfeitamente para que sua empresa apareça no Google quando o cliente pesquisar pelo seu serviço.",
    },
    {
      icon: Rocket,
      title: "Estruturado para Conversão",
      text: "Cada projeto é estruturado estrategicamente para conduzir o visitante ao objetivo definido pelo negócio, seja entrar em contato, preencher um formulário, solicitar um orçamento, realizar uma compra ou qualquer outra conversão desejada.",
    },
    {
      icon: Smartphone,
      title: "Perfeito no Celular",
      text: "Design 100% responsivo e mobile-first. Seu site abre rápido, com botões acessíveis e navegação intuitiva em qualquer tamanho de tela.",
    },
    {
      icon: Zap,
      title: "Rápido, Fácil e Sem Burocracia",
      text: "Esqueça formulários longos, contratos complexos ou reuniões cansativas. Alinhamos tudo direto ao ponto, com clareza e agilidade.",
    },
    {
      icon: LifeBuoy,
      title: "Suporte Direto e Próximo",
      text: "Aqui você não é atendido por robôs ou intermediários. Você fala diretamente com quem desenvolve, com suporte técnico por 15 dias.",
    },
  ];

  return (
    <Section
      id="beneficios"
      eyebrow="Benefícios Exclusivos"
      title={
        <>
          Por que sua empresa precisa de um site com{" "}
          <span className="text-gradient-orange">máxima autoridade?</span>
        </>
      }
      intro="Seu site é a vitrine oficial da sua marca 24 horas por dia. Se ele parecer amador, você perde negócios de alto valor todos os dias."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/25 bg-primary/[0.08] text-primary transition-transform duration-300 group-hover:scale-110">
              <it.icon className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              {it.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
    {
      img: portfolio1,
      title: "Consultoria & Gestão Empresarial",
      tag: "Site Institucional de Alta Autoridade",
      w: 1200,
      h: 900,
    },
    {
      img: portfolio2,
      title: "Gastronomia & Experiência Premium",
      tag: "Landing Page de Alta Conversão",
      w: 1200,
      h: 900,
    },
    {
      img: portfolio3,
      title: "Estúdio de Arquitetura & Design",
      tag: "Portfólio Interativo Minimalista",
      w: 1200,
      h: 900,
    },
  ];

  return (
    <Section
      id="portfolio"
      eyebrow="Portfólio Real"
      title={
        <>
          Projetos que transmitem <span className="text-gradient-orange">credibilidade imediata.</span>
        </>
      }
      intro="Desenvolvemos sites visuais, elegantes e funcionais. Sem excesso de cores ou animações pesadas, mantendo o foco absoluto no que importa: valorizar sua marca."
      dark
    >
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.figure
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50"
          >
            <div className="aspect-[4/3] overflow-hidden bg-white/5">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={p.w}
                height={p.h}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="flex items-center justify-between p-7">
              <div>
                <div className="font-display text-lg font-bold text-white">
                  {p.title}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-primary">
                  {p.tag}
                </div>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/70 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight className="h-5 w-5" />
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
        <CTAButton>
          Quero um site com esse nível de acabamento
        </CTAButton>
        <span className="text-xs text-white/50">
          Apresentamos uma proposta personalizada pelo WhatsApp sem compromisso.
        </span>
      </div>
    </Section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Briefing Estratégico",
      text: "Conversamos para entender o seu negócio, seus diferenciais e os objetivos da sua marca. O contato pode acontecer pelo WhatsApp, formulário ou outro canal, conforme a necessidade do projeto.",
    },
    {
      icon: FileText,
      title: "2. Planejamento Estratégico",
      text: "Estruturamos as seções ideais, os argumentos e a rota do visitante para que toda a navegação conduza naturalmente ao objetivo principal do projeto.",
    },
    {
      icon: Palette,
      title: "3. Desenvolvimento Sob Medida",
      text: "Criamos um design exclusivo com a identidade visual da sua empresa. Codificação moderna, leve, limpa e com SEO ativado para o Google.",
    },
    {
      icon: Code2,
      title: "4. Revisão e Apresentação",
      text: "Disponibilizamos um link privado do seu site real em funcionamento no ar para você testar no celular e computador com toda tranquilidade.",
    },
    {
      icon: Layers,
      title: "5. Aprovação + 1 Rodada de Ajustes Gratuita",
      text: "Você analisa cada detalhe e tem direito a 1 rodada de ajustes sem custo nenhum para deixarmos textos, cores e imagens exatamente do seu jeito.",
    },
    {
      icon: Globe,
      title: "6. Publicação no Domínio Próprio",
      text: "Aprovado? Nós fazemos toda a configuração técnica e colocamos o site no ar no seu domínio (.com ou .com.br) com certificado de segurança SSL.",
    },
    {
      icon: ShieldCheck,
      title: "7. Entrega Garantida & Suporte",
      text: "Entrega formalizada com garantia incondicional de 7 dias e 15 dias de acompanhamento próximo para tirar qualquer dúvida.",
    },
  ];

  return (
    <Section
      id="processo"
      eyebrow="Transparência Total"
      title={
        <>
          O processo Therezion: rápido, seguro e{" "}
          <span className="text-gradient-orange">sem burocracia.</span>
        </>
      }
      intro="Você acompanha cada passo e fala diretamente com quem está desenvolvendo. Nosso prazo de entrega é de apenas 3 a 7 dias úteis."
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-7 top-8 bottom-8 hidden w-0.5 bg-gradient-to-b from-primary via-border to-border md:block" />
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid gap-5 rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 md:grid-cols-[60px_1fr] md:items-start md:p-8"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-primary/[0.08] text-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="font-display text-lg font-bold text-primary md:hidden">
                  Passo 0{i + 1}
                </span>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <span className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary md:inline-block">
                    Etapa 0{i + 1}
                  </span>
                </div>
                <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
      <div className="mt-14 flex justify-center">
        <CTAButton>Iniciar o Passo 1 no WhatsApp</CTAButton>
      </div>
    </Section>
  );
}

/* ---------------- Comparison ---------------- */

function Comparison() {
  const rows = [
    ["Prazo de entrega", "3 a 7 dias úteis", "30 a 90 dias com atrasos"],
    ["Forma de pagamento", "50% no início + 50% na entrega", "100% adiantado ou contratos presos"],
    ["Contato e suporte", "Direto no WhatsApp com quem cria", "Atendentes, chamados e demora"],
    ["Personalização", "100% sob medida para sua marca", "Templates repetidos e genéricos"],
    ["Burocracia", "Zero! Rápido, fácil e seguro", "Reuniões intermináveis sem foco"],
    ["Ajustes na entrega", "1 rodada completa grátis", "Cobrança extra por cada alteração"],
    ["Publicação e SSL", "Inclusa sem taxas ocultas", "Taxas de setup adicionais"],
    ["Garantia de risco", "7 dias + 15 dias de acompanhamento", "Nenhuma garantia clara após o ar"],
  ];

  return (
    <Section
      id="comparativo"
      eyebrow="O Diferencial"
      title={
        <>
          Por que escolher a Therezion × <span className="text-gradient-orange">Agência Tradicional</span>
        </>
      }
      intro="A mesma qualidade estética e técnica de grandes agências, mas com agilidade, transparência e investimento inteligente."
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-border bg-[var(--surface)] text-sm font-semibold">
          <div className="p-6 text-muted-foreground">O que comparar</div>
          <div className="flex items-center gap-2.5 border-l border-border bg-primary/5 p-6 text-foreground">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <span className="font-display text-xs font-bold">T</span>
            </div>
            <span className="font-bold text-primary">Therezion</span>
          </div>
          <div className="border-l border-border p-6 text-muted-foreground">
            Agência Tradicional / Freelancer
          </div>
        </div>
        {rows.map((row, i) => (
          <div
            key={row[0]}
            className={
              "grid grid-cols-[1.2fr_1fr_1fr] text-sm md:text-base " +
              (i % 2 === 0 ? "bg-background" : "bg-[var(--surface)]/50")
            }
          >
            <div className="p-6 font-semibold text-foreground">{row[0]}</div>
            <div className="flex items-center gap-3 border-l border-border bg-primary/[0.03] p-6 font-medium text-foreground">
              <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.6} />
              <span>{row[1]}</span>
            </div>
            <div className="flex items-center gap-3 border-l border-border p-6 text-muted-foreground">
              <X className="h-5 w-5 shrink-0 text-destructive/70" strokeWidth={2.2} />
              <span>{row[2]}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Guarantee Section (Especial) ---------------- */

function GuaranteeSection() {
  return (
    <Section
      id="garantia"
      eyebrow="Garantia Incondicional"
      title={
        <>
          Contratar a Therezion é <span className="text-gradient-orange">100% seguro.</span>
        </>
      }
      intro="Nosso compromisso é com a sua autoridade e satisfação. Por isso, oferecemos condições blindadas para você avançar sem receio."
      dark
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/15 via-white/[0.04] to-white/[0.02] p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Clock,
              title: "3 a 7 Dias Úteis",
              desc: "Prazo firme. Seu novo site vai para o ar em tempo recorde sem perder o acabamento de luxo.",
            },
            {
              icon: CreditCard,
              title: "50% Inicial / 50% Final",
              desc: "Você investe metade para começarmos e a outra metade só no final, após ver e aprovar o site.",
            },
            {
              icon: Award,
              title: "7 Dias de Garantia",
              desc: "Se em até 7 dias da entrega você não estiver satisfeito com nosso serviço, protegemos seu investimento.",
            },
            {
              icon: LifeBuoy,
              title: "15 Dias de Suporte",
              desc: "Após a publicação, você conta com 15 dias de acompanhamento próximo para qualquer ajuste no ar.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-start">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <div className="text-sm">
              <span className="block font-bold text-white">
                Mais resultado. Menos burocracia.
              </span>
              <span className="text-white/60">
                Atendimento de Segunda a Segunda, das 08h às 18h no WhatsApp.
              </span>
            </div>
          </div>
          <CTAButton>
            Falar pelo WhatsApp Agora
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Included ---------------- */

function Included() {
  const items = [
    { icon: Palette, title: "Design 100% Exclusivo", text: "Identidade visual desenhada para sua autoridade." },
    { icon: Smartphone, title: "Totalmente Responsivo", text: "Perfeito em qualquer celular, tablet ou desktop." },
    { icon: Search, title: "SEO no Google ativado", text: "Estrutura pronta para ser encontrada por novos clientes." },
    { icon: Globe, title: "Publicação no Domínio", text: "Configuração completa de DNS e SSL sem custo extra." },
    { icon: Rocket, title: "Integração de Conversão", text: "WhatsApp, formulários ou sistemas conectados ao seu objetivo." },
    { icon: Layers, title: "1 Rodada de Ajustes Grátis", text: "Ajustamos textos e cores até sua aprovação." },
    { icon: Award, title: "Garantia de 7 Dias", text: "Proteção total e transparência do início ao fim." },
    { icon: LifeBuoy, title: "15 Dias de Acompanhamento", text: "Suporte próximo pós-entrega direto com nossa equipe." },
  ];

  return (
    <Section
      eyebrow="Tudo Incluso"
      title={<>O pacote completo para sua empresa <span className="text-gradient-orange">vender mais.</span></>}
      intro="Sem surpresas, sem mensalidades abusivas e sem taxas escondidas. Você recebe tudo pronto e funcionando."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/30 bg-primary/[0.08] text-primary">
              <it.icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
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
      q: "Quanto tempo leva para o site ficar pronto e publicado?",
      a: "Nosso prazo garantido é de apenas 3 a 7 dias úteis após o alinhamento do briefing e confirmação do projeto. Enquanto agências tradicionais demoram meses, nós entregamos com velocidade máxima sem perder a qualidade premium.",
    },
    {
      q: "Como funciona a forma de pagamento (50% / 50%)?",
      a: "É simples, seguro e transparente: você investe 50% do valor para iniciarmos o desenvolvimento, e os outros 50% apenas na entrega do site, após você visualizar, revisar e aprovar o resultado final.",
    },
    {
      q: "O que acontece se eu quiser alterar algo depois de ver o modelo?",
      a: "Você tem direito a 1 rodada de ajustes totalmente gratuita durante a fase de aprovação. Podemos ajustar textos, cores, imagens, layout ou posições de elementos até que fique exatamente como você imaginou.",
    },
    {
      q: "Como funciona a garantia de 7 dias e o suporte de 15 dias?",
      a: "Após a publicação do seu site, oferecemos garantia incondicional de 7 dias sobre os serviços entregues. Além disso, disponibilizamos 15 dias de acompanhamento técnico próximo e gratuito para tirar dúvidas ou fazer pequenos alinhamentos técnicos no ar.",
    },
    {
      q: "Eu preciso já ter textos, fotos e logotipo prontos para começar?",
      a: "Não é obrigatório ter tudo pronto! Nosso time te ajuda a estruturar o conteúdo ideal e textos persuasivos durante a etapa de planejamento. Se precisar, utilizamos imagens profissionais de alta qualidade licenciadas para o seu segmento.",
    },
    {
      q: "O site vai aparecer no Google e funcionar perfeitamente no celular?",
      a: "Sim! Desenvolvemos com foco 100% mobile-first (responsivo para celulares, tablets e computadores) e com toda a estrutura semântica de SEO básico ativada para que o Google indexe sua página rapidamente.",
    },
    {
      q: "O site pode ser configurado para qualquer tipo de objetivo ou conversão?",
      a: "Sim! A Therezion desenvolve sites estratégicos sob medida. O objetivo de conversão é definido conforme a sua necessidade, podendo ser direcionamento para o WhatsApp, preenchimento de formulário, pedido de orçamento, agendamentos, cadastros, compras ou qualquer outro canal que traga mais resultado para o seu negócio.",
    },
    {
      q: "Quais são os dias e horários de atendimento da Therezion?",
      a: "Nosso atendimento funciona de Segunda a Segunda, das 08h às 18h. Você fala direto com quem desenvolve pelo WhatsApp ou pelo nosso Instagram @therezion.sites, sem intermediários ou burocracia.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      eyebrow="Dúvidas Frequentes"
      title={<>Perguntas <span className="text-gradient-orange">frequentes.</span></>}
      intro="Tudo o que você precisa saber antes de dar o próximo passo para o crescimento da sua empresa."
    >
      <div className="mx-auto max-w-3xl">
        <div className="divide-y divide-border rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[var(--surface)]/70 md:p-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-foreground sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors " +
                      (isOpen
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary")
                    }
                  >
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
                  <p className="px-6 pb-7 text-sm leading-relaxed text-muted-foreground md:px-7 md:text-base">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="text-sm text-muted-foreground">Ainda tem alguma dúvida?</span>
          <CTAButton>Tirar dúvida direto no WhatsApp</CTAButton>
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
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(700px circle at 30% 40%, oklch(0.68 0.19 42 / 0.4), transparent 60%), radial-gradient(600px circle at 80% 70%, oklch(0.78 0.16 55 / 0.25), transparent 60%)",
        }}
      />
      <div className="container-page relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest">
            Pronto para crescer?
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            Sua marca transmitindo a autoridade que sempre{" "}
            <span className="text-gradient-orange">mereceu ter.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Fale conosco agora pelo WhatsApp, agende uma conversa sem compromisso e veja
            como podemos colocar o seu novo site no ar em até 7 dias úteis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton>
              <MessageCircle className="h-5 w-5" />
              Solicitar Modelo no WhatsApp
            </CTAButton>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              <Instagram className="h-4 w-4 text-primary" />
              Siga @therezion.sites
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-8 text-xs text-white/60 sm:text-sm">
            <span>⚡ Entrega em 3 a 7 dias úteis</span>
            <span>🤝 50% início / 50% na entrega</span>
            <span>🛡️ Garantia de 7 dias + 15 dias suporte</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] py-16 text-white/70">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#0c0b11] shadow-md">
                <img
                  src={logoTz}
                  alt="Therezion Logo"
                  className="h-full w-full object-cover object-center scale-100"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Therezion
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Sites profissionais e estratégicos para empresas que querem transmitir autoridade, passar
              mais confiança e conquistar mais clientes em todos os canais digitais.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/[0.04] px-4 py-2 text-xs text-white/80 ring-1 ring-white/10">
              <Clock className="h-4 w-4 text-primary" />
              <span>
                Atendimento: <strong className="text-white">Segunda a Segunda, 08h às 18h</strong>
              </span>
            </div>
          </div>

          <div>
            <div className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              Navegação Rápida
            </div>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              <li><a href="#beneficios" className="transition-colors hover:text-white">Benefícios do Site</a></li>
              <li><a href="#portfolio" className="transition-colors hover:text-white">Portfólio de Autoridade</a></li>
              <li><a href="#processo" className="transition-colors hover:text-white">Processo em 7 Etapas</a></li>
              <li><a href="#comparativo" className="transition-colors hover:text-white">Therezion × Agência</a></li>
              <li><a href="#garantia" className="transition-colors hover:text-white">Garantia & Suporte</a></li>
              <li><a href="#faq" className="transition-colors hover:text-white">Dúvidas Frequentes (FAQ)</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              Canais de Atendimento
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-primary/10 px-4 py-2.5 font-medium text-white ring-1 ring-primary/30 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-primary group-hover:text-white" />
                  <span>WhatsApp: +55 44 99143-5266</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  <span>Instagram: @therezion.sites</span>
                </a>
              </li>
              <li className="text-xs text-white/50 pt-1">
                Fale direto com quem desenvolve. Zero burocracia.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Therezion. Todos os direitos reservados.</span>
          <div className="flex items-center gap-6">
            <span>Mais resultado. Menos burocracia.</span>
            <span>Entrega em 3 a 7 dias úteis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 sm:bottom-8 sm:right-8">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="hidden rounded-full bg-card/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg ring-1 ring-border backdrop-blur transition-transform hover:scale-105 sm:inline-flex sm:items-center sm:gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span>Agendar reunião no WhatsApp</span>
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_15px_40px_-10px_oklch(0.68_0.19_42/0.8)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
      </a>
    </div>
  );
}
