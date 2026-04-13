'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GeneralDataPage() {
  return (
    <div className="bg-white rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-8">Профиль</h1>

      {/* Tabs */}
      <Tabs defaultValue="generaldata" className="w-full">
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

        <TabsContent value="generaldata" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Общие данные</h2>

          <form className="space-y-6">
            {/* Photo upload */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Фотография <span className="text-red-500">*</span>
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:border-[#E55C94] transition-colors cursor-pointer">
                <div className="w-20 h-20 mb-4 text-[#E55C94]">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <Button type="button" variant="outline" className="rounded-full border-2 border-[#E55C94] text-[#E55C94] hover:bg-[#FCF1F5] font-medium mb-4">
                  Выбрать фото
                </Button>
                <div className="text-xs text-gray-600 text-center space-y-1">
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
              </div>
            </div>

            {/* City of residence */}
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium">
                Город фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Input id="city" placeholder="Введите город" />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Адрес фактического места проживания <span className="text-red-500">*</span>
              </Label>
              <Input id="address" placeholder="Введите адрес" />
            </div>

            {/* Native language */}
            <div className="space-y-2">
              <Label htmlFor="nativeLanguage" className="text-sm font-medium">
                Родной язык <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="russian">Русский</SelectItem>
                  <SelectItem value="english">Английский</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Preferred language */}
            <div className="space-y-2">
              <Label htmlFor="preferredLanguage" className="text-sm font-medium">
                Язык переписки <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="russian">Русский</SelectItem>
                  <SelectItem value="english">Английский</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Consent checkboxes */}
            <div className="space-y-3">
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
