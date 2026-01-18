import { Zap, Check, Star, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    price: '47',
    period: '/mês',
    description: 'Ideal para iniciantes',
    features: [
      'Acesso básico à plataforma',
      '1 automação ativa',
      'Suporte por email',
      'Atualizações mensais',
    ],
    popular: false,
  },
  {
    name: 'PRO',
    price: '97',
    period: '/mês',
    description: 'Para profissionais',
    features: [
      'Acesso completo à plataforma',
      '10 automações ativas',
      'Suporte prioritário 24/7',
      'Atualizações semanais',
      'Análises avançadas',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'ELITE',
    price: '197',
    period: '/mês',
    description: 'Máximo poder',
    features: [
      'Tudo do plano PRO',
      'Automações ilimitadas',
      'Suporte VIP dedicado',
      'White-label disponível',
      'Treinamento exclusivo',
      'Acesso antecipado',
    ],
    popular: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen px-4 py-12 md:py-20">
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-4 inline-flex items-center gap-2">
          <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
            <Zap className="h-5 w-5 text-background" />
          </div>
          <h1 className="text-2xl font-black tracking-tight md:text-3xl">
            <span className="gradient-text">MATRIX FARM</span>
          </h1>
        </div>

        <p className="mx-auto mb-12 max-w-lg text-muted-foreground">
          Desbloqueie o poder da automação. Escolha seu nível de acesso ao sistema.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card relative flex flex-col ${
              plan.popular ? 'popular-glow' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                <span className="badge-gradient flex items-center gap-1.5 px-3 py-1.5">
                  <Star className="h-3 w-3" /> MAIS POPULAR
                </span>
              </div>
            )}

            <div className="relative z-10 mb-6 text-center">
              <h3 className="text-lg font-bold tracking-wide text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="relative z-10 mb-6 text-center">
              <span className="gradient-text text-4xl font-black">
                R${plan.price}
              </span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>

            <ul className="relative z-10 mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[hsl(var(--g1))] to-[hsl(var(--g2))]">
                    <Check className="h-3 w-3 text-background" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`relative z-10 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
            >
              <Sparkles className="h-4 w-4" />
              <span>ATIVAR PLANO</span>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mx-auto mt-12 max-w-5xl">
        <div className="hint-box mx-auto max-w-md text-center">
          <p className="flex items-center justify-center gap-2">
            <span className="dot dot-ok animate-pulse-soft"></span>
            <span>Pagamento seguro • Cancele quando quiser • Suporte 24/7</span>
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="fixed left-4 top-4 font-mono text-xs text-muted-foreground">
        <p className="tracking-wider opacity-60">SYS://NODE_01</p>
        <p className="flex items-center gap-1.5">
          <span className="dot dot-live animate-pulse-soft"></span>
          <span className="text-foreground/80">ONLINE</span>
        </p>
      </div>

      <div className="fixed right-4 top-4 text-right font-mono text-xs text-muted-foreground">
        <p className="tracking-wider opacity-60">v2.0.4</p>
        <p className="text-foreground/80">Sistema ativo</p>
      </div>
    </div>
  );
};

export default Index;
