import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface DataRow {
  id: number;
  name: string;
  status: string;
  value: number;
  date: string;
  category: string;
}

const mockData: DataRow[] = [
  { id: 1, name: "Проект Alpha", status: "Активен", value: 15420, date: "2024-01-15", category: "Разработка" },
  { id: 2, name: "Проект Beta", status: "В работе", value: 8750, date: "2024-01-18", category: "Дизайн" },
  { id: 3, name: "Проект Gamma", status: "Завершен", value: 23100, date: "2024-01-10", category: "Маркетинг" },
  { id: 4, name: "Проект Delta", status: "Активен", value: 12300, date: "2024-01-20", category: "Разработка" },
  { id: 5, name: "Проект Epsilon", status: "В работе", value: 9850, date: "2024-01-22", category: "Аналитика" },
  { id: 6, name: "Проект Zeta", status: "Активен", value: 18200, date: "2024-01-25", category: "Дизайн" },
  { id: 7, name: "Проект Eta", status: "Завершен", value: 31400, date: "2024-01-12", category: "Разработка" },
  { id: 8, name: "Проект Theta", status: "В работе", value: 7600, date: "2024-01-28", category: "Маркетинг" },
];

const Tables = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<keyof DataRow>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof DataRow) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const filteredData = mockData
    .filter((row) =>
      Object.values(row).some((val) =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const modifier = sortDirection === "asc" ? 1 : -1;
      return aVal > bVal ? modifier : -modifier;
    });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      "Активен": "bg-green-100 text-green-700 hover:bg-green-100",
      "В работе": "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
      "Завершен": "bg-blue-100 text-blue-700 hover:bg-blue-100",
    };
    return variants[status] || "secondary";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-heading font-bold text-foreground">Таблицы</h1>
            <p className="text-muted-foreground mt-2">Управляйте данными с расширенными возможностями</p>
          </div>
          <Button className="gap-2">
            <Icon name="Plus" size={20} />
            Добавить запись
          </Button>
        </div>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Icon name="Table" size={24} />
                Основная таблица данных
              </span>
              <div className="relative w-80">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      onClick={() => handleSort("id")}
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        ID
                        <Icon 
                          name={sortKey === "id" ? (sortDirection === "asc" ? "ChevronUp" : "ChevronDown") : "ChevronsUpDown"} 
                          size={16} 
                        />
                      </div>
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("name")}
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        Название
                        <Icon 
                          name={sortKey === "name" ? (sortDirection === "asc" ? "ChevronUp" : "ChevronDown") : "ChevronsUpDown"} 
                          size={16} 
                        />
                      </div>
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("category")}
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        Категория
                        <Icon 
                          name={sortKey === "category" ? (sortDirection === "asc" ? "ChevronUp" : "ChevronDown") : "ChevronsUpDown"} 
                          size={16} 
                        />
                      </div>
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("status")}
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        Статус
                        <Icon 
                          name={sortKey === "status" ? (sortDirection === "asc" ? "ChevronUp" : "ChevronDown") : "ChevronsUpDown"} 
                          size={16} 
                        />
                      </div>
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("value")}
                      className="cursor-pointer hover:bg-muted/50 transition-colors text-right"
                    >
                      <div className="flex items-center justify-end gap-2">
                        Значение
                        <Icon 
                          name={sortKey === "value" ? (sortDirection === "asc" ? "ChevronUp" : "ChevronDown") : "ChevronsUpDown"} 
                          size={16} 
                        />
                      </div>
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("date")}
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        Дата
                        <Icon 
                          name={sortKey === "date" ? (sortDirection === "asc" ? "ChevronUp" : "ChevronDown") : "ChevronsUpDown"} 
                          size={16} 
                        />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((row) => (
                    <TableRow key={row.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{row.id}</TableCell>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(row.status)}>
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        {row.value.toLocaleString('ru-RU')} ₽
                      </TableCell>
                      <TableCell>{new Date(row.date).toLocaleDateString('ru-RU')}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {filteredData.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-50" />
                <p>Данные не найдены</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tables;
