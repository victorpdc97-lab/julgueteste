"use client";

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large blurred orbs */}
      <div className="float-slow absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px]" />
      <div className="float-medium absolute top-1/3 -left-48 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[80px]" />
      <div className="float-fast absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/[0.02] blur-[60px]" />

      {/* Geometric accent lines */}
      <div className="absolute top-1/4 right-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent float-medium" />
      <div className="absolute bottom-1/3 left-16 w-px h-24 bg-gradient-to-b from-transparent via-accent/15 to-transparent float-slow" />

      {/* Small dots */}
      <div className="float-fast absolute top-[20%] right-[15%] w-1 h-1 rounded-full bg-accent/30" />
      <div className="float-slow absolute top-[60%] left-[10%] w-1.5 h-1.5 rounded-full bg-accent/20" />
      <div className="float-medium absolute top-[40%] right-[30%] w-1 h-1 rounded-full bg-accent/25" />
    </div>
  );
}
