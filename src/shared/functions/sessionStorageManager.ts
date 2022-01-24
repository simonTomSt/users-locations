export const sessionStorageManager = <T = unknown>(itemKey: string) => {
  const setValue = (data: T) =>
    sessionStorage.setItem(itemKey, JSON.stringify(data))

  const getValue = (defaultData: T): T => {
    const item = sessionStorage.getItem(itemKey)
    if (!!item) return JSON.parse(item)
    return defaultData
  }

  return { setValue, getValue }
}
