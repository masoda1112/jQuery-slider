// カスタマイズしたい変数
//スライドの時間,表示数,登録枚数,子要素名
//使い方
//cssでul>li構造を作る
//横並びにする
//new SlideShow(li要素の名前,表示する要素の数,li要素の数,遷移時間)でオブジェクトを作成する。
//object.move()で動かす。

class SlideShow{
  SlideShow(elementName,displayNumber,totalNumber,dulation){
    this.elementName = elementName
    this.displayNumber = displayNumber
    this.totalNumber = totalNumber
    this.dulation = dulation
    this.count = 1;
  }

  move(){
    setInterval(this.moveSlide(),this.dulation)
  }

  moveSlide(){
    for(var i = this.count; i < this.count+this.displayNumber; i++){
      var current = i
      var pos = i - this.count
      if(i > this.totalNumber){
          current = i - this.totalNumber
      }
      var order = 'nth-child(' + current +')'
      $('.'+ this.elementName +':' + order).css('left',(100/this.displayNumber)*pos + "vw")
    }
    if(this.count == 1){
        var order = 'nth-child(' + this.totalNumber +')'
        $('.'+ this.elementName +':' + order).css('left',100 + "vw")
    }else{
        let num = this.count - 1
        var order = 'nth-child(' + num +')'
        $('.'+ this.elementName +':' + order).css('left',100 + "vw")
    }
    this.count += 1;
    if(this.count == this.totalNumber + 1){
        this.count = 1
    }
  }
}