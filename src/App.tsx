import React from 'react'
import { AppShell } from '@mantine/core'
import Header from './components/Header'
import Main from './components/Main.tsx'

const App: React.FC = () => {
  return <AppShell
    header={{ height: 70 }}
  >
    <Header/>
    <Main/>
  </AppShell>
}

export default App
