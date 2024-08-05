import React from 'react'
import Button from '@/components/ui/Button'
import { FC } from 'react'

interface pageProps { }

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Button size={'default'} variant={'ghost'}/>
    </div>
  )
}
