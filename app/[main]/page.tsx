import React from 'react'
import { DataProvider } from '../data/DataProvider';

interface Props {
    params: {main: string}
}

const MainPage = ({params: {main}}: Props) => {
  const targetPage: Page | undefined = new DataProvider().getMenu().find(v => v.path == main)
  const childPages: ChildPage[] = targetPage ? targetPage.child : []

  return (
    <>
        <h1>MainPage - {main}</h1>
        {childPages.map(page => <p key={page.path}>{page.name}</p>)}
    </>
    
  )
}

export default MainPage