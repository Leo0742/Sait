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

export default function ProfilePage() {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [documentFile, setDocumentFile] = useState<File | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      setPhotoError('Формат файла должен быть jpeg, jpg или png');
      return;
    }

    const maxSize = 3 * 1024 * 1024;
    if (file.size > maxSize) {
      setPhotoError('Размер файла не должен превышать 3 МБ');
      return;
    }

    setPhotoError(null);
    setPhotoFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoClick = () => {
    document.getElementById('photo-input')?.click();
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    setPhotoFile(null);
    setPhotoError(null);
    const input = document.getElementById('photo-input') as HTMLInputElement;
    if (input) input.value = '';
  };

  const handleDocumentClick = () => {
    document.getElementById('document-input')?.click();
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentFile(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h1 className="text-3xl font-bold mb-8">Профиль</h1>

      <Tabs defaultValue="registration" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8 bg-transparent border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="registration"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm whitespace-nowrap"
          >
            Регистрационные данные
          </TabsTrigger>
          <TabsTrigger
            value="generaldata"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm whitespace-nowrap"
          >
            Общие данные
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm whitespace-nowrap"
          >
            Личные документы
          </TabsTrigger>
          <TabsTrigger
            value="contacts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm whitespace-nowrap"
          >
            Контактные данные
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E55C94] data-[state=active]:text-[#E55C94] data-[state=active]:bg-transparent pb-4 font-medium text-sm whitespace-nowrap"
          >
            Сфера деятельности
          </TabsTrigger>
        </TabsList>

        {/* Регистрационные данные */}
        <TabsContent value="registration" className="mt-8">
          <form className="space-y-6 max-w-4xl">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="bollanN200746@yandex.ru"
                disabled
                className="bg-gray-100 border-gray-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="surnameRu" className="text-sm font-medium">
                  Фамилия на русском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="surnameRu"
                  defaultValue="Болбачан"
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surnameEn" className="text-sm font-medium">
                  Фамилия на английском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="surnameEn"
                  defaultValue="Bolbachan"
                  className="border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="noSurname" />
              <Label htmlFor="noSurname" className="text-sm font-normal cursor-pointer">
                Нет фамилии
              </Label>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nameRu" className="text-sm font-medium">
                  Имя на русском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nameRu"
                  defaultValue="Леонид"
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nameEn" className="text-sm font-medium">
                  Имя на английском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nameEn"
                  defaultValue="Leonid"
                  className="border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="noName" />
              <Label htmlFor="noName" className="text-sm font-normal cursor-pointer">
                Нет имени
              </Label>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="patronymicRu" className="text-sm font-medium">
                  Отчество на русском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="patronymicRu"
                  defaultValue="Анатольевич"
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="patronymicEn" className="text-sm font-medium">
                  Отчество на английском <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="patronymicEn"
                  defaultValue="Anatolevich"
                  className="border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="noPatronymic" />
              <Label htmlFor="noPatronymic" className="text-sm font-normal cursor-pointer">
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
                defaultValue="26.04.2007"
                className="border-gray-200"
                placeholder="ДД.ММ.ГГГГ"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender" className="text-sm font-medium">
                Пол <span className="text-red-500">*</span>
              </Label>
              <Select defaultValue="male">
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
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
              <Select defaultValue="russia">
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="russia">Россия</SelectItem>
                  <SelectItem value="kazakhstan">Казахстан</SelectItem>
                  <SelectItem value="belarus">Беларусь</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="residenceCountry" className="text-sm font-medium">
                Страна фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Select defaultValue="russia">
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="russia">Россия</SelectItem>
                  <SelectItem value="kazakhstan">Казахстан</SelectItem>
                  <SelectItem value="belarus">Беларусь</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="residenceRegion" className="text-sm font-medium">
                Регион фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Select defaultValue="tatarstan">
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tatarstan">Республика Татарстан</SelectItem>
                  <SelectItem value="moscow">Москва</SelectItem>
                  <SelectItem value="spb">Санкт-Петербург</SelectItem>
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
                defaultValue="+7 911 680-58-70"
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
              <Button type="button" className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Общие данные */}
        <TabsContent value="generaldata" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Общие данные</h2>

          <form className="space-y-6 max-w-4xl">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Фотография <span className="text-red-500">*</span>
              </Label>
              <input
                id="photo-input"
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handlePhotoChange}
                className="hidden"
              />
              <div
                onClick={handlePhotoClick}
                className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:border-[#E55C94] transition-colors cursor-pointer"
              >
                {photoPreview ? (
                  <div className="relative">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="max-w-xs max-h-64 rounded-lg object-cover"
                    />
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemovePhoto();
                      }}
                      className="absolute top-2 right-2 rounded-full w-8 h-8 p-0 bg-red-500 hover:bg-red-600 text-white text-xl font-bold"
                    >
                      ×
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 mb-4 text-[#E55C94]">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <Button type="button" variant="outline" className="rounded-full border-2 border-[#E55C94] text-[#E55C94] hover:bg-[#FCF1F5] font-medium mb-4">
                      Выбрать фото
                    </Button>
                    <div className="text-xs text-gray-600 text-center space-y-1 max-w-2xl">
                      <p>Пожалуйста, загрузи фотографию, соответствующую приведенным ниже требованиям.</p>
                      <p className="font-medium">Обрати внимание! Фотография будет использоваться для аккредитационного документа (т.е. бейджа):</p>
                      <ul className="text-left inline-block mt-2 space-y-1">
                        <li>– вид анфас, без шляп или головного убора, если только они не носятся ежедневно по религиозным соображениям, без солнечных очков;</li>
                        <li>– изображение лица должно занимать не менее 70% фотографии;</li>
                        <li>– цветная фотография, сделанная на контрастном фоне, тип «для документов»;</li>
                        <li>– размер файла не должен превышать 3 МБ;</li>
                        <li>– формат файлов: jpeg, jpg или png.</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              {photoError && (
                <p className="text-sm text-red-500 mt-2">{photoError}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium">
                Город фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Input id="city" placeholder="Введите город" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Адрес фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Input id="address" placeholder="Введите адрес" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nativeLanguage" className="text-sm font-medium">
                Родной язык <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="russian">Русский</SelectItem>
                  <SelectItem value="english">Английский</SelectItem>
                  <SelectItem value="other">Другой</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredLanguage" className="text-sm font-medium">
                Язык переписки <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="russian">Русский</SelectItem>
                  <SelectItem value="english">Английский</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="generalConsent1" className="mt-1" />
                <Label htmlFor="generalConsent1" className="text-sm font-normal cursor-pointer leading-relaxed">
                  Даю согласие на{' '}
                  <a href="#" className="text-[#E55C94] underline">обработку персональных данных</a>
                  {' '}и ознакомлен(-а) с условиями{' '}
                  <a href="#" className="text-[#E55C94] underline">Политики конфиденциальности Международной платформы возможностей</a>
                  {' '}<span className="text-red-500">*</span>
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="generalConsent2" className="mt-1" />
                <Label htmlFor="generalConsent2" className="text-sm font-normal cursor-pointer leading-relaxed">
                  Даю согласие с{' '}
                  <a href="#" className="text-[#E55C94] underline">кодексом клиентских групп</a>
                  {' '}<span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Личные документы */}
        <TabsContent value="documents" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Личные документы</h2>

          <form className="space-y-6 max-w-4xl">
            <div className="space-y-2">
              <Label htmlFor="snils" className="text-sm font-medium">
                СНИЛС <span className="text-red-500">*</span>
              </Label>
              <Input id="snils" placeholder="000-000-000 00" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="docType" className="text-sm font-medium">
                Тип документа, удостоверяющего личность <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Выберите тип документа" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passport">Паспорт гражданина РФ</SelectItem>
                  <SelectItem value="foreign">Заграничный паспорт</SelectItem>
                  <SelectItem value="birth">Свидетельство о рождении</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="docSeries" className="text-sm font-medium">
                Серия документа
              </Label>
              <Input id="docSeries" placeholder="0000" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="docNumber" className="text-sm font-medium">
                Номер документа <span className="text-red-500">*</span>
              </Label>
              <Input id="docNumber" placeholder="000000" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueDate" className="text-sm font-medium">
                Дата выдачи <span className="text-red-500">*</span>
              </Label>
              <Input id="issueDate" type="text" placeholder="ДД.ММ.ГГГГ" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthPlace" className="text-sm font-medium">
                Место рождения <span className="text-red-500">*</span>
              </Label>
              <Input id="birthPlace" placeholder="Введите место рождения" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Скан документа, удостоверяющего личность <span className="text-red-500">*</span>
              </Label>
              <input
                id="document-input"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleDocumentChange}
                className="hidden"
              />
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  onClick={handleDocumentClick}
                  variant="outline"
                  className="rounded-full border-2 border-[#E55C94] text-[#E55C94] hover:bg-[#FCF1F5] font-medium px-6"
                >
                  Выбрать файл
                </Button>
                {documentFile && (
                  <span className="text-sm text-gray-600">{documentFile.name}</span>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="secondCitizenship" />
              <Label htmlFor="secondCitizenship" className="text-sm font-normal cursor-pointer">
                Есть второе гражданство, указать данные
              </Label>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Контактные данные */}
        <TabsContent value="contacts" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Контактные данные</h2>

          <form className="space-y-6 max-w-4xl">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="maxProfile" className="text-sm font-medium">
                  Ссылка на профиль в МАХ <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="maxProfile"
                  placeholder="https://example.com"
                  className="border-gray-200"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="noMax" />
                  <Label htmlFor="noMax" className="text-sm font-normal cursor-pointer">
                    Нет социальной сети <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vkProfile" className="text-sm font-medium">
                  Ссылка на профиль в Вконтакте <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="vkProfile"
                  placeholder="https://example.com"
                  className="border-gray-200"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="noVk" />
                  <Label htmlFor="noVk" className="text-sm font-normal cursor-pointer">
                    Нет социальной сети <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tgProfile" className="text-sm font-medium">
                  Ссылка на них в Telegram <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="tgProfile"
                  placeholder="https://example.com"
                  className="border-gray-200"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="noTg" />
                  <Label htmlFor="noTg" className="text-sm font-normal cursor-pointer">
                    Нет социальной сети <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="igProfile" className="text-sm font-medium">
                  Ссылка на профиль Instagram <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="igProfile"
                  placeholder="https://example.com"
                  className="border-gray-200"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="noIg" />
                  <Label htmlFor="noIg" className="text-sm font-normal cursor-pointer">
                    Нет социальной сети <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fbProfile" className="text-sm font-medium">
                  Ссылка на профиль в Facebook <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fbProfile"
                  placeholder="https://example.com"
                  className="border-gray-200"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="noFb" />
                  <Label htmlFor="noFb" className="text-sm font-normal cursor-pointer">
                    Нет социальной сети <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="xProfile" className="text-sm font-medium">
                  Ссылка на профиль в X (Twitter) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="xProfile"
                  placeholder="https://example.com"
                  className="border-gray-200"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="noX" />
                  <Label htmlFor="noX" className="text-sm font-normal cursor-pointer">
                    Нет социальной сети <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>

        {/* Сфера деятельности */}
        <TabsContent value="activity" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Сфера деятельности</h2>

          <form className="space-y-6 max-w-4xl">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Статус <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="status1" />
                  <Label htmlFor="status1" className="text-sm font-normal cursor-pointer">
                    Школьник
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status2" />
                  <Label htmlFor="status2" className="text-sm font-normal cursor-pointer">
                    Студент колледжа
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status3" />
                  <Label htmlFor="status3" className="text-sm font-normal cursor-pointer">
                    Студент ВУЗа
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status4" />
                  <Label htmlFor="status4" className="text-sm font-normal cursor-pointer">
                    Работаю
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="status5" />
                  <Label htmlFor="status5" className="text-sm font-normal cursor-pointer">
                    Не работаю
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="studyRussia" />
              <Label htmlFor="studyRussia" className="text-sm font-normal cursor-pointer">
                Учусь в России
              </Label>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Направление деятельности <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity1" className="mt-1" />
                  <Label htmlFor="activity1" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Наука и образование (система обучения и воспитания, педагогика, фундаментальная и прикладная исследования, академическая деятельность)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity2" className="mt-1" />
                  <Label htmlFor="activity2" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Государственное управление (государственная и муниципальная служба, парламентарий, молодежная политика, силовые структуры, международные отношения, внешняя политика и т.д.)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity3" className="mt-1" />
                  <Label htmlFor="activity3" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Медиа (традиционные и цифровые СМИ, блогинг, маркетинг, реклама, PR и т.д.)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity4" className="mt-1" />
                  <Label htmlFor="activity4" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Креативные индустрии, культура и творчество (дизайн, художества, музыка, кино, мода, развлечения, event-индустрия и т.д.)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity5" className="mt-1" />
                  <Label htmlFor="activity5" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Предпринимательство (коммерция, стартапы, большой и малый бизнес)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity6" className="mt-1" />
                  <Label htmlFor="activity6" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Спорт и здоровье (спорт, здравоохранение, медицина, косметология, нутрициология, фармацевтика)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity7" className="mt-1" />
                  <Label htmlFor="activity7" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Сельское хозяйство и АПК (агробизнес, развитие сельских территорий, переработка/заготовка и плодовая промышленность и т.д.)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity8" className="mt-1" />
                  <Label htmlFor="activity8" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Цифровизация и IT (программирование, кибербезопасность, цифровая трансформация отраслей и т.д.)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity9" className="mt-1" />
                  <Label htmlFor="activity9" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Туризм и индустрия (гостеприимства (туристический бизнес, гостиничное и ресторанное дело, экскурсионная деятельность, развитие туристской инфраструктуры)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity10" className="mt-1" />
                  <Label htmlFor="activity10" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Гражданская активность (деятельность НКО, социальные проекты, волонтерство, благотворительность, военно-патриотическая деятельность и т.д.)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity11" className="mt-1" />
                  <Label htmlFor="activity11" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Строительство и архитектура (градостроительство, проектирование, строительная индустрия)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity12" className="mt-1" />
                  <Label htmlFor="activity12" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Экономика и финансы (инвестиции, банковское дело, страхование, биржевая торговля, бухгалтерия)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity13" className="mt-1" />
                  <Label htmlFor="activity13" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Производство, технологии и энергетика (промышленность, машиностроение, химическая, нефтегазовая отрасль, транспорт, логистика)
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="activity14" className="mt-1" />
                  <Label htmlFor="activity14" className="text-sm font-normal cursor-pointer leading-relaxed">
                    Другое
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Подробнее, своими достижениями и опытом реализации проектов в выбранном направлении деятельности
              </Label>
              <Textarea
                className="min-h-[150px] border-gray-200"
                placeholder="Расскажите подробнее..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="englishLevel" className="text-sm font-medium">
                Уровень владения английским языком <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200">
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

            <div className="space-y-2">
              <Label htmlFor="russianLevel" className="text-sm font-medium">
                Уровень владения русским языком <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200">
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

            <div className="space-y-2">
              <Label htmlFor="additionalLanguage" className="text-sm font-medium">
                Добавить язык
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chinese">Китайский</SelectItem>
                  <SelectItem value="spanish">Испанский</SelectItem>
                  <SelectItem value="french">Французский</SelectItem>
                  <SelectItem value="german">Немецкий</SelectItem>
                  <SelectItem value="arabic">Арабский</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-12 py-6 text-base font-semibold">
                Сохранить
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
