import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ProductFetchComponent from './ProductFetchComponent'

const ProductFetchQueryComponent = () => {
    const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <ProductFetchComponent/>
    </QueryClientProvider>
  )
}

export default ProductFetchQueryComponent
