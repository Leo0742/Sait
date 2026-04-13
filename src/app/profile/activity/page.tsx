'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ActivityPage() {
  const activities = [
    "Наука и образование (система обучения и воспитания, педагогика, фундаментальные и прикладные исследования, академическая деятельность)",
    "Государственное управление (государственная и муниципальная служба, парламентаризм, молодёжная политика, силовые структуры, международные отношения,...",
    "Медиа (традиционные и цифровые СМИ, блоггинг, маркетинг, реклама, PR и т.д.)",
    "Креативные индустрии, культура и творчество (дизайн, искусство, музыка, кино, мода, развлечения, ивент-индустрия и т.д.)",
    "IT, инновации и цифровизация (разработка программного обеспечения, искусственный интеллект, big-data, облачные технологии, IoT и т.д.)",
    "Предпринимательство (коммерция, стартапы, большой и малый бизнес)",
    "Общественное и цифровое здоровье (здравоохранение, медицинские технологии, фармацевтика)",
    "Сельское хозяйство и АПК (агробизнес, развитие сельских территорий, перерабатывающая и пищевая промышленность и т.д.)",
    "Недропользование и ГП (геология, нефтегазовый комплекс, углеводородная отрасль, трубопровод, добыча полезных ископаемых, цифровая трансформация отрасли и т.д.)",
    "Строительство и архитектура (градостроительство, проектирование, строительная индустрия)",
    "Экономика и финансы (инвестиции, банковское дело, страхование, бережная торговля, бухгалтерия)",
    "Промышленность, технологии и энергетика (промышленность, инжиниринг, технологии, энергетика, нефтегазовая отрасль, транспорт, логистика)",
    "Экология (охрана окружающей среды, «зелёные» технологии и т.д.)",
    "Гражданская активность (деятельность НКО, социальное проектов, волонтёрство, благотворительность, военно-патриотическая деятельность и т.д.)",
    "Туризм и индустрия гостеприимства (туристический бизнес, гостиничное дело, экскурсионная деятельность, развитие туристской инфраструктуры)",
    "Спорт и ЗОЖ (физическая культура и спорт, спортивные мероприятия и турниры, спортивная индустрия, спортивная медицина)",
    "Другое"
  ];

  return (
    <div className="bg-white rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-8">Профиль</h1>

      {/* Tabs */}
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8 bg-transparent border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="common"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium"
          >
            Регистрационные данные
          </TabsTrigger>
          <TabsTrigger
            value="generaldata"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium"
          >
            Общие данные
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium"
          >
            Личные документы
          </TabsTrigger>
          <TabsTrigger
            value="contacts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium"
          >
            Контактные данные
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium"
          >
            Сфера деятельности
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Сфера деятельности</h2>

          <form className="space-y-6">
            {/* Status */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Статус <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="status-school" />
                  <Label htmlFor="status-school" className="text-sm font-normal cursor-pointer">Школьник</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status-college" />
                  <Label htmlFor="status-college" className="text-sm font-normal cursor-pointer">Студент колледжа</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status-university" />
                  <Label htmlFor="status-university" className="text-sm font-normal cursor-pointer">Студент ВУЗа</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status-work" />
                  <Label htmlFor="status-work" className="text-sm font-normal cursor-pointer">Работаю</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status-none" />
                  <Label htmlFor="status-none" className="text-sm font-normal cursor-pointer">Не работаю</Label>
                </div>
              </div>
            </div>

            {/* Study in Russia checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="studyRussia" />
              <Label htmlFor="studyRussia" className="text-sm font-medium cursor-pointer">
                Учусь в России
              </Label>
            </div>

            {/* Directions of activity */}
            <div className="space-y-3">
              <Label className="text-sm font-medium flex items-center gap-2">
                Направления деятельности <span className="text-red-500">*</span>
                <span className="text-gray-400 text-xs">ℹ️</span>
              </Label>
              <div className="space-y-2 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Checkbox id={`activity-${index}`} className="mt-1" />
                    <Label htmlFor={`activity-${index}`} className="text-sm font-normal cursor-pointer leading-relaxed">
                      {activity}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements textarea */}
            <div className="space-y-2">
              <Label htmlFor="achievements" className="text-sm font-medium">
                Поделись своими достижениями и опытом реализации проектов в выбранных направлениях деятельности
              </Label>
              <Textarea
                id="achievements"
                rows={6}
                className="resize-none"
                placeholder="Расскажите о своих достижениях..."
              />
            </div>

            {/* English level */}
            <div className="space-y-2">
              <Label htmlFor="englishLevel" className="text-sm font-medium">
                Уровень владения английским языком <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите уровень" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a1">A1 - Начальный</SelectItem>
                  <SelectItem value="a2">A2 - Элементарный</SelectItem>
                  <SelectItem value="b1">B1 - Средний</SelectItem>
                  <SelectItem value="b2">B2 - Выше среднего</SelectItem>
                  <SelectItem value="c1">C1 - Продвинутый</SelectItem>
                  <SelectItem value="c2">C2 - Профессиональный</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Russian level */}
            <div className="space-y-2">
              <Label htmlFor="russianLevel" className="text-sm font-medium">
                Уровень владения русским языком <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите уровень" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a1">A1 - Начальный</SelectItem>
                  <SelectItem value="a2">A2 - Элементарный</SelectItem>
                  <SelectItem value="b1">B1 - Средний</SelectItem>
                  <SelectItem value="b2">B2 - Выше среднего</SelectItem>
                  <SelectItem value="c1">C1 - Продвинутый</SelectItem>
                  <SelectItem value="c2">C2 - Профессиональный</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Additional language */}
            <div className="space-y-2">
              <Label htmlFor="additionalLanguage" className="text-sm font-medium">
                Добавить язык
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spanish">Испанский</SelectItem>
                  <SelectItem value="french">Французский</SelectItem>
                  <SelectItem value="german">Немецкий</SelectItem>
                  <SelectItem value="chinese">Китайский</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit button */}
            <div className="flex justify-end pt-4">
              <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
