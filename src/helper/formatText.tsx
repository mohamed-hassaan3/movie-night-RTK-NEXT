import { Fragment } from "react";

export function filterDate(date: string): string {
  return date?.split("-")[0];
}
export function formatDate(dateStr: unknown): string {
  const dateString = String(dateStr);
  return dateString.replace(/-/g, "/");
}
interface Item {
  id?: number;
  [key: string]: any;
}

export function loopArr(arr: Item[]) {
  return arr?.map((e, i) => {
    return (
      <Fragment key={i}>
        {e.name ? e.name : e}
        {i < e.length - 1 || (i < e.name?.length - 1 && ", ")}
      </Fragment>
    );
  });
}

export function convertRuntime(runTime: number) {
  const hours = Math.floor(runTime / 60);
  const mins = runTime % 60;
  return `${hours}h ${mins}m`;
}

export const formatAmount = (amount: number) => {
  const formatNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
  return formatNumber
};
