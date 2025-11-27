import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      title: "Интерактивные таблицы",
      description: "Управляйте данными с сортировкой, фильтрацией и поиском",
      icon: "Table",
      color: "text-primary",
      link: "/tables",
    },
    {
      title: "Аналитика",
      description: "Визуализируйте данные с помощью графиков и диаграмм",
      icon: "LineChart",
      color: "text-secondary",
      link: "/analytics",
    },
    {
      title: "Дашборд",
      description: "Следите за ключевыми метриками в реальном времени",
      icon: "LayoutDashboard",
      color: "text-purple-600",
      link: "/dashboard",
    },
  ];

  const stats = [
    { value: "24+", label: "Активных проектов" },
    { value: "156", label: "Записей в базе" },
    { value: "99.9%", label: "Точность данных" },
    { value: "24/7", label: "Доступность" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="Sparkles" size={16} />
            Современная платформа для работы с данными
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
            Управляйте данными
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              эффективно
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мощные инструменты для анализа, визуализации и управления данными в одном месте
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link to="/tables">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Начать работу
                <Icon name="ArrowRight" size={20} />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                <Icon name="Play" size={20} />
                Обзор
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-heading font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <Card 
                className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in cursor-pointer group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`${feature.color} bg-muted/50 p-4 rounded-xl w-fit group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium pt-2">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary to-secondary text-white animate-scale-in overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48" />
          <CardContent className="p-12 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Готовы начать?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Создайте свой первый проект и убедитесь, насколько просто управлять данными с нашей платформой
              </p>
              <div className="flex items-center gap-4">
                <Link to="/tables">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Создать проект
                    <Icon name="Plus" size={20} />
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Изучить аналитику
                    <Icon name="TrendingUp" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "Zap", title: "Быстрая обработка", desc: "Мгновенный доступ к данным" },
            { icon: "Shield", title: "Безопасность", desc: "Защита на уровне банков" },
            { icon: "Cloud", title: "Облачное хранение", desc: "Доступ из любой точки" },
            { icon: "BarChart3", title: "Подробная аналитика", desc: "Глубокий анализ данных" },
          ].map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto">
                  <Icon name={item.icon as any} size={24} />
                </div>
                <h4 className="font-heading font-bold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
