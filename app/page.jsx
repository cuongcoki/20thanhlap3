import React from 'react';
import { ChevronRight, BookOpen, Award, Clock, Users } from 'lucide-react';

export default function IntroductionPage() {
  const timelineEvents = [
    { year: 2004, description: "Thành lập chuyên ngành Điện tử Viễn thông" },
    { year: 2007, description: "Lứa sinh viên đầu tiên tốt nghiệp" },
    { year: "2010–2020", description: "Đổi mới chương trình đào tạo, liên kết doanh nghiệp" },
    { year: 2022, description: "Đưa học phần thực chiến vào chương trình chính khóa" },
    { year: 2024, description: "Gắn kết mạnh mẽ cộng đồng CSV-ĐTVT và sinh viên đang học" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2e5288] to-[#3a6db5] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Chuyên Ngành Điện Tử Viễn Thông</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-center">Lịch sử – Giá trị – Định hướng</h2>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <Clock size={32} className="text-[#2e5288] mr-3" />
          <h2 className="text-3xl font-semibold text-[#2e5288]">Lịch sử hình thành</h2>
        </div>

        <div className="relative border-l-4 border-[#2e5288] pl-6 ml-6 space-y-10">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-[#a61d37] border-4 border-[#2e5288]"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="bg-[#2e5288] text-white px-4 py-1 rounded-full inline-block mb-3">
                  {event.year}
                </span>
                <p className="text-lg text-gray-800">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#2e5288] rounded-full flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-[#2e5288]">Tầm nhìn</h3>
              </div>
              <p className="text-gray-700 text-lg italic">
                "Trở thành chuyên ngành dẫn đầu trong đào tạo kỹ sư Viễn thông ứng dụng, thích ứng nhanh với xu thế công nghệ và thị trường lao động."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#a61d37] rounded-full flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-[#a61d37]">Sứ mệnh</h3>
              </div>
              <p className="text-gray-700 text-lg italic">
                "Đào tạo kỹ sư có tư duy hệ thống, kỹ năng ứng dụng thực tế, và đạo đức nghề nghiệp vững vàng."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#2e5288]">Khám phá thêm về chuyên ngành Điện tử Viễn thông</h2>
        <button className="bg-[#a61d37] hover:bg-red-800 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors">
          Tìm hiểu thêm
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>

    </div>
  );
}