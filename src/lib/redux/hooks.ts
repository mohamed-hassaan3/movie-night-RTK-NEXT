import { useStore, useDispatch, useSelector } from "react-redux";
import type { AppStore, RootState, AppDispatch } from "./store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<AppStore>();