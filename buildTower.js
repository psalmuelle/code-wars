function towerBuilder(nFloors) {
    const towerList = [];
    let star = [];
    let space = [];
    for(i=0; i<=nFloors; i++){
      star = '*'.repeat(2* i- i)
      space = ' '.repeat(nFloors-1)

      towerList.push(`${space}${star}${space}`)
    }
    return towerList;
  }


towerBuilder(4);