'use client';

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

export default function PassportPage() {
  return (
    <div className="bg-white rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-8">Профиль</h1>

      {/* Tabs */}
      <Tabs defaultValue="documents" className="w-full">
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

        <TabsContent value="documents" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Личные документы</h2>

          <form className="space-y-6">
            {/* СНИЛС */}
            <div className="space-y-2">
              <Label htmlFor="snils" className="text-sm font-medium">
                СНИЛС <span className="text-red-500">*</span>
              </Label>
              <Input id="snils" placeholder="000-000-000 00" />
            </div>

            {/* Document type */}
            <div className="space-y-2">
              <Label htmlFor="docType" className="text-sm font-medium">
                Тип документа, удостоверяющего личность <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип документа" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passport">Паспорт гражданина РФ</SelectItem>
                  <SelectItem value="foreign">Заграничный паспорт</SelectItem>
                  <SelectItem value="birth">Свидетельство о рождении</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Document series */}
            <div className="space-y-2">
              <Label htmlFor="docSeries" className="text-sm font-medium">
                Серия документа
              </Label>
              <Input id="docSeries" placeholder="0000" />
            </div>

            {/* Document number */}
            <div className="space-y-2">
              <Label htmlFor="docNumber" className="text-sm font-medium">
                Номер документа <span className="text-red-500">*</span>
              </Label>
              <Input id="docNumber" placeholder="000000" />
            </div>

            {/* Issue date */}
            <div className="space-y-2">
              <Label htmlFor="issueDate" className="text-sm font-medium">
                Дата выдачи <span className="text-red-500">*</span>
              </Label>
              <Input id="issueDate" type="text" placeholder="ДД.ММ.ГГГГ" />
            </div>

            {/* Place of birth */}
            <div className="space-y-2">
              <Label htmlFor="birthPlace" className="text-sm font-medium">
                Место рождения <span className="text-red-500">*</span>
              </Label>
              <Input id="birthPlace" placeholder="Введите место рождения" />
            </div>

            {/* Document scan upload */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Скан документа, удостоверяющего личность <span className="text-red-500">*</span>
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex items-center justify-center bg-gray-50 hover:border-[#E55C94] transition-colors cursor-pointer">
                <Button type="button" variant="outline" className="rounded-full border-2 border-[#E55C94] text-[#E55C94] hover:bg-[#FCF1F5] font-medium">
                  Выбрать файл
                </Button>
              </div>
            </div>

            {/* Second citizenship checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="secondCitizenship" />
              <Label htmlFor="secondCitizenship" className="text-sm font-medium cursor-pointer">
                Есть второе гражданство, указать данные
              </Label>
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
