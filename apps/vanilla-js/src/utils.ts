export const getByJsId = <T extends Element>(jsId: string) => {
  return document.querySelector<T>(`[data-jsId="${jsId}"]`);
};
