import Item from './Item';
import Items from './Items';
import Content from './Content';
import { TabContext } from '@/lib/TabContext';
import { ReactElement, useState } from 'react';



interface TabProps {
  children: ReactElement[];
  activeTab: string
}

export default function Tab({ children, activeTab }: TabProps) {



  const [active, setActive] = useState(activeTab)

  const contents = children.filter(c => c.type === Content)
  const items = children.filter(c => c.type === Items)


  const data = {
    activeTab,
    setActive
  }

  return (
    <TabContext.Provider value={data}>
      {items}
      {/* {content} */}
    </TabContext.Provider>

  )
}


Tab.Item = Item
Tab.Items = Items
Tab.Content = Content

