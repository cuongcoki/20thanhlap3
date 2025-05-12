"use client";

import React, { useEffect, useState } from 'react';
import { Heart, Search, Book, Link, MessageCircle, Image, Video, User, Calendar, Send, Users, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AppreciationPage() {

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

  const [activeTab, setActiveTab] = useState('guestbook');
  const [searchYear, setSearchYear] = useState('');
  const [searchClass, setSearchClass] = useState('');
  
  const yearOptions = ['2004-2007', '2008-2011', '2012-2015', '2016-2019', '2020-2023', '2024'];
  const classOptions = ['ĐTVT-K1', 'ĐTVT-K2', 'ĐTVT-K3', 'ĐTVT-K4', 'ĐTVT-K5', 'ĐTVT-K6'];
  
  const wishes = [
    {
      id: 1,
      name: "Nguyễn Văn An",
      role: "Cựu sinh viên khóa 2007",
      content: "Chúc mừng 20 năm thành lập chuyên ngành ĐTVT! Cảm ơn vì đã trang bị những kiến thức và kỹ năng quý giá để tôi có thể thành công trong sự nghiệp.",
      image: "/api/placeholder/120/120",
      type: "text"
    },
    {
      id: 2,
      name: "TS. Trần Minh Hà",
      role: "Giảng viên",
      content: "Tự hào được đồng hành cùng chuyên ngành suốt 15 năm qua. Chúc chuyên ngành tiếp tục phát triển mạnh mẽ!",
      image: "/api/placeholder/120/120",
      type: "video",
      videoThumb: "/api/placeholder/320/180"
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      role: "Cựu sinh viên khóa 2015",
      content: "Những năm tháng học tập tại chuyên ngành ĐTVT là kỷ niệm đáng nhớ nhất trong đời sinh viên của tôi. Chúc mừng sinh nhật 20 tuổi!",
      image: "/api/placeholder/120/120",
      type: "image",
      imageUrl: "/api/placeholder/320/180"
    }
  ];

  const alumni = [
    {
      id: 1,
      name: "Nguyễn Văn Bình",
      year: "2007-2011",
      class: "ĐTVT-K1",
      position: "Senior Engineer tại Viettel",
      avatar: "/api/placeholder/80/80",
      contact: "binhnguyenvan@email.com"
    },
    {
      id: 2,
      name: "Phạm Thị Lan",
      year: "2012-2016",
      class: "ĐTVT-K3",
      position: "Product Manager tại FPT",
      avatar: "/api/placeholder/80/80",
      contact: "lanpham@email.com"
    },
    {
      id: 3,
      name: "Trần Minh Đức",
      year: "2016-2020",
      class: "ĐTVT-K4",
      position: "Founder tại TechSolutions",
      avatar: "/api/placeholder/80/80",
      contact: "ductran@email.com"
    }
  ];

  const communityLinks = [
    {
      title: "Website Cựu Sinh Viên ĐTVT",
      url: "https://csvdtvt.edu.vn",
      icon: <Link size={20} />,
      description: "Cổng thông tin chính thức của cộng đồng CSV-ĐTVT"
    },
    {
      title: "Fanpage Chuyên Ngành ĐTVT",
      url: "https://facebook.com/dtvt",
      icon: <MessageCircle size={20} />,
      description: "Cập nhật tin tức và sự kiện mới nhất của chuyên ngành"
    },
    {
      title: "Nhóm Kết Nối CSV-ĐTVT",
      url: "https://facebook.com/groups/csvdtvt",
      icon: <Users size={20} />,
      description: "Diễn đàn trao đổi, chia sẻ cơ hội việc làm và học tập"
    },
    {
      title: "Kênh YouTube ĐTVT",
      url: "https://youtube.com/@dtvt",
      icon: <Video size={20} />,
      description: "Các bài giảng, hội thảo và sự kiện của chuyên ngành"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" id='TriAnVaKetNoi'>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2e5288] to-[#4a78c3] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Tri Ân & Kết Nối</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-center">Ký Ức – Gắn Kết – Lan Tỏa</h2>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`py-4 px-6 font-medium text-lg border-b-4 transition-colors whitespace-nowrap ${activeTab === 'guestbook' ? 'border-[#a61d37] text-[#a61d37]' : 'border-transparent text-gray-600 hover:text-[#2e5288]'}`}
              onClick={() => setActiveTab('guestbook')}
            >
              <Book size={20} className="inline mr-2" />
              Sổ vàng trực tuyến
            </button>
            <button 
              className={`py-4 px-6 font-medium text-lg border-b-4 transition-colors whitespace-nowrap ${activeTab === 'wisheslibrary' ? 'border-[#a61d37] text-[#a61d37]' : 'border-transparent text-gray-600 hover:text-[#2e5288]'}`}
              onClick={() => setActiveTab('wisheslibrary')}
            >
              <Heart size={20} className="inline mr-2" />
              Thư viện lời chúc
            </button>
            <button 
              className={`py-4 px-6 font-medium text-lg border-b-4 transition-colors whitespace-nowrap ${activeTab === 'findfriends' ? 'border-[#a61d37] text-[#a61d37]' : 'border-transparent text-gray-600 hover:text-[#2e5288]'}`}
              onClick={() => setActiveTab('findfriends')}
            >
              <Search size={20} className="inline mr-2" />
              Tìm bạn cũ
            </button>
            <button 
              className={`py-4 px-6 font-medium text-lg border-b-4 transition-colors whitespace-nowrap ${activeTab === 'community' ? 'border-[#a61d37] text-[#a61d37]' : 'border-transparent text-gray-600 hover:text-[#2e5288]'}`}
              onClick={() => setActiveTab('community')}
            >
              <Link size={20} className="inline mr-2" />
              Kết nối cộng đồng
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Based on Active Tab */}
      <div className="container mx-auto px-4 py-8">
        {/* Sổ vàng trực tuyến */}
        {activeTab === 'guestbook' && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-[#2e5288] mb-6">Lưu lại kỷ niệm của bạn</h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Họ và tên</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <span className="bg-gray-100 p-3 border-r border-gray-300">
                        <User size={20} className="text-gray-500" />
                      </span>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-3 outline-none" 
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="role">Vai trò</label>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <span className="bg-gray-100 p-3 border-r border-gray-300">
                        <User size={20} className="text-gray-500" />
                      </span>
                      <input 
                        type="text" 
                        id="role" 
                        className="w-full p-3 outline-none" 
                        placeholder="VD: Cựu sinh viên khóa 2015"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">Lời nhắn</label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none" 
                    rows="4" 
                    placeholder="Chia sẻ kỷ niệm, cảm xúc, lời chúc của bạn..."
                  ></textarea>
                </div>
                
                <div className="flex flex-wrap mb-6">
                  <button className="flex items-center text-[#2e5288] mr-4 mb-2">
                    <Image size={20} className="mr-1" />
                    Thêm ảnh
                  </button>
                  <button className="flex items-center text-[#2e5288] mr-4 mb-2">
                    <Video size={20} className="mr-1" />
                    Thêm video
                  </button>
                </div>
                
                <button className="bg-[#a61d37] text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors flex items-center">
                  <Send size={18} className="mr-2" />
                  Gửi lời chúc
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#a61d37] mb-6">Hướng dẫn</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="bg-[#2e5288] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <p>Điền đầy đủ thông tin cá nhân.</p>
                  </li>
                  <li className="flex">
                    <span className="bg-[#2e5288] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <p>Viết lời chúc hoặc chia sẻ kỷ niệm của bạn.</p>
                  </li>
                  <li className="flex">
                    <span className="bg-[#2e5288] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <p>Tùy chọn: Thêm hình ảnh hoặc video (tối đa 1 file, kích thước không quá 10MB).</p>
                  </li>
                  <li className="flex">
                    <span className="bg-[#2e5288] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <p>Nhấn nút "Gửi lời chúc" để hoàn tất.</p>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-md">
                  <p className="font-medium">Lưu ý:</p>
                  <p className="text-sm">Tất cả nội dung sẽ được kiểm duyệt trước khi hiển thị công khai.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Thư viện lời chúc */}
        {activeTab === 'wisheslibrary' && (
          <div>
            <h3 className="text-2xl font-semibold text-[#2e5288] mb-6">Thư viện lời chúc</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishes.map(wish => (
                <div key={wish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img src={wish.image} alt={wish.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#2e5288]" />
                      <div className="ml-3">
                        <h4 className="font-medium text-lg">{wish.name}</h4>
                        <p className="text-sm text-gray-600">{wish.role}</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-4">
                      "{wish.content}"
                    </blockquote>
                    
                    {wish.type === 'video' && (
                      <div className="relative rounded-lg overflow-hidden mb-3">
                        <img src={wish.videoThumb} alt="Video thumbnail" className="w-full" />
                        <button className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#a61d37] bg-opacity-80 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                          </div>
                        </button>
                      </div>
                    )}
                    
                    {wish.type === 'image' && (
                      <div className="rounded-lg overflow-hidden mb-3">
                        <img src={wish.imageUrl} alt="Shared memory" className="w-full" />
                      </div>
                    )}
                    
                    <div className="flex justify-end">
                      <span className="text-xs text-gray-500">24/02/2024</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <button className="bg-[#2e5288] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
                Xem thêm lời chúc
              </button>
            </div>
          </div>
        )}
        
        {/* Tìm bạn cũ */}
        {activeTab === 'findfriends' && (
          <div>
            <h3 className="text-2xl font-semibold text-[#2e5288] mb-6">Tìm bạn cũ</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="searchName">Họ và tên</label>
                  <input 
                    type="text" 
                    id="searchName" 
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none" 
                    placeholder="Nhập tên cần tìm..."
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="searchYear">Khóa học</label>
                  <select 
                    id="searchYear" 
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    value={searchYear}
                    onChange={(e) => setSearchYear(e.target.value)}
                  >
                    <option value="">Tất cả khóa</option>
                    {yearOptions.map((year, index) => (
                      <option key={index} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="searchClass">Lớp</label>
                  <select 
                    id="searchClass" 
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                    value={searchClass}
                    onChange={(e) => setSearchClass(e.target.value)}
                  >
                    <option value="">Tất cả lớp</option>
                    {classOptions.map((cls, index) => (
                      <option key={index} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button className="bg-[#a61d37] text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors flex items-center">
                <Search size={18} className="mr-2" />
                Tìm kiếm
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-[#2e5288] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Họ và tên</th>
                    <th className="py-3 px-4 text-left">Khóa</th>
                    <th className="py-3 px-4 text-left">Lớp</th>
                    <th className="py-3 px-4 text-left">Công việc hiện tại</th>
                    <th className="py-3 px-4 text-left">Liên hệ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {alumni.map(person => (
                    <tr key={person.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full mr-3" />
                          <span className="font-medium">{person.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{person.year}</td>
                      <td className="py-3 px-4">{person.class}</td>
                      <td className="py-3 px-4">{person.position}</td>
                      <td className="py-3 px-4">
                        <button className="text-[#2e5288] hover:text-[#a61d37]">
                          Kết nối
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {alumni.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  Không tìm thấy kết quả phù hợp.
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Kết nối cộng đồng */}
        {activeTab === 'community' && (
          <div>
            <h3 className="text-2xl font-semibold text-[#2e5288] mb-6">Kết nối cộng đồng CSV-ĐTVT</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communityLinks.map((link, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#2e5288] rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {link.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">{link.title}</h4>
                      <p className="text-gray-600 mb-4">{link.description}</p>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-[#a61d37] hover:underline"
                      >
                        Truy cập
                        <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-[#2e5288] text-white p-6 rounded-lg mt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Đăng ký nhận bản tin định kỳ</h4>
                  <p>Cập nhật tin tức, cơ hội việc làm và sự kiện của chuyên ngành ĐTVT</p>
                </div>
                <div className="mt-4 md:mt-0 w-full md:w-auto">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="email" 
                      placeholder="Email của bạn" 
                      className="px-4 py-2 rounded-md w-full sm:w-64 text-gray-800" 
                    />
                    <button className="bg-[#a61d37] text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
     
    </div>
  );
}