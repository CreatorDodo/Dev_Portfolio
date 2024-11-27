import { Calendar, GitBranch, Database, Cpu } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/common/Tabs.tsx';
import Badge from '@/components/common/Badge.tsx';
// TODO: next.js 설정 후 도입하기.
// import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-8">
        <img src="/placeholder.svg" alt="Project Cover" className="object-cover" />
      </div>

      {/* Project Title and Tags */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Date Leaf</h1>
        <div className="flex gap-2">
          <Badge variant="outline">Flutter</Badge>
          <Badge variant="outline">Java</Badge>
          <Badge variant="outline">Spring</Badge>
        </div>
      </div>

      {/* Project Info */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">프로젝트 정보</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="font-semibold">기술스택</div>
            <div className="text-muted-foreground">Flutter, Java, Spring</div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">진행 기간</div>
            <div className="text-muted-foreground">2021/01/21 - 2021/05/08</div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">팀 구성</div>
            <div className="text-muted-foreground">Frontend 2명, Backend 2명, 디자이너 2명, 기획자 1명</div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">프로젝트 소개</div>
            <div className="text-muted-foreground">일정관리 플랫폼</div>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">관련 링크</h2>
        <div className="grid gap-2">
          <a href="#repository" className="text-blue-500 hover:underline">
            GitHub Repository
          </a>
          <a href="#demo" className="text-blue-500 hover:underline">
            Project Demo
          </a>
          <a href="#documentation" className="text-blue-500 hover:underline">
            Documentation
          </a>
        </div>
      </div>

      {/* Screenshots */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">스크린샷</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="relative aspect-[9/16] rounded-lg overflow-hidden border">
            <img src="/placeholder.svg" alt="Login screen" className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] rounded-lg overflow-hidden border">
            {/* <img src="/placeholder.svg" alt="Chat list" fill className="object-cover" /> */}
            <img src="/placeholder.svg" alt="Chat list" className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] rounded-lg overflow-hidden border">
            <img src="/placeholder.svg" alt="Chat detail" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <Tabs defaultValue="architecture">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="architecture">
            <Cpu className="w-4 h-4 mr-2" />
            시스템 구조
          </TabsTrigger>
          <TabsTrigger value="database">
            <Database className="w-4 h-4 mr-2" />
            DB 설계
          </TabsTrigger>
          <TabsTrigger value="git">
            <GitBranch className="w-4 h-4 mr-2" />
            Git 전략
          </TabsTrigger>
          <TabsTrigger value="timeline">
            <Calendar className="w-4 h-4 mr-2" />
            타임라인
          </TabsTrigger>
        </TabsList>
        <TabsContent value="architecture" className="mt-6">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">시스템 아키텍처</h2>
            <div className="grid gap-4">
              <h3 className="font-semibold">Frontend (Flutter)</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provider를 활용한 상태관리</li>
                <li>MVVM 패턴 적용</li>
                <li>백엔드 API 연동 로직 구현</li>
              </ul>

              <h3 className="font-semibold mt-4">Backend (Spring)</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Spring Boot 기반 REST API</li>
                <li>JPA를 이용한 데이터 접근 계층</li>
                <li>JWT 기반 인증</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="database" className="mt-6">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">데이터베이스 설계</h2>
            <img src="/placeholder.svg" alt="Database Schema" width={800} height={400} className="w-full" />
          </div>
        </TabsContent>
        <TabsContent value="git" className="mt-6">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Git 브랜치 전략</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>master/develop/feature 브랜치 전략 사용</li>
              <li>Pull Request와 Code Review 프로세스 적용</li>
              <li>GitHub Actions를 통한 CI/CD 구축</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="timeline" className="mt-6">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">프로젝트 타임라인</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-24 font-semibold">1월</div>
                <div className="flex-1">프로젝트 기획 및 설계</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 font-semibold">2-3월</div>
                <div className="flex-1">핵심 기능 개발</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 font-semibold">4월</div>
                <div className="flex-1">테스트 및 버그 수정</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 font-semibold">5월</div>
                <div className="flex-1">출시 및 유지보수</div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Key Features */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">주요 기능</h2>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h3 className="font-semibold">채팅 시스템</h3>
            <p className="text-muted-foreground">실시간 채팅 및 알림 기능</p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold">커뮤니티</h3>
            <p className="text-muted-foreground">게시글 작성 및 댓글 기능</p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold">프로필</h3>
            <p className="text-muted-foreground">사용자 프로필 관리 및 설정</p>
          </div>
        </div>
      </div>

      {/* Lessons Learned */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">배운 점</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Flutter 상태관리 패턴의 실제 적용 경험</li>
          <li>Git 협업 워크플로우 숙달</li>
          <li>실시간 데이터 처리 아키텍처 설계</li>
          <li>사용자 피드백 기반의 개선 프로세스</li>
        </ul>
      </div>
    </div>
  );
}
