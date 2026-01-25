/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 *
 * When adding new sections:
 * 1. Create a new sectionXX.ts file with questions
 * 2. Import it here
 * 3. Add it to the quizMap
 */

import type { QuizQuestion } from './types';

import { section00Questions } from './section00';
import { section01Questions } from './section01';
import { section02Questions } from './section02';
import { section03Questions } from './section03';
import { section04Questions } from './section04';
import { section05Questions } from './section05';
import { section06Questions } from './section06';
import { section07Questions } from './section07';
import { section08Questions } from './section08';
import { section09Questions } from './section09';
import { section10Questions } from './section10';
import { section11Questions } from './section11';
import { section12Questions } from './section12';
import { section13Questions } from './section13';
import { section14Questions } from './section14';
import { section15Questions } from './section15';
import { section16Questions } from './section16';
import { section17Questions } from './section17';
import { section18Questions } from './section18';
import { section19Questions } from './section19';
import { section20Questions } from './section20';
import { section21Questions } from './section21';
import { section22Questions } from './section22';
import { section23Questions } from './section23';
import { section24Questions } from './section24';
import { section25Questions } from './section25';
import { section26Questions } from './section26';
import { section27Questions } from './section27';
import { section28Questions } from './section28';
import { section29Questions } from './section29';
import { section30Questions } from './section30';
import { section31Questions } from './section31';
import { section32Questions } from './section32';
import { section33Questions } from './section33';
import { section34Questions } from './section34';
import { section35Questions } from './section35';
import { section36Questions } from './section36';
import { section37Questions } from './section37';
import { section38Questions } from './section38';
import { section39Questions } from './section39';
import { section40Questions } from './section40';
import { section41Questions } from './section41';
import { section42Questions } from './section42';
import { section43Questions } from './section43';
import { section44Questions } from './section44';
import { section45Questions } from './section45';
import { section46Questions } from './section46';
import { section47Questions } from './section47';
import { section48Questions } from './section48';
import { section49Questions } from './section49';
import { section50Questions } from './section50';
import { section51Questions } from './section51';
import { section52Questions } from './section52';
import { section53Questions } from './section53';
import { section54Questions } from './section54';
import { section55Questions } from './section55';
import { section56Questions } from './section56';
import { section57Questions } from './section57';
import { section58Questions } from './section58';
import { section59Questions } from './section59';
import { section60Questions } from './section60';
import { section61Questions } from './section61';
import { section62Questions } from './section62';
import { section63Questions } from './section63';
import { section64Questions } from './section64';
import { section65Questions } from './section65';
import { section66Questions } from './section66';
import { section67Questions } from './section67';
import { section68Questions } from './section68';
import { section69Questions } from './section69';
import { section70Questions } from './section70';
import { section71Questions } from './section71';
import { section72Questions } from './section72';
import { section73Questions } from './section73';
import { section74Questions } from './section74';
import { section75Questions } from './section75';
import { section76Questions } from './section76';
import { section77Questions } from './section77';
import { section78Questions } from './section78';
import { section79Questions } from './section79';
import { section80Questions } from './section80';
import { section81Questions } from './section81';
import { section82Questions } from './section82';
import { section83Questions } from './section83';
import { section84Questions } from './section84';
import { section85Questions } from './section85';
import { section86Questions } from './section86';
import { section87Questions } from './section87';
import { section88Questions } from './section88';
import { section89Questions } from './section89';
import { section90Questions } from './section90';
import { section91Questions } from './section91';
import { section92Questions } from './section92';
import { section93Questions } from './section93';
import { section94Questions } from './section94';

const quizMap: Record<number, QuizQuestion[]> = {
  0: section00Questions,
  1: section01Questions,
  2: section02Questions,
  3: section03Questions,
  4: section04Questions,
  5: section05Questions,
  6: section06Questions,
  7: section07Questions,
  8: section08Questions,
  9: section09Questions,
  10: section10Questions,
  11: section11Questions,
  12: section12Questions,
  13: section13Questions,
  14: section14Questions,
  15: section15Questions,
  16: section16Questions,
  17: section17Questions,
  18: section18Questions,
  19: section19Questions,
  20: section20Questions,
  21: section21Questions,
  22: section22Questions,
  23: section23Questions,
  24: section24Questions,
  25: section25Questions,
  26: section26Questions,
  27: section27Questions,
  28: section28Questions,
  29: section29Questions,
  30: section30Questions,
  31: section31Questions,
  32: section32Questions,
  33: section33Questions,
  34: section34Questions,
  35: section35Questions,
  36: section36Questions,
  37: section37Questions,
  38: section38Questions,
  39: section39Questions,
  40: section40Questions,
  41: section41Questions,
  42: section42Questions,
  43: section43Questions,
  44: section44Questions,
  45: section45Questions,
  46: section46Questions,
  47: section47Questions,
  48: section48Questions,
  49: section49Questions,
  50: section50Questions,
  51: section51Questions,
  52: section52Questions,
  53: section53Questions,
  54: section54Questions,
  55: section55Questions,
  56: section56Questions,
  57: section57Questions,
  58: section58Questions,
  59: section59Questions,
  60: section60Questions,
  61: section61Questions,
  62: section62Questions,
  63: section63Questions,
  64: section64Questions,
  65: section65Questions,
  66: section66Questions,
  67: section67Questions,
  68: section68Questions,
  69: section69Questions,
  70: section70Questions,
  71: section71Questions,
  72: section72Questions,
  73: section73Questions,
  74: section74Questions,
  75: section75Questions,
  76: section76Questions,
  77: section77Questions,
  78: section78Questions,
  79: section79Questions,
  80: section80Questions,
  81: section81Questions,
  82: section82Questions,
  83: section83Questions,
  84: section84Questions,
  85: section85Questions,
  86: section86Questions,
  87: section87Questions,
  88: section88Questions,
  89: section89Questions,
  90: section90Questions,
  91: section91Questions,
  92: section92Questions,
  93: section93Questions,
  94: section94Questions,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  return quizMap[sectionId] ?? null;
}

export default quizMap;
