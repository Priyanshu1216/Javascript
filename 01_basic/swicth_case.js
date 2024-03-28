function getLetter(s) {
  let letter;

  switch (s.charAt(0)){
      case 'a':                                                     // here, case a,e,i,o,u share same block hence written like this
      case 'e':
      case 'i':
      case 'o':
      case 'u':
          letter = "A";
          break;

      case 'b':
      case 'c':
      case 'd':
      case 'f':
      case 'g':
          letter = "B";
          break;

      case 'h':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
          letter = "C";
          break;

      default:                                                       // if none of the case mathces the expression then default case runs.
          letter = "D";
  }
  return letter;
}




