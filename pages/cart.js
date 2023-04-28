import CartTable from '@/components/CartTable';
import Page from '@/components/Page';
import { fetchJson } from '@/lib/api';
import React from 'react';
import { useQuery } from 'react-query';

function CartPage() {
  const query = useQuery('cartItems', () => fetchJson('/api/cart'));
  const cartItems = query.data;

  return (
    <Page title='Cart'>{cartItems && <CartTable cartItems={cartItems} />}</Page>
  );
}

export default CartPage;
