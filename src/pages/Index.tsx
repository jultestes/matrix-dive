import MatrixRain from '@/components/MatrixRain';
import { Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="mb-12 flex items-center gap-3">
          <Zap className="h-8 w-8 text-primary" />
          <h1 className="font-display text-3xl font-bold tracking-[0.3em] text-primary text-glow md:text-4xl">
            MATRIX FARM
          </h1>
        </div>

        {/* Main Card */}
        <div className="matrix-card w-full max-w-md">
          {/* Card Header */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">🔐</span>
            <h2 className="font-display text-lg tracking-[0.2em] text-primary">
              ACESSO AO SISTEMA
            </h2>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">📧</span>
              <input
                type="email"
                placeholder="seu@email.com"
                className="matrix-input w-full pl-12"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔑</span>
              <input
                type="password"
                placeholder="••••••••"
                className="matrix-input w-full pl-12"
              />
            </div>

            <button className="matrix-button mt-2 flex w-full items-center justify-center gap-2">
              <span>▶</span>
              <span>CONECTAR</span>
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            システム v2.0 // Sistema seguro
          </p>
        </div>

        {/* Corner decorations */}
        <div className="fixed left-4 top-4 font-mono text-xs text-muted-foreground">
          <p className="tracking-wider">SYS://NODE_01</p>
          <p className="text-primary animate-pulse-soft">● ONLINE</p>
        </div>

        <div className="fixed right-4 top-4 text-right font-mono text-xs text-muted-foreground">
          <p className="tracking-wider">東京サーバー</p>
          <p className="text-primary animate-pulse-soft">接続済み</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
