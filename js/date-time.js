(function(a){var c=["January","February","March","April","May","June","July","August","September","October","November","December"];var b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var d=new Date();d.setDate(d.getDate());a("#dashboardDate").html(b[d.getDay()]+", "+d.getDate()+" "+c[d.getMonth()]);setInterval(function(){var e=new Date().getSeconds();a("#sec").html((e<10?"0":"")+e)},1000);setInterval(function(){var e=new Date().getMinutes();a("#min").html((e<10?"0":"")+e)},1000);setInterval(function(){var e=new Date().getHours();a("#hours").html((e<10?"0":"")+e)},1000)})(jQuery);