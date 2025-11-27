import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const statsData = [
  { title: "Всего проектов", value: "24", change: "+12%", icon: "FolderKanban", color: "text-primary" },
  { title: "Активные задачи", value: "156", change: "+8%", icon: "ListChecks", color: "text-secondary" },
  { title: "Выручка", value: "₽2.4M", change: "+23%", icon: "TrendingUp", color: "text-green-600" },
  { title: "Команда", value: "42", change: "+5", icon: "Users", color: "text-purple-600" },
];

const recentActivity = [
  { id: 1, action: "Создан новый проект", user: "Анна Петрова", time: "5 минут назад", icon: "Plus" },
  { id: 2, action: "Обновлена таблица данных", user: "Игорь Смирнов", time: "1 час назад", icon: "RefreshCw" },
  { id: 3, action: "Экспортирован отчет", user: "Мария Иванова", time: "2 часа назад", icon: "Download" },
  { id: 4, action: "Завершена задача", user: "Петр Козлов", time: "3 часа назад", icon: "CheckCircle2" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground">Дашборд</h1>
          <p className="text-muted-foreground mt-2">Обзор ключевых метрик и активности</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card 
              key={index} 
              className="animate-scale-in hover:shadow-lg transition-shadow cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                    <p className="text-3xl font-heading font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} от прошлого месяца</p>
                  </div>
                  <div className={`${stat.color} bg-muted/50 p-3 rounded-lg`}>
                    <Icon name={stat.icon as any} size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={24} />
                График активности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: "Разработка", value: 75, color: "bg-primary" },
                  { label: "Дизайн", value: 60, color: "bg-secondary" },
                  { label: "Маркетинг", value: 45, color: "bg-purple-500" },
                  { label: "Аналитика", value: 85, color: "bg-green-500" },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-muted-foreground">{item.value}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Activity" size={24} />
                Последние действия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <Icon name={activity.icon as any} size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-sm text-muted-foreground truncate">{activity.user}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="PieChart" size={24} />
              Распределение по категориям
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Разработка", value: "35%", color: "bg-primary" },
                { name: "Дизайн", value: "25%", color: "bg-secondary" },
                { name: "Маркетинг", value: "20%", color: "bg-purple-500" },
                { name: "Аналитика", value: "20%", color: "bg-green-500" },
              ].map((category, index) => (
                <div key={index} className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-heading font-bold text-xl`}>
                    {category.value}
                  </div>
                  <p className="font-medium text-sm">{category.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
