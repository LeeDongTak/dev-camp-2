import Info from '@/components/component/info/Info';
import Payments from '@/components/component/payments/Payments';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Card className={cn('mx-auto w-[800px] h-[90vh] mt-[5vh]')}>
      <CardHeader>
        <CardTitle className={cn('mx-auto text-[#555]')}>결제하기</CardTitle>
      </CardHeader>
      <CardContent className={cn('flex justify-center gap-[2.5%]')}>
        <Info />
        <Payments />
      </CardContent>
    </Card>
  );
}
