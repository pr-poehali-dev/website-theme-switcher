import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Analytics = () => {
  const monthlyData = [
    { month: "Янв", value: 45 },
    { month: "Фев", value: 52 },
    { month: "Мар", value: 48 },
    { month: "Апр", value: 61 },
    { month: "Май", value: 55 },
    { month: "Июн", value: 67 },
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground">Аналитика</h1>
          <p className="text-muted-foreground mt-2">Детальная статистика и визуализация данных</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="performance">Производительность</TabsTrigger>
            <TabsTrigger value="trends">Тренды</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="animate-scale-in">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon name="TrendingUp" size={18} />
                    Рост
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-heading font-bold text-green-600">+23.5%</div>
                  <p className="text-xs text-muted-foreground mt-1">По сравнению с прошлым периодом</p>
                </CardContent>
              </Card>

              <Card className="animate-scale-in">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon name="Users" size={18} />
                    Активные пользователи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-heading font-bold">12,543</div>
                  <p className="text-xs text-muted-foreground mt-1">+1,234 за последний месяц</p>
                </CardContent>
              </Card>

              <Card className="animate-scale-in">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon name="DollarSign" size={18} />
                    Средний чек
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-heading font-bold">₽8,450</div>
                  <p className="text-xs text-muted-foreground mt-1">Увеличение на 12%</p>
                </CardContent>
              </Card>
            </div>

            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="LineChart" size={24} />
                  Динамика по месяцам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-end justify-between gap-4 px-4">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-3">
                      <div className="w-full bg-muted rounded-t-lg relative overflow-hidden" style={{ height: "100%" }}>
                        <div
                          className="w-full bg-gradient-to-t from-primary to-secondary absolute bottom-0 rounded-t-lg transition-all duration-1000 ease-out hover:opacity-80"
                          style={{ 
                            height: `${(data.value / maxValue) * 100}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-heading font-bold text-lg">{data.value}K</div>
                        <div className="text-xs text-muted-foreground">{data.month}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Zap" size={24} />
                    Скорость загрузки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { page: "Главная", time: 1.2, color: "bg-green-500" },
                    { page: "Таблицы", time: 1.8, color: "bg-green-400" },
                    { page: "Аналитика", time: 2.1, color: "bg-yellow-500" },
                    { page: "Дашборд", time: 1.5, color: "bg-green-500" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.page}</span>
                        <span className="text-muted-foreground">{item.time}s</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${(item.time / 3) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Target" size={24} />
                    Конверсия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { stage: "Просмотры", value: 100, count: "10,000" },
                      { stage: "Клики", value: 45, count: "4,500" },
                      { stage: "Регистрации", value: 20, count: "2,000" },
                      { stage: "Покупки", value: 8, count: "800" },
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-sm">{item.stage}</span>
                          <span className="text-sm text-muted-foreground">{item.count}</span>
                        </div>
                        <div className="h-12 bg-muted rounded-lg overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm transition-all duration-1000"
                            style={{ width: `${item.value}%` }}
                          >
                            {item.value}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} />
                  Популярные категории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: "Разработка", count: 156, trend: "+12%", icon: "Code" },
                    { name: "Дизайн", count: 98, trend: "+8%", icon: "Palette" },
                    { name: "Маркетинг", count: 134, trend: "+15%", icon: "Megaphone" },
                    { name: "Аналитика", count: 87, trend: "+20%", icon: "BarChart2" },
                  ].map((category, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="bg-primary/10 text-primary p-4 rounded-full">
                            <Icon name={category.icon as any} size={24} />
                          </div>
                          <div>
                            <p className="font-heading font-bold text-2xl">{category.count}</p>
                            <p className="text-sm text-muted-foreground">{category.name}</p>
                          </div>
                          <div className="text-sm font-semibold text-green-600">{category.trend}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={24} />
                    Активность по часам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { time: "9:00 - 12:00", activity: 85 },
                      { time: "12:00 - 15:00", activity: 92 },
                      { time: "15:00 - 18:00", activity: 78 },
                      { time: "18:00 - 21:00", activity: 45 },
                    ].map((slot, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-sm font-medium w-32">{slot.time}</span>
                        <div className="flex-1 h-8 bg-muted rounded-lg overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-secondary to-primary transition-all duration-1000"
                            style={{ width: `${slot.activity}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">{slot.activity}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} />
                    География пользователей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { country: "Россия", percentage: 45, color: "bg-primary" },
                      { country: "США", percentage: 20, color: "bg-secondary" },
                      { country: "Германия", percentage: 15, color: "bg-purple-500" },
                      { country: "Великобритания", percentage: 12, color: "bg-green-500" },
                      { country: "Другие", percentage: 8, color: "bg-gray-400" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-sm font-medium w-32">{item.country}</span>
                        <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} transition-all duration-1000`}
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">{item.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
