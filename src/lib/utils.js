// obtengo la clase para el item activo
const getClassesForActiveItem = ({ item, classes, currentPath }) =>
  currentPath === item.path ? classes : "";

// obtengo todas las clases para los items de menu concatenando la clase para el item activo
export const getLinkClasses = ({ item, classes, currentPath }) =>
  `${classes} ${getClassesForActiveItem({
    item,
    classes,
    currentPath,
  })}`;
