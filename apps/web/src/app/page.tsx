import { BrandIcon } from '@parkease/ui/src/components/atoms/BrandIcon';
import { Button } from '@parkease/ui/src/components/atoms/Button';
export default function Home() {
  return (
    <main className="text-primary-300 h-2 w-3">
      <BrandIcon />
      <Button loading>Submit</Button>
    </main>
  );
}
