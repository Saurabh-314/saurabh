export default function ProjectImage({ title, accent = '#3B82F6' }) {
  const displayName = title || 'Project';

  return (
    <div
      className="w-full h-full flex items-center justify-center relative group overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${accent}18 0%, #1a2744 50%, #0f172a 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${accent}20 0%, transparent 70%)`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${accent}40 1px, transparent 1px), linear-gradient(90deg, ${accent}40 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="text-center relative z-10 px-6">
        <div
          className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center glass"
          style={{ borderColor: `${accent}30` }}
        >
          <span className="text-2xl font-bold" style={{ color: accent }}>
            {displayName.charAt(0)}
          </span>
        </div>
        <h4 className="text-lg font-semibold text-[#F8FAFC] tracking-tight">{displayName}</h4>
        <p className="text-xs text-[#64748B] mt-1">Screenshot coming soon</p>
      </div>
    </div>
  );
}
