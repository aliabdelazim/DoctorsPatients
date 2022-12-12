export interface ITableCol<T> {
  key?: keyof T | string;
  label?: string;
}
