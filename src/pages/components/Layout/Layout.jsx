import React from 'react'
import { Header } from '../header/header'
import * as classes from './Layout.module.scss'

export const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}
