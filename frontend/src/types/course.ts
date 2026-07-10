import type {Language} from './language'
import type {Level} from './level'
import type {Teacher} from './teacher'

export interface Course {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  language: Language;
  level: Level;
  teacher: Teacher;
}