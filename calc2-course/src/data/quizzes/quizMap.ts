/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 *
 * Calculus II (Apostol) - 191 sections (0-190)
 */

import type { QuizQuestion } from './types';

// Chapter 1: Linear Spaces (0-9)
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

// Chapter 2: Linear Transformations and Matrices (10-19)
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

// Chapter 3: Determinants (20-25)
import { section20Questions } from './section20';
import { section21Questions } from './section21';
import { section22Questions } from './section22';
import { section23Questions } from './section23';
import { section24Questions } from './section24';
import { section25Questions } from './section25';

// Chapter 4: Eigenvalues and Eigenvectors (26-31)
import { section26Questions } from './section26';
import { section27Questions } from './section27';
import { section28Questions } from './section28';
import { section29Questions } from './section29';
import { section30Questions } from './section30';
import { section31Questions } from './section31';

// Chapter 5: Eigenvalues on Euclidean Spaces (32-43)
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

// Chapter 6: Linear Differential Equations (44-62)
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

// Chapter 7: Systems of Differential Equations (63-76)
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

// Chapter 8: Differential Calculus of Fields (77-90)
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

// Chapter 9: Applications of Differential Calculus (91-100)
import { section91Questions } from './section91';
import { section92Questions } from './section92';
import { section93Questions } from './section93';
import { section94Questions } from './section94';
import { section95Questions } from './section95';
import { section96Questions } from './section96';
import { section97Questions } from './section97';
import { section98Questions } from './section98';
import { section99Questions } from './section99';
import { section100Questions } from './section100';

// Chapter 10: Line Integrals (101-112)
import { section101Questions } from './section101';
import { section102Questions } from './section102';
import { section103Questions } from './section103';
import { section104Questions } from './section104';
import { section105Questions } from './section105';
import { section106Questions } from './section106';
import { section107Questions } from './section107';
import { section108Questions } from './section108';
import { section109Questions } from './section109';
import { section110Questions } from './section110';
import { section111Questions } from './section111';
import { section112Questions } from './section112';

// Chapter 11: Multiple Integrals (113-136)
import { section113Questions } from './section113';
import { section114Questions } from './section114';
import { section115Questions } from './section115';
import { section116Questions } from './section116';
import { section117Questions } from './section117';
import { section118Questions } from './section118';
import { section119Questions } from './section119';
import { section120Questions } from './section120';
import { section121Questions } from './section121';
import { section122Questions } from './section122';
import { section123Questions } from './section123';
import { section124Questions } from './section124';
import { section125Questions } from './section125';
import { section126Questions } from './section126';
import { section127Questions } from './section127';
import { section128Questions } from './section128';
import { section129Questions } from './section129';
import { section130Questions } from './section130';
import { section131Questions } from './section131';
import { section132Questions } from './section132';
import { section133Questions } from './section133';
import { section134Questions } from './section134';
import { section135Questions } from './section135';
import { section136Questions } from './section136';

// Chapter 12: Surface Integrals (137-148)
import { section137Questions } from './section137';
import { section138Questions } from './section138';
import { section139Questions } from './section139';
import { section140Questions } from './section140';
import { section141Questions } from './section141';
import { section142Questions } from './section142';
import { section143Questions } from './section143';
import { section144Questions } from './section144';
import { section145Questions } from './section145';
import { section146Questions } from './section146';
import { section147Questions } from './section147';
import { section148Questions } from './section148';

// Chapter 13: Set Functions and Probability (149-162)
import { section149Questions } from './section149';
import { section150Questions } from './section150';
import { section151Questions } from './section151';
import { section152Questions } from './section152';
import { section153Questions } from './section153';
import { section154Questions } from './section154';
import { section155Questions } from './section155';
import { section156Questions } from './section156';
import { section157Questions } from './section157';
import { section158Questions } from './section158';
import { section159Questions } from './section159';
import { section160Questions } from './section160';
import { section161Questions } from './section161';
import { section162Questions } from './section162';

// Chapter 14: Calculus of Probabilities (163-180)
import { section163Questions } from './section163';
import { section164Questions } from './section164';
import { section165Questions } from './section165';
import { section166Questions } from './section166';
import { section167Questions } from './section167';
import { section168Questions } from './section168';
import { section169Questions } from './section169';
import { section170Questions } from './section170';
import { section171Questions } from './section171';
import { section172Questions } from './section172';
import { section173Questions } from './section173';
import { section174Questions } from './section174';
import { section175Questions } from './section175';
import { section176Questions } from './section176';
import { section177Questions } from './section177';
import { section178Questions } from './section178';
import { section179Questions } from './section179';
import { section180Questions } from './section180';

// Chapter 15: Numerical Analysis (181-190)
import { section181Questions } from './section181';
import { section182Questions } from './section182';
import { section183Questions } from './section183';
import { section184Questions } from './section184';
import { section185Questions } from './section185';
import { section186Questions } from './section186';
import { section187Questions } from './section187';
import { section188Questions } from './section188';
import { section189Questions } from './section189';
import { section190Questions } from './section190';

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
  95: section95Questions,
  96: section96Questions,
  97: section97Questions,
  98: section98Questions,
  99: section99Questions,
  100: section100Questions,
  101: section101Questions,
  102: section102Questions,
  103: section103Questions,
  104: section104Questions,
  105: section105Questions,
  106: section106Questions,
  107: section107Questions,
  108: section108Questions,
  109: section109Questions,
  110: section110Questions,
  111: section111Questions,
  112: section112Questions,
  113: section113Questions,
  114: section114Questions,
  115: section115Questions,
  116: section116Questions,
  117: section117Questions,
  118: section118Questions,
  119: section119Questions,
  120: section120Questions,
  121: section121Questions,
  122: section122Questions,
  123: section123Questions,
  124: section124Questions,
  125: section125Questions,
  126: section126Questions,
  127: section127Questions,
  128: section128Questions,
  129: section129Questions,
  130: section130Questions,
  131: section131Questions,
  132: section132Questions,
  133: section133Questions,
  134: section134Questions,
  135: section135Questions,
  136: section136Questions,
  137: section137Questions,
  138: section138Questions,
  139: section139Questions,
  140: section140Questions,
  141: section141Questions,
  142: section142Questions,
  143: section143Questions,
  144: section144Questions,
  145: section145Questions,
  146: section146Questions,
  147: section147Questions,
  148: section148Questions,
  149: section149Questions,
  150: section150Questions,
  151: section151Questions,
  152: section152Questions,
  153: section153Questions,
  154: section154Questions,
  155: section155Questions,
  156: section156Questions,
  157: section157Questions,
  158: section158Questions,
  159: section159Questions,
  160: section160Questions,
  161: section161Questions,
  162: section162Questions,
  163: section163Questions,
  164: section164Questions,
  165: section165Questions,
  166: section166Questions,
  167: section167Questions,
  168: section168Questions,
  169: section169Questions,
  170: section170Questions,
  171: section171Questions,
  172: section172Questions,
  173: section173Questions,
  174: section174Questions,
  175: section175Questions,
  176: section176Questions,
  177: section177Questions,
  178: section178Questions,
  179: section179Questions,
  180: section180Questions,
  181: section181Questions,
  182: section182Questions,
  183: section183Questions,
  184: section184Questions,
  185: section185Questions,
  186: section186Questions,
  187: section187Questions,
  188: section188Questions,
  189: section189Questions,
  190: section190Questions,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  return quizMap[sectionId] ?? null;
}

export default quizMap;
