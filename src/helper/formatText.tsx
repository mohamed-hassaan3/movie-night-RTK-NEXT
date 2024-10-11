import { Fragment } from "react";

export function filterDate(date: string): string {
  return date?.split("-")[0];
}
export function formatDate(dateStr: unknown): string {
  const dateString = String(dateStr);
  return dateString.replace(/-/g, "/");
}

export const convertDateToString = (date: any) => {
  if (date) {
    date = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
};

export const calculateAge = (age: Date) => {
  const birthDay = new Date(age).getFullYear();
  let today = new Date().getFullYear();
  let calculated = today - birthDay;

  if (birthDay < 0) {
    calculated--;
  }

  return calculated;
};

export const deathAge = (age: Date, death: Date) => {
  const birthDay = new Date(age).getFullYear();
  let deathTime = new Date(death).getFullYear();
  let calculated = deathTime - birthDay;

  if (birthDay < 0) {
    calculated--;
  }

  return calculated;
};

export function formatVote(voteAverage: number) {
  return Math.round(voteAverage * 10);
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
  return formatNumber;
};

export const formatDateYearly = (date: string) => {
  return new Date(date).getFullYear();
};

export const convertSymbol = (str: string) => {
  const regex = /[^A-Z0-9]/gi;
  const firstChar = /\b\w/g;

  return str
    .replace(regex, " ")
    .replace(firstChar, (char) => char.toLocaleUpperCase());
};
