export default function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#eef2ff]" />

      <div className="animate-blob-float-1 absolute -left-[10%] -top-[15%] h-[55vmax] w-[55vmax] rounded-full bg-[#93C5FD] opacity-40 blur-[110px]" />
      <div className="animate-blob-float-2 absolute -right-[15%] top-[5%] h-[50vmax] w-[50vmax] rounded-full bg-[#C4B5FD] opacity-40 blur-[120px]" />
      <div className="animate-blob-float-3 absolute bottom-[-20%] left-[15%] h-[60vmax] w-[60vmax] rounded-full bg-[#FBCFE8] opacity-35 blur-[130px]" />
      <div className="animate-blob-float-2 absolute bottom-[-10%] right-[5%] h-[40vmax] w-[40vmax] rounded-full bg-[#A7F3D0] opacity-25 blur-[110px] [animation-duration:38s]" />

      <div className="absolute inset-0 bg-white/10" />
    </div>
  );
}
