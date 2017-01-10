$(document).ready(function() {
  var a = "";

  function getText() {
    return $("#calculation").html();
  }

  function displayResult(value) {
    $("#result").html(value);
  };

  function displayCalc(val) {
    var text = getText();
    $("#calculation").html(text + val);
  }

  $(".numbers").each(function(index) {
    $(this).on("click", function() {
      displayCalc($(this).text());
      a += $(this).text();
    });

  });
  $("#btnClear").on("click", function() {
    $("#calculation").html("");
    a = "";
    displayResult(0);
  });
  $("#btnEquals").on("click", function() {
    var result = eval(a);
    if (result == undefined) {
      $("#calculation").html("Syntax Error");
    }
    displayResult(result);
  });
  $("#btnPercent").on("click", function() {
    displayResult(eval(a) / 100);
  });

  $("#btnClearOne").on("click", function() {
    var arr = a.split("");
    arr.pop();
    a = arr.join("");
    $("#calculation").html(a);
  });
  var index = 0;
  $("#btnSign").on("click", function() {

    if (a[index] != "-") {
      var mathOperators = /([-+/*])/g;
      var count = 0;
      for (var i = a.length - 1; i >= 0; i--) {
        if (mathOperators.test(a[i]) == true && i !== 0) {
          index = i + 1;
          var arrayA = a.split("");
          arrayA.splice(i + 1, 0, "-");
          a = arrayA.join("");
          break;
        }
        count++;
      }
      if (count == a.length) {
        a = "-" + a;
      }
      $("#calculation").html(a);
    } else {
      var arr = a.split("");
      if (index === 0) {
        arr.shift();
      } else {
        arr.splice(index, 1);
      }
      a = arr.join("");
      $("#calculation").html(a);
    }
  });

});