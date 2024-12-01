import { component$ } from '@khulnasoft.com/qwik';
import { ShopCart } from './shop-cart';
import { ShopIcon } from './shop-icon';

export const ShopHeader = component$(() => {
  return (
    <div class="flex justify-center mx-auto mb-2">
      <ShopIcon />
      <div class="shop-cart">
        <ShopCart />
      </div>
    </div>
  );
});
