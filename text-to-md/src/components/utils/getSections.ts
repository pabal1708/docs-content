type ItemProps = {
  id: string;
  title: string;
};

const getSections = (items: string[]) => {
  const sections: ItemProps[] = [];
  items.forEach((element) => {
    if (element !== '') {
      const customTitle = element.replaceAll('-', ' ');
      sections.push({
        id: element,
        title: customTitle.charAt(0).toUpperCase() + customTitle.slice(1)
      });
    }
  });
  return sections;
};

export default getSections;
