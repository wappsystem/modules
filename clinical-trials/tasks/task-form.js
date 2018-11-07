var wait1=function(){
    //-------------------------------------
    //for auto select participant
    var participant_tid =$vm.module_list[m.prefix+'participant-data'].table_id;
    var part_field=$vm.module_list[m.prefix+'participant-fields'].fields;
    var participant_sql	="";
    if(part_field.field1!="") participant_sql = "JSON_VALUE(Information,'$."+part_field.field1+"')";
    if(part_field.field2!="") participant_sql += "+' '+JSON_VALUE(Information,'$."+part_field.field2+"')";
    if(part_field.field3!="") participant_sql += "+' '+JSON_VALUE(Information,'$."+part_field.field3+"')";
    var sql="with tb as (select name="+participant_sql+",value2=uid from [TABLE-"+participant_tid+"])";
    sql+=" select top 10 name,value=name,value2 from tb where Name like '%'+@S1+'%' ";
    $vm.autocomplete($('#Participant__ID'),sql,function(key,value){
        $("#F__ID input[name="+key+"]").val($vm.text(value));
    })
}
//-------------------------------------
var I=0, loop_1=setInterval(function (){
    if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_1); wait1(); }
    I++; if(I>50){ clearInterval(loop_1); alert("jquery-ui.min.js is not installed.");}
},100);
//-------------------------------------
m.load=function(){
    m.input=$vm.vm['__ID'].input; if(m.input==undefined) m.input={};
    $('#F__ID')[0].reset();
    $('#submit__ID').show();
    var task_record=m.input.record;
    $vm.deserialize(task_record,'#F__ID');
    //--------------------------
    //from new or questionnaire
    var participant_record=m.input.participant_record;
    //--------------------------
    var participant_name =function(record){
        var pf=$vm.module_list[m.prefix+'participant-fields'].fields;
        if(record[pf.field1]!=undefined)
        {
            var pn=record[pf.field1];
            if (record[pf.field2]!="" && record[pf.field2]!=undefined ) pn+=' '+record[pf.field2];
            if (record[pf.field3]!="" && record[pf.field3]!=undefined ) pn+=' '+record[pf.field3];
            return pn;
        }
        else return record.UID;
    }
    //--------------------------
    if(task_record==undefined && participant_record!=undefined && participant_record.UID!=undefined){
        $("#F__ID input[name=Participant]").val(participant_name(participant_record));
        $("#F__ID input[name=Participant_uid]").val(participant_record.UID);
    }
    //--------------------------
    if(m.load_2!=undefined) m.load_2();
    //--------------------------
    var wait2=function(){
        $('#F__ID input[name=Participant]').prop('readonly',false);
        $('#F__ID input[name=Participant]').autocomplete( "enable" );
        if($("#F__ID input[name=Participant_uid]").val()!=''){
            $('#F__ID input[name=Participant]').prop('readonly',true);
            $('#F__ID input[name=Participant]').autocomplete( "disable" );
        }
        if(task_record.quest!==undefined){
            $('#participant_div__ID').hide();
        }
    }
    //--------------------------
    var I2=0, loop_2=setInterval(function (){
        if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_2); wait2(); }
        I2++; if(I2>50){ clearInterval(loop_2); alert("jquery-ui.min.js is not installed.");}
    },100);
    //-------------------------------------
}
//-------------------------------------
m.before_submit=function(record,dbv){
   if(record.Participant_uid!=""){
       dbv.PUID=record.Participant_uid;
       dbv.S3=$vm.status_of_data(record);
   }
   return true;
};
//-------------------------------------
