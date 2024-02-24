export const renderTransition =  (index) =>  {
    switch (index) {
      case 1: case 7:
        return "slide-left"
      case 3: case 6:
        return "slide-right"
      case 2:
        return "slide-down"
      default:
        return "slide-up";
    }
  }