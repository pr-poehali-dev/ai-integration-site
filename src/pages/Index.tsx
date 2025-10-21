import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [demoInput, setDemoInput] = useState('');
  const [demoResult, setDemoResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDemo = async () => {
    if (!demoInput.trim()) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setDemoResult(`✨ AI обработал ваш запрос: "${demoInput}"\n\nРезультат: Это демонстрационный ответ системы ИИ. Интеграция позволяет получать интеллектуальные ответы в реальном времени.`);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AI Platform
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Главная
              </a>
              <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
                Демо
              </a>
              <a href="#api" className="text-muted-foreground hover:text-foreground transition-colors">
                API
              </a>
              <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Документация
              </a>
              <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                Примеры
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Icon name="Zap" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">Мощный ИИ для вашего бизнеса</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              Интеграция ИИ
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-300%">
                нового поколения
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Подключите передовые AI-технологии к вашим приложениям за минуты. 
              Простой API, быстрая интеграция, безграничные возможности.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
                <Icon name="Rocket" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                <Icon name="Book" size={20} className="mr-2" />
                Документация
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Zap', title: 'Быстро', desc: 'Интеграция за 5 минут' },
              { icon: 'Shield', title: 'Надёжно', desc: '99.9% uptime гарантия' },
              { icon: 'Sparkles', title: 'Умно', desc: 'Продвинутые ML-модели' }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heading">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Живое <span className="text-primary">Демо</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Попробуйте наш ИИ прямо сейчас
            </p>
          </div>

          <Card className="p-8 bg-card border-border/50">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваш запрос</label>
                <Textarea
                  placeholder="Напишите что-нибудь для AI..."
                  value={demoInput}
                  onChange={(e) => setDemoInput(e.target.value)}
                  className="min-h-[120px] bg-background border-border"
                />
              </div>
              
              <Button 
                onClick={handleDemo} 
                disabled={isLoading || !demoInput.trim()}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Обработка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить
                  </>
                )}
              </Button>

              {demoResult && (
                <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-lg animate-fade-in">
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" size={20} className="text-primary mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-primary">Ответ ИИ</h4>
                      <p className="text-sm text-foreground whitespace-pre-line">{demoResult}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section id="api" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Простой <span className="text-secondary">API</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Интегрируйте за несколько строк кода
            </p>
          </div>

          <Tabs defaultValue="js" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="js">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>

            <TabsContent value="js">
              <Card className="p-6 bg-muted/50">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-foreground">{`const response = await fetch('https://api.platform.ai/v1/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Hello AI!',
    model: 'gpt-4'
  })
});

const data = await response.json();
console.log(data.response);`}</code>
                </pre>
              </Card>
            </TabsContent>

            <TabsContent value="python">
              <Card className="p-6 bg-muted/50">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-foreground">{`import requests

response = requests.post(
    'https://api.platform.ai/v1/chat',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'message': 'Hello AI!',
        'model': 'gpt-4'
    }
)

data = response.json()
print(data['response'])`}</code>
                </pre>
              </Card>
            </TabsContent>

            <TabsContent value="curl">
              <Card className="p-6 bg-muted/50">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-foreground">{`curl -X POST https://api.platform.ai/v1/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello AI!",
    "model": "gpt-4"
  }'`}</code>
                </pre>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-accent/30 hover:border-accent transition-colors">
              <Icon name="Code" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-heading">REST API</h3>
              <p className="text-muted-foreground text-sm">
                Стандартные HTTP-запросы для любого языка программирования
              </p>
            </Card>
            <Card className="p-6 border-primary/30 hover:border-primary transition-colors">
              <Icon name="Webhook" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-heading">WebSocket</h3>
              <p className="text-muted-foreground text-sm">
                Потоковая передача данных в реальном времени
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="text-accent">Документация</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Всё, что нужно для старта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'BookOpen', title: 'Быстрый старт', desc: 'Начните за 5 минут' },
              { icon: 'Code2', title: 'API Reference', desc: 'Полное описание endpoints' },
              { icon: 'Lightbulb', title: 'Гайды', desc: 'Пошаговые инструкции' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Best practices' },
              { icon: 'BarChart', title: 'Лимиты', desc: 'Rate limits и квоты' },
              { icon: 'HelpCircle', title: 'FAQ', desc: 'Частые вопросы' }
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:border-primary/50 transition-all cursor-pointer group">
                <Icon name={item.icon as any} size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2 font-heading">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Примеры <span className="text-secondary">использования</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Реальные кейсы применения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: 'MessageSquare',
                title: 'Чат-боты',
                desc: 'Умные ассистенты для поддержки клиентов',
                color: 'from-primary to-secondary'
              },
              {
                icon: 'FileText',
                title: 'Анализ текста',
                desc: 'Обработка и классификация документов',
                color: 'from-secondary to-accent'
              },
              {
                icon: 'Image',
                title: 'Генерация контента',
                desc: 'Создание текстов, изображений, кода',
                color: 'from-accent to-primary'
              },
              {
                icon: 'TrendingUp',
                title: 'Аналитика',
                desc: 'Предиктивные модели и прогнозы',
                color: 'from-primary to-accent'
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 group hover:scale-105 transition-all cursor-pointer overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <Icon name={item.icon as any} size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-heading">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Узнать больше
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Свяжитесь <span className="text-primary">с нами</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Готовы начать? Напишите нам
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте..." className="min-h-[150px] bg-background" />
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="mt-12 flex justify-center gap-6">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <span className="font-bold font-heading">AI Platform</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 AI Platform. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
