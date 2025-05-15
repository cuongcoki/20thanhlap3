"use client";

import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Video, UserPlus, Award, Users, Music, Mic } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AnniversaryEventPage() {

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


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    company: '',
    graduationYear: '',
    attendance: 'yes',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Đăng ký tham dự thành công!');
  };

  const eventSchedule = [
    {
      time: "08:30 - 09:00",
      title: "Đón tiếp đại biểu và cựu sinh viên",
      description: "Check-in, giao lưu tự do và trưng bày kỷ vật"
    },
    {
      time: "09:00 - 09:30",
      title: "Khai mạc & Phát biểu",
      description: "Ban lãnh đạo Nhà trường, Khoa và đại diện doanh nghiệp"
    },
    {
      time: "09:30 - 10:00",
      title: "Phóng sự 20 năm",
      description: "Hành trình phát triển của chuyên ngành Điện tử Viễn thông"
    },
    {
      time: "10:00 - 11:30",
      title: "Tọa đàm \"ETVT – Kết nối doanh nghiệp & thế hệ\"",
      description: "Chia sẻ từ các cựu sinh viên thành công và đại diện doanh nghiệp"
    },
    {
      time: "11:30 - 12:00",
      title: "Vinh danh cựu sinh viên tiêu biểu",
      description: "Trao bằng khen và kỷ niệm chương cho các cựu sinh viên có thành tích xuất sắc"
    },
    {
      time: "12:00 - 13:30",
      title: "Nghỉ trưa & Giao lưu",
      description: "Tiệc trưa nhẹ và kết nối giữa các thế hệ sinh viên"
    },
    {
      time: "13:30 - 15:30",
      title: "Gala giao lưu – văn nghệ",
      description: "Các tiết mục văn nghệ đặc sắc từ sinh viên và cựu sinh viên các thế hệ"
    },
    {
      time: "15:30 - 16:00",
      title: "Bế mạc",
      description: "Tổng kết chương trình và chụp ảnh lưu niệm"
    }
  ];

  const speakers = [
    {
      name: "TS. Nguyễn Văn Sáng",
      position: "Trưởng Khoa Điện tử - Viễn thông",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Nhật Mai Sơn",
      position: "CEO Công ty Viễn thông ABC",
      image: "/api/placeholder/200/200"
    },
    {
      name: "ThS. Phạm Thị C",
      position: "Giám đốc đào tạo Tập đoàn XYZ",
      image: "/api/placeholder/200/200"
    },
    {
      name: "KS. Lê Văn D",
      position: "Cựu sinh viên tiêu biểu khóa 2007",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" id='SuKienKyNiem'>
      {/* Hero Section */}
      <div 
        className="bg-cover bg-center relative" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(46, 82, 136, 0.85), rgba(166, 29, 55, 0.85)), url('/api/placeholder/1400/600')`,
          height: '500px'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">LỄ KỶ NIỆM 20 NĂM</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white">GẶP GỠ VÀ TRUYỀN CẢM HỨNG</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <div className="flex items-center">
                <Calendar size={24} className="mr-2" />
                <span className="text-lg">Ngày 28/3/2024</span>
              </div>
              <div className="flex items-center">
                <Clock size={24} className="mr-2" />
                <span className="text-lg">08:30 - 16:00</span>
              </div>
              <div className="flex items-center">
                <MapPin size={24} className="mr-2" />
                <span className="text-lg">Hội trường lớn – Đại học Kỹ thuật Công nghiệp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2e5288]">24</div>
              <div className="text-gray-600">Ngày</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2e5288]">12</div>
              <div className="text-gray-600">Giờ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2e5288]">45</div>
              <div className="text-gray-600">Phút</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2e5288]">30</div>
              <div className="text-gray-600">Giây</div>
            </div>
            <button className="bg-[#a61d37] text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>

      {/* Event Schedule */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2e5288] mb-2">Chương trình dự kiến</h2>
          <p className="text-gray-600">Chương trình có thể thay đổi, vui lòng theo dõi cập nhật mới nhất</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {eventSchedule.map((item, index) => (
            <div key={index} className="flex mb-6">
              <div className="mr-4 flex-shrink-0">
                <div className="w-20 h-20 bg-[#2e5288] rounded-full flex items-center justify-center text-white">
                  {item.time.split(' - ')[0]}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex-grow relative">
                <div className="absolute top-6 left-0 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white"></div>
                <h3 className="text-xl font-semibold text-[#a61d37] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speakers */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2e5288] mb-2">Diễn giả & Khách mời</h2>
            <p className="text-gray-600">Những chuyên gia và cựu sinh viên tiêu biểu sẽ đồng hành cùng chúng ta</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center">
                <div className="h-48 overflow-hidden">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2e5288] mb-1">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2e5288] mb-2">Đăng ký tham dự</h2>
            <p className="text-gray-600">Vui lòng hoàn thành mẫu đăng ký bên dưới để tham gia sự kiện</p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="fullName">Họ và tên <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5288]" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5288]" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Số điện thoại <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5288]" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="graduationYear">Năm tốt nghiệp (nếu có)</label>
                    <input 
                      type="text" 
                      id="graduationYear" 
                      name="graduationYear" 
                      value={formData.graduationYear} 
                      onChange={handleInputChange} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5288]" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="position">Chức vụ hiện tại</label>
                    <input 
                      type="text" 
                      id="position" 
                      name="position" 
                      value={formData.position} 
                      onChange={handleInputChange} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5288]" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="company">Công ty/Tổ chức</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleInputChange} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e5288]" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Bạn có thể tham dự sự kiện? <span className="text-red-500">*</span></label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="yes" 
                        checked={formData.attendance === 'yes'} 
                        onChange={handleInputChange} 
                        className="mr-2 text-[#2e5288]" 
                      />
                      <span>Có, tôi sẽ tham dự</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="no" 
                        checked={formData.attendance === 'no'} 
                        onChange={handleInputChange} 
                        className="mr-2 text-[#2e5288]" 
                      />
                      <span>Không, tôi không thể tham dự</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <button type="submit" className="bg-[#a61d37] text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors flex items-center">
                    <UserPlus size={20} className="mr-2" />
                    Đăng ký tham dự
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Livestream Section */}
      <div className="bg-[#2e5288] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Không thể tham dự trực tiếp?</h2>
          <p className="text-xl mb-8">Theo dõi sự kiện qua livestream của chúng tôi</p>
          
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center h-96 bg-gray-800">
              <div className="text-center">
                <Video size={64} className="mx-auto mb-4 text-gray-600" />
                <p className="text-gray-400">Livestream sẽ bắt đầu vào ngày 28/03/2024</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://youtube.com/@dtvt" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors flex items-center">
              <Video size={20} className="mr-2" />
              YouTube
            </a>
            <a href="https://facebook.com/dtvt" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center">
              <Video size={20} className="mr-2" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2e5288] mb-2">Điểm nhấn sự kiện</h2>
          <p className="text-gray-600">Những trải nghiệm đặc biệt đang chờ đón bạn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#2e5288] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2e5288] mb-3">Gặp gỡ & Kết nối</h3>
            <p className="text-gray-600">Gặp lại bạn bè, thầy cô và kết nối với cộng đồng cựu sinh viên ĐTVT các thế hệ</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#a61d37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#a61d37] mb-3">Tọa đàm chuyên môn</h3>
            <p className="text-gray-600">Tham gia tọa đàm với các chuyên gia hàng đầu về xu hướng công nghệ và cơ hội nghề nghiệp</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#2e5288] rounded-full flex items-center justify-center mx-auto mb-4">
              <Music size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2e5288] mb-3">Gala văn nghệ</h3>
            <p className="text-gray-600">Thưởng thức các tiết mục văn nghệ đặc sắc từ sinh viên và cựu sinh viên các thế hệ</p>
          </div>
        </div>
      </div>

     
    </div>
  );
}