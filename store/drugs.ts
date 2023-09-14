import { atom } from 'jotai'
import { Drug } from '@/models/Drug'

export const drugsSearchTextAtom= atom('')

export const drugsResultAtom = atom<Drug[]>([])