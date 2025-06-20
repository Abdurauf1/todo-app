import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState, Dispatch } from "../types"

export const useAppDispatch: () => Dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector