const frontItem = (state='HOME', action) => {
    switch (action.type) {
      case 'SHOWHOME':
        return 'HOME';
      case 'SHOWPHOTOS':
        return 'PHOTO';
        case 'SHOWABOUTME':
        return 'ABOUTME';
    }
  }
  
  export default frontItem
