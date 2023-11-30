function dentakushow(btn) {
  if(btn.value=="C") {
    document.getElementsByName("screen")[0].value="";
  }else if(btn.value=="=") {
    let result=eval(document.getElementsByName("screen")[0].value);
    document.getElementsByName("screen")[0].value=result;
    if(result=="Infinity" || result=="-Infinity"){
      document.getElementsByName("screen")[0].value="エラー";
    }
  }else{
    if(btn.value=="×") {
      btn.value="*";
    }else if(btn.value=="÷") {
      btn.value="/";
    } 
    document.getElementsByName("screen")[0].value+=btn.value;

    document.getElementsByName("waru_btn")[0].value="÷";
    document.getElementsByName("kake_btn")[0].value="×";
  }
}
