import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const ProductInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn('text-[1.2rem]')}>주문상품 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center"></div>
      </CardContent>
    </Card>
  );
};

export default ProductInfo;
