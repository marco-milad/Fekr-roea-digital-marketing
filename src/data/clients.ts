export interface Client {
  id: number;
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { id: 1, name: "شركة الأمانة", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=80&fit=crop" },
  { id: 2, name: "مطعم الذواقة", logo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=150&h=80&fit=crop" },
  { id: 3, name: "شركة النور", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=80&fit=crop" },
  { id: 4, name: "مؤسسة الخير", logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=150&h=80&fit=crop" },
  { id: 5, name: "بنك الاستثمار", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=80&fit=crop" },
  { id: 6, name: "مجموعة الرياض", logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=150&h=80&fit=crop" },
  { id: 7, name: "شركة البناء", logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=80&fit=crop" },
  { id: 8, name: "مستشفى الحياة", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=80&fit=crop" },
  { id: 9, name: "جامعة المستقبل", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=150&h=80&fit=crop" },
  { id: 10, name: "فندق الواحة", logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=150&h=80&fit=crop" },
  { id: 11, name: "شركة التقنية", logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=150&h=80&fit=crop" },
  { id: 12, name: "مصنع الغذاء", logo: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=150&h=80&fit=crop" },
  { id: 13, name: "شركة السفر", logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=150&h=80&fit=crop" },
  { id: 14, name: "مركز التدريب", logo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=150&h=80&fit=crop" },
  { id: 15, name: "شركة الاتصالات", logo: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=150&h=80&fit=crop" },
];

export const stats = [
  { id: 1, label: "رضا العملاء", value: 90 },
  { id: 2, label: "نمو الحملات", value: 75 },
  { id: 3, label: "العائد الاستثماري", value: 85 },
  { id: 4, label: "طلب الخدمات", value: 70 },
  { id: 5, label: "نمو الوكالة", value: 65 },
];
