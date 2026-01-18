import MatrixRain from '@/components/MatrixRain';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Scanline effect overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-20"
          style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)',
          }}
        />

        {/* Main Hero Content */}
        <div className="text-center">
          {/* Japanese subtitle */}
          <p className="mb-4 text-sm tracking-[0.5em] text-matrix-dim animate-pulse-glow">
            マトリックス・システム
          </p>

          {/* Main Title */}
          <h1 className="mb-6 font-display text-5xl font-black uppercase tracking-wider text-foreground text-glow-intense md:text-7xl lg:text-8xl">
            THE MATRIX
          </h1>

          {/* Subtitle with typing effect */}
          <div className="mb-8 overflow-hidden">
            <p className="font-mono text-lg text-matrix-glow md:text-xl">
              ウェイクアップ、ネオ... // Wake up, Neo...
            </p>
          </div>

          {/* Japanese quote */}
          <blockquote className="mx-auto mb-12 max-w-2xl border-l-2 border-primary pl-4 text-left">
            <p className="text-sm text-muted-foreground md:text-base">
              "現実とは何か？現実をどう定義するか？"
            </p>
            <p className="mt-2 text-xs text-matrix-dim">
              "What is real? How do you define real?"
            </p>
            <footer className="mt-2 text-xs text-primary">— モーフィアス</footer>
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              variant="matrix" 
              size="lg"
              className="glitch-effect"
            >
              赤い薬を飲む // Take the Red Pill
            </Button>
            <Button 
              variant="matrixOutline" 
              size="lg"
            >
              青い薬を飲む // Take the Blue Pill
            </Button>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-matrix-dim animate-pulse-glow">
              スクロールして続ける
            </p>
            <div className="h-8 w-px bg-gradient-to-b from-primary to-transparent animate-float" />
          </div>
        </div>

        {/* Corner decorations */}
        <div className="fixed left-4 top-4 font-mono text-xs text-matrix-dim">
          <p>SYS://MATRIX_v2.0</p>
          <p className="text-primary">接続済み // CONNECTED</p>
        </div>

        <div className="fixed right-4 top-4 text-right font-mono text-xs text-matrix-dim">
          <p>ノード: 東京-01</p>
          <p className="text-primary">アクティブ // ACTIVE</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
