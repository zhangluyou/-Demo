//           动态加载列表
		   $.get("findalluser", function (data) {

                var d= data.data;
                $.each(d,function (index,drivers){
                   var $col=$("<tr></tr>").addClass("odd").attr('role','row');
                    var $num=$("<td></td>").addClass("sorting_1").text(drivers.jobId||"");
                    var $num1=$("<td></td>").addClass("sorting_1").text(drivers.username||"");
                    var $num2=$("<td></td>").addClass("sorting_1").text(drivers.sex||"");
                    var $num3=$("<td></td>").addClass("sorting_1").text(drivers.positionId ||"");
                     $col.append($num);
                    $col.append($num1);
                    $col.append($num2);
                    $col.append($num3);
                    $("#userList").append($col);
                })