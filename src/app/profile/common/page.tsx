'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
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

export default function ProfileCommonPage() {
  const [formData, setFormData] = useState({
    email: 'bolianN200746@yandex.ru',
    surnameRu: 'Болбачан',
    surnameEn: 'Bolbachan',
    nameRu: 'Леонид',
    nameEn: 'Leonid',
    patronymicRu: 'Анатольевич',
    patronymicEn: 'Anatolevich',
    birthdate: '26.04.2007',
    gender: 'male',
    citizenship: 'Россия',
    residenceCountry: 'Россия',
    residenceRegion: 'Республика Татарстан',
    phone: '+7 911 680-58-70',
    passportSeries: '',
    passportNumber: '',
    passportIssueDate: '',
    passportIssuedBy: '',
    education: '',
    jobTitle: '',
    organization: '',
    activityArea: '',
  });

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h1 className="text-3xl font-bold mb-8">Профиль</h1>

      <Tabs defaultValue="registration" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8 bg-transparent border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="registration"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm"
          >
            Регистрационные данные
          </TabsTrigger>
          <TabsTrigger
            value="common"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm"
          >
            Общие данные
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm"
          >
            Личные документы
          </TabsTrigger>
          <TabsTrigger
            value="contacts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm"
          >
            Контактные данные
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm"
          >
            Сфера деятельности
          </TabsTrigger>
        </TabsList>

        {/* Регистрационные данные */}
        <TabsContent value="registration" className="mt-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                disabled
                className="bg-gray-50 border-gray-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="surnameRu" className="text-sm font-medium">
                  Фамилия на русском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="surnameRu"
                  value={formData.surnameRu}
                  onChange={(e) => setFormData({...formData, surnameRu: e.target.value})}
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surnameEn" className="text-sm font-medium">
                  Фамилия на английском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="surnameEn"
                  value={formData.surnameEn}
                  onChange={(e) => setFormData({...formData, surnameEn: e.target.value})}
                  className="border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="noSurname" />
              <Label htmlFor="noSurname" className="text-sm font-medium cursor-pointer">
                Нет фамилии
              </Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nameRu" className="text-sm font-medium">
                  Имя на русском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nameRu"
                  value={formData.nameRu}
                  onChange={(e) => setFormData({...formData, nameRu: e.target.value})}
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nameEn" className="text-sm font-medium">
                  Имя на английском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nameEn"
                  value={formData.nameEn}
                  onChange={(e) => setFormData({...formData, nameEn: e.target.value})}
                  className="border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="noName" />
              <Label htmlFor="noName" className="text-sm font-medium cursor-pointer">
                Нет имени
              </Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patronymicRu" className="text-sm font-medium">
                  Отчество на русском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="patronymicRu"
                  value={formData.patronymicRu}
                  onChange={(e) => setFormData({...formData, patronymicRu: e.target.value})}
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="patronymicEn" className="text-sm font-medium">
                  Отчество на английском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="patronymicEn"
                  value={formData.patronymicEn}
                  onChange={(e) => setFormData({...formData, patronymicEn: e.target.value})}
                  className="border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="noPatronymic" />
              <Label htmlFor="noPatronymic" className="text-sm font-medium cursor-pointer">
                Нет отчества
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthdate" className="text-sm font-medium">
                Дата рождения <span className="text-red-500">*</span>
              </Label>
              <Input
                id="birthdate"
                type="text"
                value={formData.birthdate}
                onChange={(e) => setFormData({...formData, birthdate: e.target.value})}
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender" className="text-sm font-medium">
                Пол <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Выберите пол" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Мужской</SelectItem>
                  <SelectItem value="female">Женский</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="citizenship" className="text-sm font-medium">
                Гражданство <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.citizenship} onValueChange={(value) => setFormData({...formData, citizenship: value})}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Россия">Россия</SelectItem>
                  <SelectItem value="Казахстан">Казахстан</SelectItem>
                  <SelectItem value="Беларусь">Беларусь</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="residenceCountry" className="text-sm font-medium">
                Страна фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.residenceCountry} onValueChange={(value) => setFormData({...formData, residenceCountry: value})}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Россия">Россия</SelectItem>
                  <SelectItem value="Казахстан">Казахстан</SelectItem>
                  <SelectItem value="Беларусь">Беларусь</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="residenceRegion" className="text-sm font-medium">
                Регион фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.residenceRegion} onValueChange={(value) => setFormData({...formData, residenceRegion: value})}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Республика Татарстан">Республика Татарстан</SelectItem>
                  <SelectItem value="Москва">Москва</SelectItem>
                  <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Номер телефона <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="border-gray-200"
              />
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="consent1" defaultChecked className="mt-1" />
                <Label htmlFor="consent1" className="text-sm font-normal cursor-pointer leading-relaxed">
                  Даю согласие на{' '}
                  <a href="#" className="text-[#E55C94] underline">обработку персональных данных</a>
                  {' '}и ознакомлен(-а) с условиями{' '}
                  <a href="#" className="text-[#E55C94] underline">Политики конфиденциальности Международной платформы возможностей</a>
                  {' '}<span className="text-red-500">*</span>
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="consent2" className="mt-1" />
                <Label htmlFor="consent2" className="text-sm font-normal cursor-pointer leading-relaxed">
                  Даю{' '}
                  <a href="#" className="text-[#E55C94] underline">согласие на получение рассылок</a>
                </Label>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Общие данные */}
        <TabsContent value="common" className="mt-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Образование <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.education} onValueChange={(value) => setFormData({...formData, education: value})}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Выберите образование" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="higher">Высшее</SelectItem>
                  <SelectItem value="secondary">Среднее</SelectItem>
                  <SelectItem value="incomplete">Неполное высшее</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Место учебы/работы
              </Label>
              <Input
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})}
                placeholder="Название организации"
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Должность
              </Label>
              <Input
                value={formData.jobTitle}
                onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                placeholder="Ваша должность"
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                О себе
              </Label>
              <Textarea
                placeholder="Расскажите о себе"
                className="min-h-[120px] border-gray-200"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Личные документы */}
        <TabsContent value="documents" className="mt-8">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Серия паспорта <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={formData.passportSeries}
                  onChange={(e) => setFormData({...formData, passportSeries: e.target.value})}
                  placeholder="0000"
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Номер паспорта <span className="text-red-500">*</span>
                </Label>
                <Input
                  value={formData.passportNumber}
                  onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
                  placeholder="000000"
                  className="border-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Дата выдачи <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.passportIssueDate}
                onChange={(e) => setFormData({...formData, passportIssueDate: e.target.value})}
                placeholder="ДД.ММ.ГГГГ"
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Кем выдан <span className="text-red-500">*</span>
              </Label>
              <Textarea
                value={formData.passportIssuedBy}
                onChange={(e) => setFormData({...formData, passportIssuedBy: e.target.value})}
                placeholder="Название органа, выдавшего паспорт"
                className="min-h-[80px] border-gray-200"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Контактные данные */}
        <TabsContent value="contacts" className="mt-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Telegram
              </Label>
              <Input
                placeholder="@username"
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                VK
              </Label>
              <Input
                placeholder="https://vk.com/..."
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Дополнительный email
              </Label>
              <Input
                type="email"
                placeholder="email@example.com"
                className="border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Дополнительный телефон
              </Label>
              <Input
                type="tel"
                placeholder="+7"
                className="border-gray-200"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Сфера деятельности */}
        <TabsContent value="activity" className="mt-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Сфера деятельности <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.activityArea} onValueChange={(value) => setFormData({...formData, activityArea: value})}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Выберите сферу деятельности" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT и технологии</SelectItem>
                  <SelectItem value="education">Образование</SelectItem>
                  <SelectItem value="science">Наука</SelectItem>
                  <SelectItem value="culture">Культура и искусство</SelectItem>
                  <SelectItem value="sport">Спорт</SelectItem>
                  <SelectItem value="social">Социальная сфера</SelectItem>
                  <SelectItem value="business">Бизнес</SelectItem>
                  <SelectItem value="media">Медиа</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Навыки и компетенции
              </Label>
              <Textarea
                placeholder="Опишите ваши навыки и компетенции"
                className="min-h-[120px] border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Достижения
              </Label>
              <Textarea
                placeholder="Опишите ваши достижения"
                className="min-h-[120px] border-gray-200"
              />
            </div>

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
