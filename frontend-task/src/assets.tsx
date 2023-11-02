// assets.ts
export interface Asset {
    id: string;
    name: string;
    status: 'Available' | 'Allocated' | 'Under Maintenance';
  }
  
  export const sampleAssets: Asset[] = [
    { id: '1', name: 'Asset 1', status: 'Available' },
    { id: '2', name: 'Asset 2', status: 'Allocated' },
    { id: '3', name: 'Asset 3', status: 'Under Maintenance' },
  ];
  