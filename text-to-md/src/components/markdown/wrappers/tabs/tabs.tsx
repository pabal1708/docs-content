import React, { useContext } from "react";
import { Tabs } from "../../../componentesChoriceados";
import { tabsContext } from "./tabsWrapper";

export const TabsComponent = () => {
  const { items, activeTab } = useContext(tabsContext);

  return (
    <Tabs defaultValue={activeTab}>
      <Tabs.Header>
        {items.map(({ id, key }) => (
          <Tabs.Button key={key} value={id}>
            {id}
          </Tabs.Button>
        ))}
      </Tabs.Header>
      {items.map(({ key, content, id }) => (
        <Tabs.Panel key={key} value={id} className="py-3 text-base">
          {content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
