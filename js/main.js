/**
 * Created with JetBrains WebStorm.
 * User: TZZ-STUDIO
 * Date: 15-4-7
 * Time: 下午1:59
 * To change this template use File | Settings | File Templates.
 */

var globals = {

  init : function(){

    $('#ysfj_input').on('input',function(){
      try{
        var t_str = $('#ysfj_input').val();
        t_str = globals.ysfj(t_str);
        if(t_str !== null){
          $('#ysfj_result').val(t_str);
        }
      }catch(e){}
    });

    // disabled the result input instead jquery disabled to avoid opcity is 0.3
    $('#ysfj_result').attr('disabled','disabled');
  },

  ysfj : function(n){
    if(n < 1e20){

      var t_result = '';

      for (var i = 2; i * i <= n;){
        if (n % i == 0){
          t_result += i + ' x ';
          n /= i;
        }
        else{
          i++;
        }
      }
      t_result += n;
      return t_result;
    }else{
      return null;
    }
  }
};
