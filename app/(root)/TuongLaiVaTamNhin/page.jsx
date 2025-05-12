"use client";
import React, { useEffect } from 'react';
import {
  Zap,
  Globe,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Radio,
  Cpu,
  Cloud,
  MessageSquare,
  Lightbulb,
  Heart
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { usePathname } from 'next/navigation';

export default function TuongLaiVaTamNhin() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const strategicPlans = [
    {
      id: 1,
      icon: <Cpu size={40} />,
      title: 'Mở rộng chương trình đào tạo tích hợp AI – IoT – 5G',
      description: 'Phát triển các module học tập mới kết hợp giữa trí tuệ nhân tạo, Internet vạn vật và công nghệ 5G, tạo nền tảng cho sinh viên tiếp cận công nghệ tiên tiến toàn cầu.'
    },
    {
      id: 2,
      icon: <Users size={40} />,
      title: 'Tăng cường thực tập – tuyển dụng thông qua mạng lưới cựu sinh viên',
      description: 'Xây dựng cầu nối vững chắc giữa sinh viên và doanh nghiệp thông qua hệ thống cựu sinh viên ETVT, mở rộng cơ hội thực tập và việc làm sau tốt nghiệp.'
    },
    {
      id: 3,
      icon: <Cloud size={40} />,
      title: 'Xây dựng học liệu mở, số hóa toàn bộ chương trình',
      description: 'Chuyển đổi số toàn diện với hệ thống học liệu mở, sách điện tử và các khóa học trực tuyến, giúp sinh viên tiếp cận kiến thức mọi lúc mọi nơi.'
    }
  ];

  const contributionWays = [
    {
      id: 1,
      icon: <Award size={30} />,
      title: 'Học bổng "Thắp lửa ETVT"',
      description: 'Đóng góp vào quỹ học bổng hỗ trợ sinh viên tài năng và hoàn cảnh khó khăn'
    },
    {
      id: 2,
      icon: <MessageSquare size={30} />,
      title: 'Chia sẻ kinh nghiệm',
      description: 'Trở thành diễn giả, cố vấn hoặc người hướng dẫn cho các sinh viên hiện tại'
    },
    {
      id: 3,
      icon: <Lightbulb size={30} />,
      title: 'Góp ý cải tiến chương trình',
      description: 'Đề xuất cập nhật nội dung đào tạo phù hợp với xu hướng công nghệ và nhu cầu thị trường'
    }
  ];

  return (
    <div className="tuong-lai-page min-h-screen" id='TuongLaiVaTamNhin'>
      <div className="bg-[#2e5288] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url(/api/placeholder/1600/600)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#a61d37] px-6 py-2 rounded-full mb-6">
              <h5 className="m-0 font-bold">Tầm nhìn chiến lược</h5>
            </div>
            <h1 className="text-6xl font-bold mb-6">ETVT 2030</h1>
            <h2 className="text-3xl font-light mb-8">Sáng tạo – Ứng dụng – Kết nối toàn cầu</h2>
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <Zap size={40} className="mb-2 mx-auto" />
                <div>Sáng tạo</div>
              </div>
              <div className="text-center">
                <Radio size={40} className="mb-2 mx-auto" />
                <div>Ứng dụng</div>
              </div>
              <div className="text-center">
                <Globe size={40} className="mb-2 mx-auto" />
                <div>Kết nối toàn cầu</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2e5288] inline-block border-b-3 border-[#a61d37] pb-2">
            Kế hoạch 5 năm tới
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Định hướng phát triển để nâng tầm ETVT thành trung tâm đào tạo và nghiên cứu hàng đầu khu vực
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {strategicPlans.map(plan => (
            <Card key={plan.id} className="shadow-sm border-0 h-full">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="text-[#2e5288] mb-6">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-[#a61d37] mb-4">{plan.title}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-20 border-t-2 border-b-2 border-[#a61d37]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-[#2e5288] mb-6 border-l-4 border-[#a61d37] pl-4">
                Mục tiêu đến năm 2030
              </h2>
              <div className="flex items-start mb-6">
                <div className="bg-[#2e5288] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                <div>
                  <h5 className="text-lg font-semibold text-[#a61d37]">Top 5 cơ sở đào tạo ETVT Đông Nam Á</h5>
                  <p className="text-gray-600">Xây dựng vị thế hàng đầu trong khu vực ASEAN về chất lượng đào tạo và nghiên cứu</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-[#2e5288] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                <div>
                  <h5 className="text-lg font-semibold text-[#a61d37]">100% chương trình học số hóa</h5>
                  <p className="text-gray-600">Chuyển đổi số toàn diện, xây dựng nền tảng học tập hiện đại và linh hoạt</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#2e5288] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                <div>
                  <h5 className="text-lg font-semibold text-[#a61d37]">50+ đối tác doanh nghiệp toàn cầu</h5>
                  <p className="text-gray-600">Mở rộng mạng lưới hợp tác với các tập đoàn công nghệ hàng đầu thế giới</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-sm h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-[#2e5288] mb-6 text-center flex items-center justify-center">
                    <TrendingUp className="mr-2" size={24} />
                    Chỉ số phát triển quan trọng
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#a61d37]">95%</div>
                      <div className="text-gray-600 mt-2">Sinh viên có việc làm sau 3 tháng tốt nghiệp</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#a61d37]">30+</div>
                      <div className="text-gray-600 mt-2">Công trình nghiên cứu công bố quốc tế mỗi năm</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#a61d37]">20+</div>
                      <div className="text-gray-600 mt-2">Đề án hợp tác quốc tế</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#a61d37]">5+</div>
                      <div className="text-gray-600 mt-2">Phòng lab công nghệ tiên tiến</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold text-[#2e5288] mb-4 flex items-center justify-center">
            <Heart className="text-[#a61d37] mr-2" size={28} />
            Kêu gọi đồng hành
          </h2>
          <p className="text-lg text-gray-600">
            Chúng tôi mời gọi sự đóng góp từ cộng đồng cựu sinh viên, đối tác và các bên liên quan để cùng xây dựng tương lai ETVT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contributionWays.map(way => (
            <Card key={way.id} className="border border-gray-200 rounded-lg transition-transform hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2e5288]">
                  {way.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#a61d37] mb-3">{way.title}</h3>
                <p className="text-gray-600 mb-4">{way.description}</p>
                <Button className="bg-[#2e5288] hover:bg-[#25426e]">
                  Tham gia ngay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-[#2e5288] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Chung tay xây dựng tương lai ETVT</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Hãy là một phần của hành trình phát triển tiếp theo của chúng tôi
          </p>
          <Button className="bg-[#a61d37] hover:bg-[#8a1a2d] px-8 py-6 text-lg h-auto">
            <BookOpen className="mr-2" size={20} />
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </div>
  );
}