
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BePairIntro = () => {
  const cards = [
    {
      title: "O que é BePair?",
      description: "Uma IA que conversa com seu cliente como se fosse humana. Atende 24h, entende emoções e gera ações simbólicas personalizadas."
    },
    {
      title: "Metodologia PAIR",
      description: "Personas Ativadas por Inteligência Relacional. Detecta o momento do cliente, sentimento e propõe resposta ideal com base simbólica."
    },
    {
      title: "Resultados",
      description: "Redução de churn, reativação de clientes silenciosos, fidelização com impacto simbólico e economia com mídia paga."
    },
    {
      title: "Simulações em tempo real",
      description: "Veja a IA analisando reclamações e propondo respostas personalizadas: texto, áudio, sentimento e plano de ação."
    },
    {
      title: "Economia com mídia",
      description: "BePair substitui parte dos custos com marketing tradicional (tráfego pago, mídia, outdoor), entregando conversas reais com clientes 24/7."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Conheça a BePair</h2>
          <p className="text-xl text-gray-600">Revolucione o relacionamento com seus clientes</p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="p-2">
                  <Card className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-2xl">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-relaxed opacity-90">{card.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-blue-600 border-blue-600 hover:bg-blue-50" />
          <CarouselNext className="text-blue-600 border-blue-600 hover:bg-blue-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default BePairIntro;
