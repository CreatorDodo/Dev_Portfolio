// import Image from 'next/image';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Component() {
  return (
    <div className="container mx-auto p-4 space-y-8 max-w-6xl">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6">
            <h1 className="text-4xl font-bold">DateLeaf</h1>
            <h2 className="text-3xl font-bold">일정 관리 서비스</h2>
          </div>
        </div>
      </div>

      {/* Project Meta */}
      <div className="grid gap-6">
        <div className="flex flex-wrap gap-2">
          {/* <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Webapp</Badge>
          <Badge variant="secondary">Github</Badge>
          <Badge variant="secondary">AWS S3</Badge> */}
          <button type="button" className="secondary">
            React
          </button>
          <button type="button" className="secondary">
            Webapp
          </button>
          <button type="button" className="secondary">
            Github
          </button>
          <button type="button" className="secondary">
            AWS S3
          </button>
        </div>

        <div className="grid gap-2 text-sm">
          <div className="flex gap-2">
            <span className="font-semibold">진행 기간:</span>
            <span>2021.01.10 - 2021.02.28</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">팀 구성:</span>
            <span>기획자 1명, 디자이너 1명, 개발자 1명</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
    </div>
  );
}
