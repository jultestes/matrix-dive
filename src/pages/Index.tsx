import { Zap, Check, Star, Terminal } from 'lucide-react';
import MatrixRain from '@/components/MatrixRain';

const plans = [
  {
    name: 'STARTER',
    price: '1.000',
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
    <>
      <MatrixRain />
      <div className="scanline min-h-screen px-4 py-12 md:py-20">
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="matrix-glow flex h-10 w-10 items-center justify-center rounded-lg border border-primary/50 bg-primary/10">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <h1 className="matrix-text cursor-blink text-2xl font-bold tracking-widest md:text-3xl">
            MATRIX FARM
          </h1>
        </div>

        <p className="mx-auto mb-12 max-w-lg font-mono text-sm text-muted-foreground">
          {'>'} Desbloqueie o poder da automação. Escolha seu nível de acesso ao sistema.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`matrix-card relative flex flex-col ${
              plan.popular ? 'matrix-popular' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                <span className="matrix-badge matrix-badge-glow flex items-center gap-1.5 px-3 py-1.5">
                  <Star className="h-3 w-3" /> RECOMENDADO
                </span>
              </div>
            )}

            <div className="relative z-10 mb-6 text-center">
              <h3 className="matrix-text text-lg font-bold tracking-widest">
                {plan.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{plan.description}</p>
            </div>

            <div className="relative z-10 mb-6 text-center">
              <span className="matrix-text text-4xl font-bold">
                R${plan.price}
              </span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>

            <ul className="relative z-10 mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-mono text-xs">
                  <div className="matrix-glow flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-primary/50 bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`relative z-10 ${plan.popular ? 'btn-matrix' : 'btn-matrix-secondary'}`}
            >
              <Zap className="h-4 w-4" />
              <span>ATIVAR_{plan.name}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mx-auto mt-12 max-w-5xl">
        <div className="mx-auto max-w-md border border-primary/30 bg-primary/5 p-4 text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="matrix-dot"></span>
            <span>SISTEMA_SEGURO • CANCELE_QUANDO_QUISER • SUPORTE_24/7</span>
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="fixed left-4 top-4 font-mono text-xs">
        <p className="tracking-widest text-muted-foreground opacity-60">SYS://NODE_01</p>
        <p className="flex items-center gap-1.5">
          <span className="matrix-dot"></span>
          <span className="matrix-text text-xs">ONLINE</span>
        </p>
      </div>

      <div className="fixed right-4 top-4 text-right font-mono text-xs">
        <p className="tracking-widest text-muted-foreground opacity-60">v2.0.4</p>
        <p className="matrix-text">ATIVO</p>
      </div>
      </div>
    </>
  );
};

export default Index;
