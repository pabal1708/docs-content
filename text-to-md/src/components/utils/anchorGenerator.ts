type AnchorContentType = {
  id: string;
};

const getAnchorContent = () => {
  const contentElement: HTMLCollection = document.getElementsByTagName('H2');
  const anchorContent: AnchorContentType[] = Array.from(contentElement);
  const iteratedAnchor: string[] = anchorContent
    .filter((item) => item.id.length > 0 && item.id !== '')
    .map((item) => item.id);

  return iteratedAnchor;
};

export default getAnchorContent;
