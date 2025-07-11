import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
      <p className="text-muted-foreground max-w-md mb-6">
        Your order has been placed successfully.
      </p>

      <Link href="/">
        <Button variant="outline" className="mt-2">Return to Home</Button>
      </Link>
    </div>
  );
}
