import { Palette, PenTool, Layers, Monitor, Printer, FileText, MapPin, Award, Gift } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const services: Service[] = [
  {
    id: 1,
    title: "الهوية الموحدة",
    description: "نصمم هوية بصرية متكاملة تعكس قيم علامتك التجارية وتميزها في السوق",
    icon: Layers,
  },
  {
    id: 2,
    title: "التصميم الاحترافي",
    description: "تصاميم إبداعية واحترافية تلبي احتياجاتك وتحقق أهدافك التسويقية",
    icon: PenTool,
  },
  {
    id: 3,
    title: "بناء وتصميم العلامة التجارية",
    description: "نبني علامتك التجارية من الصفر ونطورها لتصبح علامة مميزة وقوية",
    icon: Palette,
  },
  {
    id: 4,
    title: "التصميم الرقمي والجرافيكي",
    description: "تصاميم رقمية مبتكرة لمواقع الويب والتطبيقات ومنصات التواصل الاجتماعي",
    icon: Monitor,
  },
  {
    id: 5,
    title: "الطباعة والحلول الدعائية",
    description: "خدمات طباعة عالية الجودة مع حلول دعائية متكاملة لجميع احتياجاتك",
    icon: Printer,
  },
  {
    id: 6,
    title: "الاستندات",
    description: "تصميم وطباعة جميع أنواع الاستندات والمطبوعات الرسمية والتجارية",
    icon: FileText,
  },
  {
    id: 7,
    title: "لوحات الطرق",
    description: "تصميم وتنفيذ لوحات الطرق الإعلانية بأحجام ومواصفات مختلفة",
    icon: MapPin,
  },
  {
    id: 8,
    title: "الدروع التذكارية",
    description: "تصميم وتنفيذ الدروع التذكارية والجوائز بتصاميم راقية ومميزة",
    icon: Award,
  },
  {
    id: 9,
    title: "الهدايا الدعائية",
    description: "هدايا دعائية مبتكرة تحمل هويتك التجارية وتعزز تواصلك مع عملائك",
    icon: Gift,
  },
];
