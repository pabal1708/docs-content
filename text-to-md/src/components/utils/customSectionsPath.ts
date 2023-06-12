import { SidebarContentType } from "../../../pol-coso-md/src/components/markdown/gitServiceTypes";

const customSectionsPath = (items: SidebarContentType[]) => {
  items.forEach((element) => {
    const { sections, href } = element || null;
    if (sections && sections.length > 0) {
      customSectionsPath(sections);
    } else if (href) {
      // eslint-disable-next-line no-param-reassign
      element.href = `/docs/${element.id}`;
    }
  });

  return items;
};

export default customSectionsPath;
