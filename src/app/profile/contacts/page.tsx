'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function ContactsPage() {
  return (
    <div className="bg-white rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-8">Профиль</h1>

      {/* Tabs */}
      <Tabs defaultValue="contacts" className="w-full">
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

        <TabsContent value="contacts" className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Контактные данные</h2>

          <form className="space-y-6">
            {/* MAX Profile */}
            <div className="space-y-2">
              <Label htmlFor="maxProfile" className="text-sm font-medium">
                Ссылка на профиль в MAX <span className="text-red-500">*</span>
              </Label>
              <Input id="maxProfile" type="url" placeholder="https://example.com" />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="noMax" />
                <Label htmlFor="noMax" className="text-sm font-medium cursor-pointer">
                  Нет социальной сети <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            {/* VK Profile */}
            <div className="space-y-2">
              <Label htmlFor="vkProfile" className="text-sm font-medium">
                Ссылка на профиль в Вконтакте <span className="text-red-500">*</span>
              </Label>
              <Input id="vkProfile" type="url" placeholder="https://example.com" />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="noVk" />
                <Label htmlFor="noVk" className="text-sm font-medium cursor-pointer">
                  Нет социальной сети <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            {/* Telegram Profile */}
            <div className="space-y-2">
              <Label htmlFor="tgProfile" className="text-sm font-medium flex items-center gap-2">
                Ссылка на ник в Telegram <span className="text-red-500">*</span>
                <span className="text-gray-400 text-xs">ℹ️</span>
              </Label>
              <Input id="tgProfile" type="url" placeholder="https://example.com" />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="noTg" />
                <Label htmlFor="noTg" className="text-sm font-medium cursor-pointer">
                  Нет социальной сети <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            {/* Instagram Profile */}
            <div className="space-y-2">
              <Label htmlFor="igProfile" className="text-sm font-medium flex items-center gap-2">
                Ссылка на профиль Instagram <span className="text-red-500">*</span>
                <span className="text-gray-400 text-xs">ℹ️</span>
              </Label>
              <Input id="igProfile" type="url" placeholder="https://example.com" />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="noIg" />
                <Label htmlFor="noIg" className="text-sm font-medium cursor-pointer">
                  Нет социальной сети <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            {/* Facebook Profile */}
            <div className="space-y-2">
              <Label htmlFor="fbProfile" className="text-sm font-medium flex items-center gap-2">
                Ссылка профиля в Facebook <span className="text-red-500">*</span>
                <span className="text-gray-400 text-xs">ℹ️</span>
              </Label>
              <Input id="fbProfile" type="url" placeholder="https://example.com" />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="noFb" />
                <Label htmlFor="noFb" className="text-sm font-medium cursor-pointer">
                  Нет социальной сети <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            {/* Twitter Profile */}
            <div className="space-y-2">
              <Label htmlFor="xProfile" className="text-sm font-medium flex items-center gap-2">
                Ссылка на профиль в X (Twitter) <span className="text-red-500">*</span>
                <span className="text-gray-400 text-xs">ℹ️</span>
              </Label>
              <Input id="xProfile" type="url" placeholder="https://example.com" />
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="noX" />
                <Label htmlFor="noX" className="text-sm font-medium cursor-pointer">
                  Нет социальной сети <span className="text-red-500">*</span>
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
