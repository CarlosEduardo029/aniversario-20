import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Gift, Sparkles, Camera, Crown, Star, Images } from "lucide-react";

const siteConfig = {
  casal: {
    titulo: "Feliz aniversário, minha princesa dengosa",
    subtitulo:
      "Um cantinho feito com amor para celebrar a menina mais linda, doce e especial que a vida colocou no meu caminho.",
    assinatura: "Com todo o meu amor, do seu amorzinho 💗",
  },
  botoes: {
    principal: "Entrar no nosso mundinho",
    secundario: "Ver nossos momentos",
  },
  // Coloque seus arquivos aqui:
  // public/images/principal.jpg
  // public/images/foto1.jpg
  // public/images/foto2.jpg
  // public/images/foto3.jpg
  // public/images/foto4.jpg
  fotoPrincipal: "/images/principal.jpg",
  fotos: [
    {
      titulo: "Nosso sorriso favorito",
      legenda:
        "O tipo de momento que me faz agradecer por ter você na minha vida.",
      src: "/images/foto1.jpg",
    },
    {
      titulo: "Um abraço que virou lar",
      legenda:
        "Porque estar com você sempre parece o lugar mais bonito do mundo.",
      src: "/images/foto2.jpg",
    },
    {
      titulo: "Mais um pedacinho de nós",
      legenda:
        "Cada lembrança sua mora em mim de um jeito doce e inesquecível.",
      src: "/images/foto3.jpg",
    },
    {
      titulo: "Meu momento preferido",
      legenda:
        "Mesmo quando o tempo passa, você continua sendo a parte mais linda dele.",
      src: "/images/foto4.jpg",
    },
  ],
};

const storySteps = [
  {
    titulo: "Quando você chegou",
    texto:
      "Você apareceu e, sem perceber, foi colorindo a minha vida de um jeito que ninguém jamais conseguiu. Desde então, tudo ficou mais bonito.",
    emoji: "🎀",
  },
  {
    titulo: "Quando eu entendi o tamanho do meu amor",
    texto:
      "Nos detalhes, nas conversas, nos sorrisos e no seu jeitinho dengoso, eu fui entendendo que te amar seria uma das coisas mais lindas da minha vida.",
    emoji: "💗",
  },
  {
    titulo: "O sonho que ganhou nome",
    texto:
      "Meu coração sempre sonhou em encontrar uma menina linda, doce, carinhosa e cheia de luz como você. E hoje esse sonho tem o seu olhar, o seu sorriso e o seu nome.",
    emoji: "✨",
  },
];

const reasons = [
  "Porque o seu jeitinho dengoso deixa tudo mais fofo e mais leve.",
  "Porque o seu sorriso ilumina o que existe de melhor em mim.",
  "Porque estar com você faz o mundo parecer mais bonito.",
  "Porque você é delicada, intensa, linda e impossível de não amar.",
  "Porque você transforma carinho em casa e amor em paz.",
  "Porque você é a minha princesa em cada detalhe.",
];

const promises = [
  "Te lembrar todos os dias do quanto você é especial.",
  "Guardar nossas memórias como um tesouro precioso.",
  "Te amar com cuidado, presença, carinho e verdade.",
  "Continuar construindo momentos lindos ao seu lado.",
  "Ser abrigo, companhia e amor nos dias leves e nos difíceis.",
  "Nunca deixar de admirar a mulher linda que você é.",
];

const birthdayLines = [
  "Hoje eu celebro o seu aniversário, mas a verdade é que todos os dias eu celebro a sorte de ter você.",
  "Você é presente, paz, encanto e a parte mais doce do meu coração.",
  "Que o seu novo ciclo venha cheio de amor, cuidado, conquistas, sorrisos e tudo aquilo que faz seus olhos brilharem.",
  "E que, em cada passo, você nunca esqueça: você é profundamente amada por mim.",
];

const floatingIcons = [
  { item: "🎀", className: "left-[7%] top-24" },
  { item: "💜", className: "right-[9%] top-36" },
  { item: "✨", className: "left-[18%] top-[46%]" },
  { item: "💗", className: "right-[18%] top-[58%]" },
  { item: "🎀", className: "left-[10%] bottom-14" },
  { item: "⭐", className: "right-[11%] bottom-20" },
];

const tenorGifs = [
  {
    postId: "3109655928323140996",
    title: "Hello Kitty Jumping",
    label: "Capa com Hello Kitty",
    aspectRatio: "1",
  },
  {
    postId: "16969081933146884134",
    title: "Kitty",
    label: "Card fofo lateral",
    aspectRatio: "1.09211",
  },
  {
    postId: "2949633679466643461",
    title: "Cat Smiling",
    label: "Fechamento carinhoso",
    aspectRatio: "1",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-fuchsia-950 md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-fuchsia-950/75 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(168,85,247,0.10)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

function PlaceholderPhoto({ title }) {
  return (
    <div className="flex h-full min-h-[270px] items-center justify-center rounded-[26px] border border-dashed border-fuchsia-300 bg-[linear-gradient(135deg,#ffe7f4,#f1e8ff)] p-6 text-center text-fuchsia-500">
      <div>
        <div className="mb-3 text-4xl">💗</div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em]">
          Espaço para foto
        </p>
        <h3 className="mt-2 text-xl font-black text-fuchsia-700">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-fuchsia-700/80">
          Coloque a imagem nessa rota dentro da pasta public/images para ela aparecer aqui.
        </p>
      </div>
    </div>
  );
}

function ImageWithFallback({ src, alt, className, fallbackTitle }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <PlaceholderPhoto title={fallbackTitle} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function PhotoCard({ item, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group overflow-hidden rounded-[30px] border border-fuchsia-200 bg-white/80 shadow-[0_18px_50px_rgba(168,85,247,0.08)]"
    >
      <div className="relative overflow-hidden">
        {!failed && item.src ? (
          <img
            src={item.src}
            alt={item.titulo}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="relative h-72 bg-[linear-gradient(135deg,#ffe6f5,#f2e9ff)]">
            <div className="absolute left-3 top-3 text-xl opacity-80">🎀</div>
            <div className="absolute right-3 bottom-3 text-xl opacity-80">✨</div>
            <div className="flex h-full items-center justify-center px-6 text-center">
              <div>
                <div className="mb-3 text-4xl">📸</div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-500">
                  Foto {index + 1}
                </p>
                <p className="mt-2 text-sm leading-6 text-fuchsia-700/80">
                  Coloque a imagem em {item.src} para substituir este espaço.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(92,24,120,0.10))]" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black text-fuchsia-950">{item.titulo}</h3>
        <p className="mt-2 text-sm leading-6 text-fuchsia-950/75">{item.legenda}</p>
      </div>
    </motion.div>
  );
}

function TenorGifCard({ postId, title, label, aspectRatio = "1", rounded = "rounded-[28px]" }) {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://tenor.com/embed.js"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://tenor.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window?.Tenor?.Embedder) {
      window.Tenor.Embedder.load();
    }
  }, [postId]);

  return (
    <div className={cn("overflow-hidden border border-fuchsia-200 bg-white/85 shadow-sm", rounded)}>
      <div className="border-b border-fuchsia-100 bg-[linear-gradient(90deg,#fff4fb,#f7f1ff)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-400">
          {label}
        </p>
        <h3 className="mt-1 text-lg font-black text-fuchsia-950">{title}</h3>
      </div>
      <div className="p-3">
        <div
          className="tenor-gif-embed"
          data-postid={postId}
          data-share-method="host"
          data-aspect-ratio={aspectRatio}
          data-width="100%"
        >
          <a href={`https://tenor.com/view/${postId}`}>{title}</a>
        </div>
      </div>
    </div>
  );
}

export default function BirthdayLoveWebsite() {
  const scrollToGallery = () => {
    document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fff8fd_0%,#f7efff_30%,#ffeaf4_64%,#fff7fb_100%)] text-fuchsia-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-violet-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-100/70 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
              Presente de aniversário
            </p>
            <h1 className="text-lg font-black text-fuchsia-950 md:text-xl">
              Nosso Mundinho 💗
            </h1>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {[
              ["Início", "#inicio"],
              ["Momentos", "#galeria"],
              ["História", "#historia"],
              ["Carta", "#carta"],
              ["Final", "#final"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-fuchsia-900 transition hover:bg-white/80"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="rounded-full border border-fuchsia-200 bg-white/85 px-4 py-2 text-sm font-semibold text-fuchsia-700 shadow-sm">
            Hello Kitty mode ✨
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="relative overflow-hidden px-5 pb-12 pt-12 md:px-8 lg:px-10 lg:pb-20 lg:pt-16">
          {floatingIcons.map((icon, index) => (
            <div
              key={`${icon.item}-${index}`}
              className={cn(
                "pointer-events-none absolute text-3xl opacity-80 animate-pulse",
                icon.className
              )}
              style={{ animationDelay: `${index * 0.6}s` }}
            >
              {icon.item}
            </div>
          ))}

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/85 px-4 py-2 text-sm font-semibold text-fuchsia-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Um site feito inteiramente com amor
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-[1.05] text-fuchsia-950 md:text-6xl xl:text-7xl">
                {siteConfig.casal.titulo}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-fuchsia-950/80 md:text-xl">
                {siteConfig.casal.subtitulo}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={scrollToGallery}
                  className="rounded-full bg-[linear-gradient(90deg,#ec4899,#d946ef,#a855f7)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(217,70,239,0.22)] transition hover:-translate-y-0.5"
                >
                  {siteConfig.botoes.principal}
                </button>
                <a
                  href="#carta"
                  className="rounded-full border border-fuchsia-200 bg-white/85 px-6 py-3 text-sm font-semibold text-fuchsia-700 shadow-sm transition hover:-translate-y-0.5"
                >
                  {siteConfig.botoes.secundario}
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: Heart,
                    title: "Romântico",
                    text: "Textos doces e emocionantes em cada seção.",
                  },
                  {
                    icon: Camera,
                    title: "Visual",
                    text: "Galeria bonita para guardar os seus momentos preferidos.",
                  },
                  {
                    icon: Crown,
                    title: "Temático",
                    text: "Paleta rosa e roxa com clima fofo inspirado na Hello Kitty.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <GlassCard key={item.title} className="p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#ffe6f5,#efe5ff)] text-fuchsia-700 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-black text-fuchsia-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-fuchsia-950/75">
                        {item.text}
                      </p>
                    </GlassCard>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="space-y-5"
            >
              <div className="relative overflow-hidden rounded-[38px] border border-fuchsia-200 bg-white/75 p-4 shadow-[0_28px_80px_rgba(168,85,247,0.14)] backdrop-blur-xl">
                <div className="grid gap-4 lg:grid-cols-[1.05fr,0.95fr]">
                  <GlassCard className="border-fuchsia-100 bg-white/78">
                    <div className="mb-3 flex items-center gap-2 text-2xl">
                      <span>🎀</span>
                      <span>💗</span>
                      <span>✨</span>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
                      Sua carta de abertura
                    </p>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-fuchsia-950 md:text-3xl">
                      Hoje é o seu dia, mas quem ganhou o maior presente fui eu por ter você.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-fuchsia-950/78 md:text-[15px]">
                      Você é a minha princesa dengosa, o amor mais lindo que a vida me deu e a parte mais doce de tudo aquilo que eu sinto. Esse site existe para te lembrar do quanto você é especial para mim.
                    </p>
                  </GlassCard>

                  <div className="relative">
                    <ImageWithFallback
                      src={siteConfig.fotoPrincipal}
                      alt="Foto principal do casal"
                      className="h-full min-h-[320px] w-full rounded-[28px] object-cover shadow-sm"
                      fallbackTitle="Foto principal de vocês"
                    />
                  </div>
                </div>
              </div>

              <TenorGifCard
                postId={tenorGifs[0].postId}
                title={tenorGifs[0].title}
                label={tenorGifs[0].label}
                aspectRatio={tenorGifs[0].aspectRatio}
                rounded="rounded-[32px]"
              />
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-8 md:px-8 lg:px-10 lg:py-12">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {[
              {
                title: "Feito com cuidado",
                text: "Cada bloco foi pensado para parecer um presente entregue com carinho.",
                icon: "🎁",
              },
              {
                title: "Cheio de sentimento",
                text: "O foco do site é fazer ela sentir o quanto é amada e celebrada.",
                icon: "💞",
              },
              {
                title: "Fofo na medida certa",
                text: "Hello Kitty entra como encanto visual sem roubar o brilho de vocês.",
                icon: "🎀",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-5">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-black text-fuchsia-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fuchsia-950/75">{item.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="galeria" className="px-5 py-14 md:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Nossos momentos"
              title="Cada lembrança sua é uma parte linda do meu coração"
              text="Aqui ficam os momentos de vocês dois. Eu já deixei as rotas das imagens configuradas para você só jogar seus arquivos na pasta certa e ver tudo preenchido automaticamente."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {siteConfig.fotos.map((item, index) => (
                <PhotoCard key={item.titulo} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="historia" className="border-y border-fuchsia-200/70 bg-white/45 px-5 py-14 backdrop-blur-sm md:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Nossa história"
              title="A forma como você virou sonho, abrigo e amor"
              text="Eu organizei essa parte como uma pequena linha do tempo emocional, para o site contar o que você sente de um jeito bonito, envolvente e inesquecível."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {storySteps.map((item, index) => (
                <motion.div
                  key={item.titulo}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <GlassCard className="h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(251,244,255,0.88))]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#ec4899,#a855f7)] text-xl shadow-sm">
                      <span>{item.emoji}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-fuchsia-950">
                      {item.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-fuchsia-950/78">
                      {item.text}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="carta" className="px-5 py-14 md:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr,0.92fr] lg:items-start">
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[36px] border border-fuchsia-200 bg-white/80 shadow-[0_24px_70px_rgba(236,72,153,0.10)]"
            >
              <div className="border-b border-fuchsia-100 bg-[linear-gradient(90deg,#fff4fb,#f8f2ff)] px-7 py-5 md:px-9 md:py-6 lg:px-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                  Minha carta para você
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-fuchsia-950 md:text-5xl">
                  Você é a minha parte mais bonita.
                </h2>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.08fr,0.92fr]">
                <div className="p-7 md:p-9 lg:p-10">
                  <div className="space-y-5 text-[15px] leading-8 text-fuchsia-950/82 md:text-base">
                    <p>
                      Meu amor, hoje eu queria te abraçar com palavras, com memórias e com tudo aquilo que o meu coração sente quando pensa em você. Então eu transformei esse carinho em um site, como se cada pedacinho daqui fosse um beijo, um abraço e uma forma de te lembrar o quanto você é importante pra mim.
                    </p>
                    <p>
                      Você chegou e fez nascer em mim um amor bonito, leve, intenso e verdadeiro. O seu jeitinho dengoso, a sua beleza, o seu sorriso e a forma como você existe no mundo fizeram de você alguém impossível de não admirar. Você é daquelas pessoas que deixam a vida mais doce só por estarem nela.
                    </p>
                    <p>
                      Eu olho pra você e sinto que meu coração encontrou exatamente aquilo que sempre quis: uma menina linda, sensível, encantadora e cheia de amor. E desde que você entrou na minha vida, eu passei a entender melhor o significado de cuidado, ternura, saudade e felicidade.
                    </p>
                    <p>
                      No seu aniversário, eu só quero que você sinta o quanto é preciosa para mim. Quero que você se veja com o mesmo encanto com que eu te vejo. Quero que você lembre que é linda, especial, admirável e profundamente amada. Hoje é o seu dia, minha princesa, mas a alegria maior é minha por poder celebrar a sua existência.
                    </p>
                    <p>
                      Obrigado por ser você. Obrigado pelos seus detalhes, pelo seu coração e por tudo aquilo que você desperta em mim. Eu te amo de um jeito muito bonito, muito sincero e muito inteiro.
                    </p>
                  </div>
                </div>

                <div className="border-l border-fuchsia-100 bg-[linear-gradient(180deg,#fff8fd,#f8f1ff)] p-5">
                  <TenorGifCard
                    postId={tenorGifs[1].postId}
                    title={tenorGifs[1].title}
                    label={tenorGifs[1].label}
                    aspectRatio={tenorGifs[1].aspectRatio}
                    rounded="rounded-[24px]"
                  />
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <GlassCard className="bg-white/85">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#ffe8f5,#efe6ff)] text-fuchsia-700 shadow-sm">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-400">
                        O que eu amo em você
                      </p>
                      <h3 className="text-2xl font-black text-fuchsia-950">Razões que moram em mim</h3>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {reasons.map((reason) => (
                      <div
                        key={reason}
                        className="rounded-2xl border border-fuchsia-200 bg-[linear-gradient(90deg,#fff7fb,#f8f2ff)] px-4 py-3 text-sm leading-6 text-fuchsia-950/80"
                      >
                        ♡ {reason}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <GlassCard className="bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(248,240,255,0.84))]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#ffe8f4,#efe4ff)] text-fuchsia-700 shadow-sm">
                      <Gift className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-400">
                        Minhas promessas
                      </p>
                      <h3 className="text-2xl font-black text-fuchsia-950">O amor que eu quero viver com você</h3>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {promises.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-fuchsia-200 bg-white/80 px-4 py-3 text-sm leading-6 text-fuchsia-950/80"
                      >
                        ✨ {item}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Nosso jeitinho"
              title="Fofo, romântico e cheio de brilho"
              text="Essa faixa funciona como um respiro visual do site. Ela reforça a ideia do presente, do encanto e dos pequenos detalhes inspirados no universo que ela ama."
              center
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: "🎀",
                  title: "Laços delicados",
                  text: "Entram como detalhe visual para deixar tudo mais meigo e especial.",
                },
                {
                  icon: "🌸",
                  title: "Clima doce",
                  text: "As cores rosa e roxa fazem o site parecer um carinho em forma de tela.",
                },
                {
                  icon: "✨",
                  title: "Animação suave",
                  text: "Brilhos e GIFs deixam a experiência encantadora sem pesar.",
                },
                {
                  icon: "💗",
                  title: "Vocês em destaque",
                  text: "Mesmo com tema fofo, o centro de tudo continua sendo o amor de vocês.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <GlassCard className="h-full text-center">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="mt-4 text-xl font-black text-fuchsia-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-fuchsia-950/75">{item.text}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="final" className="px-5 pb-20 pt-8 md:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] border border-fuchsia-200 bg-[linear-gradient(135deg,#ec4899,#d946ef,#a855f7)] p-[1px] shadow-[0_30px_90px_rgba(168,85,247,0.22)]">
            <div className="rounded-[41px] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,245,251,0.95),rgba(248,241,255,0.95))] px-6 py-12 md:px-10 lg:px-14 lg:py-16">
              <div className="mb-4 flex items-center justify-center gap-3 text-2xl md:text-3xl">
                <span>🎀</span>
                <span>💗</span>
                <span>✨</span>
                <span>💜</span>
              </div>

              <SectionTitle
                eyebrow="Encerramento"
                title="Feliz aniversário para a menina mais linda do meu mundo"
                text="Eu queria terminar esse presente do jeito mais bonito possível: te lembrando que você é amor, encanto, delicadeza e o sonho mais lindo que o meu coração já viveu."
                center
              />

              <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
                {birthdayLines.map((line, index) => (
                  <motion.div
                    key={line}
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                  >
                    <div className="rounded-[28px] border border-white/65 bg-white/75 px-5 py-5 text-left shadow-sm backdrop-blur-md">
                      <div className="mb-3 inline-flex rounded-full bg-[linear-gradient(90deg,#ffe8f4,#efe5ff)] p-2 text-fuchsia-700">
                        <Star className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-7 text-fuchsia-950/82 md:text-[15px]">
                        {line}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
                <div className="rounded-[30px] border border-white/65 bg-white/80 px-6 py-7 text-center shadow-sm backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-400">
                    Minha última palavra aqui
                  </p>
                  <p className="mt-4 text-2xl font-black leading-tight text-fuchsia-950 md:text-4xl">
                    Que o seu novo ano seja tão lindo quanto o amor que eu sinto por você.
                  </p>
                  <p className="mt-4 text-base leading-8 text-fuchsia-950/80">
                    Obrigado por existir, por ser tão especial e por fazer meu coração ter certeza de que amar você é uma das coisas mais bonitas que já me aconteceram.
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-500">
                    {siteConfig.casal.assinatura}
                  </p>
                </div>

                <TenorGifCard
                  postId={tenorGifs[2].postId}
                  title={tenorGifs[2].title}
                  label={tenorGifs[2].label}
                  aspectRatio={tenorGifs[2].aspectRatio}
                  rounded="rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
