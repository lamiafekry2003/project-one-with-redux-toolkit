import React from 'react'
import MainNav from './MainNav'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}

