
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WebDemo = () => {
  const cards = [
    {
      title: "Reclamação por Texto com IA",
      description: "Nesta demonstração, você envia uma mensagem de reclamação simples e recebe uma resposta construída por IA com base simbólica."
    },
    {
      title: "Análise Automática do Verbatim",
      description: "A IA interpreta o texto do cliente, identifica emoção, contexto e intenção. O backend relata exatamente o que foi analisado."
    },
    {
      title: "Blocos de Retorno Inteligente",
      description: "Você verá: O que a IA detectou no sentimento, Qual foi a leitura simbólica, A resposta ideal que seria enviada ao cliente"
    },
    {
      title: "Suba sua Base D-1",
      description: "Empresas podem enviar suas bases de clientes (ex: até D-1) e a IA responderá individualmente, com diagnósticos e sugestões por cliente."
    },
    {
      title: "Acesse a Demonstração Agora",
      description: "Envie sua mensagem e veja a IA em ação.",
      hasButton: true,
      buttonText: "Iniciar teste com base sintética",
      buttonLink: "https://webhook.etechats.com.br/webhook/chat-ia"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Demonstração Web</h2>
          <p className="text-xl text-gray-600">Teste a análise de texto e resposta automática</p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="p-2">
                  <Card className="h-80 bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
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
                          className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
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
          <CarouselPrevious className="text-green-600 border-green-600 hover:bg-green-50" />
          <CarouselNext className="text-green-600 border-green-600 hover:bg-green-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default WebDemo;
