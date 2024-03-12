import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';
import ProductInfo from './ProductInfo';
import OrderInfo from './OrderInfo';
import ShippingInfo from './ShippingInfo';
import MembershipInfo from './MembershipInfo';

const Info = () => {
  return (
    <Card className={cn('w-[57.5%] h-[100%] bg-[#000]')}>
      <ProductInfo />
      <OrderInfo />
      <ShippingInfo />
      <MembershipInfo />
    </Card>
  );
};

export default Info;
