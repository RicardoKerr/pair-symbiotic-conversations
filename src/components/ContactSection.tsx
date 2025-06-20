
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤝</span>
            </div>
            <CardTitle className="text-3xl mb-4">Obrigado pela visita!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Esperamos que você tenha entendido o potencial da BePair para transformar o relacionamento com seus clientes.
            </p>
            <p className="text-lg mb-8 opacity-80">
              Se quiser conversar, testar mais recursos ou levar essa inteligência para sua empresa, é só chamar!
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-semibold">📲 Fale com a gente no WhatsApp:</p>
              <Button 
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg"
              >
                <a 
                  href="https://wa.me/5521987162377?text=Olá%21%20Te%20conheci%20na%20Campus%20Party%20Brasília%20%2D%20Startup%20BePair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Entrar em contato</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
