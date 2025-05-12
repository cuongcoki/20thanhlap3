import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin, Calendar, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <div className="w-full bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">KỶ NIỆM 20 NĂM ĐIỆN TỬ VIỄN THÔNG</h3>
            <p className="text-gray-300 mb-4">Từ những ngày đầu đặt nền móng năm 2004, đến hôm nay – 2024 – Điện tử Viễn thông đã trở thành chiếc nôi đào tạo hàng nghìn kỹ sư, là cầu nối giữa học thuật và thực tiễn.</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-white hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-full p-2 flex items-center justify-center">
                <Facebook size={18} color="#3b5998" className="hover:text-white" />
              </a>
              <a href="#" className="bg-white hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-full p-2 flex items-center justify-center">
                <Twitter size={18} color="#1DA1F2" className="hover:text-white" />
              </a>
              <a href="#" className="bg-white hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-full p-2 flex items-center justify-center">
                <Youtube size={18} color="#FF0000" className="hover:text-white" />
              </a>
              <a href="#" className="bg-white hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-full p-2 flex items-center justify-center">
                <Instagram size={18} color="#C13584" className="hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">LIÊN KẾT NHANH</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-400 transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2 text-red-500" />
                <a href="#">Đăng ký tham dự lễ kỷ niệm</a>
              </li>
              <li className="hover:text-red-400 transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2 text-red-500" />
                <a href="#">Gửi ảnh/kỷ niệm</a>
              </li>
              <li className="hover:text-red-400 transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2 text-red-500" />
                <a href="#">Gửi lời chúc</a>
              </li>
              <li className="hover:text-red-400 transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2 text-red-500" />
                <a href="#">Khám phá hành trình 20 năm</a>
              </li>
              <li className="hover:text-red-400 transition-colors flex items-center">
                <ChevronRight size={16} className="mr-2 text-red-500" />
                <a href="#">Thư viện số</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Event */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">SỰ KIỆN KỶ NIỆM</h3>
            <div className="flex items-start mb-4">
              <Calendar size={20} className="mr-3 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">LỄ KỶ NIỆM 20 NĂM</p>
                <p className="text-gray-300">Ngày 28/3/2024</p>
                <p className="text-gray-300">Hội trường lớn – Đại học Kỹ thuật Công nghiệp</p>
              </div>
            </div>
            <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
              Đăng ký tham dự
            </a>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">LIÊN HỆ BAN TỔ CHỨC</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Số 666 Đường 3-2, P.Tích Lương, TP Thái Nguyên - Tỉnh Thái Nguyên</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-red-500" />
                <p className="text-gray-300">(84)2083847145</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-red-500" />
                <p className="text-gray-300">20nam-etvt@tnut.edu.vn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-2 md:mb-0">
            Copyright © 2022 Trường Đại học Kỹ thuật Công Nghiệp
          </div>
          <div className="text-sm text-gray-400">
            Thiết kế bởi Ban Truyền thông Kỷ niệm 20 năm ETVT
          </div>
        </div>
      </div>
    </div>
  );
}