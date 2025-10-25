'use client';

interface PersonaSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  color: string;
}

export function PersonaSlider({ label, value, onChange, color }: PersonaSliderProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-fg font-semibold">{label}</label>
        <span className="text-primary font-bold text-lg">{value}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, ${color.replace('bg-', 'rgb(var(--tw-')} 0%, ${color.replace('bg-', 'rgb(var(--tw-')} ${value}%, rgb(255 255 255 / 0.1) ${value}%, rgb(255 255 255 / 0.1) 100%)`
          }}
        />
      </div>
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
