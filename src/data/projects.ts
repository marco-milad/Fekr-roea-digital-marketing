export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "هوية شركة الأمانة",
    category: "الهوية البصرية",
    description: "تصميم هوية بصرية متكاملة لشركة الأمانة تشمل الشعار والألوان والخطوط وجميع التطبيقات",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    stats: "+٥٠٪ نمو في الزيارات",
  },
  {
    id: 2,
    title: "حملة تسويقية لمطعم الذواقة",
    category: "الحملات التسويقية",
    description: "حملة تسويقية رقمية متكاملة لمطعم الذواقة شملت تصميم المحتوى وإدارة الحسابات",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    stats: "+٧٥٪ زيادة في المتابعين",
  },
  {
    id: 3,
    title: "لوحات إعلانية لشركة النور",
    category: "اللوحات الإعلانية",
    description: "تصميم وتنفيذ لوحات إعلانية خارجية لشركة النور في عدة مواقع استراتيجية",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    stats: "+٤٠٪ وعي بالعلامة",
  },
  {
    id: 4,
    title: "مطبوعات مؤسسة الخير",
    category: "الطباعة",
    description: "تصميم وطباعة جميع المطبوعات الخاصة بمؤسسة الخير بما فيها البروشورات والكتيبات",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    stats: "+٦٠٪ تفاعل",
  },
  {
    id: 5,
    title: "هدايا دعائية لبنك الاستثمار",
    category: "الهدايا الدعائية",
    description: "تصميم وتنفيذ مجموعة متنوعة من الهدايا الدعائية لبنك الاستثمار",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    stats: "+٣٠٪ رضا العملاء",
  },
];
