import { DataProvider } from '@/app/data/DataProvider'
import React from 'react'

interface Props {
    params: {main: string, sub: string}
}

const SubPage = ({params: {main, sub}}: Props) => {
  const targetPage: Page | undefined = new DataProvider().getMenu().find(v => v.path == main);
  const childPages: ChildPage[] = targetPage ? targetPage.child : [];
  const childPage: ChildPage | undefined = childPages.find(v => v.path.includes(sub));
  return (
    <>
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex flex-col w-full border-opacity-10">
        <p className="text-2xl">{childPage?.name}</p>
        <div className="divider"></div>
        {childPage?.content.map(v => <div key={v} className="grid h-20 card rounded-box place-items-start">{v}</div>)}
        </div>
        </div>
    </>
  )
}

export default SubPage