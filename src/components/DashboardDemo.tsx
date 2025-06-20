
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardDemo = () => {
  const cards = [
    {
      title: "Sistema PAIR em Ação",
      description: "Veja como a IA entende quem é o cliente e em que momento ele está. Cada resposta é simbólica, emocionalmente orientada e personalizada."
    },
    {
      title: "Escuta Ativa Automatizada",
      description: "A IA escuta, interpreta sentimentos e detecta sinais de churn antes do cliente sumir. Ela filtra \"clientes silenciosos\", \"reclamantes reincidentes\" e mais."
    },
    {
      title: "Evolução e Resultados Visíveis",
      description: "Você acompanha a evolução simbólica da jornada do cliente: de detratores a promotores, com indicadores de impacto e reconquista."
    },
    {
      title: "Entregas e Ações Humanizadas",
      description: "Cada ação gerada é adaptada à emoção, canal e tom ideal para aquele cliente. A entrega não é genérica, é relacional."
    },
    {
      title: "Engajamento e Personas Vivas",
      description: "Personas evoluem com base em emoções e respostas. A IA mantém o vínculo ativo, entende barreiras e ativa playbooks personalizados."
    },
    {
      title: "Demonstração Visual da Solução",
      description: "Explore todas essas funcionalidades em um dashboard funcional.",
      hasButton: true,
      buttonText: "Ver demonstração visual",
      buttonLink: "https://preview--interface-remake-project-flow.lovable.app/entrega"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Dashboard Funcional</h2>
          <p className="text-xl text-gray-600">Veja a metodologia PAIR em funcionamento</p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="p-2">
                  <Card className="h-80 bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
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
                          className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
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
          <CarouselPrevious className="text-orange-600 border-orange-600 hover:bg-orange-50" />
          <CarouselNext className="text-orange-600 border-orange-600 hover:bg-orange-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default DashboardDemo;
