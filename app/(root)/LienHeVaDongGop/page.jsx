"use client";

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MessageCircle, Gift, Calendar, User, MapPin, Send, Check, Users, Heart, HelpCircle, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePathname } from 'next/navigation';

export default function LienHeVaDongGop() {

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

  const [formStatus, setFormStatus] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  
  const organizingTeam = [
    {
      name: "PGS.TS. Nguyễn Văn A",
      role: "Trưởng Ban Tổ Chức",
      email: "nguyenvana@etvt.edu.vn",
      phone: "0987654321"
    },
    {
      name: "TS. Lê Thị B",
      role: "Phó Ban Tổ Chức",
      email: "lethib@etvt.edu.vn",
      phone: "0987654322"
    },
    {
      name: "ThS. Phạm Văn C",
      role: "Thư ký Ban Tổ Chức",
      email: "phamvanc@etvt.edu.vn",
      phone: "0987654323"
    }
  ];

  const handleContactSubmit = () => {
    // Simulating form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
  };

  const handleDonationSubmit = () => {
    // Simulating donation submission
    setFormStatus('donation-success');
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <div className="lien-he-page min-h-screen" id='LienHeVaDongGop'>
      <header className="bg-[#2e5288] text-white py-14 border-b-4 border-[#a61d37]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Liên hệ & Đóng góp</h1>
              <p className="text-xl mb-6">
                Kết nối với chúng tôi để cùng tạo nên lễ kỷ niệm 20 năm ETVT thật ý nghĩa
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center">
                  <Calendar size={22} className="mr-2" />
                  <span>20.10.2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={22} className="mr-2" />
                  <span>Hội trường A1, Đại học ABC</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img src="/api/placeholder/200/200" alt="Logo kỷ niệm 20 năm ETVT" className="w-40 h-40 rounded-lg" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[#2e5288] border-l-4 border-[#a61d37] pl-4 mb-6">Ban Tổ Chức</h3>
            
            <div className="space-y-6">
              {organizingTeam.map((member, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gray-50 pb-2">
                    <div className="flex items-center gap-3">
                      <User className="text-[#2e5288]" />
                      <div>
                        <h4 className="font-bold">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail size={18} className="text-gray-500" />
                        <span className="text-sm">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={18} className="text-gray-500" />
                        <span className="text-sm">{member.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Card className="bg-gray-50">
                <CardHeader className="pb-2">
                  <h4 className="text-lg font-medium flex items-center gap-2">
                    <HelpCircle size={20} className="text-[#2e5288]" />
                    Câu hỏi thường gặp
                  </h4>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium">Làm thế nào để đăng ký tham dự?</h5>
                      <p className="text-sm text-gray-600">Vui lòng điền form đăng ký trên trang chủ của chúng tôi trước ngày 10/10/2024.</p>
                    </div>
                    <div>
                      <h5 className="font-medium">Tôi có thể đóng góp bằng hình thức nào?</h5>
                      <p className="text-sm text-gray-600">Bạn có thể đóng góp tài chính, hiện vật hoặc tham gia vào các hoạt động tình nguyện.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <HelpCircle size={18} />
                    Xem thêm FAQ
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="contact" className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  Liên hệ
                </TabsTrigger>
                <TabsTrigger value="donate" className="flex items-center gap-2">
                  <Gift size={18} />
                  Đóng góp
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold text-[#2e5288]">Gửi thông điệp đến Ban Tổ Chức</h3>
                    <p className="text-gray-500">Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp của bạn</p>
                  </CardHeader>
                  <CardContent>
                    {formStatus === 'success' ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Check className="text-green-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-green-800">Gửi thông điệp thành công!</h4>
                          <p className="text-green-600 text-sm">Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Họ và tên</Label>
                            <Input id="name" placeholder="Nguyễn Văn X" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@example.com" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Số điện thoại</Label>
                            <Input id="phone" placeholder="0912345678" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Chủ đề</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn chủ đề" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">Thông tin chung</SelectItem>
                                <SelectItem value="sponsor">Tài trợ sự kiện</SelectItem>
                                <SelectItem value="volunteer">Tình nguyện viên</SelectItem>
                                <SelectItem value="other">Khác</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Nội dung</Label>
                          <Textarea id="message" placeholder="Nhập nội dung tin nhắn..." className="min-h-32" />
                        </div>
                        
                        <Button onClick={handleContactSubmit} className="bg-[#2e5288] hover:bg-[#1e3c6b] w-full md:w-auto flex items-center gap-2">
                          <Send size={18} />
                          Gửi tin nhắn
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="donate">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold text-[#2e5288]">Đóng góp cho lễ kỷ niệm</h3>
                    <p className="text-gray-500">Mỗi đóng góp của bạn đều góp phần tạo nên một kỷ niệm đáng nhớ</p>
                  </CardHeader>
                  <CardContent>
                    {formStatus === 'donation-success' ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Heart className="text-green-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-green-800">Cảm ơn bạn đã đóng góp!</h4>
                          <p className="text-green-600 text-sm">Chúng tôi sẽ liên hệ để xác nhận thông tin đóng góp của bạn.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Hình thức đóng góp</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <Button type="button" variant="outline" className="flex items-center justify-center gap-2">
                              <Gift size={18} />
                              Hiện vật
                            </Button>
                            <Button type="button" variant="outline" className="flex items-center justify-center gap-2 bg-blue-50">
                              <Users size={18} />
                              Tình nguyện viên
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label>Mức đóng góp tài chính</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {['500.000đ', '1.000.000đ', '2.000.000đ', '5.000.000đ'].map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant="outline"
                                className={`${donationAmount === amount ? 'bg-blue-50 border-blue-300' : ''}`}
                                onClick={() => {
                                  setDonationAmount(amount);
                                  setCustomAmount('');
                                }}
                              >
                                {amount}
                              </Button>
                            ))}
                          </div>
                          <div className="pt-2">
                            <Label htmlFor="customAmount">Số tiền khác</Label>
                            <Input
                              id="customAmount"
                              placeholder="Nhập số tiền..."
                              value={customAmount}
                              onChange={(e) => {
                                setCustomAmount(e.target.value);
                                setDonationAmount('');
                              }}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="donateName">Họ và tên</Label>
                            <Input id="donateName" placeholder="Nguyễn Văn X" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="donateEmail">Email</Label>
                            <Input id="donateEmail" type="email" placeholder="email@example.com" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="donatePhone">Số điện thoại</Label>
                            <Input id="donatePhone" placeholder="0912345678" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="donateYear">Khóa</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn khóa" />
                              </SelectTrigger>
                              <SelectContent>
                                {[...Array(20)].map((_, i) => (
                                  <SelectItem key={i} value={`K${i+1}`}>K{i+1} (Khóa {2004+i})</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="donateMessage">Thông điệp đóng góp (không bắt buộc)</Label>
                          <Textarea id="donateMessage" placeholder="Nhập thông điệp của bạn..." className="min-h-24" />
                        </div>
                        
                        <Button onClick={handleDonationSubmit} className="bg-[#a61d37] hover:bg-[#8b1930] w-full md:w-auto flex items-center gap-2">
                          <Heart size={18} />
                          Hoàn tất đóng góp
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#2e5288] border-l-4 border-[#a61d37] pl-4 mb-6">Thông tin liên hệ</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <MapPin className="text-[#2e5288]" size={24} />
                </div>
                <h4 className="font-bold mb-2">Địa chỉ</h4>
                <p className="text-gray-600">Phòng 305, Tòa nhà B1, Đại học ABC, Quận X, TP. Hà Nội</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <Phone className="text-[#2e5288]" size={24} />
                </div>
                <h4 className="font-bold mb-2">Điện thoại</h4>
                <p className="text-gray-600">024.1234.5678</p>
                <p className="text-gray-600">0987.654.321</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <Mail className="text-[#2e5288]" size={24} />
                </div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-gray-600">kyniem20nam@etvt.edu.vn</p>
                <p className="text-gray-600">bantochuc@etvt.edu.vn</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <Megaphone className="text-[#2e5288]" size={24} />
                </div>
                <h4 className="font-bold mb-2">Mạng xã hội</h4>
                <div className="flex gap-4 mt-2">
                  <button className="bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button className="bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
    </div>
  );
}