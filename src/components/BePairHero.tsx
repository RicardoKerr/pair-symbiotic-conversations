
import { ArrowDown } from "lucide-react";

const BePairHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            BePair
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            IA que conversa com seus clientes como se fosse humana
          </p>
          <p className="text-lg text-gray-500 mb-12">
            Metodologia PAIR: Personas Ativadas por Inteligência Relacional
          </p>
        </div>
        
        <div className="flex justify-center animate-bounce">
          <ArrowDown className="w-8 h-8 text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default BePairHero;
