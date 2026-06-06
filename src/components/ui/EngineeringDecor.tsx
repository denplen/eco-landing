type DecorProps = {
  className?: string;
};

export function EngineeringGrid({ className = "" }: DecorProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bg-[linear-gradient(rgba(14,39,72,0.105)_1px,transparent_1px),linear-gradient(90deg,rgba(14,39,72,0.105)_1px,transparent_1px)] bg-[size:28px_28px] ${className}`}
    />
  );
}

export function TopoLines({ className = "" }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 260"
      className={`pointer-events-none absolute fill-none stroke-[#0E2748]/[0.13] ${className}`}
    >
      <path strokeWidth="1.35" d="M-20 212c42-36 77-47 113-32 31 13 52 46 91 48 47 3 66-39 108-47 39-7 81 15 133 46" />
      <path strokeWidth="1.25" d="M-8 166c35-27 69-35 101-22 34 13 55 48 94 50 45 2 66-37 103-43 37-6 76 14 116 38" />
      <path strokeWidth="1.35" d="M18 119c31-20 59-24 87-12 35 15 54 48 91 49 38 1 60-34 95-37 31-3 64 10 94 27" />
      <path strokeWidth="1.2" d="M54 78c28-12 52-10 75 2 31 16 49 44 83 42 33-2 52-30 84-29 25 0 50 9 75 22" />
      <path strokeWidth="1.25" d="M104 42c27 0 46 13 64 29 23 20 47 29 74 19 23-8 38-26 61-29 20-3 39 3 57 13" />
    </svg>
  );
}

export function CornerMarkers({ className = "" }: DecorProps) {
  const cornerClassName = "absolute size-8 border-[#F4A11A]/75";

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`${cornerClassName} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${cornerClassName} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${cornerClassName} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${cornerClassName} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}
