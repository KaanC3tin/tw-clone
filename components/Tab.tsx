import Item from './Item';
import Items from './Items';
import Content from './Content';
import { TabContext } from '@/lib/TabContext';
import { ReactElement, useEffect, useState } from 'react';
import StyleTopBar from './StyleTopBar';



interface TabProps {
  children: ReactElement[];
  activeTab: string
}

export default function Tab({ children, activeTab }: TabProps) {



  const [active, setActive] = useState(activeTab)

  const contents = children.filter(c => c.type === Content)
  const styleTopBar = children.filter(c => c.type === StyleTopBar)
  const items = styleTopBar[0]


  const onChange = (id: string) => {
    setActive(id)
  }

  useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  const data = {
    active,
    setActive,
    onChange
  }

  return (
    <TabContext.Provider value={data}>
      {items}
      {contents.map((content) =>
        content.props.id === active && content
      )}
    </TabContext.Provider>

  )
}


Tab.Item = Item
Tab.Items = Items
Tab.Content = Content

