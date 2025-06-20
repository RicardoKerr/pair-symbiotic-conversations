
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WhatsAppDemo = () => {
  const cards = [
    {
      title: "Atendimento Real via WhatsApp",
      description: "Envie uma mensagem de reclamação (texto ou voz) e veja como a IA responde com empatia e inteligência contextual."
    },
    {
      title: "Análise do Momento do Cliente",
      description: "A IA identifica emoções, intenção e urgência. Classifica o estado simbólico do cliente e prepara a resposta adequada."
    },
    {
      title: "Blocos de Resposta Inteligente",
      description: "Você receberá blocos que mostram: A análise feita pelo backend, A decisão simbólica gerada, A resposta final ao cliente (em texto e áudio)"
    },
    {
      title: "Retenção Automática e Personalizada",
      description: "Além da resposta imediata, a IA pode acionar benefícios: vouchers, cashback, descontos — tudo conforme a emoção e histórico do cliente."
    },
    {
      title: "Teste Agora via WhatsApp",
      description: "Experimente o atendimento simbólico 24h por dia.",
      hasButton: true,
      buttonText: "Iniciar teste no WhatsApp",
      buttonLink: "https://wa.me/5511962513987"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Teste via WhatsApp</h2>
          <p className="text-xl text-gray-600">Experimente a IA conversacional em ação</p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="p-2">
                  <Card className="h-80 bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-2xl">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                      <p className="text-lg leading-relaxed opacity-90 mb-6">{card.description}</p>
                      {card.hasButton && (
                        <Button 
                          asChild
                          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                        >
                          <a href={card.buttonLink} target="_blank" rel="noopener noreferrer">
                            {card.buttonText}
                          </a>
                        </Button>
                      )}
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

export default WhatsAppDemo;
