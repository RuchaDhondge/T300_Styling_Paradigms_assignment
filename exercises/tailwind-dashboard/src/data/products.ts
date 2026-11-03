import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 1,
    name: 'Everyday Backpack',
    category: 'Accessories',
    price: 89,
    status: 'In stock',
    imageUrl:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Minimal Desk Lamp',
    category: 'Home office',
    price: 64,
    status: 'Low stock',
    imageUrl:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 149,
    status: 'In stock',
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Ceramic Travel Mug',
    category: 'Drinkware',
    price: 32,
    status: 'Out of stock',
    imageUrl:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: 119,
    status: 'Low stock',
    imageUrl:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Classic Wristwatch',
    category: 'Accessories',
    price: 179,
    status: 'In stock',
    imageUrl:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
  },
]
