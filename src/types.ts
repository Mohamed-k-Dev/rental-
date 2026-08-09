export interface ServiceItem {
  id: string;
  title: string;
  category: 'mechanical' | 'electrical' | 'body_paint' | 'ac_cooling' | 'diagnostics';
  categoryLabel: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  priceEstimate?: string;
  duration?: string;
  warranty: string;
  includedFeatures: string[];
  popular?: boolean;
}

export interface ServiceCategory {
  id: 'mechanical' | 'electrical' | 'body_paint' | 'ac_cooling' | 'diagnostics';
  title: string;
  icon: string;
  description: string;
}

export interface BrandItem {
  id: string;
  name: string;
  country: string;
  logoText: string;
  badge?: string;
}

export interface OfferItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  discountBadge: string;
  originalPrice: string;
  discountedPrice: string;
  image: string;
  validUntil: string;
  features: string[];
}

export interface MaintenancePackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  color: string;
  features: string[];
}

export interface Branch {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mapCoordinates: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  carBrand: string;
  carModel: string;
  modelYear: string;
  serviceType: string;
  branch: string;
  bookingDate: string;
  bookingTime: string;
  needTowing: boolean;
  notes: string;
}
