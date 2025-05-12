"use client";
import React, { useEffect, useState } from 'react';
import { Camera, Film, Archive, BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export default function ThuVienSo() {
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

  const timelinePhotos = {
    '2004-2010': [
      { id: 1, url: '/api/placeholder/400/300', caption: 'Khoá đầu tiên của ETVT năm 2004' },
      { id: 2, url: '/api/placeholder/400/300', caption: 'Lễ kỷ niệm 5 năm thành lập' },
      { id: 3, url: '/api/placeholder/400/300', caption: 'Hoạt động ngoại khoá năm 2007' },
    ],
    '2010-2015': [
      { id: 4, url: '/api/placeholder/400/300', caption: 'Phòng lab mới năm 2012' },
      { id: 5, url: '/api/placeholder/400/300', caption: 'Hội thảo công nghệ năm 2014' },
      { id: 6, url: '/api/placeholder/400/300', caption: 'Kỷ niệm 10 năm ETVT' },
    ],
    '2015-2020': [
      { id: 7, url: '/api/placeholder/400/300', caption: 'Hợp tác quốc tế năm 2016' },
      { id: 8, url: '/api/placeholder/400/300', caption: 'Cuộc thi sáng tạo năm 2018' },
      { id: 9, url: '/api/placeholder/400/300', caption: 'Lễ tốt nghiệp 2019' },
    ],
    '2020-nay': [
      { id: 10, url: '/api/placeholder/400/300', caption: 'Đào tạo trực tuyến 2020' },
      { id: 11, url: '/api/placeholder/400/300', caption: 'Dự án nghiên cứu AI năm 2022' },
      { id: 12, url: '/api/placeholder/400/300', caption: 'Sinh viên giành giải thưởng quốc tế 2023' },
    ],
  };
  
  const videos = [
    { id: 1, thumbnail: '/api/placeholder/400/300', title: 'Talk cựu sinh viên: Hành trình từ ETVT đến Silicon Valley' },
    { id: 2, thumbnail: '/api/placeholder/400/300', title: 'Lớp học xưa: Những kỷ niệm năm 2008' },
    { id: 3, thumbnail: '/api/placeholder/400/300', title: 'Kỷ yếu ETVT qua các thế hệ' },
    { id: 4, thumbnail: '/api/placeholder/400/300', title: 'Đồ án tốt nghiệp xuất sắc: 20 năm nhìn lại' },
  ];
  
  const memorabilia = [
    { id: 1, image: '/api/placeholder/300/200', title: 'Thẻ sinh viên các thế hệ', description: 'Từ thẻ giấy đến thẻ chip thông minh' },
    { id: 2, image: '/api/placeholder/300/200', title: 'Áo đồng phục ETVT', description: 'Biểu tượng tự hào qua các năm' },
    { id: 3, image: '/api/placeholder/300/200', title: 'Thư tay và kỷ vật', description: 'Những kỷ niệm không thể quên' },
    { id: 4, image: '/api/placeholder/300/200', title: 'Sổ tay sinh viên', description: 'Ghi chép những năm tháng tuổi trẻ' },
  ];

  return (
    <div className="thu-vien-so-page min-h-screen" id='ThuVienSo'>
      <header className="bg-[#2e5288] text-white py-16 border-b-5 border-[#a61d37] mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Khoảnh khắc không phai – 20 năm ETVT</h1>
          <p className="text-2xl mt-4 max-w-3xl mx-auto">
            Hành trình hai thập kỷ xây dựng và phát triển
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Camera size={18} />
              <span>Ảnh tư liệu</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Film size={18} />
              <span>Video tư liệu</span>
            </TabsTrigger>
            <TabsTrigger value="memorabilia" className="flex items-center gap-2">
              <Archive size={18} />
              <span>Góc sưu tầm</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2e5288] border-l-4 border-[#a61d37] pl-4 mb-2">
                Ảnh tư liệu theo giai đoạn
              </h2>
              <p className="text-gray-600">Hành trình phát triển của khoa ETVT qua các giai đoạn lịch sử</p>
            </div>
            
            {Object.entries(timelinePhotos).map(([period, photos]) => (
              <div key={period} className="mb-12">
                <h3 className="text-xl font-semibold text-[#a61d37] border-b-2 border-[#2e5288] pb-2 mb-6">
                  Giai đoạn {period}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map(photo => (
                    <Card key={photo.id} className="overflow-hidden">
                      <div className="h-48 w-full overflow-hidden">
                        <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <p className="text-gray-700">{photo.caption}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2e5288] border-l-4 border-[#a61d37] pl-4 mb-2">
                Video tư liệu
              </h2>
              <p className="text-gray-600">Những khoảnh khắc đáng nhớ được ghi lại qua video</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map(video => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="h-52 w-full overflow-hidden">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-[#2e5288] mb-3">{video.title}</h3>
                    <Button className="bg-[#a61d37] hover:bg-[#8a1a2d]">
                      Xem video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="memorabilia" className="mt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#2e5288] border-l-4 border-[#a61d37] pl-4 mb-2">
                Góc sưu tầm
              </h2>
              <p className="text-gray-600">Các vật phẩm kỷ niệm gắn liền với hành trình của ETVT</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memorabilia.map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-full">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-2/3 p-4">
                      <h3 className="text-lg font-semibold text-[#2e5288] mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-gray-50 py-12 border-t-2 border-[#a61d37]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-[#2e5288] flex items-center mb-3">
                <BookOpen size={20} className="mr-2" />
                Đóng góp kỷ niệm
              </h3>
              <p className="text-gray-600 mb-4">Bạn có kỷ niệm, ảnh, hoặc vật phẩm muốn chia sẻ? Hãy gửi cho chúng tôi.</p>
              <Button className="bg-[#2e5288] hover:bg-[#25426e]">
                Chia sẻ kỷ niệm
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2e5288] mb-3">Thư viện ETVT</h3>
              <p className="text-gray-600 mb-4">Khám phá thêm tài liệu, hình ảnh và video về hành trình 20 năm của ETVT.</p>
              <Button className="bg-[#a61d37] hover:bg-[#8a1a2d]">
                Xem thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}