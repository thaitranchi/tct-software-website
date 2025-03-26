interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-xl shadow-lg text-white text-center">
      <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}
    </div>
  );
}
