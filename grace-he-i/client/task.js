//-------------------------------------
var sql_client=_sys.config.parameters.sql_client;
var ids=_sys.config.module_ids;
var client_pid				=_mlist[ids.clients].table_id;
var client_tid				=_mlist[ids.clients].table_id;
var document_type_list_tid	=_mlist[ids.doc_type_list].table_id;
var job_status_list_tid		=_mlist[ids.job_status].table_id;
var task_list_tid			=_mlist[ids.task_list].table_id;
var staff_list_tid			=_mlist[ids.staff_list].table_id;
//-------------------------------------
var _default_cell_render=function(records,I,field,td,set_value,source){
    switch(field){
    }
}
//-------------------------------------
_set_req=function(){
	if(_mobj.op.child=='1'){
		where=" where puid="+_mobj.op.record.UID;
		var sql="with tb as (select Information,ID,UID,PUID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"-@S1]"+where+" )";
	    sql+="select Information,ID,UID,PUID,DateTime,Author,RowNum from tb where RowNum between @I6 and @I7";
	    var sql_n="select count(ID) from [TABLE-"+_db_pid+"-@S1]"+where;
	    _req={cmd:'query_records',db_pid:_db_pid,sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
	}
	else{
		var sql="with tb as (select Information,ID,UID,PUID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"-@S1] )";
	    sql+="select Information,ID,UID,PUID,DateTime,Author,RowNum from tb where RowNum between @I6 and @I7";
	    var sql_n="select count(ID) from [TABLE-"+_db_pid+"-@S1]";
	    _req={cmd:'query_records',db_pid:_db_pid,sql:sql,sql_n:sql_n,s1:'"'+$('#keyword__ID').val()+'"',I:$('#I__ID').text(),page_size:$('#page_size__ID').val()}
	}
}
//-------------------------------------
_set_req_export=function(){
	if(_mobj.op.child=='1'){
		where=" where puid="+_mobj.op.record.UID;
		var sql="with tb as (select Information,ID,UID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"]"+where+")";
	    sql+="select Information,ID,UID,DateTime,Author,RowNum from tb";
	    _set_from_to();
	    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
	    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
	}
	else{
		var sql="with tb as (select Information,ID,UID,DateTime,Author,RowNum=row_number() over (order by ID DESC) from [TABLE-"+_db_pid+"] )";
	    sql+="select Information,ID,UID,DateTime,Author,RowNum from tb";
	    _set_from_to();
	    if(_from!='0' && _to!='0') sql+=" where RowNum between @I6 and @I7";
	    _req={cmd:'query_records',sql:sql,i6:_from,i7:_to}
	}
}
//-------------------------------------
_data_process_after_render=function(){
	if(_mobj.op.child=='1' && _mobj.op.single_record=='1'){
		if(_records.length==0){
			$('#new__ID').triggerHandler('click');
		}
		if(_records.length==1){
			var form=$('#grid__ID tr:nth-child(2)').find('u:first');
			form.triggerHandler('click');
		}
		else{
			alert("More than one records were found! Please report the administrator.");
			return;
		}
	}
}
//-------------------------------------
_new_pre_data_process=function(){
	if(_mobj.op.child=='1'){
		var record=_mobj.op.record;
		_records[0].client_uid=record.UID;
		_records[0].client=record.Givennames+' '+record.Surname;
	}
}
//-------------------------------------
