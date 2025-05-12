"use client";
import React, { useEffect } from 'react';
import { Award, BookOpen, Briefcase, Users, UserCheck, Code } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AchievementsPage() {

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

  const achievements = [
    { 
      icon: <BookOpen size={32} className="text-white" />, 
      count: "1,200+", 
      title: "Sinh viên tốt nghiệp",
      bgColor: "#2e5288"
    },
    { 
      icon: <Award size={32} className="text-white" />, 
      count: "50+", 
      title: "Sinh viên đạt học bổng, giải thưởng cấp quốc gia",
      bgColor: "#a61d37"
    },
    { 
      icon: <Code size={32} className="text-white" />, 
      count: "20+", 
      title: "Đề tài nghiên cứu – chuyển giao công nghệ",
      bgColor: "#2e5288"
    },
    { 
      icon: <Briefcase size={32} className="text-white" />, 
      count: "15+", 
      title: "Doanh nghiệp đồng hành và tuyển dụng trực tiếp",
      bgColor: "#a61d37"
    }
  ];

  const alumni = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc Kỹ thuật tại Tech Solutions",
      avatar: "/api/placeholder/80/80",
      quote: "Kiến thức và kỹ năng thực chiến từ chương trình đào tạo giúp tôi tự tin bước vào thị trường công nghệ và phát triển sự nghiệp."
    },
    {
      name: "Trần Thị B",
      position: "Founder & CEO tại IoT Innovations",
      avatar: "/api/placeholder/80/80",
      quote: "Chương trình học đã trang bị cho tôi không chỉ kiến thức chuyên môn mà còn tư duy khởi nghiệp và khả năng giải quyết vấn đề."
    },
    {
      name: "Lê Minh C",
      position: "Lead Engineer tại Global Tech",
      avatar: "/api/placeholder/80/80",
      quote: "Những dự án thực tế trong chương trình học là nền tảng vững chắc giúp tôi thành công trong công việc hiện tại."
    }
  ];

  const projects = [
    {
      title: "Smart Home System",
      description: "Hệ thống nhà thông minh ứng dụng IoT và AI, kiểm soát thiết bị thông qua điện thoại và giọng nói.",
      image: "/api/placeholder/400/220"
    },
    {
      title: "TeleHealth Platform",
      description: "Nền tảng chăm sóc sức khỏe từ xa với khả năng kết nối bệnh nhân và bác sĩ thông qua video call độ phân giải cao.",
      image: "/api/placeholder/400/220"
    },
    {
      title: "Drone Delivery Network",
      description: "Hệ thống giao hàng tự động sử dụng drone với thuật toán tối ưu đường đi và tiết kiệm năng lượng.",
      image: "/api/placeholder/400/220"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" id='ThanhTuuVaDauAn'>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#a61d37] to-[#d32f2f] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Thành Tựu & Dấu Ấn</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-center">20 Năm – 1 Hành Trình – Vạn Niềm Tự Hào</h2>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform">
              <div className={`h-3 bg-[${item.bgColor}]`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full bg-[${item.bgColor}] flex items-center justify-center mb-4 mx-auto`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">{item.count}</h3>
                <p className="text-center text-gray-600">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Success Stories */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-10">
            <UserCheck size={32} className="text-[#2e5288] mr-3" />
            <h2 className="text-3xl font-semibold text-[#2e5288]">Câu chuyện thành công</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {alumni.map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img src={person.avatar} alt={person.name} className="w-16 h-16 rounded-full object-cover border-4 border-[#2e5288]" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-[#2e5288]">{person.name}</h3>
                    <p className="text-sm text-gray-600">{person.position}</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 border-l-4 pl-4 border-[#a61d37]">
                  "{person.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notable Projects */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-10">
          <Code size={32} className="text-[#a61d37] mr-3" />
          <h2 className="text-3xl font-semibold text-[#a61d37]">Dự án tiêu biểu</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#2e5288]">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4">
                  <button className="bg-[#a61d37] hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm transition-colors">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#2e5288] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tham gia cùng chúng tôi</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Hãy trở thành một phần của cộng đồng Điện tử Viễn thông và cùng nhau kiến tạo tương lai công nghệ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#2e5288] font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Tìm hiểu chương trình
            </button>
            <button className="bg-[#a61d37] text-white font-medium py-3 px-8 rounded-full hover:bg-red-800 transition-colors">
              Đăng ký tư vấn
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Chuyên Ngành Điện Tử Viễn Thông. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  );
}