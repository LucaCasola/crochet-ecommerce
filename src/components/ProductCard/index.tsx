'use client'
import React from 'react'

import type { Product } from '@/payload-types'
import { Media } from '@/components/Media'

export type CardPostData = Pick<Product, 'title' | 'price' | 'description' | 'images'>

export const ProductCard: React.FC<{
  doc?: CardPostData
}> = (props) => {
  const { doc } = props
  const { title, description, price, images } = doc || {}

  return (
    <div className="flex flex-col h-full items-center justify-center p-2 border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer">
      <div className="h-48 w-48 mb-4 overflow-hidden">
        {images && images.length > 0 && (
          <Media resource={images[0].image ?? undefined} className="w-full" />
        )}
      </div>

      <h1>{title}</h1>
      <p>${price}</p>
    </div>
  )
}
